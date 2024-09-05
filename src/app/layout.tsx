import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flip a Scale !",
  description: "Flip a Scale ! is a simple game to learn scales and chords, to improvise and to have fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
       <head>
            <link rel="icon" href="/favicon.ico" />
          </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
