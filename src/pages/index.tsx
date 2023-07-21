
import camiseta1 from "../assets/camisetas/1.png";
import camiseta2 from "../assets/camisetas/2.png";
import camiseta3 from "../assets/camisetas/3.png";

import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={420} height={380} alt="Produto 1" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={420} height={380} alt="Produto 2" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
