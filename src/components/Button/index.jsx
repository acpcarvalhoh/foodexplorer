import { Container } from "./styles";
import { ImSpinner8 } from "react-icons/im";

export function Button({title, $loading = false, ...rest}){
    return(
        <Container
            type="button"
            {...rest}
            disabled={$loading}
        >
            {$loading? <span>Carregando <ImSpinner8/></span> : title}
        </Container>
    )
};