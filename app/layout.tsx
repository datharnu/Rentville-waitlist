import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Zilla_Slab, Bitter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-zilla",
  display: "swap",
});

const bitter = Bitter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bitter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RentVille",
  description: "Housing in your hands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${zilla.variable} ${bitter.variable}`}>
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="shortcut icon"
          href={`/favicon.ico?v=${new Date().getTime()}`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
