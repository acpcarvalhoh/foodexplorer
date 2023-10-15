import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
 
  .content-container{
    overflow-y: auto;
    width: 100%;
   
    
    main{
      overflow-x:auto;
      width: 100%;
      margin: auto;
      padding: 0 2.4rem;
      
     
      article{
        width: 100%;
        border-radius: 3px;
        margin: 4.4rem auto 6rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        display: flex;
        align-items: center;
        height: 120px;
        padding: 2rem;
        
        .mobile-img{
          margin-left: -4.5rem;
          margin-top: -3rem;
        }


        .desktop-only-img{
          display: none;
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
    }

    main::-webkit-scrollbar {
      width: 12px; 
    }

    main::-webkit-scrollbar-thumb {
      background-color: transparent; 
    }
  }

 
  .button_left, .button_right{
    display: none;
  }


  .carousel::-webkit-scrollbar {
    width: 12px; 
  } 

  .elemento-com-barra-de-rolagem::-webkit-scrollbar-thumb {
    background-color: transparent; 
  }

  /* Desktop */
  @media screen and (min-width: 768px){
    width: 100%;

    .content-container{
      main{
        overflow-x:auto;
        margin: auto;
        width: 100%;
        padding: 0 11.4rem;
        

        article{
          width: 100%;
          margin: 16.4rem auto 6.4rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: /* clamp(9.375rem, 5.5433rem + 14.2574vw, 26rem) */26rem;
        
          .mobile-img{
            display: none;
          }

          .desktop-only-img{
            display: block;
            position: absolute;
            width: /* clamp(12.5rem, 6.0606rem + 23.9604vw, 63.2rem) */ 63.2rem;
            height: 40.6rem;
            top: -14.6rem;
            left: -5.8rem;

          }

          h2{
            font-size: 4rem;
            font-weight: 500;
            margin-top: 1.875rem;
            margin-right: clamp(1.25rem, -0.8787rem + 7.9208vw, 6.25rem);
            
          }

          p{
            font-size: 1.6rem;
            line-height: 100%;
            margin-top: 1rem;
            margin-right: clamp(1.25rem, -0.8787rem + 7.9208vw, 6.25rem);
            
          }
        }

        .carousel-container{
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
          }

          .button_right{
            right: 1.5rem;
            top: 18.6rem;
          }

        }

        .carousel-container::before, .carousel-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 200px; 
          height: 100%;
          z-index: 1;
        }

        .carousel-container::before {
          left: 0;
          background: linear-gradient(90deg, #000A0F 15%, rgba(0, 10, 15, 0.1) 95%);
        }


        .carousel-container::after {
          right: 0;
          background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%,  #000A0F 95%);
        }   
      }
    }
    

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


