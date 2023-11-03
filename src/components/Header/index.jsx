import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { PiSignOutBold } from 'react-icons/pi';
import { Input } from "../Input"
import { useState, useEffect } from "react";
import logoImg  from "../../assets/Polygon .svg";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/useSearch";
import { Link, useNavigate } from "react-router-dom";

export function Header(){
    const { logout, user } = useAuth();
    const { setSearch } = useSearch();
    const [ $isMenuOpen, $setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    function hanleLogout(){
        navigate("/login");
        logout();
    };

    function handleShowMenu(){
        $setIsMenuOpen(!$isMenuOpen);
    };

    const admin = user && user.role === "admin";

    
    function backToHome(){
        navigate("/")
    };

    function hanleOrderHistory(){
        navigate("/order-history")
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && $isMenuOpen) {
                $setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [$isMenuOpen]); 

    return(
        <Container $isMenuOpen={$isMenuOpen}>
            <div className="favorites-and-orderhistory">
                {!admin  &&  <Link to="/favorites">Meus favoritos</Link>}
                {admin ? 
                    <Link to="/new-update">Novo prato</Link> : 
                    <Link to="/order-history">Histórico de pedidos</Link>
                }                
            </div>

            <button className="menu" onClick={handleShowMenu}>

                {$isMenuOpen ? <span><MdClose size={24}/>Menu</span> : <FiMenu size={24}/>}

            </button>

            {!$isMenuOpen && (
                <div className="logo-header" onClick={backToHome}>
                    <img src={logoImg} alt="Polygon" />
                    <h1>Food explorer {admin && <span>Admin</span>}</h1>
                </div>
            )}

            {$isMenuOpen  && (
                <div  className="search">
                    <Input
                        placeholder="Busque por pratos ou ingredientes"
                        type="text"
                        icon={FiSearch}
                        onChange={e => setSearch(e.target.value)}
                    />
                  
                    <div className="close-menu">
                        {!admin &&  <Link to="/favorites">Meus favoritos</Link>}
                        {admin ? 
                            <Link to="/new-update">Novo prato</Link> : 
                            <Link to="/order-history">Histórico de pedidos</Link>
                        } 
                        <button onClick={hanleLogout}>
                            sair
                        </button>
                    </div>                
                </div>
            )}

           <div className="search-desktop_only">
                <Input 
                    placeholder="Busque por pratos ou ingredientes"
                    type="text"
                    icon={FiSearch}
                    onChange={e => setSearch(e.target.value)}
                />
           </div>
            
            
            {!$isMenuOpen && (
                <button className="number-requests" onClick={hanleOrderHistory}>
                    <PiReceipt size={24}/>
                    {!admin  && <span className="mobile">0</span>}   
                    <span className="desktop">Pedidos (0)</span>
                </button>
            )}

            <button className="button-exit-desktop" onClick={hanleLogout}>
                <PiSignOutBold size={32} />
            </button>
        </Container>
    )
};