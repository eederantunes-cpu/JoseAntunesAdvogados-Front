import Divider from "../Divider/divider";
import Image from "next/image";
import "./style.css";

export default function Sobre() {
    return(
        <div className="sobre-background">
            <div className="sobre-decoracao-background">
                <div className="sobre-decoracao"/>
            </div>
            <section id="sobre" className="sobre-conteudo">
                <Image 
                    src="/images/jose-eder-antunes.png" 
                    alt="Advogado"
                    width={200}
                    height={400}
                />
                <div className="sobre-conteudo-texto">
                    <h2>José Eder Lucas Antunes</h2>
                    <Divider />
                    <p>Advogado com atuação em Direito Penal Econômico e Empresarial, consultoria empresarial preventiva, planejamento tributário, administrativo e contencioso, além de demandas cíveis, previdenciárias e trabalhistas de pessoas físicas. Sócio da RPM Contabilidade Digital, alia a formação jurídica ao conhecimento prático da rotina contábil e de gestão das empresas. A atuação do escritório é orientada ao suporte jurídico necessário para a tomada de decisões fundamentadas.</p>
                </div>
            </section>
        </div>
    );
}