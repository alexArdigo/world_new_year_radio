import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const zenKakuGothicNew = localFont({
  src: "./fonts/ZenKakuGothicNew-Regular.ttf",
  variable: "--font-zen-kaku-gothic",
  weight: "400 700", // Adjust this based on available weights
  style: "normal",
});

export const metadata: Metadata = {
  title: "World New Year Radio",
  description: "Radio app (powered by an unofficial Radio Garden API) to listen sounds from around the globe in the New Year's Eve",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${zenKakuGothicNew.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}



