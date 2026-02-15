import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pilot AI Systems | Intelligent Software for Everyone",
  description:
    "Pilot AI Systems builds intelligent applications that make learning, automation, and content creation effortless. Home of QuizPilot, AutoPilot, and more.",
  keywords: ["AI", "artificial intelligence", "QuizPilot", "AutoPilot", "Presenton", "Telegram", "education", "automation"],
  openGraph: {
    title: "Pilot AI Systems",
    description: "Intelligent software for everyone",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
