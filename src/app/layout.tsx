import type { Metadata } from "next";
import { Hanken_Grotesk, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GIPSARKO MOLERSKI RADOVI | Profesionalni Gipsarski i Molerski Radovi Subotica",
  description: "Profesionalni gipsarski i molerski radovi u Subotici i okolini. Montaža pregrada, spuštenih plafona, rigips konstrukcija i završnih molerskih radova.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${hankenGrotesk.variable} ${workSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="mt-16 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
