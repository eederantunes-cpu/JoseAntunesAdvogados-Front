import AreasAtuacao from "./components/AreasAtuacao/areasAtuacao";
import Contato from "./components/Contato/contato";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Sobre from "./components/Sobre/sobre";
import Welcome from "./components/Welcome/welcome";
import "./style.css";

export const metadata = {
  keywords: "Advogado, Advogado empresarial, Advogado penal econômico, Consultoria empresarial, Planejamento tributário, Compliance empresarial, Contencioso empresarial, Consultoria tributária, Direito civil, Direito previdenciário, Direito trabalhista, Defesa penal",
  description: "José Antunes Advocacia. Conheça o escritório, suas áreas de atuação e os serviços jurídicos oferecidos.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "José Antunes Advocacia",
    title: "José Antunes Advocacia",
    description:
    "Conheça o escritório José Antunes Advocacia e suas áreas de atuação.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Antunes Advocacia",
    description:
    "Conheça o escritório José Antunes Advocacia e suas áreas de atuação.",
  },
};

export default function Home() {
  return (
    <>
      <Welcome /> 
      <div className="background">
        <Header />
        <Hero />
        <AreasAtuacao />
        <Sobre />
        <Contato />
        <Footer />
      </div>
    </>
  );
}
