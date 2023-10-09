import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"

export function IngredientItem({isNew, value, onClick, ...rest}) {

    return (
        <Container $isnew={isNew}>
            <input 
                type="text"
                readOnly={!isNew}
                value={value}
                {...rest} 
            />

            <button  type="button" onClick={onClick}>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}