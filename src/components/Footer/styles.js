import styled from "styled-components";


export const Container = styled.footer`
    width: 100%;
    height: 77px;
    /* margin-top: 4rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2.4rem 2rem;
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

    /* Desktop */
    @media screen and (min-width: 768px){
        justify-content: space-between;
        padding: 2.4rem 12.3rem;

        .logo{
            gap: 1rem;
           
            p{
                font-size: 2.4rem;
                font-weight: 700;
            }

            img{
                height: 3rem;
                width: 3rem;
            }
        }

        p{
            font-size: 1.4rem;
            line-height: 160%; 
        }
    }

    /*  */
    @media screen and (max-width: 375px){
        padding: 2.4rem 1rem;
    }
    

`