"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import Form from "@/app/components/Form";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <Loader/>;

  if (!session) {
    router.push("/");
    return null;
  }

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Create Your Startup PITCH</h1>
        <p className="sub-heading !max-w-5xl">Create and manage</p>
      </section>

        <Form/>
    </>
  );
};

export default Page;
