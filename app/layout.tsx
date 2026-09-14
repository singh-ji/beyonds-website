import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
const display=Manrope({variable:"--font-display",subsets:["latin"]});
const body=DM_Sans({variable:"--font-body",subsets:["latin"]});
const title = "BeyondShift — Learning and growth for frontline workers";
const description = "Engaging micro-dramas that help frontline workers build knowledge, confidence and capabilities for life, work and everything beyond.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const image = new URL("/og.png", siteUrl).toString();
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description, type: "website", images: [{ url: image, width: 1200, height: 630, alt: "BeyondShift — Learning for life. Growth for the future." }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>}
