import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RUSH | Video & Photo Production",
  description: "Portafolio profesional de RUSH - Producción de video y fotografía de alto nivel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
