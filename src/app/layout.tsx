import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ClientLayout from "@/components/ClientLayout";

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
        <Providers>
        <ClientLayout>

        {children}
        </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
