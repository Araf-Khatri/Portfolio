import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
export const metadata: Metadata = {
  title: "Araf Khatri - Full-Stack Software Development Engineer",
  description:
    "Full-Stack Software Engineer with 2+ years of experience in React, Next.js, TypeScript, Python, and AWS. Building scalable web apps, serverless platforms, and production-grade UIs.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-favicon.png",
  },
  openGraph: {
    title: "Araf Khatri - Full-Stack Software Development Engineer",
    description:
      "Software Development Engineer with 2+ years of experience in React, Next.js, TypeScript, Python, and AWS. Building scalable web apps, serverless platforms, and production-grade UIs.",
    url: baseUrl,
    siteName: "Araf Khatri Portfolio",
    images: [{ url: `${baseUrl}/shared-image.png`, width: 762, height: 399 }],
    type: "website",
    locale: "en_US",
  },

  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Araf Khatri",
    "Full-Stack Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Python",
    "AWS",
    "Node.js",
    "Mumbai",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
