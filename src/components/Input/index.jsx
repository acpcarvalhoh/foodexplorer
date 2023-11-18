import { Container } from "./styles";
import React, { forwardRef } from 'react';

export const Input = forwardRef(({ icon: Icon, label, id, error, ...rest }, ref) => {
    const inputId = id || rest.name || rest.placeholder; 

    return(
        <Container>
            {label && <label htmlFor={inputId}>{label}</label>}

            {Icon && <Icon size={24}/>}

            <input id={inputId} {...rest} ref={ref}/>

            {error && <span>{error}</span>}
        </Container>
    )
});