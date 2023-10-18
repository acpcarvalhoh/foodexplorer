import { Container, CustomSelect, Ingredients } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem"
import { Button } from "../../components/Button"

import { PiCaretLeftBold, PiUploadSimpleBold } from "react-icons/pi"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from "react"


export function NewOrUpdateDish(){
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [selectCategory, setSelectCategory] = useState("Selecione a categoria");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState("");

    function handleAddIngredient(){
        if(!newIngredients || ingredients.includes(newIngredients)){
            return
        };

        setIngredients(prevState => [...prevState, newIngredients]);
        setNewIngredients("");
    };

    function handleRemoveIngredient(ingredientToDelete){
        const updatedIngredients = ingredients.filter(ingredient => ingredient !== ingredientToDelete);
        setIngredients(updatedIngredients);
    };

    function toggleDropdown(){
        setDropdownVisibility(!isDropdownVisible);
    };

    function handleCategorySelect(category){
        setSelectCategory(category);

        setDropdownVisibility(false);
    };

    const dishExist = true;

    return (
        <Container>
            <Header/> 
            <main>
                <button className="button-back">
                    <PiCaretLeftBold size={22}/>
                    Voltar
                </button>

                <form noValidate>
                    <h2 className="mobile">Novo prato</h2>
                    <h2 className="desktop">{dishExist ? "Editar" : "Adicionar"} prato</h2>
                    <div className="image-name-category">

                        <div className="img-content">
                            <p>Imagem do prato</p>
                            <label htmlFor="dish_img" className="icon_label">
                                <PiUploadSimpleBold/>
                                <span>Selecione imagem</span>
                                <input type="file" id="dish_img"/>
                            </label>
                        </div>
                        
                        <Input
                            className="input-name"
                            label="Nome"
                            type="text"
                            placeholder="Ex.: Salada Ceasar"
                            id="dish_name"
                        />
                        
                        <CustomSelect>
                            <div id="category-select">
                                <label htmlFor="select-button">Categoria</label>
                            </div>

                            <div 
                                id="select-button" 
                                onClick={toggleDropdown}
                                tabIndex="0"
                            >
                                <div id="selected-value">{selectCategory}</div>
                                <div id="chevrons">
                                    {isDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </div>

                            <ul className={isDropdownVisible ? '' : 'hidden'}>
                                <li>
                                    <span>Refeições</span>
                                    <input 
                                        type="radio"
                                        value="meals"
                                        name="category"
                                        onClick={() => handleCategorySelect("Refeições")}
                                    />

                                </li>
                                <li>
                                    <span>Pratos principais</span>
                                    <input 
                                        type="radio"
                                        value="main-dishes"
                                        name="category"
                                        onClick={() => handleCategorySelect("Pratos principais")}
                                    />
                                </li>
                                <li>
                                    <span>Sobremesas</span>
                                    <input 
                                        type="radio"
                                        value="desserts"
                                        name="category"
                                        onClick={() => handleCategorySelect("Sobremesas")}
                                    />
                                </li>
                            </ul>
                        </CustomSelect>
                    </div>
                    
                    <div className="ingredients-price">
                        <div className="ingredients-container">
                            <label htmlFor="igredients_label">Ingredientes</label>
                            <Ingredients 
                                id="igredients_label"
                                
                            >
                                <IngredientItem 
                                    isNew
                                    placeholder="Adicionar"
                                    value={newIngredients}
                                    onChange={e => setNewIngredients(e.target.value)}
                                    onClick={handleAddIngredient}
                                />
                                
                                {
                                    ingredients.map((ingredient, index) => (
                                        <IngredientItem
                                            key={String(index)} 
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }
                            </Ingredients>
                        </div>
                        
                        <div className="input-price">
                            <Input
                                
                                label="Preço"
                                type="text"
                                placeholder="R$ 00,00"
                                id="price"
                            />
                        </div>
                       
                    </div>
                   

                    <div className="dish-description">
                        <label htmlFor="description">Descrição</label>
                        <textarea 
                            id="description"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        />  
                    </div>
                    
                    <div className="custom-buttons">
                        {dishExist &&  
                            <Button
                                className="button-delete"
                                title="Excluir prato"
                            /> 
                        }
                       
                        <Button
                            className="button-submit"
                            title="Salvar Alterações"
                        />
                    </div>                                    
                </form>
            </main>
            <Footer/> 
        </Container >
    )
};