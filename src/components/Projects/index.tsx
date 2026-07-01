import { useRef, useState, useCallback, useEffect } from 'react'
import { GitBranch, Globe, ChevronLeft, ChevronRight} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

import audisoft from '@/assets/audisoft.png'
import gatblac from '@/assets/gatblac.png'
import recmetal from '@/assets/recmetal.png'

import comex from '@/assets/comex.png'
import CInforme from '@/assets/comex-informe.png'
import PTrainer from '@/assets/pTrainerMain.png'
import PTrainerTeam from '@/assets/PTrainerTeam.png'
import RDashboard from '@/assets/Romanas-Dashboard.png'
import RecDet from '@/assets/recDet.png'
import Letsrecipe from '@/assets/letsrecipe.png'
import LrProfile from '@/assets/letsrecipe_profile.png'
import tp_main from '@/assets/tp1.png';
import tp_dashboard from '@/assets/tp2.png';
import tp_sheet from '@/assets/tp3.png'
import pdfmerge from '@/assets/pdfmerge.png'
import pdfmergeIcon from '@/assets/icon_pdfmerge.png'

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
        title: "PDF Merge",
        image: pdfmergeIcon,
        summary: `PDF Merge
        
App multiplataforma para unir hojas de diferentes PDFs.

App diseñada para unificar diferentes hojas de archivos PDF.
Se selecciona una carpeta y se listan todos los documentos PDF que
se encuentren en la carpeta. Se puede seleccionar diferentes hojas y unir todo en un PDF.

Caracteristicas:
- Listar varios archivos PDF en una carpeta
- Búsqueda recursiva (Detecta archivos dentro de carpetas)
- Unifica varias hojas de diferentes PDF
Stack: TAURI (React + Rust)
`,
        images: [pdfmerge],
        site:'https://github.com/JavierGonzalez998/PDF-Merge/releases',
        repo: 'https://github.com/JavierGonzalez998/PDF-Merge/',
    
    },
     {
        title: "TabsPro",
        image: tp_main,
        summary: `TabsPro
        
App para editar y compartir tablaturas de Guitarra/Bajo.

App diseñada para compartir y editar tablaturas de instrumentos musicales
Ideal para coordinar y componer entre bandas/solista.

Caracteristicas:
- Gestión de tablaturas.
- Dashboard simple
- Opción de descargar MIDI para reproducción
- Las tabs se almacenan en la nube, por lo que se puede acceder en cualquier parte.
- Edición de tabs en tiempo real.
- MVP en desarrollo
Stack: ReactJS, NodeJS (Hono), MySQL
`,
        images: [tp_dashboard, tp_sheet],
        site:'https://tabspro.javier-gonzalez.me',
        repo: 'https://github.com/JavierGonzalez998/Tab-Pro-Front',
    },
    {
        title: "Let's Recipe",
        image: Letsrecipe,
        summary: `LetsRecipe
        
App para compartir recetas, valorar y comentar.

Una de las cosas que más me gusta es cocinar, además de la programación.
Es por eso que decidí crear este proyecto. Se basa en una red social
cuyo fin es compartir tus recetas, asi como también valorar y comentar
las recetas de las demás personas. Compartiendo nuestro amor por la cocina.

Caracteristicas:
- UI Moderno, fresco en estilos y colores
- Gestión de usuarios, recetas, ingredientes y categorías.
- Dashboard de usuarios y administración
- Gestión de caché con Redis y ORM en MySQL
- Almacenamiento de imágenes en Bucket S3 (Bucket Railway)
- Versión Demo con usuarios fijos para pruebas.
`,
        images: [Letsrecipe, LrProfile],
        site:'https://letsrecipe.javier-gonzalez.me',
        repo: 'https://github.com/JavierGonzalez998/LetsRecipe',
    },
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
        images: [CInforme, comex],
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

function ModalCarousel({ images, title }: { images: string[]; title: string }) {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true })
    const [current, setCurrent] = useState(0)

    const onSelect = useCallback(() => {
        if (!embla) return
        setCurrent(embla.selectedScrollSnap())
    }, [embla])

    useEffect(() => {
        if (!embla) return
        embla.on('select', onSelect)
        onSelect()
        return () => { embla.off('select', onSelect) }
    }, [embla, onSelect])

    if (images.length === 0) return null

    if (images.length === 1)
        return (
            <div className="flex-1 min-w-0">
                <img src={images[0]} alt={title} className="w-full object-contain rounded-box" />
            </div>
        )

    return (
        <div className="relative flex-1 min-w-0">
            <div className="overflow-hidden rounded-box" ref={emblaRef}>
                <div className="flex">
                    {images.map((img) => (
                        <div key={img} className="shrink-0 w-full">
                            <img src={img} alt={title} className="w-full object-contain rounded-box" />
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="btn btn-circle btn-sm absolute left-2 top-1/2 -translate-y-1/2 opacity-80"
                onClick={() => embla?.scrollPrev()}
                aria-label="Anterior"
            >
                <ChevronLeft size={16} />
            </button>
            <button
                className="btn btn-circle btn-sm absolute right-2 top-1/2 -translate-y-1/2 opacity-80"
                onClick={() => embla?.scrollNext()}
                aria-label="Siguiente"
            >
                <ChevronRight size={16} />
            </button>

            <div className="flex justify-center gap-1.5 mt-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => embla?.scrollTo(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-4' : 'bg-base-content/30'}`}
                        aria-label={`Imagen ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

function Row({ items, onPick }: { items: Project[]; onPick: (p: Project) => void }) {
    const [emblaRef, embla] = useEmblaCarousel({ align: 'start', dragFree: true })

    return (
        <div className="relative px-8 sm:px-12">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-3 sm:gap-4 py-4">
                    {items.map((p) => (
                        <button
                            key={p.title}
                            className="shrink-0 w-52 sm:w-72 bg-base-100 rounded-box overflow-hidden shadow-lg cursor-pointer transition hover:scale-105 active:scale-95"
                            onClick={() => onPick(p)}
                        >
                            <div className="h-32 sm:h-40 flex items-center justify-center bg-white p-4">
                                <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
                            </div>
                            <p className="font-semibold text-xs sm:text-sm p-2 text-center truncate">{p.title}</p>
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
        <section className="w-full min-h-screen bg-base-200 pt-5" id="Projects">
            <div className="p-4 sm:p-8">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6">Proyectos</h2>

                <h3 className="text-xl sm:text-2xl font-semibold mb-1">Laborales</h3>
                <Row items={work} onPick={open} />

                <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-1">Personales</h3>
                <Row items={personal} onPick={open} />
            </div>

            <dialog ref={dialog} className="modal" tabIndex={0}>
                <div className="modal-box w-full max-w-5xl mx-2 sm:mx-auto">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {active && (
                        <>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 pr-8">{active.title}</h3>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="mockup-code flex-1 text-xs sm:text-sm overflow-x-auto">
                                    {active.summary.split('\n').map((line, i) => (
                                        <pre key={i} data-prefix={i + 1}>
                                            <code>{line}</code>
                                        </pre>
                                    ))}
                                </div>
                                {active.images.length > 0 && (
                                    <ModalCarousel images={active.images} title={active.title} />
                                )}
                            </div>

                            <div className="modal-action flex-wrap gap-2">
                                {active.site && (
                                    <a href={active.site} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm sm:btn-md">
                                        <Globe size={16} /> Visitar sitio
                                    </a>
                                )}
                                {active.repo && (
                                    <a href={active.repo} target="_blank" rel="noreferrer" className="btn btn-sm sm:btn-md">
                                        <GitBranch size={16} /> Repositorio
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
