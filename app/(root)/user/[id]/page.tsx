import image from "@/app/assets/image12.png";
import StartupCard, { StartupCardSkeleton } from "@/app/components/StartupCard";
import UserStartups from "@/app/components/UserStartups";
import Image from "next/image";
import { Suspense } from "react";
import { getMySession } from "@/lib/getSession";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const session = await getMySession();
    console.log("session : " , session);

  return (
    <section className="mt-24 profile_container">
      <div className="profile_card">
        <div className="profile_title">
          <h3 className="text-24-black uppercase text-center line-clamp-1">
            khaled hamdy
          </h3>
        </div>

        <Image
          src={image}
          alt="khaled hamdy"
          width={220}
          height={220}
          className="profile_image"
        />

        <p className="text-30-extrabold mt-7 text-center">@nathansmith</p>
        <p className="mt-1 text-center text-14-normal">
          Next.js Enthusiast & Educator
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
        {/* <p className="text-30-bold">
            {session?.id === id ? "Your" : "All"} Startups
          </p> */}
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
