export default () => {
    return (
        <section
            id="Hero"
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://images.pexels.com/photos/36571389/pexels-photo-36571389.jpeg?_gl=1*18tjz89*_ga*MTc4NDQ2MzMzMy4xNzgxODgyNDQ1*_ga_8JE65Q40S6*czE3ODE4ODI0NDUkbzEkZzEkdDE3ODE4ODI0NTQkajUxJGwwJGgw)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center px-4">
                <div className="w-full max-w-md bg-base-300 p-6 rounded-lg shadow-2xl">
                    <h1 className="mb-4 text-3xl sm:text-5xl font-bold">Bienvenid@s!</h1>
                    <p className="text-lg sm:text-2xl mb-4">
                        Portafolio de Javier González
                    </p>
                    <p className="text-base sm:text-xl">
                        Analista Programador · Ingeniero en Informática · Fullstack Dev
                    </p>
                </div>
            </div>
        </section>
    )
}