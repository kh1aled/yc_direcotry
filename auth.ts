import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { client } from "@/sanity/lib/client"; // تأكد من المسار الصحيح
import { writeClient } from "@/sanity/lib/write-client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";

// تحديد نوع البيانات القادمة من GitHub
type GithubProfile = {
  id: string;
  login: string;
  avatar_url: string;
  bio?: string | null;
  email?: string | null;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!profile) return false; // تأكد من أن البيانات موجودة

      const { id, login, avatar_url, bio, email } = profile as GithubProfile;

      try {
        // التحقق مما إذا كان المستخدم موجودًا في قاعدة بيانات Sanity
        const existingUser = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id });

        if (!existingUser) {
          // إنشاء مستخدم جديد في Sanity
          await writeClient.createIfNotExists({
            _type: "author",
            _id: id.toString(), // تأكد أنه نص وليس رقمًا
            name: user.name || login,
            username: login,
            email: email || "",
            image: avatar_url,
            bio: bio || "",
          });
          

          console.log("✅ تم إنشاء مستخدم جديد في Sanity");
        } else {
          console.log("✅ المستخدم موجود بالفعل في Sanity");
        }

        return true;
      } catch (error) {
        console.error("❌ خطأ في signIn callback:", error);
        return false;
      }
    },

    async jwt({ token, account, profile }) {
      if (profile && account) {
        const { id, login, avatar_url } = profile as GithubProfile;

        try {
          const user = await client
            .withConfig({ useCdn: false })
            .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id });

          token.id = user?._id || token.sub;
        } catch (error) {
          console.error("❌ Error fetching user from Sanity:", error);
          token.id = null; // لا تخزن ID خاطئ
        }
      }

      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
};

export const authHandler = NextAuth(authOptions);
