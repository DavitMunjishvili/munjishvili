import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollRestoration from "@/components/scroll-restoration"
import content from "@/components/content"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `Portfolio | ${content.name}`,
  description: content["job-title"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ScrollRestoration />
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
      </body>
    </html>
  )
}

