import { Container, CustomSelect, Ingredients } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem"
import { Button } from "../../components/Button"
import { PiCaretLeftBold, PiUploadSimpleBold } from "react-icons/pi"
import { FaChevronDown, FaChevronUp, FaCheckCircle} from 'react-icons/fa';
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"


export function NewOrUpdateDish(){
    const { dish_id } = useParams();
    const [dish, setDish] = useState({});

    useEffect(() => {
        async function fetchDishes() {
          const response = await api.get(`/dishes/${dish_id}`);
          setDish(response.data);
          
        }
      
        fetchDishes();
    
    }, []);

   
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [categories, setCategories] = useState("Selecione a categoria");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState("");
    const [name, setName] = useState(dish_id ? dish.name : "");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    console.log(name);
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


    function handleBack(){
        navigate(-1);
    };

   
    return (
        <Container>
            <Header/> 
            <main>
                <button className="button-back" onClick={handleBack}>
                    <PiCaretLeftBold size={22}/>
                    Voltar
                </button>

                <form noValidate>
                    <h2 className="mobile">Novo prato</h2>
                    <h2 className="desktop">{dish_id ? "Editar" : "Adicionar"} prato</h2>
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
                            value={name}
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
                                    <span>Sobremesas</span>
                                    <input 
                                        type="radio"
                                        value="Sobremesas"
                                        name="category"
                                        onClick={() => handleCategorySelect("Sobremesas")}
                                    />
                                </li>
                                <li>
                                    <span>Bebidas</span>
                                    <input 
                                        type="radio"
                                        value="Bebidas"
                                        name="category"
                                        onClick={() => handleCategorySelect("Bebidas")}
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
                        {dish_id &&  
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