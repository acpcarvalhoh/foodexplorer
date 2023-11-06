import  { Container, Content } from './styles'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import dishImg  from "../../assets/dish-img.svg"
import dishImgDesktop  from "../../assets/dish-img-desktop.svg"
import { Section } from '../../components/Section'
import { Dish } from '../../components/Dish'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { useSearch } from "../../hooks/useSearch"
import { api } from '../../services/api'
import { useEffect, useRef, useState } from 'react'


export function Home() {
  const { search } = useSearch()
  const carouselRef = useRef(null);
  const [dishes, setDishes] = useState([]);
 

  function handleRightClick() {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
  }

  function handleLeftClick() {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      setDishes(response.data);
    };
  
    fetchDishes();

  }, [search]);
  
  
  return (
    <Container $search={search}>
      <Header/>
      <div className="content-container">
        <main>
          {
            !search && 
            <article>
              <img className="mobile-img" src={dishImg} alt="imagem de prato" />
              <img className="desktop-only-img" src={dishImgDesktop} alt="imagem de prato" />
              <div>
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
              </div>
            </article>
          }
          
          <Section title="Refeiçoes">
            <div className="carousel-container">
              <button className="button_left" onClick={handleLeftClick}>
                <PiCaretLeftBold />
              </button>
              
              <Content className="carousel" ref={carouselRef} >
                {dishes.filter(item => item.category === "Refeições").map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}
                                
              </Content>
              <button className="button_right" onClick={handleRightClick}>
                <PiCaretRightBold />
              </button>
            </div>
          </Section>

          <Section title="Sobremesas">
            <div className="carousel-container">
              <button className="button_left" onClick={handleLeftClick}>
                <PiCaretLeftBold />
              </button>
              
              <Content className="carousel" ref={carouselRef} >
                {dishes.filter(item => item.category === "Sobremesas").map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}
                                
              </Content>
              <button className="button_right" onClick={handleRightClick}>
                <PiCaretRightBold />
              </button>
            </div>
          </Section>

          <Section title="Bebidas">
            <div className="carousel-container">
              <button className="button_left" onClick={handleLeftClick}>
                <PiCaretLeftBold />
              </button>
              
              <Content className="carousel" ref={carouselRef} >
                {dishes.filter(item => item.category === "Bebidas").map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}
                                
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

