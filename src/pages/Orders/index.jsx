import { Container } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { CiFaceFrown } from 'react-icons/ci';
import { PiCreditCardFill } from "react-icons/pi";
import { MdPix } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import { useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import formatCurrency from '../../utils/formatCurrency';
import  { getImageUrl } from "../../utils/getImage"
import { creditCardSchema } from "../../validators/creditCardValidate";
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Orders() {
    const { orders, setOrders } = useSearch();
    const [isLoading, setIsLoading] = useState(false);
    const [creditCard, setCreditCard] = useState(false);
    const [pix, setPix] = useState(true);
    const [currentSection, setCurrentSection] = useState(false);
    const totalOrderPrice = orders.reduce((acc, item) => item.totalPrice + acc, 0);

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: joiResolver(creditCardSchema)
    });

    function handlePayment(data){
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.success("Pagamento bem sucedido");

        }, 800)
        
    };

    function handleChoosePayment(paymentMethod) {
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
                {orders && orders.length > 0 ? (
                    <>
                        <Section title="Meu pedido" className="my-orders">
                            <div className="content">
                                {orders && orders.map((order, index) => (
                                    <div className='orders-content' key={index}>
                                        <img src={getImageUrl(order.image)} alt={order.name} />
                                                                
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
                                <p>Total: {formatCurrency(totalOrderPrice, "BRL")}</p>
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
                                    <button onClick={() => handleChoosePayment("pix")}>
                                        <MdPix /> PIX
                                    </button>
                                </div>
                                <div className={`credit-card-payment ${creditCard ? "active" : ""}`}>
                                    <button onClick={() => handleChoosePayment("creditCard")}>
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
                                        <form onSubmit={handleSubmit(handlePayment)} noValidate>
                                            <Input
                                                label="Número do cartão"
                                                placeholder="0000 0000 0000 0000"
                                                autoComplete="credit-card"
                                                type="text"
                                                id="input_credit-card"
                                                {...register("number")}
                                                error={errors.number && errors.number.message}
                                            />

                                            <div className="expirydate-and-cvc">
                                                <Input
                                                    label="Validade"
                                                    placeholder="04/25"
                                                    autoComplete="expiry date"
                                                    type="text"
                                                    id="input_expiry-date"
                                                    {...register("expirationDate")}
                                                    error={errors.expirationDate && errors.expirationDate.message}
                                                />

                                                <Input
                                                    label="CVS"
                                                    placeholder="000"
                                                    autoComplete="credit-card"
                                                    type="text"
                                                    id="input_cvs-credit-card"
                                                    {...register("cvc")}
                                                    error={errors.cvc && errors.cvc.message}
                                                />
                                            </div>

                                            <Button
                                                title="Finalizar pagamento"
                                                type="submit"
                                                $loading={isLoading}
                                                $message="Pagando"
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
                    </>
                ) : (
                    <div className="empty-content">
                        <CiFaceFrown />
                        <p>Seu carrinho está vazio!</p>
                    </div>
                )}
            </main>
            <Footer/>
            <ToastContainer/>
        </Container>
    )
}