import { Container } from "./styles"
import { PiReceipt } from "react-icons/pi"
import { FiMenu, FiSearch } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { Input } from "../Input"
import { useState } from "react"

export function Header({}){
    const [ $isMenuOpen, $setIsMenuOpen] = useState(false);

    function handleShowMenu(){
        $setIsMenuOpen(!$isMenuOpen);
    };

    const isAdmin = true;

    return(
        <Container $isMenuOpen={$isMenuOpen}>
            <button className="menu" onClick={handleShowMenu}>

                {$isMenuOpen ? <span><MdClose size={24}/>Menu</span> : <FiMenu size={24}/>}

            </button>

            {!$isMenuOpen && (
                <div className="logo-header">
                    <h1>Food explorer</h1>
                    {isAdmin && <span>Admin</span>}
                </div>
            )}

            {$isMenuOpen && (
                <div  className="search">
                    <Input
                        placeholder="Busque por pratos ou ingredientes"
                        type="text"
                        icon={FiSearch}
                    />

                    {$isMenuOpen && (
                        <div className="close-menu">
                            <button onClick={handleShowMenu}>sair</button>
                            
                        </div>
                    )}
                </div>
            )}
           

            {!$isMenuOpen && (
                <button className="receipt">
                    <PiReceipt size={24} />
                    <span>0</span>
                </button>
            )}
        </Container>
    )
};