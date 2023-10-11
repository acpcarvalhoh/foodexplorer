import  { Container, Content } from './styles'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import dishImg  from "../../assets/dish-img.svg"
import dishImgDesktop  from "../../assets/dish-img-desktop.svg"
import { Section } from '../../components/Section'
import { Dish } from '../../components/Dish'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import salade from "../../assets/salade.svg"
import { register } from 'swiper/element/bundle';
import { useRef } from 'react'


export function Home() {
  const carouselRef = useRef(null);

  function handleRightClick() {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
  }

  function handleLeftClick() {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
  }

  return (
    <Container>
      <Header/>
      <div className="content-container">
        <main>
          
            <article>
              <img className="mobile-img" src={dishImg} alt="imagem de prato" />
              <img className="desktop-only-img" src={dishImgDesktop} alt="imagem de prato" />
              <div>
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
              </div>
            </article>

            <Section title="Sobremesas">
              <div className="carousel-container">
                <button className="button_left" onClick={handleLeftClick}>
                  <PiCaretLeftBold />
                </button>
                <Content className="carousel" ref={carouselRef}>
                  <Dish data={{
                    image: salade,
                    name: "Salada Ravanello",
                    description: "Massa fresca com camarões e pesto.",
                    price: 49.97

                  }}/>

                  <Dish data={{
                    image: salade,
                    name: "Salada Ravanello",
                    description: "Massa fresca com camarões e pesto.",
                    price: 49.97

                  }}/>

                  <Dish data={{
                    image: salade,
                    name: "Salada Ravanello",
                    description: "Massa fresca com camarões e pesto.",
                    price: 49.97

                  }}/>

                  <Dish data={{
                    image: salade,
                    name: "Salada Ravanello",
                    description: "Massa fresca com camarões e pesto.",
                    price: 49.97

                  }}/>

                  <Dish data={{
                    image: salade,
                    name: "Salada Ravanello",
                    description: "Massa fresca com camarões e pesto.",
                    price: 49.97

                  }}/>

                  <Dish data={{
                    image: salade,
                    name: "Salada Ravanello",
                    description: "Massa fresca com camarões e pesto.",
                    price: 49.97

                  }}/>
                </Content>
                <button className="button_right" onClick={handleRightClick}>
                  <PiCaretRightBold />
                </button>
              </div>
            </Section>
          
        </main>

        <Footer />
      </div>
    </Container>
  )
}

