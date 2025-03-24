"use client";

import Image from "next/image";
import logo from "@/app/assets/Group 5.png";
import avatar from "@/app/assets/image.png";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { CircleFadingPlus, LogOut } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const userImage = session?.user?.image ?? avatar;


  return (
    <div className="header px-5 py-3 bg-white shadow-sm font-work-sans fixed top-0 left-0 w-full z-10">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" width={150} height={30} />
        </Link>

        <div className="flex justify-center items-center gap-8 font-bold">
          {session ? (
            <>

              <Link href="/startup/create" className="text-black hidden sm:block">
                Create
              </Link>
    
              <Link href="/startup/create" className="text-black block sm:hidden">
              <CircleFadingPlus className="text-black font-bold"/>
              </Link>

              <button onClick={() => signOut()} className="text-red-700 hidden sm:block">
                Logout
              </button>


              <button onClick={() => signOut()} className="text-red-700 block sm:hidden">
              <LogOut />
              </button>



              <Link href={`/user/${session?.id}`} className="text-black hidden sm:block">
                {session.user?.name}
              </Link>

              <Link href={`/user/${session?.id}`}>
                <Image
                  src={userImage}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </>
          ) : (
            <button onClick={() => signIn("github")} className="text-black">
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
