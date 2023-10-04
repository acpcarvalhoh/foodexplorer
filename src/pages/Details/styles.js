import styled from "styled-components";


export const Container = styled.div`

   main{
    max-width: 100%;
    margin: auto;
    width: 428px;
    padding: 1.6rem 5.6rem 3.3rem;
    
    

      button{
         border: none;
         background: none;
         display: flex;
         color: ${({ theme }) => theme.COLORS.LIGHT_300};
         font-size: 2.4rem;
         font-weight: 500;
         line-height: 140%; 

      }
   }


  /* Desktop */
   @media screen and (min-width: 768px){
      main{
         width: 100%;
         padding: 2.4rem 12.1rem 3.3rem;
         margin-bottom: 7.9rem;
      }
   }
`

export const DishDetails = styled.section`
   margin-top: 1.6rem;
   display: flex; 
   flex-direction: column;
   align-items: center;
   justify-content: center;
  

   img{
      width: 26.4rem;
      height: 26.4rem;
      margin-bottom: 1.6rem;
   }

   .dish_description{
      width: 100%;
      

      h2{
         font-size: 2.7rem;
         font-weight: 500;
         line-height: 140%;
         color: ${({ theme }) => theme.COLORS.LIGHT_300};
         text-align: center;

      }

      p{
         font-size: 1.6rem;
         font-weight: 400;
         line-height: 140%;
         text-align: center;
         margin: 2.4rem 0;
      }
   }

   /* Desktop */
   @media screen and (min-width: 768px){
     flex-direction: row;
     justify-content: start;
     gap: 4.8rem;
     margin-top: 4.2rem;

     img{
         width: 390px;
         height: 390px;
         margin-bottom: 0;
      }

     .dish_description{
         display: flex;
         align-items: start;
         flex-direction: column;
         max-width: 687px;


         h2{
            font-size: 4rem;
         }

         p{
            font-size: 2.4rem;
            text-align: justify;
         }
      }

   }

  

  
`

export const Ingredients = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   gap: 2.4rem;
   justify-content: center;
   margin-top: 2.4rem;

   /* Desktop */
   @media screen and (min-width: 768px){
      justify-content: start;
   }

`

export const QuantityAndOrderSelector = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 25px;
   margin-top: 5.2rem;

   .dishQuantitySelector{
      display: flex;
      align-items: center;
      gap: 5px;
      

      span{
         font-family: Roboto;
         font-size: 2.2rem;
         font-style: normal;
         font-weight: 700;
         line-height: 160%; 
      }
   }

   .button-order-or-edit-dish{
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 3.3px;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      padding: 8px 16px;
      width: 100%;
      display: flex;
      justify-content: center;

      .order-price{
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 3px;
         
         
         div{
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 16.225px;
            padding-top: 4px;
         }
      }

      .order-price div span:first-child {
         display: none;
      }
      
   }


   /* Desktop */
   @media screen and (min-width: 768px){
      justify-content: start;

      .button-order-or-edit-dish{
         width: 162px;
         padding: 1.2rem 2rem;

         .order-price{

            div{
               font-size: 1.4rem;
               line-height: 2.4rem;
               font-weight: 600;
            }
           
            svg{
               display: none;
            }
         }

         .order-price div span:first-child {
            display: inline;
         }

         .order-price div span:nth-child(2){
            display: none;
         }
        
      }
      
   }
      
   

  
`

 
