import styled from "styled-components";


export const Container = styled.div`
   
   main{
    width: 100%;
    margin: auto;
    max-width: 428px;
    border: 2px solid red;
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

   h2{
      font-size: 2.7rem;
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

   }

   p{
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;
      text-align: center;
      margin: 2.4rem 0;
   }
`

export const Ingredients = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   gap: 2.4rem;
   justify-content: center;
   margin-top: 2.4rem;

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
      
   }

  
`

 
