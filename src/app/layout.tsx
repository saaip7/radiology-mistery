import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";

import { AudioProvider } from "@/hooks/AudioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radiology Mistery",
  description: "Radiology Mistery is an educational platform designed to help radiology students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AudioProvider>
        {/* <audio id="audio" loop autoPlay>
          <source src="/sound/sounds.mp3" type="audio/mpeg" />
        </audio> */}
        <Navbar />
        {children}
        <Footer/>
        </AudioProvider>
      </body>
    </html>
  );
}
