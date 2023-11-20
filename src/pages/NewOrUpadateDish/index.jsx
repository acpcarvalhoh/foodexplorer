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
import { createDishFormSchema } from "../../validators/dishFormValidator";
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, useFieldArray } from "react-hook-form"


export function NewOrUpdateDish(){
    const { dish_id } = useParams();
    const [dropDown, setDropDown] = useState(false);
    const [categories, setCategories] = useState("Selecione a categoria");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors }, control} = useForm({
        resolver: joiResolver(createDishFormSchema)
    });
   
   /*  function handleChangeInputPrice(e){
        const updatedPrice = e.target.value.replace(/[^0-9]/g, '');
        if(updatedPrice !== ""){
            
            setPrice((+updatedPrice / 100).toFixed(2));
        }else{
            setPrice("");
        };

    }; */

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
        setDropDown(prevState => !prevState);
    };

    async function handleCreateDish(data){
        try {
            const dishForm = new FormData();
            dishForm.append("name", data.name);
            dishForm.append("image", data.image[0]);
            dishForm.append("ingredients", data.ingredients);
            dishForm.append("categories", data.categories);
            dishForm.append("description", data.description)
            dishForm.append("price", data.price);

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

   /*  async function handleUpdateDish(){
        try {
            const dishForm = new FormData();
            if(image !== null){
                dishForm.append("image", image);
            };

            dishForm.append("name", name);
            dishForm.append("ingredients", ingredients);
            dishForm.append("categories", categories);
            dishForm.append("description", description)
            dishForm.append("price", price);

            const response = await api.put(`/dishes/${dish_id}`, dishForm);

            alert(response.data.message);
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);

            }else{
                alert("Não foi possível atualizar o prato");
            };
        };    
    }; */

   /*  async function handleDeleteDish(){
        try {
            const response = await api.delete(`/dishes/${dish_id}`);

            alert(response.data.message);
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);

            }else{
                alert("Erro ao excluir prato");
            };
        };    
    }; */


    function handleBack(){
        navigate(-1);
    };

    const categoryOptions =  ["Refeições", "Sobremesas", "Bebidas"]

   /*  useEffect(() => {
        if(dish_id){
            async function fetchDishes() {
                const response = await api.get(`/dishes/${dish_id}`);

                setName(response.data.name);
                setDescription(response.data.description);
                setCategories(response.data.categories.map(category => category.name));
                setPrice((response.data.price).toFixed(2));
                setIngredients(response.data.ingredients.map(ingredient => ingredient.name));
            }
            
            fetchDishes();
        };
      
    
    }, [dish_id]); */

    console.log(errors);
   
    return (
        <Container>
            <Header/> 
            <main>
                <button className="button-back" onClick={handleBack}>
                    <PiCaretLeftBold size={22}/>
                    Voltar
                </button>

                <form onSubmit={handleSubmit(handleCreateDish)} noValidate>
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
                            {...register("name")}
                            onChange={(e) => {
                                register("name").onChange(e); 
                                setName(e.target.value); 
                            }}

                            error={errors.name && errors.name.message}
                        />
                        
                        <CustomSelect>
                            <div id="category-select">
                                <label htmlFor="select-button">Categoria</label>
                            </div>
                            <div className="custon-select" onClick={toggleDropdown}>
                                <div 
                                    id="select-button" 
                                    tabIndex="0"
                                >
                                    <div id="selected-value">{categories}</div>
                                    <div id="chevrons">
                                        {dropDown ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>

                                {dropDown && (
                                    <ul>
                                        {categoryOptions.filter((option) => option !== categories)
                                        .map((option, index) => (
                                            <li key={index}>
                                                <span>{option}</span>
                                                <input 
                                                    type="radio"
                                                    value={option}
                                                    name="category"
                                                    {...register("categories")}
                                                   
                                                    onChange={(e) => {
                                                        register("categories").onChange(e); 
                                                        setCategories(e.target.value); 
                                                    }}
                                                />
                                            </li>
                                        ))}                               
                                    </ul>
                                )}

                                {errors.categories && <span className="error-msg">{errors.categories.message}</span>}
                           </div>
                        </CustomSelect>
                    </div>
                    
                    <div className="ingredients-price">
                        <div className="ingredients-container">
                            <label htmlFor="igredients_label">Ingredientes</label>
                            <Ingredients>
                                <IngredientItem 
                                    isNew
                                    placeholder="Adicionar"
                                    value={newIngredients}
                                    onChange={e => setNewIngredients(e.target.value)}
                                    onClick={handleAddIngredient}
                                    id="igredients_label"
                                />
                                
                                {
                                    ingredients.map((ingredient, index) => (
                                        <IngredientItem
                                            key={String(index)} 
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                            id={String(index)}
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
                                id="Preço"
                                {...register("price")}

                                onChange={(e) => {
                                    register("price").onChange(e); 
                                    setPrice(e.target.value); 
                                }}

                                error={errors.price && errors.price.message}
                            />
                        </div>
                       
                    </div>
                   

                    <div className="dish-description">
                        <label htmlFor="description">Descrição</label>
                        <textarea 
                            id="description"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            value={description}
                            {...register("description")}

                            onChange={(e) => {
                                register("description").onChange(e); 
                                setDescription(e.target.value); 
                            }}
                        />

                        {errors.description && <span className="error-msg-desc">{errors.description.message}</span>}  
                    </div>
                    
                    <div className="custom-buttons">
                        {dish_id &&  
                            <Button
                                className="button-delete"
                                title="Excluir prato"
                               /*  onClick={handleDeleteDish} */
                            /> 
                        }
                       
                        <Button
                            className="button-submit"
                            title="Salvar Alterações"
                            type="submit"
                        />
                    </div>                                    
                </form>
            </main>
            <Footer/> 
        </Container >
    )
};