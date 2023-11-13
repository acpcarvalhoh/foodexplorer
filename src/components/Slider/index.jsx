import { Container } from "./styles";
import { PiCaretRightBold } from "react-icons/pi";
import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css/skyblue';
import { useEffect, useRef, useState } from 'react';

export function Slider({ children }) {
    const id = crypto.randomUUID();
    const containerRef = useRef(null);
    const [hasScrollLeft, setHasScrollLeft] = useState(false);
    const [hasScrollRight, setHasScrollRight] = useState(false);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            setHasScrollLeft(container.scrollLeft > 0);
            setHasScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        new Splide(`#splide${id}`, {
            focus: 'left',
            pagination: false,
            autoWidth: true,
            gap: 25,
        }).mount();
    }, [children, id]);

    return (
        <Container
            ref={containerRef}
            className={`splide ${hasScrollLeft ? 'has-scroll-left' : ''} ${hasScrollRight ? 'has-scroll-right' : ''}`}
            id={`splide${id}`}
            aria-label="Refeicoes"
        >
            <div className="teste">
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                        <PiCaretRightBold />
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <PiCaretRightBold />
                    </button>
                </div>
                <div className="splide__track">
                    <ul className="splide__list">
                        {children.map((child, index) => (
                            <li key={index} className="splide__slide">
                                {child}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    );
}
