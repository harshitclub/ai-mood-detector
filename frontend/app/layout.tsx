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
  metadataBase: new URL("https://ai-mood-detector.vercel.app"),

  title: {
    default: "AI Mood Detector",
    template: "%s | AI Mood Detector",
  },

  description:
    "AI Mood Detector is a modern emotion and sentiment analysis web application that detects user mood, emotions, positivity, and emotional tone from text using Natural Language Processing (NLP).",

  keywords: [
    "AI Mood Detector",
    "Emotion Detection",
    "Sentiment Analysis",
    "NLP Project",
    "Artificial Intelligence",
    "AI Chat App",
    "Mood Analysis",
    "Text Emotion Classifier",
    "Next.js AI Project",
    "Machine Learning Project",
    "Natural Language Processing",
  ],

  authors: [
    {
      name: "Harshit Kumar",
    },
  ],

  creator: "Harshit Kumar",

  openGraph: {
    title: "AI Mood Detector",

    description:
      "Detect emotions, mood, and sentiment from text using AI and NLP.",

    url: "https://ai-mood-detector.vercel.app",

    siteName: "AI Mood Detector",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "AI Mood Detector",

    description:
      "Detect emotions and sentiment from text using AI-powered NLP.",

    creator: "@harshitkumar",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          min-h-full
          bg-background
          text-foreground
          font-sans
        "
      >
        {children}
      </body>
    </html>
  );
}
