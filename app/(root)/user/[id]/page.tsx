import image from "@/app/assets/image12.png";
import { StartupCardSkeleton } from "@/app/components/StartupCard";
import UserStartups from "@/app/components/UserStartups";
import Image from "next/image";
import { Suspense } from "react";
import { getMySession } from "@/lib/getSession";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  // const session = await getMySession();
    // console.log("session : " , session);
    const author = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY , {id})
    console.log("author" , author);
    
    // session :  {
    //   user: {
    //     name: 'kh1aled',
    //     email: undefined,
    //     image: 'https://avatars.githubusercontent.com/u/152563513?v=4'
    //   },
    //   id: '152563513'
    // }
  return (
    <section className="mt-24 profile_container">
      <div className="profile_card">
        <div className="profile_title">
          <h3 className="text-24-black uppercase text-center line-clamp-1">
            {author?.name}
          </h3>
        </div>

        <Image
          src={author?.image}
          alt="khaled hamdy"
          width={220}
          height={220}
          className="profile_image"
        />

        <p className="text-30-extrabold mt-7 text-center">@{author?.username}</p>
        <p className="mt-1 text-center text-14-normal">
          {author?.bio}
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
 
        <ul className="card_grid-sm">
          <Suspense fallback={<StartupCardSkeleton />}>
            <UserStartups id={id} />
          </Suspense>
        </ul>
      </div>
    </section>
  );
};

export default page;
