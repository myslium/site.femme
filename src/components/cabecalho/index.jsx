import './index.scss';
import { Link } from 'react-router-dom';


export default function Cabecalho(props) {
    
    return(
        
        <header className="cabeçalho">
            <div className="imh1">
                <img className="femme" src="/assets/images/logo.femme.png" alt="Femme" />
                <h1>Femme</h1>
            </div>

            <nav>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><button onClick={props.scrollToSobre}>Sobre Femme</button></li>
                </ul>
            </nav>

        </header>
    );
}