import styled from "styled-components";


export const Container = styled.div`
    .splide__arrow:disabled{
        display: none ;
    }


    .splide__arrow svg {
      width: 2.5rem;
      height: 2.5rem;
    }


   
    .splide__arrow--prev{
        left: -35px;
        background: linear-gradient(90deg, #000A0F 15%, rgba(0, 10, 15, 0.1) 95%);
        height: 100%;
        width: 90px;
        transition: opacity 0.4s ease;
    }

    

    .splide__arrow--next{
        right: -25px;
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%,  #000A0F 95%);
        height: 100%;
        width: 70px;
        transition: opacity 0.4s ease;
    }


    @media screen and (min-width: 768px){
        .splide__arrow--prev{
            left: -25px;
        }

        .splide__arrow--next{
            right: 0;
           
        }

        .splide__arrow svg {
            width: 3.8rem;
            height: 3.8rem;
        }
    }



  

       
   
   

   
    

`


