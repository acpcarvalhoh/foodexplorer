import styled from "styled-components";


export const Container = styled.div`
   position: relative;

    .error-msg{
      color: red;
      font-size: 1.3rem;
      align-self: flex-start;
      position: absolute;
      bottom: -22px;
      font-weight: 500;
    }

    .custon-select{
        position: relative;

        .radio{
            all: unset;
            position: absolute;
            z-index: 2;
            inset: 0;
            cursor: pointer;
            border: 2px solid transparent;
            border-radius: 8px;
           

            &:focus{
                border: 2px solid blue;
                transition: border 0.4s ease;
            }
        }
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


