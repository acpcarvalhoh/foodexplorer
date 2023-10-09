import { Container } from "./styles"
import { PiReceipt } from "react-icons/pi"
import { FiMenu, FiSearch } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { PiSignOutBold } from 'react-icons/pi'
import { Input } from "../Input"
import { useState } from "react"

import logoImg  from "../../assets/Polygon .svg"

export function Header(){
    const [ $isMenuOpen, $setIsMenuOpen] = useState(false);

    function handleShowMenu(){
        $setIsMenuOpen(!$isMenuOpen);
    };

    const isAdmin = false;

    return(
        <Container $isMenuOpen={$isMenuOpen}>
            <button className="menu" onClick={handleShowMenu}>

                {$isMenuOpen ? <span><MdClose size={24}/>Menu</span> : <FiMenu size={24}/>}

            </button>

            {!$isMenuOpen && (
                <div className="logo-header">
                    <img src={logoImg} alt="Polygon" />
                    <h1>Food explorer {isAdmin && <span>Admin</span>}</h1>
                </div>
            )}

            {$isMenuOpen  && (
                <div  className="search">
                    <Input
                        placeholder="Busque por pratos ou ingredientes"
                        type="text"
                        icon={FiSearch}
                    />

                    {$isMenuOpen && (
                        <div className="close-menu">
                            <button>sair</button>
                            
                        </div>
                    )}
                </div>
            )}

           <div className="search-desktop_only">
                <Input 
                    placeholder="Busque por pratos ou ingredientes"
                    type="text"
                    icon={FiSearch}
                        
                />
           </div>
            
            
            {!$isMenuOpen && (
                <button className="number-requests">
                    {!isAdmin && <PiReceipt size={24}/>}
                    {!isAdmin && <span className="mobile">0</span>}   
                    <span className="desktop">{isAdmin? "Novo prato" : "Pedidos (0)"}</span>
                </button>
            )}

            <button className="button-exit-desktop">
                <PiSignOutBold size={32} />
            </button>
        </Container>
    )
};