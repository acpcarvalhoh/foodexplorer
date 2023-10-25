import styled from "styled-components";


export const Container = styled.div`
   height: 100vh;;
   
   >main{
      max-width: 100%;
      margin: auto;
      width: 428px;
      padding: 1.1rem 3.2rem 5rem;
      overflow-y: auto;
      
      button{
         border: none;
         background: none;
         display: flex;
         align-items: center;
         color: ${({ theme }) => theme.COLORS.LIGHT_300};
         font-size: 1.6rem;
         font-weight: 500;
         line-height: 140%; 

      }

      form{
         margin-top: 3.5rem;
         display: flex;
         flex-direction: column;
         gap: 2.4rem;
         
         .mobile{
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
         }

         .desktop{
            display: none;
         }

         .image-name-category{
            display: flex;
            flex-direction: column;
            gap: 2.4rem;
            

            .img-content{
               display: flex;
               flex-direction: column;
               gap: 2.5rem;

               p{
                  font-family: Roboto;
                  font-size: 1.6rem;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 100%;
                  color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
               }

               .icon_label{
                  margin-top: -1rem;
                  width: 100%;
                  padding: 1.7rem 1.6rem 1.7rem 3rem;
                  border-radius: 8px;
                  cursor: pointer;
                  background: ${({ theme }) => theme.COLORS.DARK_800};
                  color: ${({ theme }) => theme.COLORS.LIGHT_100};
                  display: flex;
                  align-items: center;
                  gap: 8px;


                  svg{
                     width: 2.4rem;
                     height: 2.4rem;
                     
                  }

                  span{
                     font-size: 1.6rem;
                     font-style: normal;
                     font-weight: 500;
                     line-height: 2.4rem;
                  }

                  .selected-img{
                     font-size: 1.4rem;
                     display: flex;
                     align-items: center;
                     gap: 5px;

                     svg{
                        display: flex;
                        width: 1.5rem;
                        height: 1.5rem;
                        color: ${({ theme }) => theme.COLORS.MINT_100};
                     }
                  }

                  input{
                     display: none;
                  }
               }
            }

           

           
         }
        

         .ingredients-container{
            label{
               font-family: Roboto;
               font-size: 1.6rem;
               font-style: normal;
               font-weight: 400;
               line-height: 100%;
               color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }

         }

         .dish-description{
            display: flex;
            flex-direction: column;
            gap: 1.4rem;

            label{
               font-family: Roboto;
               font-size: 1.6rem;
               font-style: normal;
               font-weight: 400;
               line-height: 100%;
               color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }

            textarea{
               border-radius: 8px;
               border: 1px solid transparent;
               resize: none;
               height: 172px;
               background: ${({ theme }) => theme.COLORS.DARK_800};
               padding: 1.4rem;
               color: ${({ theme }) => theme.COLORS.LIGHT_100};
               font-family: Roboto;
               font-size: 1.6rem;
               font-style: normal;
               font-weight: 400;
               line-height: 130%; 

               &placeholder{
                  color: ${({ theme }) => theme.COLORS.LIGHT_500}; 
                  font-family: Roboto;
               }
            }

            textarea:focus{
               border: 1px solid blue;
               transition: border 0.4s ease;
            }
         }

         .custom-buttons{
            display: flex;
            gap: 3.2rem;
            

            .button-delete{
               background: ${({ theme }) => theme.COLORS.DARK_800};
               font-size: 1.4rem;
            }

            .button-submit{
               padding: 1.2rem 1rem;
               background: ${({ theme }) => theme.COLORS.TOMATO_400};
               border-radius: 5px;
               font-size: 1.4rem;
            }
         }

        


      }

      form input:nth-child(2){
         background: ${({ theme }) => theme.COLORS.DARK_800};
         padding: 1.8rem 1.6rem;
      }

      .ingredients-price{
         display: flex;
         flex-direction: column;
         gap: 2.4rem;
      }


   }
   

  /* Desktop */
   @media screen and (min-width: 768px){
      
      main{
         width: 100%;
         padding: 4rem 12.5rem 5rem;

         .button-back{
            font-size: 2.4rem;
            font-weight: 700;

            svg{
               width: 3.2rem;
               height: 3.2rem;
            }
         }

         form{
            .mobile{
               display: none;
            }

            .desktop{
               display: block;
               font-size: 3.2rem;
               font-style: normal;
               font-weight: 500;
               line-height: 140%;
            }

            .image-name-category{
               flex-direction: row;
               align-items: center;
               gap: 3.2rem;
               justify-content: center;
               

               .img-content{
                  width: 570px;
                  
               }

               .input-name{
                  flex: 1;
               }
            }


            .ingredients-price{
               width: 100%;
               display: flex;
               flex-direction: row;
               align-items: center;
               gap: 2.4rem;
               

               .ingredients-container{
                  flex: 1;
                  
               }

               .input-price{
                  width: 260px;
                  margin-bottom: -5px;
                  
               }

            }

            .custom-buttons{
               display: flex;
               gap: 3.2rem;
               justify-content: flex-end;
            
               .button-delete{
                  width: 200px;

               }

               .button-submit{
                  width: 200px;
               }
            }
         }
      }
   }
`


export const CustomSelect = styled.div`
   position: relative;

   .hidden {
     display: none;
   }

   #category-select{
      label{
         font-family: Roboto;
         font-size: 1.6rem;
         font-style: normal;
         font-weight: 400;
         line-height: 100%;
         color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }


   }

   #select-button.label-clicked{
      border: 1px solid blue ;
      transition: border 0.4s ease;
   }

   #select-button:focus {
      outline: none; 
      border: 1px solid blue; 
   }
 
   #select-button{
      padding: 1.6rem;
      border-radius: 8px;
      margin-top: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      cursor: pointer;
      border: 1px solid transparent;
      
      #chevrons{
         display: flex;
         justify-content: center;

         svg{
            width: 2.4rem;
            height: 2.4rem;
         }
        
      }

      #chevrons svg:nth-child(2){
         display: none;
      }

   }


   ul{
      background: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: 8px;
      margin-top: 4px;
      position: absolute;
      width: 100%;
      z-index: 2;


      li{
         display: flex;
         align-items: center;
         cursor: pointer;
         padding: 1rem 1.6rem;
         position: relative;
         
         &:hover{
            background: ${({ theme }) => theme.COLORS.DARK_800}; 
         }

         input[type="radio"]{
            all: unset;
            position: absolute;
            z-index: 2;
            inset: 0;
            cursor: pointer;
         }
      }
   }

   @media screen and (min-width: 768px){
      width: 700px;
      margin-top: -4px;


      #select-button{
         margin-top: .9rem;
         background: ${({ theme }) => theme.COLORS.DARK_800};
      }
      
   }



         
`

export const Ingredients = styled.div`
   background: ${({ theme }) => theme.COLORS.DARK_800};
   padding: 8px ;
   border-radius: 8px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   gap: 1.6rem;
   margin-top: 1.4rem;

`









      
   


 