import { Container } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import disImg from "../../assets/img-dish.svg";
import { CiFaceFrown } from 'react-icons/ci';
import { PiCreditCardFill } from "react-icons/pi";
import { MdPix } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import formatCurrency from '../../utils/formatCurrency';

export function Orders() {
    const { orders, setOrders } = useSearch();
    const [creditCard, setCreditCard] = useState(false);
    const [pix, setPix] = useState(true);
    const [currentSection, setCurrentSection] = useState(false);
    const totalOrderPrice = orders.reduce((acc, item) => item.totalPrice + acc, 0);

    function handlePayment(paymentMethod) {
        if (paymentMethod === "pix") {
            setPix(true);
            setCreditCard(false);

        } else {
            setPix(false);
            setCreditCard(true);
        };
    };

    function handleRemovItem(order){
        const updatedOrders = orders.filter(item => item !== order);

        setOrders(updatedOrders);
    };

    function handleCurrentSection() {
        setCurrentSection(true);
    };

    function handleBack(){
        setCurrentSection(false);
    };

    return (
        <Container $currentSection={currentSection}>
            <Header />
            <main>
                <Section title="Meu pedido" className="my-orders">
                    <div className="content">
                        {orders && orders.map((order, index) => (
                            <div className='orders-content' key={index}>
                                <img src={order.image} alt={order.name} />
                                                        
                                <div className='order-content'>
                                    <div className='order-detailing'>
                                        <p>{order.quantity} x</p>
                                        <p>{order.name}</p>
                                        <p>{formatCurrency(order.totalPrice, "BRL")}</p>
                                    </div>  
                                    
                                    <button onClick={() => handleRemovItem(order)}>
                                        Remover item
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='total-price'>
                        <p>{formatCurrency(totalOrderPrice, "BRL")}</p>
                    </div>

                    <Button
                        className='button-advance'
                        title="Avançar"
                        onClick={handleCurrentSection}
                    />
                </Section>

                <Section title="Pagamento" className="payment">
                    <div className="payment-container">
                        <div className={`pix-payment ${pix ? "active" : ""}`}>
                            <button onClick={() => handlePayment("pix")}>
                                <MdPix /> PIX
                            </button>
                        </div>
                        <div className={`credit-card-payment ${creditCard ? "active" : ""}`}>
                            <button onClick={() => handlePayment("creditCard")}>
                                <PiCreditCardFill /> Crédito
                            </button>
                        </div>
                        {pix && (
                            <div className="pix">
                                <BsQrCode />
                            </div>
                        )}

                        {creditCard && (
                            <div className="credit-card">
                                <form noValidate>
                                    <Input
                                        label="Número do cartão"
                                        placeholder="0000 0000 0000 0000"
                                        autoComplete="credit-card"
                                        type="tex"
                                        id="input_credit-card"
                                    />

                                    <div className="expirydate-and-cvc">
                                        <Input
                                            label="Validade"
                                            placeholder="04/25"
                                            autoComplete="expiry date"
                                            type="tex"
                                            id="input_expiry-date"
                                        />

                                        <Input
                                            label="CVS"
                                            placeholder="000"
                                            autoComplete="credit-card"
                                            type="tex"
                                            id="input_cvs-credit-card"
                                        />
                                    </div>

                                    <Button
                                        title="Finalizar pagamento"
                                    />
                                </form>
                            </div>
                        )}

                    </div>

                    <Button
                        className='button-back'
                        title="Voltar"
                        onClick={handleBack}
                    />
                </Section>
            </main>
        </Container>
    )
}
