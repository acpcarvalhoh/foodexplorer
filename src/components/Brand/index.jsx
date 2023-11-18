import { Container } from "./styles"
import brandImg from "../../assets/Polygon .svg"
import { useNavigate } from "react-router-dom"

export function Brand(){
    const navigate = useNavigate();

    function navigateToHome(){
        navigate("/");
    };

    return (
        <Container onClick={navigateToHome}>
            <img src={brandImg} alt="Imagem de um poligono" />
            <h1>food explorer</h1>
        </Container >
    )
};