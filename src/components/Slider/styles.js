import styled from "styled-components";


export const Container = styled.div`
    .splide__arrow:disabled{
        display: none ;
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
   
   

   
    

`


