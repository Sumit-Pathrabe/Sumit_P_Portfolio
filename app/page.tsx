"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  Code2,
  ExternalLink,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const technicalEcosystem = {
    coreStack: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Scala", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
    ],
    deepLearning: [
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      {
        name: "TensorFlow",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
    visualization: [
      { name: "D3.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" },
      { name: "Matplotlib", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
      { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
    ],
  }

  const experience = [
    {
      title: "Senior Data Scientist",
      company: "Tech Innovators Inc.",
      period: "2023 - Present",
      description: "Leading ML model development for predictive analytics, improving accuracy by 35%.",
      achievements: [
        "Architected scalable ML pipelines processing 10M+ records daily",
        "Reduced model inference time by 60% through optimization",
        "Mentored team of 5 junior data scientists",
      ],
    },
    {
      title: "Data Scientist",
      company: "Analytics Pro Solutions",
      period: "2021 - 2023",
      description: "Developed NLP models and custom analytics solutions for enterprise clients.",
      achievements: [
        "Built sentiment analysis system with 92% accuracy",
        "Created automated ETL pipelines reducing processing time by 40%",
        "Delivered 15+ client projects generating $2M+ in revenue",
      ],
    },
  ]

  const projects = [
    {
      category: "Machine Learning",
      items: [
        {
          name: "EcoPulse Disease Predictor",
          description: "Predictive modeling for healthcare trends using ensemble learning.",
          tags: ["ML", "Healthcare", "Ensemble"],
        },
        {
          name: "SecureNet Fraud Detection",
          description: "Real-time anomaly detection for financial transactions.",
          tags: ["Anomaly Detection", "Finance", "Real-time"],
        },
      ],
    },
    {
      category: "Natural Language Processing",
      items: [
        {
          name: "Sentix NLP Analyzer",
          description: "Sentiment analysis engine for social media data.",
          tags: ["NLP", "Sentiment Analysis", "Social Media"],
        },
        {
          name: "EntityGuard NER",
          description: "Named Entity Recognition system for extracting structured data from legal documents.",
          tags: ["NER", "Legal Tech", "Entity Extraction"],
        },
      ],
    },
    {
      category: "Data Analysis & Visualization",
      items: [
        {
          name: "SQL Insight Engine",
          description: "Automated query generator and performance analyzer for large databases.",
          tags: ["SQL", "Automation", "Performance"],
        },
        {
          name: "Retail Vision PowerBI",
          description: "Dynamic dashboard for end-to-end retail supply chain tracking.",
          tags: ["PowerBI", "Retail", "Dashboard"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-cyan-500/20 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
            DS Portfolio
          </h1>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("ecosystem")}
              className="hidden text-sm font-medium transition-colors hover:text-cyan-500 md:block"
            >
              Ecosystem
            </button>
            <button
              onClick={() => scrollToSection("trajectory")}
              className="hidden text-sm font-medium transition-colors hover:text-cyan-500 md:block"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hidden text-sm font-medium transition-colors hover:text-cyan-500 md:block"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden text-sm font-medium transition-colors hover:text-cyan-500 md:block"
            >
              Contact
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full hover:bg-cyan-500/10"
            >
              {darkMode ? <Sun className="h-5 w-5 text-cyan-500" /> : <Moon className="h-5 w-5 text-violet-600" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-500">
            Available for Opportunities
          </div>
          <h2 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
            Data Scientist &<br />
            <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
              ML Engineer
            </span>
          </h2>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Transforming raw data into intelligent solutions and actionable insights.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
          >
            View Projects
            <ChevronUp className="ml-2 h-5 w-5 rotate-180 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </section>

      <section id="ecosystem" className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <h3 className="mb-4 text-center text-4xl font-bold">Technical Ecosystem</h3>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground">
            My computational toolkit is engineered for scalability and performance. From statistical modeling to
            cloud-native deployments.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Core Stack */}
            <Card className="border-cyan-500/20 bg-card/50 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-cyan-500">Core Stack</CardTitle>
                <CardDescription>Foundation languages for data science and engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {technicalEcosystem.coreStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center gap-3 rounded-lg border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 p-4 transition-all hover:scale-105 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-3 transition-transform group-hover:rotate-3">
                        <img
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="text-center text-sm font-semibold transition-colors group-hover:text-cyan-500">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Deep Learning */}
            <Card className="border-violet-500/20 bg-card/50 backdrop-blur-sm transition-all hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-violet-500">Deep Learning</CardTitle>
                <CardDescription>Advanced frameworks for neural networks and AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {technicalEcosystem.deepLearning.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center gap-3 rounded-lg border border-violet-500/10 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 p-4 transition-all hover:scale-105 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/20"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-3 transition-transform group-hover:rotate-3">
                        <img
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="text-center text-sm font-semibold transition-colors group-hover:text-violet-500">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Visualization */}
            <Card className="border-orange-500/20 bg-card/50 backdrop-blur-sm transition-all hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-orange-500">Visualization</CardTitle>
                <CardDescription>Interactive data visualization and dashboard tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {technicalEcosystem.visualization.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center gap-3 rounded-lg border border-orange-500/10 bg-gradient-to-br from-orange-500/5 to-cyan-500/5 p-4 transition-all hover:scale-105 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/20"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/10 to-cyan-500/10 p-3 transition-transform group-hover:rotate-3">
                        <img
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="text-center text-sm font-semibold transition-colors group-hover:text-orange-500">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="trajectory" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="mb-4 text-center text-4xl font-bold">Professional Trajectory</h3>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground">
            A journey of continuous growth in data science and machine learning.
          </p>

          <div className="mx-auto max-w-4xl space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="group border-cyan-500/20 bg-card/50 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-semibold">{exp.title}</CardTitle>
                      <CardDescription className="mt-2 flex items-center gap-2 text-base">
                        <Briefcase className="h-4 w-4 text-cyan-500" />
                        <span className="font-medium text-cyan-500">{exp.company}</span>
                        <span className="text-muted-foreground">• {exp.period}</span>
                      </CardDescription>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-muted-foreground">{exp.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <h3 className="mb-12 text-center text-4xl font-bold">Featured Projects</h3>
          <div className="space-y-16">
            {projects.map((projectCategory) => (
              <div key={projectCategory.category}>
                <h4 className="mb-6 text-2xl font-semibold text-cyan-500">{projectCategory.category}</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  {projectCategory.items.map((project) => (
                    <Card
                      key={project.name}
                      className="group border-cyan-500/20 bg-card/50 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
                        <CardDescription className="text-base">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 bg-transparent"
                          >
                            <Code2 className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10 bg-transparent"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <h3 className="mb-12 text-center text-4xl font-bold">Get In Touch</h3>
          <Card className="mx-auto max-w-2xl border-cyan-500/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">
                    <Mail className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:your.email@example.com" className="text-lg font-medium hover:text-cyan-500">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10">
                    <Phone className="h-6 w-6 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+1234567890" className="text-lg font-medium hover:text-violet-500">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">
                    <MapPin className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-medium">San Francisco, CA</p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="mb-4 text-sm text-muted-foreground">Connect with me</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 transition-all hover:border-cyan-500 hover:bg-cyan-500/20"
                    >
                      <Github className="h-6 w-6 text-cyan-500" />
                    </a>
                    <a
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 transition-all hover:border-violet-500 hover:bg-violet-500/20"
                    >
                      <Linkedin className="h-6 w-6 text-violet-500" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Data Scientist Portfolio. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/50"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
