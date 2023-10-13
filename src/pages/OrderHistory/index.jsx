import  { Container} from './styles'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from '../../components/Section'

import { IoEllipse } from "react-icons/io5"

import salade from "../../assets/salade.svg"

import {  useState } from 'react'
import { useEffect } from 'react'


export function OrderHistory() {

  const data = [
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
    {name: "Salada Radish", image: salade},
  ]

  const [orders, setOrders] = useState([])

  useEffect( () => {
    


  }, [])

  return (
    <Container>
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
            
            <div className="orders-details">
              <span className="order-code">00001</span>
              <div className="order-status">
                <span><IoEllipse/></span>
                <span>Pendente</span>
              </div>
              <div className="order-date">
                <span className="date">20/05</span>ás
                <span className="hour">18h00</span>
              </div>
              <div className="order-quantity-name">
                <div className="quantity-name">
                  <span>1 x</span>
                  <span>Salada Radish,</span>
                </div>

                <div className="quantity-name">
                  <span>1 x</span>
                  <span>Torrada de parnma,</span>
                </div>

                <div className="quantity-name">
                  <span>1 x </span>
                  <span>Chá de canela</span>
                </div>

                <div className="quantity-name">
                  <span>1 x </span>
                  <span>Suco de maracujá</span>
                </div>
          
              </div>
            </div>
          </div>
          
        </Section>
      </main>
      <Footer />
    </Container>
  )
}

