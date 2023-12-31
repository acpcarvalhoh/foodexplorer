import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 1.2rem 3.2rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    font-size: 14px;
    line-height: 24px;
    border: none;
    display: flex;
    justify-content: center;
    align-items:center;

    &:disabled{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }


    span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};

        svg{
            display: flex;
            animation: rotate .4s infinite linear;
        }
    }
   


    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

`