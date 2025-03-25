import { sanityFetch } from "@/sanity/lib/live";
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";
import Ping from "./Ping";

const View = async ({ id }: { id: string }) => {

      const params = { id };

      const { data: post } = await sanityFetch({ query: STARTUPS_VIEWS_QUERY, params });

      
      after(async () => {
        await writeClient.patch(id).set({views : post?.views + 1}).commit();
        // Execute after the layout is rendered and sent to the user
      })


  return (
    <div className="view_container">
    <div className="absolute -top-2 -right-2">
      <Ping />
    </div>
    <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-lg capitalize">
      <span className="font-black flex justify-center items-center">Views: {post?.views !== null ? `${post?.views}` : "Loading..."}</span>
    </p>
  </div>
  );
};

export default View;
