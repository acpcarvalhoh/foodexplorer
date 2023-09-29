import { useMemo, Children } from "react";
import { Container } from "./style";

export function Carousel({ children }) {
    const slides = useMemo(() => {
        if (children.length < 1){
            let items = Children.map(children, (child, index) => (
                <div key={index}>
                    {child}
                </div>
            ))

            return[
                <div key={children.length +1}>
                 {children[children.length - 1]}
                </div>,
    
                ...items
            ]
        };

    }, [children])

    return(
        <Container>
            
        </Container>
    )
}