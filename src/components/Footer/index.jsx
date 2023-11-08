import { Container } from "./styles";
import LogoImg from "../../assets/Polygon2.svg"

export function Footer({...rest}){
    return(
        <Container {...rest}>
            <div className="logo">
                <img src={LogoImg} alt="Poligono" />
                <p>food explorer</p>
            </div>

            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
};