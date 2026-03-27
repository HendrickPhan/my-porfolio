import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phan Đình Minh Hiếu | Senior Backend & Blockchain Developer",
  description: "Senior Backend Developer with 5+ years of experience in Golang, specializing in blockchain systems, AI/ML integration, and high-performance distributed architectures.",
  keywords: ["Golang", "Blockchain", "Backend Developer", "AI/ML", "Web3", "DeFi", "Smart Contracts", "Software Engineer", "Vietnam"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Phan Đình Minh Hiếu | Senior Backend & Blockchain Developer",
    description: "Senior Backend Developer specializing in Golang, Blockchain, and AI/ML",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phan Đình Minh Hiếu | Senior Backend & Blockchain Developer",
    description: "Senior Backend Developer specializing in Golang, Blockchain, and AI/ML",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
