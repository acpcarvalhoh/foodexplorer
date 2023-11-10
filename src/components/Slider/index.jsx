import { Container, Content } from "./styles";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { useEffect, useRef, useState } from 'react'


export function Slider({ children, ...rest}){
    const carouselRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          setShowLeftButton(carouselRef.current.scrollLeft > 0);
          setShowRightButton(
            carouselRef.current.scrollLeft <
            carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
          );

        };
    
        carouselRef.current.addEventListener("scroll", handleScroll);
    
        return () => {
            if (carouselRef.current) {
                carouselRef.current.removeEventListener("scroll", handleScroll);
            }
        };

    }, []);

    

    function handleRightClick() {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    };
    
    function handleLeftClick() {
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    };


    return (
        
        <Container className="carousel-container" 
            $showLeftButton={showLeftButton}
            $showRightButton={showRightButton}
        >
            {showLeftButton && (
                <button className="button_left" onClick={handleLeftClick}>
                    <PiCaretLeftBold />
                </button> 
            )}
           
            <Content className="carousel" ref={carouselRef}>
                {children}                           
            </Content> 

            {showRightButton && (
                <button className="button_right" onClick={handleRightClick}>
                    <PiCaretRightBold />
                </button> 
            )}            
        </Container> 
        
    );
}; 