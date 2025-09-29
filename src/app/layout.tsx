import type { Metadata } from "next";
import "./globals.css";

import Header from "../../components/header/Header";
import { Toaster } from "../../components/ui/sonner";


export const metadata: Metadata = {
  title: "Github Users",
  description: "Esparta",
  icons:{
    icon: "../../assests/github.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}> ){
  return (
    <html lang="pt-br" className="w-dvw h-dvh">
      <body cz-shortcut-listen="true">
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

