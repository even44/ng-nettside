import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Norgruppen AS",
  description: "Norflow produkter",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const logoUrl = "https://nextcloud.even44.no/s/LHSTTZMXQJ8f9tx/download/LogoStjerne.png"

function TopNav(){
	return (
		<nav className="flex w-full items-center justify-left gap-4 p-2 sm:p-4 
		text-sm sm:text-xl md:text-3xl font-semibold bg-gray-800 
		shadow-md shadow-black text-nowrap">
			<div className="w-6"><img src={logoUrl} width={100} alt="company logo"></img></div>
			<div><Link href={"/"}>Norgruppen AS</Link ></div>
			<div>|</div>
			<div><a href="https://norflow.no/">Norflow AS</a></div>
			<div>|</div>
			<div><a href="https://ingeberg.net/">CIHIAS AS</a></div>
		</nav>
	)
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={`font-sans flex flex-col gap-4 bg-gray-900 text-white`}>
		<TopNav/>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
