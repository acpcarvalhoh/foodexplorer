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
import formatCurrency from "../../utils/formatCurrency";


export function Dish({ data, ...rest }){
    const { user } = useAuth();
    const { orders, setOrders } = useSearch();
    const [totalPrice, setTotalPrice] = useState(data.price);
    const [value, setValue] = useState(1);
    const [isFavorited, setIsFavorited] = useState(false);
    const navigate = useNavigate();

    const dishImg = `${api.defaults.baseURL}/files/${data.image}`

    useEffect(() => {

        setTotalPrice(data.price * value);

    }, [value, data.price]);
    
    const handleDecrease = (e) => {
        e.stopPropagation();

        if (value > 1) {
            setValue(value - 1);
        }

    };

    const handleIncrease = (e) => {
        e.stopPropagation();
        setValue(value + 1);
    
    };

    const handleHeartClick = () => {
       setIsFavorited(!isFavorited);
    };

    function HandleEditDish(dishId) {
        navigate(`/new-update/${dishId}`);
    };

    function HandleDetails(dishId) {
        navigate(`/details/${dishId}`);
    };
   

    function handleAddDish(){
        const alreadyAddedDish = orders.some(order => order.id === data.id);
        if(!alreadyAddedDish){
           setOrders(prevState => [...prevState, data]);
        }else{
            return alert("Este prato já foi adicionado ao carrinho");
        };  
               
    };


    const admin = user && user.role === "admin";

    return (
        <Container {...rest} onClick={() => HandleDetails(data.id)}>

            <button className={`like-edit-button ${isFavorited && !admin  ? 'favorited' : ''} `}
                onClick={(e) => {
                    if (admin) {
                      e.stopPropagation();
                      HandleEditDish(data.id);

                    } else {
                      e.stopPropagation(); 
                      handleHeartClick();
                    };
                }}
            >
                {admin ? (
                    <PiPencilSimpleLight size={24} />
                ) : (
                    isFavorited ? <FaHeart size={24} /> : <FiHeart size={24} />
                )}
                
            </button>


            <img src={dishImg} alt={`Imagem do prato ${data.name}`} />
            
            <h3>{data.name}</h3>

            <p className="dish_description">{data.description}</p>

            <p className="dish-price">{formatCurrency(totalPrice, "BRL")}</p>

            {!admin  && (
                <div className="user-buttons-content">
                    <div className="add-dish-price">

                        <button onClick={handleDecrease}>
                            <FiMinus size={24}/>
                        </button>

                        <span>{value}</span>

                        <button onClick={handleIncrease}>
                            <FiPlus size={24}/>
                        </button>

                    </div>

                    <Button
                        className="include-button"
                        title="incluir"
                        onClick={(e) => { e.stopPropagation(); handleAddDish(); }}

                    />                  
                </div>
            )}
        </Container>
    )
};
