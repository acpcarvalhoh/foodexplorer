import  { Container } from './styles'
import { Slider } from '../../components/Slider'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import dishImg  from "../../assets/dish-img.svg"
import dishImgDesktop  from "../../assets/dish-img-desktop.svg"
import { Section } from '../../components/Section'
import { Dish } from '../../components/Dish'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { CiFaceFrown } from "react-icons/ci"
import { useSearch } from "../../hooks/useSearch"
import { api } from '../../services/api'
import { useEffect, useRef, useState } from 'react'


export function Home() {
  const { search } = useSearch()
  const [dishes, setDishes] = useState([] || null);
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
 
  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      setDishes(response.data);
      setMeals(response.data.filter(item => item.category === "Refeições"));
      setDesserts(response.data.filter(item => item.category === "Sobremesas"));
      setDrinks(response.data.filter(item => item.category === "Bebidas"));
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
          
          {meals.length > 0 && 
            <Section title="Refeiçoes">
              <Slider>
                {meals.map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}
             </Slider>
            </Section>
          }
          
          {
            desserts.length > 0 &&   
            <Section title="Sobremesas">
              <Slider>
                {desserts.map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}   
              </Slider>
            </Section>
          }
         
          {
            drinks.length > 0 &&
            <Section title="Bebidas">
              <Slider>
                {drinks.map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}
              </Slider>
            </Section>
          }

          {
            search  && dishes.length <= 0 &&
            <div className="not-found-content">
              <p>Nenhum prato ou ingredediente</p>
              <CiFaceFrown/>
            </div>
          }
        </main>

        <Footer className={`${dishes.length <= 0 ? "empty-content" : "" }`}/>
      </div>
     
    </Container>
  )
}

