import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    gap: 1.2rem;
    margin-top: 2.4rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK_200};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    width: 210px;
    height: 292px;
    padding: 2.4rem;
    position: relative;
    cursor: pointer;
   
    
    
    
    .like-edit-button{
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
        

        svg{
            z-index: 2;
            
        }
       
    }



    .like-edit-button.favorited {
        color: ${({ theme }) => theme.COLORS.TOMATO_200}; 
        animation: 0.5s ease-in-out turn-icon;
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

    img{
        width: 8.8rem;
        height: 8.8rem;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid ${({ theme }) => theme.COLORS.DARK_900}; 
    }

    h3{
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        text-align: center;

        ${({ $admin }) => !$admin && `
            max-height: 4.6rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1; 
            -webkit-box-orient: vertical;
            width: 160px;
        `}
    }

    .dish-price{
        font-family: Roboto;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    .dish_description{
        display: none;
    }

    .user-buttons-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:1.6rem;

        .add-dish-price{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.4rem;
    

            button{
                background: none;
                border: none;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }

            span{
                font-family: Roboto;
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 400;
                line-height: 100%;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }

            
        }

        .include-button{
            height: 3.2rem;
        }

    }

    /* Desktop */
    @media screen and (min-width: 768px){
        height: 460px;
        width: 304px;
        gap: 1.5rem;
        overflow: hidden;
        

        img{
            width: 17.6rem;
            height: 17.6rem;
        }

        h3{
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
            text-align: center;
            ${({ $admin }) => !$admin && `
                max-height: 4.6rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1; 
                -webkit-box-orient: vertical;
                width: 240px;
            `}
        }

        .dish-price{
            font-size: 3.2rem;
            line-height: 160%;
        }

        .dish_description{
            display: block;
            font-family: Roboto;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            text-align: center;
            max-height: 4.6rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical;
            width: 240px;
        }

        .user-buttons-content{
            flex-direction: row;

            .add-dish-price{

                button{
                    background: none;
                    border: none;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }

                span{
                    font-size: 2rem;
                    font-weight: 700;
                    line-height: 160%;
                    
                }

            
            }

            .include-button{
                padding: 1.2rem 2.4rem;
                width: 9.2rem;
                height: 4.8rem;
            }
        }
    }

    


`