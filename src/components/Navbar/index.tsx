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
        <section className='w-screen h-10 bg-base-300 shadow-2xl flex flex-row items-center sticky top-0 z-50'>
            <div className='w-1/6 flex justify-around items-center'>
                <label htmlFor='main-drawer' className='cursor-pointer'>
                    <Menu/>
                </label>
                <h3 className='font-bold text-2xl'>JG</h3>
            </div>
            <label className='swap swap-rotate ml-auto mr-4'>
                <input type='checkbox' checked={dark} onChange={e => setDark(e.target.checked)} />
                <Sun className='swap-off' />
                <Moon className='swap-on' />
            </label>
        </section>
    )
}