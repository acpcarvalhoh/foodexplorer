import { Container, CustomSelect, Ingredients } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem"
import { Button } from "../../components/Button"

import { PiCaretLeftBold, PiUploadSimpleBold } from "react-icons/pi"
import { FaChevronDown, FaChevronUp, FaCheckCircle} from 'react-icons/fa';
import { useState } from "react"
import { api } from "../../services/api"


export function NewOrUpdateDish(){
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [categories, setCategories] = useState("Selecione a categoria");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");


    function hadleChangeInputPrice(e){
        const updatedPrice = e.target.value.replace(/[^0-9]/g, '');
        if(updatedPrice !== ""){
            
            setPrice((+updatedPrice / 100).toFixed(2));
        }else{
            setPrice("");
        };

    };

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
        setCategories(category);

        setDropdownVisibility(false);
    };

    async function handleCreateDish(){
        try {
            const dishForm = new FormData();
            dishForm.append("name", name);
            dishForm.append("image", image);
            dishForm.append("ingredients", ingredients);
            dishForm.append("categories", categories);
            dishForm.append("description", description)
            dishForm.append("price", price);

            const response = await api.post("/dishes", dishForm);

            alert(response.data.message);
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);

            }else{
                alert("Não foi possível cadastrar prato");
            };
        }    
    }

    function UpdateDish(){
        
    }

    const dishExist = false;

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
                                {image !== null ? <span className="selected-img">Imagem selecionada<FaCheckCircle/></span> : <span>Selecione imagem</span>}               
                                <input 
                                    type="file" 
                                    id="dish_img"
                                    onChange={e => setImage(e.target.files[0])}
                                />
                            </label>
                        </div>
                        
                        <Input
                            className="input-name"
                            label="Nome"
                            type="text"
                            placeholder="Ex.: Salada Ceasar"
                            id="dish_name"
                            onChange={e => setName(e.target.value)}
                            
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
                                <div id="selected-value">{categories}</div>
                                <div id="chevrons">
                                    {isDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </div>

                            <ul className={isDropdownVisible ? '' : 'hidden'}>
                                <li>
                                    <span>Refeições</span>
                                    <input 
                                        type="radio"
                                        value="Refeições"
                                        name="category"
                                        onClick={() => handleCategorySelect("Refeições")}
                                    />

                                </li>
                                <li>
                                    <span>Pratos principais</span>
                                    <input 
                                        type="radio"
                                        value="Pratos principais"
                                        name="category"
                                        onClick={() => handleCategorySelect("Pratos principais")}
                                    />
                                </li>
                                <li>
                                    <span>Sobremesas</span>
                                    <input 
                                        type="radio"
                                        value="Sobremesas"
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
                                value={price}
                                type="text"
                                placeholder="R$ 00,00"
                                id="price"
                                onChange={hadleChangeInputPrice}
                            />
                        </div>
                       
                    </div>
                   

                    <div className="dish-description">
                        <label htmlFor="description">Descrição</label>
                        <textarea 
                            id="description"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
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
                            onClick={handleCreateDish}
                        />
                    </div>                                    
                </form>
            </main>
            <Footer/> 
        </Container >
    )
};