import  { Container} from './styles'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from '../../components/Section'
import { CiFaceFrown } from "react-icons/ci"
import { useEffect } from 'react'
import { useSearch } from '../../hooks/useSearch'
import { api } from '../../services/api'

export function Favorites() {
  const { favorites, setFavorites } = useSearch();

  function HandleRemoveFavorite(favoriteToRemove) {
    const updatedFavorites = favorites.filter(favorite => favorite !== favoriteToRemove);
    setFavorites(updatedFavorites);
    
    localStorage.setItem("@foodexplorer:favorites", JSON.stringify(updatedFavorites));
  };

  console.log(favorites);
  
  useEffect( () => {
    const favoritesDishes = localStorage.getItem("@foodexplorer:favorites");
    if(favoritesDishes){
      setFavorites(JSON.parse(favoritesDishes));
      
    };

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
                          <img src={`${api.defaults.baseURL}/files/${favorite.image}`} alt={`Imagem de ${favorite.name}`} />
                          <div>
                              <p>{favorite.name}</p>
                              <button onClick={() => HandleRemoveFavorite(favorite)}>
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

