import { Mail, GitBranch, Briefcase } from 'lucide-react'

const links = [
    { icon: Mail, label: 'javiergonzaleze98@gmail.com', href: 'mailto:javiergonzaleze98@gmail.com' },
    { icon: GitBranch, label: 'JavierGonzalez998', href: 'https://github.com/JavierGonzalez998' },
    { icon: Briefcase, label: 'Javier Gonzalez', href: 'https://www.linkedin.com/in/javiergonzaleze998' },
]

export default () => {
    return (
        <section className="w-full min-h-screen bg-base-200 flex flex-col items-center justify-center p-6 sm:p-8 gap-8" id="Contact">
            <div className="text-center w-full max-w-md">
                <h2 className="text-3xl sm:text-5xl font-bold mb-4">Contacto</h2>
                <p className="mb-8 text-base sm:text-lg">¿Trabajamos juntos? Escríbeme por cualquiera de estos medios.</p>
                <div className="flex flex-col gap-3 sm:gap-4">
                    {links.map(({ icon: Icon, label, href }) => (
                        <a key={href} href={href} target="_blank" rel="noreferrer" className="btn btn-md sm:btn-lg justify-start gap-3 sm:gap-4 text-sm sm:text-base">
                            <Icon size={20} /> {label}
                        </a>
                    ))}
                </div>
            </div>
            <footer className="text-center text-sm sm:text-base opacity-70">
                <p>© {new Date().getFullYear()}. Hecho con ❤️ por Javier González.</p>
            </footer>
        </section>
    )
}
