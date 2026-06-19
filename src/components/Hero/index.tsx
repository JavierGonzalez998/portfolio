export default () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://images.pexels.com/photos/36571389/pexels-photo-36571389.jpeg?_gl=1*18tjz89*_ga*MTc4NDQ2MzMzMy4xNzgxODgyNDQ1*_ga_8JE65Q40S6*czE3ODE4ODI0NDUkbzEkZzEkdDE3ODE4ODI0NTQkajUxJGwwJGgw)",
            }}
        >
            <div className="hero-overlay" id="Hero"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md text-accent-content bg-base-300 p-6 rounded-lg shadow-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Bienvenid@s!</h1>
                    <p className="text-2xl mb-5">
                        Portafolio de Javier Gonzalez
                    </p>
                    <p className="text-2xl">
                        Analista Programador - Ingeniero en Informática - Fullstack Software Dev
                    </p>
                </div>
            </div>
        </div>
    )
}