import { Container } from "./styles";
import { FiHeart, FiPlus, FiMinus } from "react-icons/fi"
import { PiPencilSimpleLight } from "react-icons/pi"
import { FaHeart } from "react-icons/fa"
import { Button } from "../Button";
import { useEffect, useState } from "react";


export function Dishe({dishes, ...rest}){
    const [totalPrice, setTotalPrice] = useState(dishes.price);
    const [value, setValue] = useState(1);
    const [isFavorited, setIsFavorited] = useState(false);


    useEffect(() => {

        setTotalPrice((dishes.price * value).toFixed(2).replace('.', ','))

    }, [value, dishes.price]);
    
    const handleDecrease = () => {
        if (value > 1) {
            setValue(value - 1);
        }

    };

    const handleIncrease = () => {
        setValue(value + 1);
    
    };

    const handleHeartClick = () => {
        setIsFavorited(!isFavorited);
    };

    const isAdmin = false;

    return (
        <Container {...rest}>

            <button className={`like-edit-button ${isFavorited && !isAdmin ? 'favorited' : ''} `}
                onClick={handleHeartClick}
            >
                {isAdmin ? (
                    <PiPencilSimpleLight size={24} />
                ) : (
                    isFavorited ? <FaHeart size={24} /> : <FiHeart size={24} />
                )}
                
            </button>


            <img src={dishes.image} alt={`Imagem de um prato ${dishes.name}`} />
            
            <h3>{dishes.name}</h3>

            <p>R$ {totalPrice}</p>

            {!isAdmin && (
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
                    />                  
                </div>
            )}
        </Container>
    )
};
