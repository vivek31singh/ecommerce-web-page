import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Marketplace - Find Your Perfect Vehicle",
  description: "Browse and purchase quality vehicles at competitive prices. Find your perfect car today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}