import { useEffect, useState } from 'react'
import { Menu, Sun, Moon } from 'lucide-react'

// carga inicial: respeta el modo del sistema del cliente
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

export default () => {
    const [dark, setDark] = useState(systemDark)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', dark ? 'business' : 'winter')
    }, [dark])

    return (
        <nav className='w-full h-12 bg-base-300 shadow-2xl flex flex-row items-center sticky top-0 z-50'>
            <div className='flex items-center gap-3 px-4'>
                <label htmlFor='main-drawer' className='cursor-pointer p-1' aria-label='Abrir menú'>
                    <Menu size={22}/>
                </label>
                <span className='font-bold text-xl'>JG</span>
            </div>
            <label className='swap swap-rotate ml-auto mr-4 p-1' aria-label='Cambiar tema'>
                <input type='checkbox' checked={dark} onChange={e => setDark(e.target.checked)} />
                <Sun className='swap-off' size={20}/>
                <Moon className='swap-on' size={20}/>
            </label>
        </nav>
    )
}