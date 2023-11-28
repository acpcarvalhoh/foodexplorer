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
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';

export function Orders() {
    const [orders, setOders] = useState();
    const [creditCard, setCreditCard] = useState(false);
    const [pix, setPix] = useState(true);
    const [currentSection, setCurrentSection] = useState(false);

    function handlePayment(paymentMethod) {
        if (paymentMethod === "pix") {
            setPix(true);
            setCreditCard(false);

        } else {
            setPix(false);
            setCreditCard(true);
        };
    };

    function handleCurrentSection() {
        setCurrentSection(true);
    };

    function handleBack(){
        setCurrentSection(false);
    };

    const data = [
        {
            code: "0001",
            detailing: [{ quantity: 2, name: "Suco de maracujá", price: 29.99 }],
            image: disImg
        },
        {
            code: "0001",
            detailing: [{ quantity: 1, name: "Suco uva", price: 29.99 }],
            image: disImg
        },
        {
            code: "0001",
            detailing: [{ quantity: 1, name: "Suco de Goiaba", price: 29.99 }],
            image: disImg
        },
    ];

    useEffect(() => {
        setOders(data);

    }, [])

    return (
        <Container $currentSection={currentSection}>
            <Header />
            <main>
                {/* <button onClick={handleBack} className='button-back'>
                    <FaArrowLeftLong />
                </button> */}
                <Section title="Meu pedido" className="my-orders">
                    <div className="content">
                        {orders && orders.map((order, index) => (
                            <div className='orders-content' key={index}>
                                <img src={order.image} alt={order.name} />
                                
                                {order.detailing.map((dish, index) => (
                                    <div key={index} className='order-content'>
                                        <div className='order-detailing'>
                                            <p>{dish.quantity} x</p>
                                            <p>{dish.name}</p>
                                            <p>R$ {dish.price}</p>
                                        </div>
                                        
                                        <button>
                                            Remover item
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='total-price'>
                        <p>Total: $ 29.90</p>
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
                </Section>
            </main>
        </Container>
    )
}
