import './index.scss';



export default function Cabecalho(props) {

    return (

        <header className="cabeçalho">
            <div className="imh1">
                <img className="femme" src="/assets/images/logo.femme.png" alt="Femme" />
                <h1>Femme</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="#unik">Inicio</a></li>
                    <li><a href="#sobre">Sobre Femme</a></li>
                </ul>
            </nav>

        </header>
    );
}