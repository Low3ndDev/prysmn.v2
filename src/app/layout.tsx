import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prysmn — Stop Losing $700/Week to Missed Calls",
  description:
    "Automated missed call text-back, Google review automation, CRM pipeline, and online booking — built exclusively for plumbing businesses. Recover lost revenue on autopilot.",
  keywords: [
    "plumbing automation",
    "missed call text back",
    "plumber CRM",
    "Google review automation",
    "online booking for plumbers",
    "lead capture",
    "Prysmn",
  ],
  authors: [{ name: "Prysmn" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Prysmn — Stop Losing $700/Week to Missed Calls",
    description:
      "Automated missed call text-back, Google review automation, CRM pipeline, and online booking for plumbers.",
    siteName: "Prysmn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prysmn — Stop Losing $700/Week to Missed Calls",
    description:
      "Automated missed call text-back, Google review automation, CRM pipeline, and online booking for plumbers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-prysmn-950 text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
