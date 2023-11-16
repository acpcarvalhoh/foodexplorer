import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { CiFaceFrown } from 'react-icons/ci';
import { useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { api } from '../../services/api';


export function Favorites() {
  const { favorites, setFavorites } = useSearch();
  
  async function handleRemoveFavorite(favoriteToRemove) {
    try {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== favoriteToRemove)
      );
  
      const response = await api.delete(`/favorites/${favoriteToRemove}`);
      alert(response.data.message);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);

      } else {
        alert("Erro ao excluir favorito");
      }
    }
  }
  
  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get("/favorites");
        setFavorites(response.data);

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
          
        } else {
          alert("Erro ao carregar favoritos");
        }
      }
    }
  
    fetchFavorites();
    
  }, []); 
  

  return (
    <Container>
      <Header />
      <div className="content-container">
        <main>
          <Section title="Meus Favoritos">
            <div className="content">
              {favorites && favorites.length > 0 ? (
                favorites.map((favorite, index) => (
                  <div className='favorite-content' key={index}>
                    <img src={`${api.defaults.baseURL}/files/${favorite.image}`} alt={`Imagem de ${favorite.name}`} />
                    <div>
                      <p>{favorite.name}</p>
                      <button onClick={() => handleRemoveFavorite(favorite.id)}>
                        Remover dos favoritos
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-content">
                  <CiFaceFrown />
                  <p>Você ainda não possui favoritos!</p>
                </div>
              )}
            </div>
          </Section>
        </main>
      </div>
      <Footer />
    </Container>
  );
}
