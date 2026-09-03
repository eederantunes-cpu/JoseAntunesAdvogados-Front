import AreasAtuacao from "../components/AreasAtuacao/areasAtuacao";
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
      </div>
    </>
  );
}
