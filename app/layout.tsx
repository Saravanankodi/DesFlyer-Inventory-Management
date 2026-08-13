import type { Metadata } from "next";
import { Iceberg, Inter } from "next/font/google";
import "./globals.css";

const iceberg = Iceberg({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "DesFlyer Expenser",
  description:
    "DesFlyer Expenser is a simple and easy to use expense tracker app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${iceberg.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
