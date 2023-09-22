import styled from "styled-components";


export const Container = styled.div`
    width: 100%;

    > input{
        width: 100%;
        padding: 1.6rem 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        background: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 8px;
        border: 2px solid transparent;
        font: 400 1.6rem Roboto;

        &placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    >input:focus {
        border: 2px solid blue;
        transition: border 0.4s ease;
    }

    >label{
        font: 400 16px/100% Roboto;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        
    }

`