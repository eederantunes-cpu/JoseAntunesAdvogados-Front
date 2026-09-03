import AreasAtuacao from "../components/AreasAtuacao/areasAtuacao";
import Contato from "../components/Contato/contato";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Sobre from "../components/Sobre/sobre";
import Welcome from "../components/Welcome/welcome";
import "./style.css"

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
