import type { Metadata, Viewport } from "next";
import { InitialLoader } from "@/components/layout/InitialLoader";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora Bio — Computational Biology & Molecular Intelligence",
  description:
    "Nexora Bio develops computational intelligence for molecular biology, biological research and scientific discovery.",
  openGraph: {
    title: "Nexora Bio — Computational Biology & Molecular Intelligence",
    description:
      "Nexora Bio develops computational intelligence for molecular biology, biological research and scientific discovery.",
    siteName: "Nexora Bio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05131D",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <InitialLoader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
