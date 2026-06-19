import { Home, User, Briefcase, Mail } from 'lucide-react'

// ponytail: self-contained drawer, toggled by any label htmlFor="main-drawer" (e.g. Navbar)
export default () => {
    return (
        <div className='drawer'>
            <input id='main-drawer' type='checkbox' className='drawer-toggle' />
            <div className='drawer-side z-50'>
                <label htmlFor='main-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
                <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
                    <li><a href='#Hero'><Home size={18}/>Inicio</a></li>
                    <li><a href='#About'><User size={18}/>Sobre mí</a></li>
                    <li><a href='#Projects'><Briefcase size={18}/>Proyectos</a></li>
                    <li><a><Mail size={18}/>Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}
