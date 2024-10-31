

import Cabecalho from '../../components/cabecalho'
import Dev2 from '../../components/dev2'
import Dev from '../../components/dev'
import './index.scss'



export default function Femme() {

    function whatsapp() {
        alert('Você será redirecionado ao contato do Whatsapp da nossa equipe!')
    }

    return (
        <div className='pagina-femme pagina'>
            <Cabecalho Inicio = {'#unik'} scrollToSobre= {'#sobre'} 
            />
            <section id='unik'>
                <div className="hero">
                    <div className="hero-text">
                        <h1>Junte-se a Femme, o melhor da tecnologia</h1>
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



            <section className='segunda'>
                <div className='pri'>
                    <div className='pri-text'>
                        <h1>Serviços Femme</h1>
                        <p>Na Femme, estamos dedicadas a oferecer <br/>serviços de desenvolvimento de sites sob medida,<br/> especialmente voltados para autônomos, <br/>freelancers e pequenos empresários. <br/>Nosso objetivo é criar soluções digitais que não só atendam, <br/>mas superem suas expectativas.</p>
                    </div>
                    <div className="pri-four">
                        <img src="/assets/images/quatromulheres.png" alt="mulheres" />
                    </div>
                </div>
            
            </section>

            
            <section className='terceira' >
                <div className='esq'> <img src='/assets/images/aspasesq.png' /> </div>
                <div className='container-pri'>
                    <img  className = 'femme' src="/assets/images/logo.femme.png" alt="Logo Femme"/>
                    <h1>Clientes</h1>
                </div>
                <div className='parag'>
                    <p>Empresa com comprometimento e que<br/> entrega o melhor resultado para o cliente,<br/>transmite confiança e tem total<br/> transparência, de fato, minha experiência<br/>com a Femme foi totalmente satisfatória</p>
                    <p className='p2'>-Gislaine, Dona da G&G</p>
                </div>
                <div className='dir'> <img src='/assets/images/aspasdir.png' /> </div>
                <img className='line' src='/assets/images/line.png' /> 
            </section>

            <section className="quarta">


                <div className="mae">

                  <div className="titulo">   <img src="/assets/images/logo.femme.png" alt="" /><h1>MULHERES NA INFORMÁTICA</h1></div>

                  <div className="mae2">

                        <div className="filho">
                            <div className="text">
                                <h1>PARA JOVENS DA INFORMÁTICA</h1>
                                <p>Nossa empresa visa sempre encorajar jovens progamadores e principalmente progamadoras, NEGRAS E PERIFÉRICAS a engatarem neste mundo tecnológico, sempre desenvolvendo novas habilidades e deixando a área feminina da informática cada vez mais popular e conhecida. Você é capaz!</p>
                            </div>

                            <div className="foto">
                                <img src="/assets/images/empresafoto.png" alt="" />
                            </div>

                        </div>

                     </div>



                </div>
            </section>

            <section className="quinta">
                <div className="mae">
                    <div className="text">
                        <h1>EXPERIMENTE NOSSOS SERVIÇOS</h1>
                        <div className='textoo'>
                            <p>Junte-se a Femme e obtenha um dos melhores serviços de tecnologia do mercado</p> 
                        </div>
                        
                        <div onClick={whatsapp} className="botao"><a href="https://wa.me/5511953031986">Contato</a></div>
                    </div>
                   
                 
                    <img className='line' src="/assets/images/line.png" alt="" />
                  
                </div>
            </section>

        


        


            <section className='desenvolvedoras'>

            <div className="sobre-imh2">

              
                <img  className = 'femme' src="/assets/images/logo.femme.png" alt="Femme Logo" />
               
                 <div className='texto'>
                      <h2>Desenvolvedoras Femme</h2>
                 </div>
               
            </div>

                <div className='nos'>

                    <Dev
                    
                    img = {'/assets/images/ju.jpg'}

                    h1 = {'Julia de Castro'}

                    p = {'Sendo uma Desenvolvedora FullStack, Julia atua como devBackend em nossos sistemas, contribuindo com toda a parte lógica utilizando NodeJS, JavaScript, MySQL, PhP e ReactJS.'}
                    
                    />


                    <div className='raymari'>
                    <Dev2
                    

                    p = {'A Desenvolvedora FullStack Rayane atua e projeta o Front-end dos nossos projetos, criando interfaces usando Html, CSS e ReactJS e também trabalha com banco de dados MySQL.'}

                    img = {'/assets/images/ray.jpg'}

                    h1 = {'Rayane Macedo'}
                    
                    />
                    </div>


                    
                   

                    <Dev
                    

                    p = {'Desenvolvedora FullStack, Maria, junto de Rayane, faz parte da equipe de Front-end, desenvolvendo as nossas belas interfaces com Html, CSS e ReactJS. A dev atua em conjunto no MySQL.'}

                    img = {'/assets/images/maria.jpg'}

                    h1 = {'Maria Fernanda de Almeida'}
                    
                    />

                    <div className='raymari'>
                    <Dev2
                    

                    p = {'Mariana, Desenvolvedora FullStack, trabalha no back-end com Julia, desenvolvendo com JavaScript, NodeJS, ReactJS, PhP e MySQL.'}

                    img = {'/assets/images/mari.jpg'}

                    h1 = {'Mariana Rodrigues'}
                    
                    />
                    </div>
                    
                    

                   
                </div>

                

            </section>

            <footer>

                
                <div className='rodape'>

                    <img src="/assets/images/logobranca.png" alt="" />

                    <nav>
                        <ul>
                            <li><a href="#">Política e privacidade</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>

                </div>

                <img src="/assets/images/line.png" alt="" />

                <h1>Copyright © 2024 Femme.</h1>
            </footer>
        </div>
    )
}