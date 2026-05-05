import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pilot AI Systems | Intelligent Software for Everyone",
  description:
    "Pilot AI Systems builds intelligent applications that make learning, automation, and content creation effortless. Home of QuizPilot, AvtoPilot, and more.",
  keywords: ["AI", "artificial intelligence", "QuizPilot", "AvtoPilot", "Presenton", "Telegram", "education", "driving exam", "spaced repetition"],
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
    <html lang="en">
      <head>
        <Script id="nimpo-widget-config" strategy="beforeInteractive">
          {`window.Nimpo = { widgetKey: 'cmosvabd8000catniix15bjy3' };`}
        </Script>
        <Script
          id="nimpo-widget"
          src="https://widget.nimpo.cc/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
