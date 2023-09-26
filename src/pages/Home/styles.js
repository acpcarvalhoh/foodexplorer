import styled from "styled-components";


export const Container = styled.div`
  max-width: 428px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border: 2px solid red;
  
  main{
    overflow-x:auto;
    
  }

  main::-webkit-scrollbar {
    width: 12px; 
  }

  main::-webkit-scrollbar-thumb {
    background-color: transparent; 
  }
 

  article{
    width: 376px;
    border-radius: 3px;
    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    display: flex;
    align-items: center;
    

    img{
      margin-left: -3rem;
      margin-top: -3rem;
    }
    

    h2{
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 3px;
    }

    p{
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }


  .teste::-webkit-scrollbar {
    width: 12px; 
  }

  .elemento-com-barra-de-rolagem::-webkit-scrollbar-thumb {
    background-color: transparent; 
  }
  
 
`

export const Content = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  flex-shrink: 0;
  gap: 1.6rem;
  scrollbar-width: thin; 
  scrollbar-color: transparent transparent;
  
`

