import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${({ theme, $isnew }) => $isnew ? `transparent` : theme.COLORS.LIGHT_600};
    border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    border-radius: 8px;
    padding: 1rem 1.6rem;
    width: 47%;
    

    input{
        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: Roboto;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        border: none;
        width: 100%;
    }

    button{
       

        svg{
            width: 1.5rem;
            height: 1.5rem;
            color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        }
        
    }
`