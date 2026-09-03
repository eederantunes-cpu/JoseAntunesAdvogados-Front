import ButtonContact from "../ButtonContact/buttonContact";
import Divider from "../Divider/divider";
import "./style.css";

export default function Contato() {
    return(
        <section id="contato" className="contato">
            <h2>
                Entre em contato
            </h2>
            <p>
                Precisa de orientação jurídica? Entre em contato para esclarecer suas dúvidas. atendimento presencial ou online.
            </p>
            <Divider />
            <div className="contato-buttons">
                <ButtonContact>
                    Whatsapp
                </ButtonContact>
                <a
                    href="mailto:contato@joseantunesadvogados.com.br" 
                    className="button-email" 
                >
                    Email
                </a>
            </div>
        </section>
    );
}