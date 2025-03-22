import { getServerSession } from "next-auth";
import { authOptions } from "@/auth"; // Make sure you have authOptions setup

export const getMySession = async () => {
  return await getServerSession(authOptions);
};
