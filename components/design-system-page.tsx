"use client"

import { useState } from "react"

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-mono overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-[#00F0FF] sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-[#00F0FF] text-sm font-bold">DESIGN SYSTEM v1.0</div>
          <div className="flex gap-6 text-xs">
            {["overview", "colors", "typography", "components", "spacing"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`uppercase tracking-wider transition-all ${
                  activeSection === section
                    ? "text-[#00F0FF] border-b-2 border-[#00F0FF]"
                    : "text-[#A8A8A8] hover:text-[#EDEDED]"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div className="space-y-12">
            <div>
              <h1 className="text-[#00F0FF] text-3xl mb-4 uppercase tracking-widest">▶ Design System: 64-Bit Retro</h1>
              <p className="text-[#A8A8A8] max-w-2xl leading-relaxed">
                Un sistema de diseño completo para portafolio/hub de herramientas web con estética retro-futurista.
                Colores neón, tipografía pixel-art, y microinteracciones para experiencia developer-first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-[#00F0FF] bg-[#1E1E1E] p-6">
                <h3 className="text-[#00F0FF] font-bold mb-3 uppercase text-sm tracking-wider">Key Features</h3>
                <ul className="space-y-2 text-sm text-[#A8A8A8]">
                  <li>✓ 64-bit pixel aesthetic with neon colors</li>
                  <li>✓ Full keyboard navigation & ARIA support</li>
                  <li>✓ File explorer modal with repo preview</li>
                  <li>✓ Responsive design (mobile-first)</li>
                  <li>✓ Glow effects & microinteractions</li>
                  <li>✓ Developer-focused component library</li>
                </ul>
              </div>

              <div className="border border-[#FF3FFF] bg-[#1E1E1E] p-6">
                <h3 className="text-[#FF3FFF] font-bold mb-3 uppercase text-sm tracking-wider">Color Palette</h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00F0FF] border border-[#000]" />
                    <span>Cyan #00F0FF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#FFD100] border border-[#000]" />
                    <span>Yellow #FFD100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#FF3FFF] border border-[#000]" />
                    <span>Magenta #FF3FFF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00FF88] border border-[#000]" />
                    <span>Green #00FF88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Colors Section */}
        {activeSection === "colors" && (
          <div className="space-y-12">
            <h1 className="text-[#00F0FF] text-3xl uppercase tracking-widest">▶ Color System</h1>

            <div className="space-y-8">
              {/* Background Colors */}
              <div>
                <h2 className="text-[#FF3FFF] text-xl mb-4 uppercase">Background</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Primary", hex: "#0A0A0A", desc: "Main page background" },
                    { name: "Secondary", hex: "#1E1E1E", desc: "Panels, cards" },
                    { name: "Tertiary", hex: "#2A2A2A", desc: "Hover states" },
                  ].map((color) => (
                    <div key={color.hex} className="border border-[#00F0FF] bg-[#1E1E1E] p-4">
                      <div
                        className="w-full h-20 border-2 border-[#00F0FF] mb-3"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="font-bold text-[#00F0FF] text-sm">{color.name}</p>
                      <p className="text-xs text-[#A8A8A8]">{color.hex}</p>
                      <p className="text-xs text-[#727272] mt-1">{color.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neon Colors */}
              <div>
                <h2 className="text-[#FF3FFF] text-xl mb-4 uppercase">Neon Accents</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { name: "Cyan", hex: "#00F0FF", desc: "Primary CTA", className: "bg-[#00F0FF]" },
                    { name: "Yellow", hex: "#FFD100", desc: "Secondary CTA", className: "bg-[#FFD100]" },
                    { name: "Magenta", hex: "#FF3FFF", desc: "Accents", className: "bg-[#FF3FFF]" },
                    { name: "Green", hex: "#00FF88", desc: "Success/Tags", className: "bg-[#00FF88]" },
                  ].map((color) => (
                    <div key={color.hex} className="border border-[#00F0FF] bg-[#1E1E1E] p-4">
                      <div className={`w-full h-20 border-2 border-[#00F0FF] mb-3 ${color.className}`} />
                      <p className="font-bold text-[#00F0FF] text-sm">{color.name}</p>
                      <p className="text-xs text-[#A8A8A8]">{color.hex}</p>
                      <p className="text-xs text-[#727272] mt-1">{color.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Typography Section */}
        {activeSection === "typography" && (
          <div className="space-y-12">
            <h1 className="text-[#00F0FF] text-3xl uppercase tracking-widest">▶ Typography</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-[#FF3FFF] text-xl mb-4 uppercase">Display Font: Press Start 2P</h2>
                <div className="border border-[#00F0FF] bg-[#1E1E1E] p-8">
                  <p className="text-2xl font-['Press_Start_2P'] text-[#00F0FF] mb-2">H1 - 56px (Desktop)</p>
                  <p className="text-xl font-['Press_Start_2P'] text-[#FFD100] mb-2">H2 - 34px (Desktop)</p>
                  <p className="text-lg font-['Press_Start_2P'] text-[#00FF88] mb-4">H3 - 24px (Desktop)</p>
                  <p className="text-xs text-[#A8A8A8]">Usage: Titles, hero sections, emphasis. Fallback: monospace</p>
                </div>
              </div>

              <div>
                <h2 className="text-[#FF3FFF] text-xl mb-4 uppercase">Body Font: Roboto Mono</h2>
                <div className="border border-[#00F0FF] bg-[#1E1E1E] p-8 space-y-4">
                  <div>
                    <p className="text-base text-[#EDEDED] mb-1">Body - 16px (Regular weight)</p>
                    <p className="text-sm text-[#A8A8A8]">
                      Soluciones rápidas y utilitarias para la web: componentes, utilidades y minisites.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#EDEDED] mb-1">Caption - 12px (Regular weight)</p>
                    <p className="text-xs text-[#727272]">Last updated: Nov 6, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Components Section */}
        {activeSection === "components" && (
          <div className="space-y-12">
            <h1 className="text-[#00F0FF] text-3xl uppercase tracking-widest">▶ Components</h1>

            <div className="space-y-8">
              {/* Buttons */}
              <div>
                <h2 className="text-[#FF3FFF] text-xl mb-4 uppercase">Buttons</h2>
                <div className="border border-[#00F0FF] bg-[#1E1E1E] p-8 space-y-6">
                  <div>
                    <p className="text-[#A8A8A8] text-xs mb-3 uppercase">Primary Button (Cyan) - All Sizes</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-3 py-1 bg-[#00F0FF] text-[#0A0A0A] text-xs font-bold border border-[#000] hover:shadow-[0_0_16px_#00F0FF] transition-all">
                        Small
                      </button>
                      <button className="px-5 py-2 bg-[#00F0FF] text-[#0A0A0A] text-sm font-bold border border-[#000] hover:shadow-[0_0_16px_#00F0FF] transition-all">
                        Medium
                      </button>
                      <button className="px-7 py-3 bg-[#00F0FF] text-[#0A0A0A] text-base font-bold border border-[#000] hover:shadow-[0_0_16px_#00F0FF] transition-all">
                        Large
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-[#A8A8A8] text-xs mb-3 uppercase">Secondary Button (Yellow)</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-3 py-1 bg-[#FFD100] text-[#0A0A0A] text-xs font-bold border border-[#000] hover:shadow-[0_0_16px_#FFD100] transition-all">
                        Small
                      </button>
                      <button className="px-5 py-2 bg-[#FFD100] text-[#0A0A0A] text-sm font-bold border border-[#000] hover:shadow-[0_0_16px_#FFD100] transition-all">
                        Medium
                      </button>
                      <button className="px-7 py-3 bg-[#FFD100] text-[#0A0A0A] text-base font-bold border border-[#000] hover:shadow-[0_0_16px_#FFD100] transition-all">
                        Large
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h2 className="text-[#FF3FFF] text-xl mb-4 uppercase">Project Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#00F0FF] bg-[#1E1E1E] p-4 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all">
                    <div className="w-full bg-[#2A2A2A] h-24 border border-[#00F0FF] mb-3 flex items-center justify-center text-[#727272] text-xs">
                      Screenshot 16:9
                    </div>
                    <h3 className="text-[#00F0FF] font-bold text-sm mb-1">FormForge</h3>
                    <p className="text-xs text-[#A8A8A8] mb-3">
                      Generador visual de formularios con exportación JSON Schema
                    </p>
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs bg-[#2A2A2A] border border-[#00FF88] text-[#00FF88] px-2 py-1">
                        React
                      </span>
                      <span className="text-xs bg-[#2A2A2A] border border-[#00FF88] text-[#00FF88] px-2 py-1">
                        UI Component
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-xs px-3 py-1 bg-[#00F0FF] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_8px_#00F0FF]">
                        Ir al proyecto
                      </button>
                      <button className="text-xs px-3 py-1 bg-[#FFD100] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_8px_#FFD100]">
                        Ver repo
                      </button>
                    </div>
                  </div>

                  <div className="border-2 border-[#FF3FFF] bg-[#1E1E1E] p-4 hover:shadow-[0_0_20px_rgba(255,63,255,0.5)] transition-all">
                    <div className="w-full bg-[#2A2A2A] h-24 border border-[#FF3FFF] mb-3 flex items-center justify-center text-[#727272] text-xs">
                      Screenshot 16:9
                    </div>
                    <h3 className="text-[#FF3FFF] font-bold text-sm mb-1">API Playground</h3>
                    <p className="text-xs text-[#A8A8A8] mb-3">Sandbox para probar APIs con autenticación incluida</p>
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs bg-[#2A2A2A] border border-[#00FF88] text-[#00FF88] px-2 py-1">
                        Node.js
                      </span>
                      <span className="text-xs bg-[#2A2A2A] border border-[#00FF88] text-[#00FF88] px-2 py-1">
                        Tool
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-xs px-3 py-1 bg-[#00F0FF] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_8px_#00F0FF]">
                        Ir al proyecto
                      </button>
                      <button className="text-xs px-3 py-1 bg-[#FFD100] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_8px_#FFD100]">
                        Ver repo
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chips */}
              <div>
                <h2 className="text-[#FF3FFF] text-xl mb-4 uppercase">Tag Chips</h2>
                <div className="border border-[#00F0FF] bg-[#1E1E1E] p-8">
                  <div className="flex flex-wrap gap-3">
                    {["React", "TypeScript", "CLI", "API", "UI Component", "Netlify", "Node.js"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#2A2A2A] border border-[#00FF88] text-[#00FF88] px-2 py-1 hover:shadow-[0_0_8px_#00FF88] transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Spacing Section */}
        {activeSection === "spacing" && (
          <div className="space-y-12">
            <h1 className="text-[#00F0FF] text-3xl uppercase tracking-widest">▶ Spacing Scale</h1>

            <div className="border border-[#00F0FF] bg-[#1E1E1E] p-8">
              <p className="text-[#A8A8A8] text-sm mb-6">
                Base unit: 8px. Use multiples for consistent spacing throughout the design.
              </p>

              <div className="space-y-4">
                {[
                  { name: "xs", value: "4px", multiplier: "0.5x" },
                  { name: "sm", value: "8px", multiplier: "1x" },
                  { name: "md", value: "16px", multiplier: "2x" },
                  { name: "lg", value: "24px", multiplier: "3x" },
                  { name: "xl", value: "32px", multiplier: "4x" },
                  { name: "2xl", value: "48px", multiplier: "6x" },
                  { name: "3xl", value: "64px", multiplier: "8x" },
                ].map((space) => (
                  <div key={space.name} className="flex items-center gap-4">
                    <div className="w-20 text-[#00F0FF] font-bold">{space.name}</div>
                    <div className="bg-[#00F0FF]" style={{ width: space.value, height: "16px" }} />
                    <div className="text-[#A8A8A8] text-sm">
                      {space.value} ({space.multiplier})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
