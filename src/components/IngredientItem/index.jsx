import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"
import React, { forwardRef } from 'react';

export const IngredientItem = forwardRef(({isNew, value, onClick, ...rest}, ref) => {

    return (
        <Container $isnew={isNew}>
            <input 
                type="text"
                readOnly={!isNew}
                value={value}
                ref={ref} 
                {...rest} 
                             
            />

            <button  type="button" onClick={onClick}>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
});