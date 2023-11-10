import styled from "styled-components";


export const Container = styled.div`
    .button_left, .button_right{
        display: none;
    }

    .carousel::-webkit-scrollbar {
        width: 12px; 
    } 

    .elemento-com-barra-de-rolagem::-webkit-scrollbar-thumb {
        background-color: transparent; 
    }
  

    @media screen and (min-width: 768px){
        position: relative;
        overflow: hidden;
          
        .button_left, .button_right{
            position: absolute;
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            display: block;
        
            z-index: 2;

            svg{
                width: 4rem;
                height: 4rem;
            }
        }

        .button_left{
            left: 1.5rem;
            top: 18.6rem;
            transition: opacity 0.4s ease;
        }

        .button_right{
            right: 1.5rem;
            top: 18.6rem;
            transition: opacity 0.4s ease;
        }

        ${({ $showLeftButton }) => $showLeftButton && `
            &::before{
                content: "";
                position: absolute;
                top: 0;
                width: 200px; 
                height: 100%;
                z-index: 1;
                transition: opacity 0.4s ease;
            }

            &::before {
                left: 0;
                background: linear-gradient(90deg, #000A0F 15%, rgba(0, 10, 15, 0.1) 95%);
            }
        `}

        ${({ $showRightButton }) => $showRightButton && `
            &::after {
                content: "";
                position: absolute;
                top: 0;
                width: 200px; 
                height: 100%;
                z-index: 1;
                transition: opacity 0.4s ease;
            }

            &::after {
                right: 0;
                background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%,  #000A0F 95%);
            }
        `}
        
    }
    

`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    flex-shrink: 0;
    gap: 1.6rem;
    scrollbar-width: thin; 
    scrollbar-color: transparent transparent;
    overflow: hidden;
  

    @media screen and (min-width: 768px){
        width: 100%;
        overflow: hidden;
    
    }

  
`