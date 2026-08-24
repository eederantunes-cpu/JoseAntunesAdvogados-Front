import ButtonContact from "../ButtonContact/buttonContact";
import Divider from "../Divider/divider";
import "./style.css"

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="hero"
    >
      <h1 className="hero-title">
        Segurança jurídica para proteger <span>seus interesses</span> e orientar <span>suas decisões.</span>
      </h1>
      <Divider />
      <p className="hero-paragraph">
        Da prevenção de riscos à defesa dos seus direitos, oferecemos orientação jurídica buscando soluções claras, estratégicas e eficazes.
      </p>
      <ButtonContact>
        ENTRE EM CONTATO
      </ButtonContact>
    </section>
  );
}
