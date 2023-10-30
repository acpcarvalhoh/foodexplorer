import { Container, DishDetails, Ingredients, QuantityAndOrderSelector } from "./styles"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { PiCaretLeftBold, PiReceipt } from "react-icons/pi";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";


export function Details(){
    const { user } = useAuth();
    const { dish_id } = useParams();
    const [dish, setDish] = useState({});
    const [dishQuantity, setDishQuantity] = useState(1);
    const [totalDishPrice, setTotalDishPrice] = useState(dish.price);
    const navigate = useNavigate();
    const dishImg = `${api.defaults.baseURL}/files/${dish.image}`    

    function handleDicrease(){
        if(dishQuantity > 1){
            setDishQuantity(dishQuantity - 1);
        };
    };

    function handleIncrease(){
        setDishQuantity(dishQuantity + 1);
    };

    function handleBack(){
        navigate(-1);
    };

   
    const admin = user.role === 'admin';

    useEffect(() => {
        setTotalDishPrice((dishQuantity * dish.price).toFixed(2).replace(".", ","))

    }, [dishQuantity, dish.price])

    useEffect(() => {
        async function getDish(){
            const reponse = await api.get(`/dishes/${dish_id}`)
           
           setDish(reponse.data);
        };

        getDish()

    }, [])

    console.log(dish_id);
    return (
        <Container>
            <Header/>
            <div className="content-container">
                <main>
                    <button onClick={handleBack}>
                        <PiCaretLeftBold size={32}/>
                        Voltar
                    </button>
                    <DishDetails>
                        <img src={dishImg} alt={`Imagem de ${dish.name}`} />
                        <div className="dish_description">
                            <h2>{dish.name}</h2>
                            <p>{dish.description}</p>
                            <Ingredients>
                                {dish.ingredients && dish.ingredients.map((ingredient, index) => (
                                    <Ingredient title={ingredient.name} key={index}/>
                                ))}
                            </Ingredients>

                            
                            <QuantityAndOrderSelector>
                                {!admin && 
                                    <div className="dishQuantitySelector">
                                        <button onClick={handleDicrease}>
                                            <FiMinus size={28}/>
                                        </button>

                                        <span>{dishQuantity}</span>

                                        <button onClick={handleIncrease}>
                                            <FiPlus size={28}/>
                                        </button>
                                    </div>
                                }                     
                                
                                <button className="button-order-or-edit-dish">
                                    {admin? "Editar prato" : 
                                        <div className="order-price">
                                            <PiReceipt size={21}/>
                                            <div> 
                                                <span>Incluir </span>
                                                <span>Pedir </span> 
                                                ∙ R$
                                                <span> {totalDishPrice}</span>
                                            </div>
                                        </div>
                                    }
                                </button>
                            </QuantityAndOrderSelector>
                        </div>
                    </DishDetails>
                </main>
                <Footer/> 
            </div> 
           
        </Container >
    )
};