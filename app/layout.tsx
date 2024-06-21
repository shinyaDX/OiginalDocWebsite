import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header"; // パスはプロジェクトの構造によって異なる可能性があります
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ORIGIN.DOC",
  description: "ORIGIN.DOCのウェブサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
