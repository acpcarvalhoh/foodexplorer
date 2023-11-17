import  { Container, Loading} from './styles'
import { Carousel } from '../../components/Carousel'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Dish } from '../../components/Dish'
import dishImg  from "../../assets/dish-img.svg"
import dishImgDesktop  from "../../assets/dish-img-desktop.svg"
import { Section } from '../../components/Section'
import { CiFaceFrown } from "react-icons/ci"
import { ImSpinner8 } from "react-icons/im";
import { useSearch } from "../../hooks/useSearch"
import { api } from '../../services/api'
import { useEffect, useState } from 'react'


export function Home() {
  const { search } = useSearch()
  const [dishes, setDishes] = useState([] || null);
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      setDishes(response.data);
      setMeals(response.data.filter(item => item.category === "Refeições"));
      setDesserts(response.data.filter(item => item.category === "Sobremesas"));
      setDrinks(response.data.filter(item => item.category === "Bebidas"));
      setLoading(false);
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

          {
            loading && 
            <Loading>
              <ImSpinner8 />
              <p>Carregando pratos...</p>
            </Loading>
          }
           
          {meals.length > 0 && 
            <Section title="Refeiçoes">
              <Carousel>
                {meals.map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}
             </Carousel>
            </Section>
          }
          
          {
            desserts.length > 0 &&   
            <Section title="Sobremesas">
              <Carousel>
                {desserts.map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}   
              </Carousel>
            </Section>
          }
         
          {
            drinks.length > 0 &&
            <Section title="Bebidas">
              <Carousel>
                {drinks.map((dish, index) => ( 
                  <Dish data={dish} key={index}/>
                ))}
              </Carousel>
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

        <Footer className={`${search && dishes.length <= 0 ? "empty-content" : "" }`}/>
      </div>
     
    </Container>
  )
}

