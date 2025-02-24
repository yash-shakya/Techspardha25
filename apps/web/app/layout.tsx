import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import Footer from "./ui/components/Footer";
import Background from "./ui/background";
import { NavItems, SOCIALS } from "./constants/landingpage"; // This will be passed as a prop to the NavBar component
import NavBar from "./ui/NavBar";
import { AuthProvider } from "./lib/context/auth-context";
import UserAuthButton from "./components/UserAuthButton";

export const metadata: Metadata = {
  title: "Techspardha",
  description: "Techspardha'25"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${poppins.className} bg-gray-900 text-white relative h-screen w-screen overflow-x-hidden`}>
        <AuthProvider>
          <NavBar navitems={NavItems} />
          <div className="absolute top-3 right-10 w-32 z-50 mt-[-30px]">
            <UserAuthButton />
          </div>
          <div className="flex flex-col max-w-full mx-auto container">
            {children}
          </div>
          <Footer socials={SOCIALS} />
        </AuthProvider>
        <Background />
      </body>
    </html>
  );
}
