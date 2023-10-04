import { styled } from "styled-components";

export const Container = styled.span`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: .4rem .8rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.DARK_A100};

    
`