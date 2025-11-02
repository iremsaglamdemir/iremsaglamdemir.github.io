import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ResearchSection from "@/components/research-section"
import TeachingSection from "@/components/teaching-section"
import CVSection from "@/components/cv-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ResearchSection />
      <TeachingSection />
      <CVSection />
      <Footer />
    </main>
  )
}
