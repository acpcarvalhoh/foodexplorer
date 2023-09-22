import styled from "styled-components";


export const Container = styled.div`
    width: 428px;
    margin: 15.8rem auto;
    padding: 0 5rem;

    h2{
        display: none;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        gap: 25rem;
        width: 100%;
        margin: 7rem auto;

        h1{
            font-size: 4.5rem;
           
        }


        h2{
            display: block;
            margin-bottom: 3.2rem;
            text-align: center;
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
        }
    
    }


`

export const Form = styled.form`
    margin-top: 7.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    >div{
        margin-bottom: 3.2rem;
    }

    >a{
        margin-top: 3.2rem;
        font-style: normal;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        text-align: center;
    }

    @media screen and (min-width: 768px) {
        margin-top: 0;
        width: 476px;
        background: ${({ theme }) => theme.COLORS.DARK_700};
        padding: 6.4rem;
        border-radius: 1.6rem;
    
    }
    
`