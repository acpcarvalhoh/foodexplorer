import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;

  .empty-content{
    position: absolute;
    bottom: 0;
      
  }

  /* .content-container::-webkit-scrollbar-thumb {
    background-color: transparent; 
  } */
 
  .content-container{
    overflow-y: auto;
    width: 100%;
    height: 100vh;
    flex: 1;
   
    
    main{
      overflow-x:auto;
      width: 100%;
      margin: auto;
      padding: ${({ $search }) => ($search  ? '5rem 2.4rem 0 2.4rem' : '0 2rem')};
      
       
      article{
        width: 100%;
        border-radius: 3px;
        margin: 4.4rem auto 6rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 120px;
        padding:  2rem 5px 2rem;
        position: relative;
        
        
        .mobile-img{
          position: absolute;
          top: -29px;
          left: -24px;
        }


        .desktop-only-img{
          display: none;
        }

        .texts-banner{
          width: 201px;
          align-self: flex-end;
          
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

      .not-found-content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        margin-top: 5rem;
        border: 1px solid ${({ theme }) => theme.COLORS.CAKE_100};
        font-size: 2rem; 
        height: 20rem;
        border-radius: 8px;
        

        svg{
          width: 5rem;
          height: 5rem;
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

 
 
  /* Desktop */
  @media screen and (min-width: 768px){
    width: 100%;

    .content-container{
      main{
        overflow-x:auto;
        margin: auto;
        width: 100%;
        padding: ${({ $search }) => ($search  ? '3rem 11.4rem 0 11.4rem' : '0 11.4rem')};
        

        article{
          width: 100%;
          margin: 16.4rem auto 6.4rem;
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          height: /* clamp(9.375rem, 5.5433rem + 14.2574vw, 26rem) */26rem;

          .texts-banner{
            width: auto;
            align-self: center;
          }
        
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
        
        .not-found-content{
          width: 100%;
          
          p, svg{
            font-size: 3rem;
          }
            
        }


      }


    }

  

  }

  @media screen and (min-width: 1230px){
    .desktop-only-img{
      display: none;
    }
  }
  
  
 
`


export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 100vh;
  display: flex;
  gap: 5px;
 


  svg{
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    display: flex;
    width: 3rem;
    height: 3rem;
    animation: rotate .5s infinite linear;
  }

  p{
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 2rem;
  }
  
 

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }


  @media screen and (min-width: 768px){
    p{
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-size: 3rem;
    }
  }

`


