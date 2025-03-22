import { getMySession } from "@/lib/getSession";

const page = async () => {
  const session = await getMySession();

  console.log("Full session data:", JSON.stringify(session, null, 2));


  return <div className="mt-28 text-black"></div>;
};

export default page;
