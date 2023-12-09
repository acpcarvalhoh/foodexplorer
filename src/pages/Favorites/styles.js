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
        height: 100%;
      
    }

    main{
      width: 100%;
      margin: auto;
      margin-top: 5rem;
      padding: 0 2rem;
      

        .favorite-content{
            margin-top: 2.9rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            img{
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
                border: 4px solid ${({ theme }) => theme.COLORS.DARK_900}; 
                object-fit: cover;
                object-position: center center;
            }

            div{
                display: flex;
                flex-direction: column;
                justify-content: start;
                

                p{
                    font-size: 2rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 160%;
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

        .empty-content{
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


  
    @media screen and (min-width: 768px){
        main{
            width: 100%;
            padding: 0 15rem;

            .content{
                display: flex;
                flex-wrap: wrap;
                gap: 3.2rem;
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







