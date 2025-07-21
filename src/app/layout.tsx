import type { Metadata } from "next";
import "./globals.css";
import Header from "@/ui/header";
import Footer from "@/ui/footer";

export const metadata: Metadata = {
  title: "Alex McCairel | Portfolio",
  description: "My software developer portfolio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={
        `
        font-sans
        text-base
        antialiased
        font-medium
        tracking-wide
        bg-stone-200 
        dark:bg-stone-800 
        text-stone-800
        dark:text-stone-200 
        min-h-screen 
        `
      }>
        <Header />
        <main className="max-w-3xl mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
