import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectsProvider } from "@/utils/ProjectsContext";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gilson Vicente",
  description: "Portfolio website of Gilson Vicente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} antialiased`}>
        <Navbar />
        <ProjectsProvider>
        {children}
        </ProjectsProvider>
        <Footer />
      </body>
    </html>
  );
}
