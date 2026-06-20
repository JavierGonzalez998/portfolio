import { useRef, useState } from 'react'
import { GitBranch, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

import audisoft from '@/assets/audisoft.png'
import gatblac from '@/assets/gatblac.png'
import recmetal from '@/assets/recmetal.png'

import comex from '@/assets/comex.png'
import CInforme from '@/assets/comex-informe.png'
import PTrainer from '@/assets/pTrainerMain.png'
import PTrainerTeam from '@/assets/PTrainerTeam.png'
import RDashboard from '@/assets/Romanas-Dashboard.png'
import RecDet from '@/assets/RecDet.png'

type Project = {
    title: string
    image: string
    summary: string // markdown crudo, se muestra estilo IDE
    images: string[]
    site?: string
    repo?: string
}

const work: Project[] = [
    {
        title: 'Sistema Intranet Trabajadores',
        image: audisoft,
        summary: `Sistema Intranet Trabajadores (2021-2023)

Trabajé en una intranet de trabajadores la cual se basa en: 

- Administración de usuarios
- Gestión de permisos y vacaciones con flujos de aprobación
- Sección de noticias.

Desarrollado en:
- React
- Python
- MariaDB
- Desplegado en DigitalOcean con VM en Linux`,
        images: [],
        site: '',
    },
    {
        title: 'Proyectos Varios',
        image: gatblac,
        summary: `Proyecto Circularización (Bolsa de Santiago) (2023-2024)

Con Gatblac trabajé en Bolsa de Santiago. Estuve a cargo
de desarrollar el módulo de Circularización dentro de la 
plataforma Optimus

Proyecto Centralización de Base de Datos (SKC Rental) (2023-2024)

Con Gatblac también trabajé en SKC Rental, en un proyecto que buscaba
centralizar las conexiones y consulta de la bd de Chile Perú y Colombia
del sistema de la empresa`,
        images: [],
        repo: '',
    },
    {
        title: 'Sistema Pesajes Recmetal',
        image: recmetal,
        summary: `Sistema Romanas Recmetal (2025-2026)
Plataforma que registra y centraliza pesajes industriales
de diferentes plantas de la empresa

Caracteristicas:
- Generación de reportes de pesajes diarios
- Captura de pesos de diferentes visores (Mettler Toledo, Prix)
- Integración con capturas de cámaras IP (Hikvision) para evidenciar pesajes
- Gestión de usuarios y roles

Stack: Tauri (React + Rust), SQL Server, Azure (BlobStorage)
`,
        images: [RDashboard],
        site: '',
    },
    {
        title: 'Detalle de Pesajes',
        image: recmetal,
        summary: `Sistema Detalle de Pesajes Recmetal (2025-2026)
App Web para visualizar los detalles de los pesajes registrados.
Vista para clientes y proveedores.

Caracteristicas:
- Visualización digital del ticket físico generado en la planta
- Detalle de pesaje con información de producto, cliente, proveedor, etc.
- Visualización de imágenes de las cámaras IP

Stack: React, TypeScript, TailwindCSS, Python
`,
        images: [RecDet],
        site: '',
    }
]

const personal: Project[] = [
    {
        title: 'Informe COMEX',
        image: comex,
        summary: `# Informe COMEX
Sistema de análisis de reportes de exportaciones
a partir de partidas arancelarias.
La información se puede obtener desde DataSur.

Caracteristicas:

- Acceso a reportes completos
- Dashboard interactivo con filtros
- Exportación a PDF Resumen
- Stack: React, TypeScript, CSS

En el repositorio se encuentra un CSV de prueba.
`,
        images: [CInforme,comex],
        site: 'https://comex.javier-gonzalez.me',
        repo: 'https://github.com/JavierGonzalez998/Comex-Data-Analisis',
    },
    {
        title: 'PokeTrainer',
        image: PTrainer,
        summary: `# PokeTrainer
        
App para registrar y gestionar tus equipos pokemon.

Caracteristicas:
- UI Temática acorde al Videojuego Pokemon
- Visualización de Sprites de los Pokemon según la elección del usuario
- Stack: .NET 8 Blazor, C#, Bootstrap
`,
        images: [PTrainerTeam],
        repo: 'https://github.com/JavierGonzalez998/PokeTrainer',
    },
]

function Row({ items, onPick }: { items: Project[]; onPick: (p: Project) => void }) {
    const [emblaRef, embla] = useEmblaCarousel({ align: 'start', dragFree: true })

    return (
        <div className="relative px-12">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4 py-4">
                    {items.map((p) => (
                        <button
                            key={p.title}
                            className="shrink-0 w-72 bg-base-100 rounded-box overflow-hidden shadow-lg cursor-pointer transition hover:scale-105"
                            onClick={() => onPick(p)}
                        >
                            <div className="h-40 flex items-center justify-center bg-white p-4">
                                <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
                            </div>
                            <p className="font-semibold text-sm p-2 text-center truncate">{p.title}</p>
                        </button>
                    ))}
                </div>
            </div>
            <button
                className="btn btn-circle btn-sm absolute left-0 top-1/2 -translate-y-1/2"
                onClick={() => embla?.scrollPrev()}
                aria-label="Anterior"
            >
                <ChevronLeft size={18} />
            </button>
            <button
                className="btn btn-circle btn-sm absolute right-0 top-1/2 -translate-y-1/2"
                onClick={() => embla?.scrollNext()}
                aria-label="Siguiente"
            >
                <ChevronRight size={18} />
            </button>
        </div>
    )
}

export default () => {
    const dialog = useRef<HTMLDialogElement>(null)
    const [active, setActive] = useState<Project | null>(null)

    const open = (p: Project) => {
        setActive(p)
        dialog.current?.showModal()
    }

    return (
        <section className="w-screen min-h-screen bg-base-200 pt-5" id="Projects">
            <div className="p-8">
                <h1 className="text-5xl font-bold mb-6">Proyectos</h1>

                <h2 className="text-2xl font-semibold">Laborales</h2>
                <Row items={work} onPick={open} />

                <h2 className="text-2xl font-semibold">Personales</h2>
                <Row items={personal} onPick={open} />
            </div>

            <dialog ref={dialog} className="modal" tabIndex={0}>
                <div className="modal-box max-w-5xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {active && (
                        <>
                            <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="mockup-code flex-1 text-sm">
                                    {active.summary.split('\n').map((line, i) => (
                                        <pre key={i} data-prefix={i + 1}>
                                            <code>{line}</code>
                                        </pre>
                                    ))}
                                </div>
                                <div className="flex-1 flex gap-2 overflow-x-auto rounded-box">
                                    {active.images.map((img) => (
                                        <img key={img} src={img} alt={active.title} className="w-full shrink-0 object-contain rounded-box" />
                                    ))}
                                </div>
                            </div>

                            <div className="modal-action">
                                {active.site && (
                                    <a href={active.site} target="_blank" rel="noreferrer" className="btn btn-primary">
                                        <Globe size={18} /> Visitar sitio
                                    </a>
                                )}
                                {active.repo && (
                                    <a href={active.repo} target="_blank" rel="noreferrer" className="btn">
                                        <GitBranch size={18} /> Repositorio
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </section>
    )
}
