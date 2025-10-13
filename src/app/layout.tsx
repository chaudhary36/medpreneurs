import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ['latin'], weight: '700' });


export const metadata: Metadata = {
  title: "Medpreneurs",
  description: "Welcome to the MedPreneurs...",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.className} ${comfortaa.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
