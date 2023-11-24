import { useState, useEffect, useRef } from "react"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Container } from "./styles";
import React, { forwardRef } from 'react';

export const CustomSelect = forwardRef(({ label, state, options, error, ...rest }, ref) => {
    const [dropDown, setDropDown] = useState(false);
    const selectRef = useRef(null);


    function toggleDropdown(){
        setDropDown(prevState => !prevState);
    };

    useEffect(() => {
        function handleOutsideClick(e){
            if(selectRef.current && !selectRef.current.contains(e.target)){
                setDropDown(false);
            };
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => document.removeEventListener("mousedown", handleOutsideClick);
        
    }, [])

    return(

        <Container ref={selectRef}>
            <div id="category-select">
                <label htmlFor="cs-select-label">{label}</label>
            </div>

            
            <div className="custon-select" aria-labelledby="cs-select-label" onClick={toggleDropdown}>
                <input type="radio" id="cs-select-label" className="radio"/>
                <div 
                    id="select-button" 
                    tabIndex="0"
                >
                    <div id="selected-value">{state}</div>
                    <div id="chevrons">
                        {dropDown ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                </div>

                {dropDown && (
                    <ul>
                        {options.filter((option) => option !== state)
                        .map((option, index) => (
                            <li key={index}>
                                <span>{option}</span>
                                <input 
                                    type="radio"
                                    value={option}
                                    {...rest}
                                    ref={ref}                                 
                                />
                            </li>
                        ))}                               
                    </ul>
                )}

                {error && <span className="error-msg">{error}</span>}
            </div>
        </Container>
    )
});

