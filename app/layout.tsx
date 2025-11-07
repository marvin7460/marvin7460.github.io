import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

//add font classes to body
export const fontClasses = `${_geist.className} ${_geistMono.className}`



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-[#0A0A0A] text-[#EDEDED]`}>
        {/* Header */}
        <header className=" sticky top-0 z-40 border-b border-[#00F0FF] bg-[#0A0A0A]/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#00F0FF] border border-[#000]" />
              <span className="text-xs font-bold uppercase tracking-widest">Marvin7460</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider">
              <a href="" className="text-[#A8A8A8] hover:text-[#00F0FF] transition-colors ">
                Inicio
              </a>
              <a href="#" className="text-[#A8A8A8] hover:text-[#00F0FF] transition-colors">
                Herramientas
              </a>
              <a href="#" className="text-[#A8A8A8] hover:text-[#00F0FF] transition-colors">
                Docs
              </a>
              <a href="#" className="text-[#A8A8A8] hover:text-[#00F0FF] transition-colors">
                Contacto
              </a>
            </nav>

            <button className="text-xs px-3 py-1 bg-[#00F0FF] text-[#0A0A0A] font-bold border border-[#000] hover:shadow-[0_0_16px_#00F0FF] transition-all uppercase tracking-wider">
              Explorar
            </button>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
