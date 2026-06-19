import { useRef, useState } from 'react'
import { GitBranch, Globe } from 'lucide-react'

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
        title: 'ERP SAP B1 Add-on',
        image: 'https://picsum.photos/seed/work1/400/250',
        summary: `# ERP SAP B1 Add-on

Add-on de facturación electrónica sobre **SAP Business One**.

- Integración con DI API
- Generación de DTE
- Reportería en SQL Server`,
        images: ['https://picsum.photos/seed/work1a/800/500', 'https://picsum.photos/seed/work1b/800/500'],
        site: 'https://example.com',
    },
    {
        title: 'Portal Financiero',
        image: 'https://picsum.photos/seed/work2/400/250',
        summary: `# Portal Financiero

Plataforma web para gestión de créditos.

- React + .NET
- Autenticación JWT
- Dashboards en tiempo real`,
        images: ['https://picsum.photos/seed/work2a/800/500'],
        repo: 'https://github.com/example/portal',
    },
]

const personal: Project[] = [
    {
        title: 'Portafolio JG',
        image: 'https://picsum.photos/seed/perso1/400/250',
        summary: `# Portafolio JG

Este mismo sitio.

- React 19 + Vite
- Tailwind CSS 4 + daisyUI 5`,
        images: ['https://picsum.photos/seed/perso1a/800/500'],
        site: 'https://example.com',
        repo: 'https://github.com/example/protafolio-jg',
    },
    {
        title: 'Skate Tracker',
        image: 'https://picsum.photos/seed/perso2/400/250',
        summary: `# Skate Tracker

App para registrar sesiones de patinaje 🛹.

- Rust + SQLite`,
        images: ['https://picsum.photos/seed/perso2a/800/500', 'https://picsum.photos/seed/perso2b/800/500'],
        repo: 'https://github.com/example/skate-tracker',
    },
]

function Row({ items, onPick }: { items: Project[]; onPick: (p: Project) => void }) {
    return (
        <div className="carousel carousel-center w-full gap-4 p-4">
            {items.map((p) => (
                <button
                    key={p.title}
                    className="carousel-item btn btn-ghost h-auto p-0 rounded-box overflow-hidden shadow-lg"
                    onClick={() => onPick(p)}
                >
                    <img src={p.image} alt={p.title} className="w-72 object-cover" />
                </button>
            ))}
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
                                <div className="carousel carousel-center flex-1 gap-2 rounded-box">
                                    {active.images.map((img) => (
                                        <div key={img} className="carousel-item w-full">
                                            <img src={img} alt={active.title} className="w-full object-cover rounded-box" />
                                        </div>
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
