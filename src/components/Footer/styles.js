import styled from "styled-components";


export const Container = styled.footer`
    width: 100%;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2.4rem 2.7rem;
    background: ${({ theme }) => theme.COLORS.DARK_700};

    .logo{
        display: flex;
        align-items: center;
        gap: 6px;
        color: ${({ theme }) => theme.COLORS.LIGHT_700};

        p{
            font-family: Roboto;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            
        }

        img{
           
            width: 22px;
            height: 18px;

            svg{
                color: ${({ theme }) => theme.COLORS.LIGHT_700};
            }
        }
    }

    p{
        font-family: sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`