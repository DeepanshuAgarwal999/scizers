// Import necessary modules
import type { Metadata } from "next";
import { Inter, Poppins, Oswald } from "next/font/google";
import "./globals.css";

// Specify subsets for Poppins if needed
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Scizer",
  description: "Scizers-Summer24-Internship-Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
