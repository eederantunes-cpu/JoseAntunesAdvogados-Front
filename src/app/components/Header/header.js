import Link from "next/link";
import "./style.css"
import ButtonContact from "../ButtonContact/buttonContact";

export default function Header() {
    return(
        <header className="header">
            <a href="#inicio" className="header-logo">
                <img src="/icons/header-icon.svg" alt="José Antunes Advocacia" />
            </a>

            <nav className="header-nav">
                <Link href="#inicio">INICIO</Link>
                <Link href="#areas-atuacao">ÁREAS DE ATUACAO</Link>
                <Link href="#sobre">SOBRE</Link>
                <ButtonContact className="header-nav-contact">
                    FALE COMIGO
                </ButtonContact>
            </nav>
        </header>
    );
}