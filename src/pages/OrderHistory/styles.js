import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    

    main{
        margin: auto;
        width: 428px;
        max-width: 100%;
        padding: 5.6rem 3rem 0 3rem;
        flex: 1;
        overflow-y: auto;
        
        
        .desktop-only{
            display: none;
        }

        .orders-details{
            margin-top: 1.7rem;
            padding: 1.6rem 2rem;
            font-family: Roboto;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            border: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
            border-radius: 8px;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            display: flex;
            gap: 3.1rem;
            flex-wrap: wrap;
           

            .order-status{
                display: flex;
                align-items: center;
                gap: 7px;
                order: ${({ admin }) => admin? 1 : 2};
                width: 100%;
               
                .custon-select{
                    width: 100%;
                    position: relative;
                }

                .select-button{
                    background: ${({ theme }) => theme.COLORS.DARK_900};
                    display: flex;
                    align-items: center;
                    padding: 1rem .5rem;;
                    cursor: pointer;
                    font-family: Roboto;
                    font-size: 1.4rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 160%;
                    border-radius: 5px;
                    position: relative;
                    

                    #chevrons{
                        position: absolute;

                        right: 1rem;
                        svg{
                            display: flex;
                        }
                    }
                   
                }

                .select-button #selected-value{
                    display: flex;
                    align-items: center;
                    position: relative;
                    gap: 5px;

                    svg{
                        width: 9px;
                        height: 9px;
                        display: flex;
                    }
                }

                ul{
                    position: absolute;
                    z-index: 2;
                    background: ${({ theme }) => theme.COLORS.DARK_900};
                    width: 100%;
                   
                    
                    li{
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        padding: .3rem 1.6rem;
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
                };
            }

            .order-date{
                display: flex;
                align-items: center;
                gap: 7px;
            }

            .order-quantity-name{
                display: flex;
                gap: 5px;
                flex-wrap: wrap;

                .quantity-name{
                    display: flex;
                    gap: 5px;
                    
                }
            }

           

        }

        .empty-content{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 2rem;
            margin-top: 4rem;
            border: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
            font-size: 1.9rem; 
            height: 20rem;
            border-radius: 8px;

            svg{
                height: 8rem;
                width: 8rem;
            }
        }
        
    }

   
    @media screen and (min-width: 768px){
        main{
            width: 100%;

            section h2::before{
               content: "Histórico de "
            }

            .grid-container{
                display: grid;
                margin-top: 3.4rem;
            }

            .desktop-only{
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                border: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
                display: grid;
                grid-template-columns: 151px 151px auto 151px;
                grid-template-rows: 6.4rem;
                font-family: Roboto;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 700;
                line-height: 160%;

                .status{
                    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
                    padding: 1rem 2.4rem;
                    display: flex;
                }

                .code{
                    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
                    padding: 1rem 2.4rem;
                    display: flex;
                }

                .details{
                    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
                    padding: 1rem 2.4rem;
                    display: flex;
                }

                .date-time{
                    padding: 1rem 2.4rem;
                    display: flex;
                }
            }

            .orders-details{
                display: grid;
                grid-template-columns: 151px 151px auto 151px;
                grid-template-rows: 5.4rem;
                grid-template-areas: "A B C D";
                margin-top: 0;
                border-radius: 0;
                border-top: none;
                padding: 0;
                gap: 0;

                .order-code{
                    grid-area: B;
                    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
                    justify-content: center;
                    padding: 1.5rem 1.4rem;
                }

                .order-status{
                    grid-area: A;
                    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
                    padding-left: 1.6rem;

                    .select-button{
                        background: ${({ theme }) => theme.COLORS.DARK_900};
                        display: flex;
                        align-items: center;
                        padding: 1rem .5rem;;
                        cursor: pointer;
                        font-family: Roboto;
                        font-size: 1.4rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 160%;
                        border-radius: 2px;
                        width: 125px;
                        position: relative;
                    

                        #chevrons{
                            position: absolute;

                            right: 1rem;
                            svg{
                                display: flex;
                            }
                        }
                   
                    }

                    .select-button #selected-value{
                        display: flex;
                        align-items: center;
                        position: relative;
                        gap: 5px;

                        svg{
                            width: 9px;
                            height: 9px;
                            display: flex;
                        }
                    }

                    ul{
                        position: absolute;
                        z-index: 2;
                        background: ${({ theme }) => theme.COLORS.DARK_900};
                        width: 125px;
                    
                        
                        li{
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            padding: .3rem 1.6rem;
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
                    };
                }

                .order-date{
                    grid-area: D;
                    justify-content: center;
                    align-items: center;
                }

                .order-quantity-name{
                    grid-area: C;
                    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_A100};
                    align-items: center;
                    padding-left: 1.6rem;
                    overflow-y: auto;
                }
            }

            .empty-content{
                margin-top: 0;
                border-top: none;
                border-top-right-radius: 0;
                border-top-left-radius: 0;
                font-size: 3rem; 
            }
        }
    }

 
`







