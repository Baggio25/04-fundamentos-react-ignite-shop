
import Image from "next/image";
import { ImageContainer, ProductContainer, ProductDetailsContainer } from "../../styles/pages/product";


export default function Product() {

  return (
    <ProductContainer>
      <ImageContainer>
        imagem
      </ImageContainer>
      <ProductDetailsContainer>
        <h1>Camiseta x</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, deserunt?</p>

        <button>Comprar agora</button>
      </ProductDetailsContainer>
    </ProductContainer>
  )
}