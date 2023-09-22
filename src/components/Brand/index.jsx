import { Container } from "./styles"
import brandImg from "../../assets/Polygon .svg"

export function Brand(){
    return (
        <Container >
            <img src={brandImg} alt="Imagem de um poligono" />
            <h1>food explorer</h1>
        </Container >
    )
};