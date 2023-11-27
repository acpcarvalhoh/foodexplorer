import { Container } from "./styles";

export function Section({children, title, ...rest}){
    return(
        <Container {...rest}>
            <h2>{title}</h2>

            {children}
        </Container>
    )
};