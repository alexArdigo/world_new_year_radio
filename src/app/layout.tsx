import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


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
        className={`${zenKakuGothicNew.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}



