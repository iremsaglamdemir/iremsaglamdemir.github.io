"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home", href: "/#home" },
    { id: "research", label: "Research", href: "/research" },
    { id: "teaching", label: "Teaching", href: "/#teaching" },
    { id: "cv", label: "CV", href: "/cv.pdf" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="serif text-2xl font-bold text-foreground hover:text-accent transition-colors">
          Irem Saglamdemir
        </Link>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className={`text-sm transition-colors ${
                activeSection === item.id ? "text-accent font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
