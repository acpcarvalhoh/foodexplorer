import { Container } from "./styles";
import { FiHeart, FiPlus, FiMinus } from "react-icons/fi"
import { PiPencilSimpleLight } from "react-icons/pi"
import { FaHeart } from "react-icons/fa"
import { Button } from "../Button";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import formatCurrency from "../../utils/formatCurrency";
import { getImageUrl } from "../../utils/getImage";


export function Dish({ data, ...rest }){
    const { user } = useAuth();
    const { orders, setOrders, favorites, setFavorites } = useSearch();
    const [totalPrice, setTotalPrice] = useState(data.price);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    
    const admin = user && user.role === "admin";
    const isFavorited = favorites.map(fav => fav.id)
    
    useEffect(() => {
       
        setTotalPrice(data.price * quantity);
        
    }, [quantity, data.price]);
    
    const handleDecrease = (e) => {
        e.stopPropagation();

        if (quantity > 1) {
            setQuantity(quantity - 1);
        }

    };

    const handleIncrease = (e) => {
        e.stopPropagation();
        setQuantity(quantity + 1);
    
    };

    function HandleEditDish(dishId) {
        navigate(`/new-update/${dishId}`);
    };

    function HandleDetails(dishId) {
        navigate(`/details/${dishId}`);
    };

    async function handleFavoriteDish(dish) {

        if(user){
            const favorite = favorites.filter((favorite) => favorite.id === dish);

            if (favorite.length === 0) {
                try {
                    
                    setFavorites(prevState => [...prevState, data]);
                    
                    await api.post("/favorites", { dish_id: dish }, { withCredentials: true });
            
    
                } catch (error) {
                    if (error.response) {
                        toast.error(error.response.data.message);
    
                    } else {
                        toast.error("Erro ao favoritar prato");
                    };
                };
    
            } else {
                try {
                    
                    setFavorites((prevFavorites) =>
                        prevFavorites.filter((favorite) => favorite.id !== dish)
                    );
            
                    await api.delete(`/favorites/${dish}`, { withCredentials: true });
                    
    
                } catch (error) {
                    if (error.response) {
                        toast.error(error.response.data.message);
    
                    } else {
                        toast.error("Erro ao excluir favorito");
                    };
                };
            };

        }else{
            toast.error("Faça login para favoritar pratos");

            setTimeout(() => navigate("/login"), 1500);
        };
        
       
    };
      
    

    function handleAddDish(e){
        e.stopPropagation();

        const alreadyAddedDish = orders.some(order => order.id === data.id);
        if(!alreadyAddedDish){
           data.quantity = quantity;
           data.totalPrice = totalPrice;

           setOrders(prevState => [...prevState, data]);

        }else{
            return toast.info("Este prato já foi adicionado ao carrinho");
        };  
               
    };
    
    useEffect(() => {

        if(user){
            async function fetchFavorites() {
            
                try {
                    const response = await api.get("/favorites", { withCredentials: true });
                    setFavorites(response.data);
            
                } catch (error) {
                    if (error.response) {
                        alert(error.response.data.message);
                    
                    } else {
                        alert("Erro ao carregar favoritos");
                    };
                };
            };
        
            fetchFavorites();
        };
        
    }, []); 
    

    return (
        <Container 
            {...rest} 
            onClick={() => HandleDetails(data.id)}
            $admin={admin}           
        >

            <button className={`like-edit-button ${isFavorited.includes(data.id)  && !admin  ? 'favorited' : ''} `}
                onClick={(e) => {
                    if (admin) {
                      e.stopPropagation();
                      HandleEditDish(data.id);

                    } else {
                      e.stopPropagation(); 
                      handleFavoriteDish(data.id);
                    };
                }}
            >
                {admin ? (
                    <PiPencilSimpleLight size={24} />
                ) : (
                    isFavorited.includes(data.id) ? <FaHeart size={24} /> : <FiHeart size={24} />
                )}
                
            </button>


            <img src={getImageUrl(data.image)} alt={`Imagem do prato ${data.name}`} />
            
            <h3>{data.name}</h3>

            <p className="dish_description">{data.description}</p>

            <p className="dish-price">{formatCurrency(totalPrice, "BRL")}</p>

            {!admin  && (
                <div className="user-buttons-content">
                    <div className="add-dish-price">

                        <button onClick={handleDecrease}>
                            <FiMinus size={24}/>
                        </button>

                        <span>{quantity}</span>

                        <button onClick={handleIncrease}>
                            <FiPlus size={24}/>
                        </button>

                    </div>

                    <Button
                        className="include-button"
                        title="incluir"
                        onClick={handleAddDish}
                    />                  
                </div>
            )}
        </Container>
    )
};
