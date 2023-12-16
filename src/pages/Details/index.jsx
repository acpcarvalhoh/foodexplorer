import { Container, DishDetails, Ingredients, QuantityAndOrderSelector, Loading} from "./styles"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { PiCaretLeftBold, PiReceipt } from "react-icons/pi";
import { ImSpinner8 } from "react-icons/im";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/useSearch";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import { getImageUrl } from "../../utils/getImage";


export function Details(){
    const { user } = useAuth();
    const { dish_id } = useParams();
    const [dish, setDish] = useState({});
    const [dishQuantity, setDishQuantity] = useState(1);
    const [totalDishPrice, setTotalDishPrice] = useState(dish.price || 0);
    const [loading, setLoading] = useState(true);
    const { orders, setOrders, setSearch } = useSearch();
    const navigate = useNavigate();
    const admin = user && user.role === "admin";

    function handleDicrease(){
        if(dishQuantity > 1){
            setDishQuantity(dishQuantity - 1);
        };
    };

    function handleIncrease(){
        setDishQuantity(dishQuantity + 1);
    };

    function handleBack(){
        setSearch("")
        navigate(-1);
    };

    function HandleEditDish(dishId) {
        navigate(`/new-update/${dishId}`);
    };

    function handleAddDish(){
        const alreadyAddedDish = orders.some(order => order.id === dish.id);
        if(!alreadyAddedDish){
           dish.quantity = dishQuantity;
           dish.totalPrice = totalDishPrice;
           setOrders(prevState => [...prevState, dish]);

        }else{
            return alert("Este prato já foi adicionado ao carrinho");
        };  
               
    };

    useEffect(() => {
        setTotalDishPrice(dishQuantity * dish.price);

    }, [dishQuantity, dish.price])

    useEffect(() => {
        async function getDish(){
            const response = await api.get(`/dishes/${dish_id}`)
            setDish(response.data);
            setLoading(false);
        };

        getDish();

    }, []);

      
    return (
        <Container>
            <Header/>
            <main>
                <button onClick={handleBack}>
                    <PiCaretLeftBold size={32}/>
                    Voltar
                </button>
                {
                    loading ? 
                    <Loading>
                        <ImSpinner8 />
                        <p>Carregando prato...</p>
                    </Loading>
                :(
                    <DishDetails>
                        <img src={getImageUrl(dish.image)} alt={`Imagem de ${dish.name}`} />
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
                                
                                <button className="button-order-or-edit-dish"
                                    onClick={admin ? () => HandleEditDish(dish.id) : handleAddDish}
                                >
                                    {admin? "Editar prato" : 
                                        <div className="order-price">
                                            <PiReceipt size={21}/>
                                            <div> 
                                                <span>Incluir </span>
                                                <span>Pedir </span> 
                                                ∙
                                                <span> {formatCurrency(totalDishPrice, "BRL")}</span>
                                            </div>
                                        </div>
                                    }
                                </button>
                            </QuantityAndOrderSelector>
                        </div>
                    </DishDetails>
                )}                   
            </main>
            <Footer/> 
        </Container >
    )
};