import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "İrem Sağlamdemir | Economics PhD",
  description:
    "Personal academic website of İrem Sağlamdemir, PhD Candidate in Economics at Universidad Carlos III de Madrid.",
  keywords: ["economics", "academic", "research", "Universidad Carlos III"],
  openGraph: {
    title: "İrem Sağlamdemir | Economics PhD",
    description: "PhD Candidate in Economics at Universidad Carlos III de Madrid",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
