import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  flex: 1;
    
  main{
    width: 100%;
    margin: auto;
    margin-top: 5rem;
    padding: 0 2rem;

    .my-orders{
      display: flex;
      flex-direction: column;
    }
      

    .orders-content{
      margin-top: 2.9rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      img{
        width:  7.2rem;
        height: 7.2rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.COLORS.DARK_900}; 
        object-fit: cover;
        object-position: center center;
      }

      .order-content{
        display: flex;
        flex-direction: column;
        justify-content: start;
            
        .order-detailing{
          display: flex;
          gap: 1rem;
          align-items: center;

          p{
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
          }
        }

        .order-detailing p:last-child{
          font-family: Roboto;
          font-size: 1.2rem;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          display: none; 
        }

        .order-detailing p:first-child{
          display: none; 
        }
       

        button{
          border: none;
          background: none;
          color: ${({ theme }) => theme.COLORS.TOMATO_400};
          font-family: Roboto;
          font-size: 1.2rem;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          display: flex;
        }
      }

    
    }


    .total-price{
      margin-top: 4rem;
    }

    .button-advance{
      max-width: 216px;
      margin-top: 6rem;
      align-self: flex-end;
    }

    .payment-container {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(2, minmax(117px, 1fr));
      grid-template-rows: 81px auto; 
      margin-top: 3.2rem;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      border-radius: 8px;
      padding: 1px;


      .pix-payment, .credit-card-payment{
        display: flex;
        justify-content: center;
        align-items: center;
        background:  ${({ theme }) => theme.COLORS.DARK_500};
        

        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;

        button{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          color:  ${({ theme }) => theme.COLORS.LIGHT_100};
        }
        
      }

      .pix-payment{
        border-top-left-radius: 8px;
        border-right: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600};         
      }

      .credit-card-payment{
        border-top-right-radius: 8px;
      }

      .pix{
        grid-column: span 2; 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background:  ${({ theme }) => theme.COLORS.DARK_500};
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        

        svg{
          height: 16.6rem;
          width: 16.6rem;
          color:  ${({ theme }) => theme.COLORS.LIGHT_600};
          margin: 3rem auto;
        }
      }

      .credit-card{
        grid-column: span 2;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        background:  ${({ theme }) => theme.COLORS.DARK_500};
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        form{
          width: 100%;
          height: 100%;
          margin-top: 10rem;
          padding: 0 2.5rem;

          .expirydate-and-cvc{
            margin-top: 3.5rem;
            display: flex;
            gap: 1.7rem;
          }
        }
      }
                        
                      
    }

    .empty-content{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.CAKE_100};
      font-size: 2rem; 
      height: 20rem;
      border-radius: 8px;
    }

  }


  @media screen and (min-width: 768px){
    main{
      width: 100%;
      padding: 0 15rem;
      display: flex;
      gap: 6rem;

      .content{
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        flex-direction: column;
        margin-top: 3.4rem;


        .orders-content{
          margin: 0rem;
        
          .order-content{
            display: flex;
            flex-direction: column;
            justify-content: start;
            
            
            .order-detailing p:last-child{
              display: block; 
            }

            .order-detailing p:first-child{
              display: block; 
            }
          

            button{
              border: none;
              background: none;
              color: ${({ theme }) => theme.COLORS.TOMATO_400};
              font-family: Roboto;
              font-size: 1.2rem;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              display: flex;
            }
          }

        
        }
      }

      .button-advance{
       display: none;
      }
    }



    .empty-content{
      width: 100%;
      
      p, svg{
        font-size: 3rem;
      }
        
    }
  }
 
`






