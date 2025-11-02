import { Download } from "lucide-react"

export default function CVSection() {
  return (
    <section id="cv" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="serif text-3xl font-bold mb-6 text-foreground">Curriculum Vitae</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          Download my complete CV to learn more about my education, research experience, teaching, awards, and skills.
        </p>

        <a
          href="/cv.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
        >
          <Download size={20} />
          Download CV
        </a>
      </div>
    </section>
  )
}
