"use client"

import { Mail, Linkedin, Twitter, Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Headshot and Contact */}
          <div className="md:col-span-1">
            <div className="w-36 h-36 md:w-48 md:h-48 mx-auto rounded-lg bg-secondary shadow-sm overflow-hidden">
              <img src="/profil.jpeg" alt="Irem Saglamdemir" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 text-center space-y-4">
              <div>
                <div className="flex justify-center gap-4">
                  <a
                    href="mailto:isaglamd@eco.uc3m.es"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={28} />
                  </a>
                  <a
                    href="https://linkedin.com/in/irem-sağlamdemir"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a
                    href="https://x.com/iremsaglamdmr"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={28} />
                  </a>
                </div>
              </div>
              <div className="pt-2 border-t border-secondary">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Universidad Carlos III de Madrid
                  <br />
                  Calle Madrid 126
                  <br />
                  28903, Getafe, Spain
                </p>
              </div>
            </div>
          </div>

          {/* Bio and Downloads */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground italic">Welcome to my website!</p>

              <h1 className="serif text-4xl md:text-5xl font-bold text-foreground">Irem Saglamdemir</h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ph.D. Candidate in Economics
                <br />
                <span className="font-semibold text-foreground">Universidad Carlos III de Madrid</span>
              </p>
              <div className="space-y-4 max-w-2xl">
                <p className="text-base leading-relaxed text-foreground">
                  My research lies in applied economics, at the intersection of development, economic history, and labor
                  economics, with complementary work in political economy. I study how societies adapt to institutional
                  shocks and how these historical legacies continue to shape modern economic behavior.
                </p>
                <p className="text-base leading-relaxed text-foreground font-bold">
                  I will be on the 2025/26 Job Market.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="/jmp.pdf"
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium text-xs"
              >
                <Download size={14} />
                Download JMP
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium text-xs"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
