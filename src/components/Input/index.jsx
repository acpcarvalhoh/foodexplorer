import { Container } from "./styles"

export function Input({icon: Icon, label, id, ...rest}){
    const inputId = id || rest.name || rest.placeholder; 

    return(
        <Container>
            {label && <label htmlFor={inputId}>{label}</label>}

            {Icon && <Icon size={24}/>}

            <input id={inputId} {...rest} />
        </Container>
    )
   
    
};