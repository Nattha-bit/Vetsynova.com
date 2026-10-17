import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "VetSynova | นวัตกรรมสัตวแพทย์ เพื่อสัตว์เลี้ยงที่คุณรัก";
const description =
  "ผลิตภัณฑ์ดูแลแผล ผิวหนัง ช่องหู และอาหารเสริมสัตว์เลี้ยง คิดค้นบนพื้นฐานความรู้ทางสัตวแพทย์ ปรึกษาเราได้ง่าย ๆ ทางไลน์";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "VetSynova",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
