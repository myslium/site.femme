import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Femme from './pages/femme';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Femme />} />
            </Routes>
        </BrowserRouter>
    );
}
