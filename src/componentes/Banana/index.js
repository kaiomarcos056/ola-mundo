import MenuLink from '../MenuLink'
import styles from './Banana.module.css'

export default function Banana(){
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/" >
                    Inicio
                </MenuLink>
                <MenuLink to="/sobremim" >
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}