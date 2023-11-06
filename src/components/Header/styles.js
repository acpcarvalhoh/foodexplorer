import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    display: flex;
    flex-direction: ${({ $isMenuOpen }) => ($isMenuOpen ? 'column' : 'row')};
    justify-content: space-between;
    align-items: ${({ $isMenuOpen }) => ($isMenuOpen ? 'start' : 'center')};
    padding: ${({ $isMenuOpen }) => ($isMenuOpen ? '0' : '6rem 2.8rem 3.2rem 2.8rem')}; 
    background: ${({ theme }) => theme.COLORS.DARK_700};
    position: relative;

    .favorites-and-orderhistory{
        display: none;
    }

    .search-desktop_only, .button-exit-desktop{
        display: none;
    }

    .logo-header{
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;

        h1{
            font-family: Roboto;
            font-size: 2.1rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        img{
            display: none;
        }

        span{
            font-family: Roboto;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
           
        }
    }

    .menu{
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        padding:  ${({ $isMenuOpen }) => ($isMenuOpen ? '6rem 0 3.2rem 2.8rem' : '0')}; 
        

        span{
            display: flex;
            justify-content: center;
            gap: 1.6rem;
            animation: 0.5s ease-in-out menu-animation;
            font-family: Roboto;
            font-size: 2.1rem;
            font-style: normal;

            svg{
                font-size: 2.1rem;
                animation: 0.5s ease-in-out turn-icon;
                animation-delay: 0.5s
            }
            
        }
    }

  
    @keyframes turn-icon{
        0% {
           transform: scale(1);
        }
        25% {
           transform: scale(1.4);
        }
        100% {
           transform: scale(1);
        }
    }

    @keyframes menu-animation {
        0% {
            opacity: 0;
            transform: translateX(30px);
            
        }

        100% {
            opacity: 100%;
            transform: translateX(0);
            
        }
    }

    .search.hidden{
        display: none;
    }

    .search{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 4.6rem;
        background: ${({ theme }) => theme.COLORS.DARK_400};
        width: 100%;
        padding: 3.6rem 2.8rem 0;
        
        input{
            animation: 0.5s ease-in-out search-animation;
            padding: 1.6rem 1.4rem 1.6rem 5.6rem;
        }

        svg{
            animation: 0.5s ease-in-out search-animation;
        }

        .close-menu{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            align-items: start;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: ${({ theme }) => theme.COLORS.DARK_A100};
            
            a{
                font-size: 2.4rem;
                font-style: normal;
                font-weight: 300;
                line-height: 140%;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                position: relative;
                
            }
            
            a::after{
                content: "";
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
                position: absolute;
                border-bottom-width: 1px;
                border-bottom-style: solid;
                border-bottom-color: ${({ theme }) => theme.COLORS.DARK_A100};
            }

            button{
                font-size: 2.4rem;
                font-style: normal;
                font-weight: 300;
                line-height: 140%;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                background: none;
                border: none;
            }
        }
        
    }


    @keyframes search-animation {
        0% {
            transform: translateY(-30px);
            
        }

        100% {
            transform: translateY(0);
            
        }
    }

    @keyframes fadeInAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .logo-header{
        animation: fadeInAnimation 0.5s ease-in-out;
    }

    .number-requests{
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        position: relative;

        .mobile{
            color: red;
            position: absolute;
            top: -9px;
            right: -8px;
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
            border-radius: 50%;
            height: 2rem;
            width: 2rem;
        }

        .desktop{
            display: none;
        }

    }

    /* Desktop */
    @media screen and (min-width: 768px){
        padding: 2.4rem 2rem;
        justify-content: center;
        gap: 3.2rem;
        
        
        .favorites-and-orderhistory{
            display: flex;
            position: absolute;
            color: red;
            bottom: 0;
            gap: 4rem;
            font-size: 1.3rem;

            a{
                color: ${({ theme }) => theme.COLORS.CAKE_100};
            }
        }

        .menu{
            display: none;
        }

        .logo-header{
           max-width: 100%;
           margin-top: -11px;
           
    
            h1{
               font-size: 2.4rem;
               position: relative;

               span{
                position: absolute;
                bottom: -15px;
                right: 4px;
               }
            }

            img{
              display: block;
              width: 3rem;
              height: 3rem;
            }
        }

        .search-desktop_only{
           display: block;
           width: 581px;

           input{
            padding: 1.2rem 1.4rem 1.2rem 11.7rem;
            border-radius: 5px;
           }

           svg{
            left: 9rem;
            top: 1rem;
           }
        }

        .number-requests{
            max-width: clamp(1rem, -9.4464rem + 33.4286vw, 17.625rem);
            width: 100%;
            padding: clamp(1rem, 1.1786rem + -0.5714vw, 0.95rem) clamp(1rem, 0.2857rem + 2.2857vw, 2rem);
            border-radius: 5px;
            background: ${({ theme }) => theme.COLORS.TOMATO_100};
            display: flex;
            align-items: center;
            gap: 8px;

            svg{
                width: 32px;
                height: 32px;
            }

            .mobile{
                display: none;
            }

            .desktop{
                display: block;
                font-size: clamp(1rem, 0.7321rem + 0.8571vw, 1.375rem);
                font-style: normal;
                font-weight: 500;
                line-height: 2.4rem;
                padding: 5px 2px;
            }
        }

        .button-exit-desktop{
            display: block;
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

    }

   /*  @media screen and (min-width: 1258px){
        padding: 2.4rem 12.3rem;
    } */

    @media (min-width: 768px) and (max-width: 1096px) {
        justify-content: space-between;

        .search-desktop_only{
           display: none;
            
        }

        .number-requests{
            display: none;
        }

        .logo-header{
            margin: auto;

            h1{
               font-size: 2.5rem;
               position: static;

                span{
                    position: static;
                    
                }
            }

          
        }

       
    }




`