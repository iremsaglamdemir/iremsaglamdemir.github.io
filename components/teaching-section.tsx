export default function TeachingSection() {
  const teachingExperience = [
    {
      course: "Global Health",
      institution: "UC3M",
      role: "Teaching Assistant",
      mainInstructor: "Daniel Rees",
      degree: "Bachelor's Degree in Economics",
      years: "Spring 2025, Spring 2024",
    },
    {
      course: "Labor Economics",
      institution: "UC3M",
      role: "Teaching Assistant",
      mainInstructor: "Luigi Minale",
      degree: "Bachelor's Degree in Economics",
      years: "Fall 2022 (*), Fall 2023",
    },
    {
      course: "Econometrics",
      institution: "UC3M",
      role: "Teaching Assistant",
      mainInstructor: "Carlos Velasco",
      degree: "Bachelor's Degree in International Studies and Economics",
      years: "Spring 2022, Spring 2023",
    },
    {
      course: "Economics I, Microeconomics",
      institution: "UC3M",
      role: "Teaching Assistant",
      mainInstructor: "Johannes Schneider",
      degree: "Bachelor's Degree in Economics",
      years: "Fall 2021 (*), Fall 2024, Fall 2025",
    },
    {
      course: "Mathematical Statistics II",
      institution: "Bogazici University",
      role: "Teaching Assistant",
      mainInstructor: "Ozan Hatipoglu",
      degree: "Bachelor's Degree in Economics",
      years: "Spring 2020",
    },
  ]

  return (
    <section id="teaching" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="serif text-3xl font-bold mb-4 text-foreground">Teaching</h2>
        <p className="text-base text-foreground leading-relaxed mb-8">
          I have served as a teaching assistant across a wide range of undergraduate courses. Over time, these
          experiences have shaped a teaching philosophy centered on active learning and self-directed discovery.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 font-semibold text-foreground">Course</th>
                <th className="text-left py-3 font-semibold text-foreground">Institution</th>
                <th className="text-left py-3 font-semibold text-foreground">Main Instructor</th>
                <th className="text-left py-3 font-semibold text-foreground">Years</th>
              </tr>
            </thead>
            <tbody>
              {teachingExperience.map((exp, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 text-foreground">{exp.course}</td>
                  <td className="py-3 text-muted-foreground">{exp.institution}</td>
                  <td className="py-3 text-muted-foreground">{exp.mainInstructor}</td>
                  <td className="py-3 text-muted-foreground">{exp.years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground italic">(*) Award for Excellence in Teaching</p>
        <p className="text-sm text-muted-foreground mt-4">Class materials are available upon request.</p>
      </div>
    </section>
  )
}
