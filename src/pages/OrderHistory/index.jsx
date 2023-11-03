import  { Container} from './styles'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from '../../components/Section'
import { IoEllipse } from "react-icons/io5"
import { CiFaceFrown } from "react-icons/ci"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {  useState,  useEffect, useRef } from 'react'
import { useSearch } from "../../hooks/useSearch";

export function OrderHistory() {
  const { orders, setOrders } = useSearch();
  const [dropDown, setDropDown] = useState(false);
  const [ordersHistory, setOrdersHistory] = useState([]);
  const [status, setStatus] = useState("Pendente");


  const data = [
    {
      status: "Pendente", 
      code: "0001", 
      detailing: [{quantity: 1, name: "Suco de maracujá"}, {quantity: 2, name: "Salada Radish"}],
      timestamp: new Date('2023-10-15T14:30:00')
    },

    

   /*  {
      status: "Entregre", 
      code: "0002", 
      detailing: [{quantity: 1, name: "Manga uva"}, {quantity: 2, name: "Testando"}],
      timestamp: new Date('2025-10-15T14:38:00')
    },

    {
      status: "Preparando", 
      code: "0001", 
      detailing: [{quantity: 1, name: "Suco de maracujá"}, {quantity: 2, name: "Salada Radish"}],
      timestamp: new Date('2024-10-15T14:37:00')
    } */
    
  ]

  console.log(orders)

  function formatDateAndTime(timestamp){
    const day = String(timestamp.getDate()).padStart("0", 2);
    const month = String(timestamp.getMonth() + 1).padStart("0", 2);
    const hours = String(timestamp.getHours()).padStart("0", 2);
    const minutes = String(timestamp.getMinutes()).padStart("0", 2);

    return `${day}/${month} às ${hours}h${minutes}`

  };

  function formatStatus(status){
    let color = "";

    if (status === "Pendente") {
      color = "#AB222E";

    } else if (status === "Preparando") {
      color = "#FBA94C";
      
    } else {
      color = "#04D361";
    
    }

    return <IoEllipse style={{ color }} />;

  };

  function toggleDropDown() {
    setDropDown(prevState => !prevState);
  }

  const statusOptions = ["Pendente", "Preparando", "Entregue"]
  
  const admin = true;

  useEffect( () => {
    setOrdersHistory(data)

  }, [])

  return (
    <Container $admin={admin}>
      <Header />
      <main>
        <Section title="Pedidos">
          
          <div className="grid-container">
            <div className="desktop-only">
              <div className="status">
                <p>Status</p>
              </div>
              <div className="code">
                <p>Código</p>
              </div>
              <div className="details">
                <p>Detalhamento</p>
              </div>
              <div className="date-time">
                <p>Data e Hora</p>
              </div>
            </div>
            {ordersHistory && ordersHistory.map((order, index) => (
              
              <div className="orders-details" key={index}>
                <span className="order-code">{order.code}</span>
                <div className="order-status">
                  {/* <span>{formatStatus(order.status)}</span>
                  <span>{order.status}</span> */}

                  <div className="custon-select" onClick={toggleDropDown}>
                    <div className="select-button">
                      <div id="selected-value">
                        <span>{formatStatus(status)}</span>
                        {status}
                      </div>
                      <div id="chevrons">
                        {dropDown? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>
                    {dropDown && (

                      <ul>
                        {statusOptions.filter((option) => option !== status)
                        .map((option, index) => (
                          <li key={index}>
                            <span>{option}</span>
                            <input 
                              type="radio"
                              value={option}
                              name="category"
                              onChange={e => setStatus(e.target.value)}
                                
                            />
                          </li>
                        ))}
                        
                      </ul>
                    )}
                     
                  </div>


                </div>
                <div className="order-date">
                  <span className="date">
                    {formatDateAndTime(order.timestamp)}
                  </span>
                </div>

                <div className="order-quantity-name" key={index}>
                  {order.detailing.map((detail, index) => (
                    <div className="quantity-name" key={index}>
                      <span>{detail.quantity} x</span>
                      <span>{detail.name},</span>
                    </div>
                  ))}           
                </div> 
              </div>

            ))}

            {ordersHistory.length <= 0 && 
              <div className="empty-content">
                <CiFaceFrown/>
                <p>{admin ? "Nenhum pedido" : "Você ainda não fez nenhum pedido!"}</p>
              </div>
            }
        
          </div>
          
        </Section>
      </main>
      <Footer />
    </Container>
  )
}
