import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar, PrelineScript } from "../components";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    template: '%s | Cafelite',
    default: "Home Page | Cafelite"
  },
  description: 'Web App for coffee lovers cre',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fefcf7]`}>
        <NavBar />
        {children}
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
