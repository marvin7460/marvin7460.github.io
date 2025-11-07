"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight, ChevronDown, FileText, Folder, X } from "lucide-react"

interface FileNode {
  name: string
  type: "folder" | "file"
  children?: FileNode[]
  content?: string
}

const sampleTree: FileNode = {
  name: "formforge",
  type: "folder",
  children: [
    {
      name: "README.md",
      type: "file",
      content:
        "# FormForge\n\nGenerador visual de formularios con exportación JSON Schema y React Forms.\n\n## Características\n- Interfaz drag-and-drop\n- Exportación JSON Schema\n- Componentes React reutilizables\n- Validación integrada\n\n## Instalación\n```bash\nnpm install formforge\n```",
    },
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "FormBuilder.tsx", type: "file", content: "export const FormBuilder = () => { /* ... */ }" },
            { name: "FieldPicker.tsx", type: "file", content: "export const FieldPicker = () => { /* ... */ }" },
          ],
        },
        { name: "index.ts", type: "file", content: 'export * from "./components"' },
      ],
    },
    { name: "package.json", type: "file", content: '{"name": "formforge", "version": "1.0.0"}' },
  ],
}

export function FileExplorerModal({
  isOpen,
  onClose,
  repoName,
}: { isOpen: boolean; onClose: () => void; repoName?: string }) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["formforge", "src"]))
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(sampleTree.children?.[0] || null)
  const [searchTerm, setSearchTerm] = useState("")

  const toggleFolder = (name: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(name)) {
      newExpanded.delete(name)
    } else {
      newExpanded.add(name)
    }
    setExpandedFolders(newExpanded)
  }

  const renderTree = (node: FileNode, path = ""): React.ReactNode => {
    const fullPath = path ? `${path}/${node.name}` : node.name

    if (node.type === "folder") {
      const isExpanded = expandedFolders.has(fullPath)
      return (
        <div key={fullPath}>
          <button
            onClick={() => toggleFolder(fullPath)}
            className="flex items-center gap-1 text-[#A8A8A8] hover:text-[#00F0FF] text-xs py-1 px-2 w-full text-left transition-colors"
          >
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <Folder size={14} className="text-[#FFD100]" />
            <span>{node.name}</span>
          </button>
          {isExpanded && node.children && (
            <div className="ml-4 border-l border-[#2A2A2A]">
              {node.children.map((child) => renderTree(child, fullPath))}
            </div>
          )}
        </div>
      )
    }

    return (
      <button
        key={fullPath}
        onClick={() => setSelectedFile(node)}
        className={`flex items-center gap-1 text-xs py-1 px-2 w-full text-left transition-colors ${
          selectedFile?.name === node.name ? "bg-[#00F0FF] text-[#0A0A0A]" : "text-[#A8A8A8] hover:text-[#00F0FF]"
        }`}
      >
        <FileText size={14} className={selectedFile?.name === node.name ? "text-[#0A0A0A]" : "text-[#00FF88]"} />
        <span>{node.name}</span>
      </button>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-4xl h-[80vh] bg-[#0A0A0A] border-2 border-[#00F0FF] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#00F0FF] bg-[#1E1E1E]">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-[#00F0FF]" />
            <span className="text-sm font-bold text-[#EDEDED]">{repoName || "marvin7460"}/formforge</span>
            <span className="text-xs text-[#727272]">Last updated: Nov 6, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-xs px-2 py-1 border border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-colors"
            >
              Abrir en GitHub →
            </a>
            <button onClick={onClose} className="p-1 hover:bg-[#2A2A2A] transition-colors" aria-label="Close">
              <X size={16} className="text-[#A8A8A8]" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* File Tree */}
          <div className="w-1/3 border-r border-[#00F0FF] bg-[#1E1E1E] p-4 overflow-auto">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#2A2A2A] border border-[#00F0FF] text-xs text-[#EDEDED] px-2 py-1 placeholder-[#727272]"
              />
            </div>
            <div className="space-y-1 font-mono text-xs">{renderTree(sampleTree)}</div>
          </div>

          {/* Preview Panel */}
          <div className="w-2/3 bg-[#0A0A0A] p-4 overflow-auto">
            {selectedFile ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A]">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-[#00F0FF]" />
                    <span className="text-xs font-bold text-[#EDEDED]">{selectedFile.name}</span>
                  </div>
                  <button className="text-xs px-2 py-1 border border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/10 transition-colors">
                    Copiar ruta
                  </button>
                </div>

                {selectedFile.type === "file" && selectedFile.content ? (
                  <pre className="bg-[#1E1E1E] border border-[#00F0FF] p-3 rounded-none text-[#00FF88] text-xs overflow-auto max-h-64">
                    <code>{selectedFile.content}</code>
                  </pre>
                ) : (
                  <div className="text-[#727272] text-xs italic">No preview available</div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-[#727272] text-xs">
                Selecciona un archivo para ver el preview
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
