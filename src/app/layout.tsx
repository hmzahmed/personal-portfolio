import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamza Ahmed",
  description: "Hello, welcome to my portfolio",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <main className="flex overflow-auto h-screen w-full flex-col items-center px-4 py-8">
          <Header />
          <div className="w-full sm:w-4/5 xl:w-3/5 pt-14">{children}</div>
        </main>
      </body>
    </html>
  );
}
