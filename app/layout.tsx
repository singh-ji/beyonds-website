import type { Metadata } from "next";
import { DM_Sans, Manrope, Newsreader } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
const display=Manrope({variable:"--font-display",subsets:["latin"]});
const body=DM_Sans({variable:"--font-body",subsets:["latin"]});
const serif=Newsreader({variable:"--font-serif",subsets:["latin"],style:["italic"]});
const title = "BeyondShift — Learning and growth for frontline workers";
const description = "Practical, continuous learning that helps frontline workers build knowledge, confidence and capabilities for life, work and everything beyond.";
export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  return { title, description, icons:{icon:"/favicon.svg"}, openGraph:{title,description,type:"website",images:[{url:image,width:1200,height:630,alt:"BeyondShift — Learning for life. Growth for the future."}]}, twitter:{card:"summary_large_image",title,description,images:[image]} };
}
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${display.variable} ${body.variable} ${serif.variable}`}>{children}</body></html>}
