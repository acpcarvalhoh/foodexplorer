import { Container } from "./styles";
import { FiHeart, FiPlus, FiMinus } from "react-icons/fi"
import { PiPencilSimpleLight } from "react-icons/pi"
import { FaHeart } from "react-icons/fa"
import { Button } from "../Button";
import { useEffect, useState } from "react";


export function Dish({data, ...rest}){
    const [totalPrice, setTotalPrice] = useState(data.price);
    const [value, setValue] = useState(1);
    const [isFavorited, setIsFavorited] = useState(false);


    useEffect(() => {

        setTotalPrice((data.price * value).toFixed(2).replace('.', ','))

    }, [value, data.price]);
    
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


            <img src={data.image} alt={`Imagem de um prato ${data.name}`} />
            
            <h3>{data.name}</h3>

            <p className="dish_description">{data.description}</p>

            <p className="dish-price">R$ {totalPrice}</p>

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
