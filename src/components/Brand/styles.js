import styled from "styled-components";


export const Container = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    >h1{
        font-size: 3rem /* clamp(3.7rem, 4.7rem, 10vw); */;
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (min-width: 900px) {

        >h1{
            font-size: 3.7rem;
            
        }
        
    }


`