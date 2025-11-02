import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ResearchPage() {
  const papers = [
    {
      id: 1,
      title: "The Latent Legacy of Prohibition: Resistance Culture and Modern Entrepreneurial Resilience",
      abstract:
        "This paper examines whether early 20th century state-level prohibitions on the sale and manufacture of alcohol influenced entrepreneurial responses to the COVID-19 crisis. During the period 1900-1920, approximately 1,600 counties in the United States voluntarily went dry, while an almost equal number were forced to comply with state-level prohibitions. I argue that being forced to become dry fostered a long-lasting latent culture of adaptation and informal entrepreneurship. Using county-level data from 2010–2023, I find that exposure to forced prohibition is associated with a surge in new business applications in the aftermath of the COVID-19 shock. This effect appears to be more pronounced in areas with low remote-work feasibility and stronger anti-prohibition sentiment. My results suggest that informal entrepreneurial norms rooted in the resistance to prohibition had an enduring impact on economic adaptability and entrepreneurship.",
      pdfUrl: "/jmp.pdf",
      isJobMarket: true,
    },
    {
      id: 2,
      title: "Natural Disasters, Media Narratives, and Electoral Behavior: Evidence from the 2023 Turkish Earthquake",
      abstract:
        "Natural disasters can reshape electoral outcomes by altering public perceptions and information flows. This study examines Turkey's catastrophic earthquake of February 2023 using an event-study framework and spatial variation in exposure. Estimates indicate that disaster exposed areas experienced an immediate 7 percentage-point increase in the incumbent's vote share in the May 2023 elections. This temporary rise appears to be linked to short-term rally-around-the-flag dynamics and media narratives emphasizing unity, while aid distribution does not account for the observed increase. The results contribute to the broader literature on crisis response, information environments, and voting behavior in highly centralized political systems.",
      pdfUrl: "/earthquake_paper.pdf",
    },
    {
      id: 3,
      title: "Frontier Culture and Modern Labor Market Resilience: Evidence from the Great Resignation",
      abstract:
        "Can cultural orientation be at the root of new labor and entrepreneurial trends triggered by the COVID-19 shock in the U.S.? The frontier conditions that shaped early American settlement are known to foster self-reliance, inventiveness, and rugged individualism—traits that may influence labor supply decisions in the face of uncertainty. Using the Total Frontier Experience (TFE) measure and modern census data on job quits and new business applications, I show that counties with greater historical frontier exposure experienced significantly higher rates of both voluntary quitting and self-employment following the COVID-19 shock. These patterns reflect the broader labor market shifts often characterized as the Great Resignation. The results are robust to controls for pandemic severity, resistance to vaccine mandates, and variation in government transfers.",
      year: "2024",
      pdfUrl: "/culture_paper.pdf",
    },
    {
      id: 4,
      title: "Childhood War Exposure and the Long-Run Gender Norms: Evidence from the WWII",
      abstract:
        "This project examines how exposure to warfare during childhood shapes long-run gender norms and attitudes. I compile novel historical datasets on WWII exposure, linked with contemporary survey data on gender attitudes and behaviors. Preliminary analysis suggests that early-life exposure to war correlates with persistent differences in gender role attitudes. Ongoing work focuses on refining exposure measures and testing mechanisms. The historical dataset will be available upon completion of the project.",
      year: "Work in Progress",
      pdfUrl: "#",
    },
  ]

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      <Navigation />

      <main className="flex-1 overflow-y-auto">
        <div className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="serif text-4xl font-bold text-foreground">Research</h1>
              <Link href="/" className="text-sm font-semibold text-accent hover:underline">
                ← Back to Home
              </Link>
            </div>
            <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
              My main research focuses on how societies adapt to shocks—whether institutional, cultural, or
              biological—and how these adaptations persist across generations or manifest in modern behavior.
            </p>

            <div className="space-y-8">
              {papers.map((paper) => (
                <div
                  key={paper.id}
                  className={`rounded-lg p-8 shadow-sm border ${
                    paper.isJobMarket ? "bg-accent/5 border-accent shadow-md" : "bg-card border-border"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3 gap-4">
                    <h2 className="serif text-2xl font-bold text-foreground flex-1">{paper.title}</h2>
                    {paper.isJobMarket && (
                      <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded whitespace-nowrap">
                        Job Market Paper
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{paper.year}</p>

                  <div className="mb-6 p-4 bg-secondary/50 rounded border border-border">
                    <p className="text-sm font-semibold text-foreground mb-3">Abstract:</p>
                    <p className="text-base text-foreground leading-relaxed">{paper.abstract}</p>
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <a href={paper.pdfUrl} className="text-sm font-semibold text-accent hover:underline">
                      PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
