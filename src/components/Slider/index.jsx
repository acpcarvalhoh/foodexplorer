import { Container } from "./styles";
import { PiCaretRightBold } from "react-icons/pi";
import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css/skyblue';
import { useEffect, useRef, useState } from 'react';

export function Slider({ children }) {
    const id = crypto.randomUUID();

    
    useEffect(() => {
        const splideInstance = new Splide(`#splide${id}`, {
            focus: 'left',
            pagination: false,
            autoWidth: true,
            gap: 25,

        }).mount();
    
       
    }, [children, id]);
       
    return (
        <Container className="splide" id={`splide${id}`} aria-label="Refeicoes"
           
        >
            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                    <PiCaretRightBold />
                </button>
                <button className="splide__arrow splide__arrow--next">
                    <PiCaretRightBold />
                </button>
            </div>
            <div className="splide__track" >
                <ul className="splide__list">
                    {children.map((child, index) => (
                        <li key={index} className="splide__slide">
                            {child}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}
