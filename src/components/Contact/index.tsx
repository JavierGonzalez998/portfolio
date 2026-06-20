import { Mail, GitBranch, Briefcase } from 'lucide-react'

const links = [
    { icon: Mail, label: 'javiergonzaleze98@gmail.com', href: 'mailto:javiergonzaleze98@gmail.com' },
    { icon: GitBranch, label: 'JavierGonzalez998', href: 'https://github.com/JavierGonzalez998' },
    { icon: Briefcase, label: 'Javier Gonzalez', href: 'https://www.linkedin.com/in/javiergonzaleze998' },
]

export default () => {
    return (
        <section className="w-screen min-h-screen bg-base-200 flex items-center justify-center p-8 relative" id="Contact">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Contacto</h1>
                <p className="mb-8 text-lg">¿Trabajamos juntos? Escríbeme por cualquiera de estos medios.</p>
                <div className="flex flex-col gap-4 max-w-md mx-auto">
                    {links.map(({ icon: Icon, label, href }) => (
                        <a key={href} href={href} target="_blank" rel="noreferrer" className="btn btn-lg justify-start gap-4">
                            <Icon size={22} /> {label}
                        </a>
                    ))}
                </div>
            </div>
            <div className='w-screen h-6 absolute bottom-15 bg-base-200 text-center' >
                <p className='text-lg'>© {new Date().getFullYear()}. Hecho con ❤️ por Javier Gonzalez.</p>
            </div>
        </section>
    )
}
