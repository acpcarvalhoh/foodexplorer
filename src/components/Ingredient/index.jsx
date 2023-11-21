import { Container } from "./styles";

export function Ingredient({title, error, ...rest}){
    return(
        <Container {...rest}>
            {title}

            {error && <span>{error}</span>}
        </Container>
    );
};