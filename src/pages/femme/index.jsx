

import Cabecalho from '../../components/cabecalho'
import './index.scss'

export default function Femme() {

    

    return (
        <div className='pagina-femme pagina'>
            <Cabecalho  scrollToSobre= {'#sobre'}/>
            <section className='unik'>
                <div className="hero">
                    <div className="hero-text">
                        <h1>Junte-se a Femme e descubra o melhor da tecnologia</h1>
                    </div>
                    <div className="hero-image">
                        <img src="/assets/images/mulher1.png" alt="mulher1" />
                    </div>
                </div>
                <div id="sobre">
                    <div className="sobre-con">
                        <div className="sobre-imh2">
                            <img  className = 'femme' src="/assets/images/logo.femme.png" alt="Femme Logo" />
                            <h2>Sobre Femme</h2>
                        </div>
                        <p>
                            Femme é uma equipe dinâmica e criativa composta por quatro talentosas desenvolvedoras de sites: Júlia, Maria, Mariana e Rayane. Juntas, formamos uma força inovadora no desenvolvimento de soluções digitais que não apenas atendem às necessidades de nossos clientes, mas também superamos suas expectativas.
                        </p>
                    </div>
                </div>
            </section>


            <section>




            </section>


            <section>





            </section>

            <section className='desenvolvedoras'>

            </section>

            <footer>

            </footer>
        </div>
    )
}