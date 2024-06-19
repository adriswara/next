import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonas",
  description: "Web transaksi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <section>
        <nav>
          <div><button></button></div>
        </nav>
          {children}
      </section>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
