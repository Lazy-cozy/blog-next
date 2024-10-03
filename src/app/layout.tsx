import type { Metadata } from "next";
import "../styles/global.css"
import Navbar from "@/components/common/Navbar";


export const metadata: Metadata = {
  title: "Blog App",
  description: "deb3 blog ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="max-w-screen-md mx-auto pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
