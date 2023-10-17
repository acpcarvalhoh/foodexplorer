import styled from "styled-components";


export const Container = styled.div`
    width: 428px;
    margin: auto;
    height: 100%;
    padding: 5.2rem 4.7rem 0;
    

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
        padding: 2rem 4.7rem 0;

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


    @media (min-width: 768px) and (max-width: 1150px) {
        padding: 2rem 2rem 0 2rem;
        gap: 3rem;
        transition: width 0.3s ease, height 0.3s ease;
        
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
        height: 600px;
        background: ${({ theme }) => theme.COLORS.DARK_700};
        padding: 3rem 6.4rem 1rem 6.4rem; 
        border-radius: 1.6rem;
    
    } 

    
`