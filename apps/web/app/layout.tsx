import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import Footer from "./ui/components/HomePage/Footer";
import Background from "./ui/background";
import { NavItems } from "./constants/landingpage"; // This will be passed as a prop to the NavBar component
import NavBar from "./ui/NavBar";
import { AuthProvider } from "./lib/context/auth-context";

export const metadata: Metadata = {
  title: "Techspardha",
  description: "Techspardha'25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-900 text-white relative h-screen w-screen overflow-x-hidden`}>
        <AuthProvider>
        <NavBar navitems={NavItems} />
        <div className="flex flex-col max-w-full mx-auto p-5 container">
          {children}
        </div>
        <Background />
        <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
