import  { Container, Content } from './styles'
import { Header } from "../../components/header"
import { Footer } from "../../components/Footer"
import dishImg  from "../../assets/dish-img.svg"
import { Section } from '../../components/Section'
import { Dishe } from '../../components/Dish'

import salade from "../../assets/salade.svg"

export function Home() {
  return (
    <Container>
      <Header/>
      <main>
        <article>
          <img src={dishImg} alt="imagem de" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </article>

        <Section title="Refeições">
          <Content className='teste'>
            <Dishe dishes={{
              image: salade,
              name: "Salada Ravanello",
              price: 49.97

            }}/>

            <Dishe dishes={{
              image: salade,
              name: "Salada Ravanello",
              price: 49.97

            }}/>

            <Dishe dishes={{
              image: salade,
              name: "Salada Ravanello",
              price: 49.97

            }}/>
          </Content>
        </Section>

        <Section title="Pratos principais">
          <Content className='teste'>
            <Dishe dishes={{
              image: salade,
              name: "Salada Ravanello",
              price: 49.97

            }}/>

            <Dishe dishes={{
              image: salade,
              name: "Salada Ravanello",
              price: 49.97

            }}/>
          </Content>
        </Section>

        <Section title="Sobremesas">
          <Content className='teste'>
            <Dishe dishes={{
              image: salade,
              name: "Salada Ravanello",
              price: 49.97

            }}/>

            <Dishe dishes={{
              image: salade,
              name: "Salada Ravanello",
              price: 49.97

            }}/>
          </Content>
        </Section>
      </main>

      {/* <Footer /> */}
    </Container>
  )
}


