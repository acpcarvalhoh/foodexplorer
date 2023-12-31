import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 2.4rem;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color:  ${({ theme }) => theme.COLORS.LIGHT_300};
  

  /* Desktop */
  @media screen and (min-width: 768px){
    padding-left: 0;
    font-size: 2.5rem;
    line-height: 140%
    
  }
   

`

