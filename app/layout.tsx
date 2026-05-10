import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chirag Agarwal | Full Stack & AI Engineer",
  description:
    "Portfolio of Chirag Agarwal - Full Stack Developer and AI Engineer with experience in Next.js, Node.js, and RAG systems.",
  openGraph: {
    title: "Chirag Agarwal Portfolio",
    description: "Professional portfolio website for software engineering and AI roles.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
