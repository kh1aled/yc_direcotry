import { SanityLive } from "@/sanity/lib/live";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`font-work-sans`}>
        <SanityLive/>
        <Navbar />
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
