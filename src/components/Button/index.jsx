import { Container } from "./styles";
import { ImSpinner8 } from "react-icons/im";

export function Button({title, $message, $loading = false, ...rest}){
    

    return(
        <Container
            type="button"
            {...rest}
            disabled={$loading}
        >
            {$loading? <span>{$message}<ImSpinner8/></span> : title}
        </Container>
    )
};