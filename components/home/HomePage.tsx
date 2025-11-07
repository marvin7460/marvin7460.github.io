"use client"

import { useState } from "react"
import { FileExplorerModal } from "@/components/file-explorer-modal"

interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl: string
  repoUrl: string
}

const SAMPLE_PROJECTS: Project[] = [
  {
    title: "FormForge",
    description: "Generador y editor visual de formularios, exporta JSON Schema y react forms.",
    tags: ["React", "UI Component", "TypeScript"],
    liveUrl: "https://example.com/formforge",
    repoUrl: "https://github.com/marvin7460/formforge",
  },
  {
    title: "API Playground",
    description: "Sandbox para probar APIs con autenticación y snippets listos para copiar.",
    tags: ["Node.js", "Tool", "API"],
    liveUrl: "https://example.com/api-playground",
    repoUrl: "https://github.com/marvin7460/api-playground",
  },
  {
    title: "CSS Toolkit",
    description: "Colección de utilidades CSS y componentes listos para copiar e integrar.",
    tags: ["CSS", "Utilities", "Components"],
    liveUrl: "https://example.com/css-toolkit",
    repoUrl: "https://github.com/marvin7460/css-toolkit",
  },
]

export default function Home() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const handleViewRepo = (project: Project) => {
    setSelectedProject(project.title)
    setIsExplorerOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-mono overflow-x-hidden">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-[#00F0FF] uppercase tracking-widest leading-tight">
            Herramientas web & utilidades — Marvin7460
          </h1>
          <p className="text-sm md:text-base text-[#A8A8A8] max-w-2xl leading-relaxed">
            Soluciones rápidas y utilitarias para la web: componentes, utilidades y minisites.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="text-xs px-4 py-2 bg-[#00F0FF] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_16px_#00F0FF] transition-all uppercase tracking-wider">
              Explorar herramientas
            </button>
            <button className="text-xs px-4 py-2 bg-[#FFD100] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_16px_#FFD100] transition-all uppercase tracking-wider">
              Ver repositorios
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#FF3FFF] uppercase tracking-widest mb-2">
            ▶ Herramientas
          </h2>
          <p className="text-xs text-[#A8A8A8]">Haz clic en `Ver repo` para explorar la estructura de archivos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PROJECTS.map((project) => (
            <div
              key={project.title}
              className="border-2 border-[#00F0FF] bg-[#1E1E1E] p-4 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all hover:border-[#FF3FFF]"
            >
              {/* Screenshot Placeholder */}
              <div className="w-full bg-[#2A2A2A] h-32 border border-[#00F0FF] mb-4 flex items-center justify-center text-[#727272] text-xs">
                Screenshot 16:9
              </div>

              {/* Content */}
              <h3 className="text-[#00F0FF] font-bold text-sm mb-2">{project.title}</h3>
              <p className="text-xs text-[#A8A8A8] mb-3 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#2A2A2A] border border-[#00FF88] text-[#00FF88] px-2 py-1 hover:shadow-[0_0_8px_#00FF88] transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex-1 px-3 py-2 bg-[#00F0FF] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_16px_#00F0FF] transition-all text-center uppercase"
                  aria-label={`Ir al proyecto ${project.title}`}
                >
                  Ir al proyecto
                </a>
                <button
                  onClick={() => handleViewRepo(project)}
                  className="text-xs flex-1 px-3 py-2 bg-[#FFD100] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_16px_#FFD100] transition-all text-center uppercase"
                  aria-label={`Ver repositorio ${project.title}`}
                >
                  Ver repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Tools */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="border border-[#00F0FF] bg-[#1E1E1E] p-8">
          <h2 className="text-lg md:text-xl font-bold text-[#FF3FFF] uppercase tracking-widest mb-4">
            ▶ Sobre mis herramientas
          </h2>
          <p className="text-sm text-[#A8A8A8] leading-relaxed mb-6 max-w-2xl">
            Herramientas creadas para resolver problemas reales: componentes UI, CLIs y utilidades para desarrolladores
            y diseñadores.
          </p>
          <button className="text-xs px-4 py-2 bg-[#00F0FF] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_16px_#00F0FF] transition-all uppercase">
            Ver todas las herramientas
          </button>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 mb-16">
        <h2 className="text-lg md:text-xl font-bold text-[#FF3FFF] uppercase tracking-widest mb-6">▶ Sobre mí</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-[#A8A8A8] leading-relaxed">
              Soy Marvin, desarrollador full-stack que crea utilidades web y componentes reutilizables. Me enfoco en
              rendimiento, UX y experiencia retro-neón.
            </p>

            <div className="mt-4 space-y-2">
              <p className="text-xs text-[#727272] uppercase tracking-wider">Skills</p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Node.js", "CSS"].map((skill) => (
                  <span key={skill} className="text-xs bg-[#2A2A2A] border border-[#00FF88] text-[#00FF88] px-2 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="text-xs px-4 py-2 bg-[#00F0FF] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_16px_#00F0FF] transition-all uppercase">
              Ver CV
            </button>
            <button className="text-xs px-4 py-2 bg-[#FF3FFF] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_16px_#FF3FFF] transition-all uppercase">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00F0FF] bg-[#1E1E1E] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#A8A8A8] mb-3">Links</p>
              <ul className="space-y-2 text-xs text-[#727272]">
                <li>
                  <a href="#" className="hover:text-[#00F0FF] transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00F0FF] transition-colors">
                    Herramientas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00F0FF] transition-colors">
                    Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#A8A8A8] mb-3">Social</p>
              <ul className="space-y-2 text-xs text-[#727272]">
                <li>
                  <a href="#" className="hover:text-[#00F0FF] transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00F0FF] transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00F0FF] transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#A8A8A8] mb-3">Legal</p>
              <ul className="space-y-2 text-xs text-[#727272]">
                <li>
                  <a href="#" className="hover:text-[#00F0FF] transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00F0FF] transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#00F0FF] pt-6 text-center text-xs text-[#727272]">
            © 2025 Marvin7460. Hecho con código y pixel-love.
          </div>
        </div>
      </footer>

      {/* File Explorer Modal */}
      <FileExplorerModal
        isOpen={isExplorerOpen}
        onClose={() => setIsExplorerOpen(false)}
        repoName={selectedProject || undefined}
      />
    </div>
  )
}
