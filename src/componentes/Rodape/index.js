
import './Rodape.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Rodape(){
    return (
        <footer className="rodape">
            <MarcaRegistrada />
            Desenvolvido por Marcos Kaio
        </footer>
    )
}