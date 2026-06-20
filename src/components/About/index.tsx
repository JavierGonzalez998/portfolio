import { getYears } from "../../utils/utils"
import { experienceYears } from "../../utils/utils"
import Profile from "@/assets/profile.png"
export default () => {
    return (
        <section className="w-screen h-screen" id="About">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={Profile}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Acerca de mi</h1>
                        <p className="pt-6 pb-3">
                            Mi nombre es Javier Gonzalez. Tengo {getYears()} años. Soy Analista Programador e Ingeniero en informática. Actualmente me encuentro vivendo en Iquique, Chile
                        </p>
                        <p>
                            Poseo {experienceYears()} años de experiencia desarrollando proyectos informáticos para empresas de diferentes rubros, desde financiero hasta industrial. Poseo experiencia y conocimientos en tecnologías como React.js, Python, C#, Rust, SQL Server, MySQL. Además de poseer conocimientos en plataformas de facturación ERP como SAP Business One.
                        </p>
                        <p className="py-3">
                            Me gusta mucho patinar, la tecnología, la música, los videojuegos y descubrir cosas nuevas <span className="text-2xl">🐇</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}