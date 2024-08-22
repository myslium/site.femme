import Cabecalho from '../../components/cabecalho'
import Dev from '../../components/dev'
import './index.scss'

export default function Femme() {
    return (
        <div className='pagina-femme pagina'>
            <Cabecalho />
            <section className='unik'>
                <div className="hero">
                    <div className="hero-text">
                        <h1>Junte-se a Femme e descubra o melhor da tecnologia</h1>
                    </div>
                    <div className="hero-image">
                        <img src="/assets/images/mulher1.png" alt="mulher1" />
                    </div>
                </div>
                <div className="sobre">
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

            <div className="sobre-imh2">

                <div className='imagen'>
                <img  className = 'femme' src="/assets/images/logo.femme.png" alt="Femme Logo" />
                </div>
                 
                 <h2>Desenvolvedoras <br/>Femme</h2>
            </div>

                <div className='nos'>

                    <Dev
                    
                    img = {'/assets/images/ju.jpg'}

                    h1 = {'Julia de Castro'}

                    p = {'Sendo uma Desenvolvedora FullStack, Julia atua como devBackend em nossos sistemas, contribuindo com toda a parte lógica utilizando NodeJS, JavaScript, MySQL, PhP e ReactJS.'}
                    
                    />


                    <Dev
                    

                    p = {'A Desenvolvedora FullStack Rayane atua e projeta o Front-end dos nossos projetos, criando interfaces usando Html, CSS e ReactJS e também trabalha com banco de dados MySQL.'}

                    img = {'/assets/images/ray.jpg'}

                    h1 = {'Rayane Macedo'}
                    
                    />

                    <Dev
                    

                    p = {'Desenvolvedora FullStack, Maria, junto de Rayane, faz parte da equipe de Front-end, desenvolvendo as nossas belas interfaces com Html, CSS e ReactJS. A dev atua em conjunto no MySQL.'}

                    img = {'/assets/images/maria.jpg'}

                    h1 = {'Maria Fernanda de Almeida'}
                    
                    />

                    <Dev
                    

                    p = {'Mariana, Desenvolvedora FullStack, trabalha no back-end com Julia, desenvolvendo com JavaScript, NodeJS, ReactJS, PhP e MySQL.'}

                    img = {'/assets/images/mari.jpg'}

                    h1 = {'Mari'}
                    
                    />
                </div>

                

            </section>

            <footer>

            </footer>
        </div>
    )
}