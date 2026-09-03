import Image from "next/image";
import "./style.css"

export default function Welcome() {
  return (
    <section className="welcome">
        <Image
          className="welcome-logo"
          src="/images/welcome-logo-horizontal.png"
          alt="José Antunes Advocacia"
          width={300}
          height={100}
        />
    </section>
  );
}
