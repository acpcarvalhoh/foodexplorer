import { Container, DishDetails, Ingredients, QuantityAndOrderSelector } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Ingredient } from "../../components/Ingredient"

import { PiCaretLeftBold, PiReceipt } from "react-icons/pi"
import { FiPlus, FiMinus } from "react-icons/fi"

import salade  from "../../assets/salade.svg"
import { useEffect, useState } from "react"


export function Details(){
    const dishPrice = 25.00
    const [dishQuantity, setDishQuantity] = useState(1);
    const [totalDishPrice, setTotalDishPrice] = useState(dishPrice);
    

    useEffect(() => {
        setTotalDishPrice((dishQuantity * dishPrice).toFixed(2).replace(".", ","))

    }, [dishQuantity, dishPrice])


    function handleDicrease(){
        if(dishQuantity > 1){
            setDishQuantity(dishQuantity - 1);
        };
    };

    function handleIncrease(){
        setDishQuantity(dishQuantity + 1);
    };

   
    const admin = true;

    return (
        <Container>
            <Header/> 
            <main>
                <button>
                    <PiCaretLeftBold size={32}/>
                    Voltar
                </button>
                <DishDetails>
                    <img src={salade} alt="Salada Ravanello" />
                    <div className="dish_description">
                        <h2>Salada Ravanello</h2>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                        <Ingredients>
                            <Ingredient title="alface"/>
                            <Ingredient title="cebola"/>
                            <Ingredient title="pão naan"/>
                            <Ingredient title="pepino"/>
                            <Ingredient title="rabanete"/>
                            <Ingredient title="tomate"/>
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
        </Container >
    )
};