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
import { toast } from 'react-toastify';

export function Header(){
    const { logout, user } = useAuth();
    const { setSearch, orders } = useSearch();
    const [ $isMenuOpen, $setIsMenuOpen] = useState(false);
    const admin = user && user.role === "admin";
    const navigate = useNavigate();

    function hanleOrders(){
        if(user){
            if(admin){
                navigate("/order-history");
    
            }else{
                navigate("/orders");
            };

        }else{
            setTimeout(() => toast.info(`Login necessário!`), 200);
            navigate("/login");
        };
         
    };

    function handleLogout(){
        navigate("/login");
        logout();
    };

    function handleShowMenu(){
        $setIsMenuOpen(!$isMenuOpen);
    };
   
    function backToHome(){
        navigate("/")
        setSearch("")
    };

    const handleInfo = (page) => {
        if(!user){
            setTimeout(() => toast.info(`Login necessário para ${page}`), 500);
        };
          
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
                {!admin  &&  <Link to="/favorites" onClick={() => handleInfo("Meus favoritos")}>Meus favoritos</Link>}
                {admin  && <Link to="/new-update">Novo prato</Link>}
                <Link to="/order-history" onClick={() => handleInfo("Histórico de pedidos")}>Histórico de pedidos</Link>
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
                        id="mobile_search"
                    />
                  
                    <div className="close-menu">
                        {!admin &&  <Link to="/favorites" onClick={() => handleInfo("Meus favoritos")}>Meus favoritos</Link>}
                        {admin ? 
                            <Link to="/new-update">Novo prato</Link> : 
                            <Link to="/order-history" onClick={() => handleInfo("Histórico de pedidos")}>Histórico de pedidos</Link>
                        } 
                        <button onClick={handleLogout}>
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
                    id="desktop_search"
                />
           </div>
            
            
            {!$isMenuOpen && (
                <button className="number-requests" onClick={hanleOrders}>
                    <PiReceipt size={24}/>
                    {!admin  && <span className="mobile">{orders.length}</span>}   
                    <span className="desktop">Pedidos ({orders.length})</span>
                </button>
            )}

            <button className="button-exit-desktop" onClick={handleLogout}>
                <PiSignOutBold size={32} />
            </button>
        </Container>
    )
};