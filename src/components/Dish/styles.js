import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
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
    
    
    .like-edit-button{
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;

    }

    .like-edit-button.favorited {
        color: ${({ theme }) => theme.COLORS.TOMATO_200}; 
    }

    img{
        width: 8.8rem;
        height: 8.8rem;
    }

    h3{
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    }

    p{
        font-family: Roboto;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
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

    


`