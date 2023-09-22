import { Container } from "./styles"

export function Input({label, id, ...rest}){
    const inputId = id || rest.name || rest.placeholder; 

    return(
        <Container>
            {label && <label htmlFor={inputId}>{label}</label>}

            <input id={inputId} {...rest} />
        </Container>
    )
   
    
};