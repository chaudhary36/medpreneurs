import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Preloader from "@/components/Preloader";

const comfortaa = Comfortaa({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
  title: 'Medpreneurs | The Collective',
  description: 'Bridging Biology and Technology.',
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
        <Preloader />
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
