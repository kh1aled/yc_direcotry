import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import {Work_Sans} from "next/font/google";
import Providers from "./components/Providers";
import "easymde/dist/easymde.min.css";

const workSans = Work_Sans({ 
  variable : "--font-work-sans",
  subsets: ["latin"], 
  weight: ["100","200" , "300" , "400", "500", "600",  "700", "800",  "900"] 
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch , Vote and Grow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/Group5.png" sizes="any" /> */}
      </head>
      <body className={workSans.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
