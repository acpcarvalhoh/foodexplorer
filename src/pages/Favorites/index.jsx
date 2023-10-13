import  { Container} from './styles'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from '../../components/Section'

import { CiFaceFrown } from "react-icons/ci"

import salade from "../../assets/salade.svg"

import {  useState } from 'react'
import { useEffect } from 'react'


export function Favorites() {

  const data = [
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
  ]

  const [favorites, setFavorites] = useState([])

  useEffect( () => {
    setFavorites(data)


  }, [])

  return (
    <Container>
      <Header/>
      <div className="content-container">
        
        <main>
            <Section title="Meus Favoritos">
                <div className="content">
                    {favorites && favorites.map((favorite, index) => (
                        <div className='favorite-content' key={index}>
                            <img src={favorite.image} alt={`Imagem de ${favorite.name}`} />
                            <div>
                                <p>{favorite.name}</p>
                                <button>
                                    Remover dos favoritos
                                </button> 
                            </div>
                        </div>
                    ))}

                    {favorites.length <= 0 && 
                        <div className="empty-content">
                            <CiFaceFrown/>
                            <p>Você ainda não possui favoritos!</p>
                        </div>
                    }
                    
                </div>  
            </Section>
        </main>  
      </div>
      <Footer />
    </Container>
  )
}

