import { getYears } from "../../utils/utils"
import { experienceYears } from "../../utils/utils"
import Profile from "@/assets/profile.png"
export default () => {
    return (
        <section id="About" className="w-full">
            <div className="hero bg-base-200 min-h-screen py-16">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 px-4">
                    <img
                        src={Profile}
                        alt="Foto de perfil de Javier González"
                        className="w-48 sm:w-64 lg:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="max-w-prose">
                        <h2 className="text-3xl sm:text-5xl font-bold">Acerca de mí</h2>
                        <p className="pt-6 pb-3 text-sm sm:text-base">
                            Mi nombre es Javier González. Tengo {getYears()} años. Soy Analista Programador e Ingeniero en Informática. Actualmente me encuentro viviendo en Iquique, Chile.
                        </p>
                        <p className="text-sm sm:text-base">
                            Poseo {experienceYears()} años de experiencia desarrollando proyectos informáticos para empresas de diferentes rubros, desde financiero hasta industrial. Poseo experiencia y conocimientos en tecnologías como React.js, Python, C#, Rust, SQL Server, MySQL. Además de poseer conocimientos en plataformas de facturación ERP como SAP Business One.
                        </p>
                        <p className="py-3 text-sm sm:text-base">
                            Me gusta mucho patinar, la tecnología, la música, los videojuegos y descubrir cosas nuevas <span className="text-2xl">🐇</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}