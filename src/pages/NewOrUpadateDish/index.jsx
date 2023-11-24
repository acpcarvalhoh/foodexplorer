import { Container, Ingredients } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem"
import { Button } from "../../components/Button"
import { CustomSelect } from "../../components/CustomSelect"
import { PiCaretLeftBold, PiUploadSimpleBold } from "react-icons/pi"
import { FaCheckCircle } from 'react-icons/fa';
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { createDishFormSchema } from "../../validators/dishFormValidator";
import { validateImage } from "../../validators/imageValidator"
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function NewOrUpdateDish(){
    const { dish_id } = useParams();
    const [categories, setCategories] = useState("Selecione a categoria");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState("");
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState(null);
    const [ingredientsError, setiIngredientsError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const categoryOptions =  ["Refeições", "Sobremesas", "Bebidas"]
    const navigate = useNavigate(); 


    const { register, handleSubmit, setValue, formState: { errors }} = useForm({
        resolver: joiResolver(createDishFormSchema),

    });


    function handleAddIngredient(){
        if(!newIngredients || ingredients.includes(newIngredients)){
            return
        };
        
        setiIngredientsError("")
        setIngredients(prevState => [...prevState, newIngredients]);
        
        setNewIngredients("");
    };

    function handleRemoveIngredient(ingredientToDelete){
        const updatedIngredients = ingredients.filter(ingredient => ingredient !== ingredientToDelete);
        setIngredients(updatedIngredients);
        if (updatedIngredients.length === 0) {
            setiIngredientsError('Adicione pelo menos um ingrediente');

        }

    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        const error = validateImage(selectedImage, dish_id);
    
        if (!error) {
            setImage(selectedImage);
        };
    
        setImageError(error);
    };


    async function handleCreateDish(data){
        if (!image ) {
            setImageError('Selecione uma imagem');
            return;
        };

        if (ingredients.length === 0) {
            setiIngredientsError('Adicione pelo menos um ingrediente');
            return;
        }
        
        try {
            const dishForm = new FormData();
            dishForm.append("name", data.name);
            dishForm.append("image", image);
            dishForm.append("ingredients", ingredients);
            dishForm.append("categories", data.categories);
            dishForm.append("description", data.description)
            dishForm.append("price", data.price);

            setIsLoading(true);

            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await api.post("/dishes", dishForm);

            toast.success(response.data.message);

            setTimeout(() => {
                navigate("/");

            }, 1000);
            
        } catch (error) {
            if(error.response){
                toast.error(error.response.data.message);

            }else{
                toast.error("Não foi possível cadastrar prato");
            };

        }finally{
            setIsLoading(false);
        }    
    }

    async function handleUpdateDish(data){
        if (ingredients.length === 0) {
            setiIngredientsError('Adicione pelo menos um ingrediente');
            return;
        };

        try {
            const dishForm = new FormData();
            if(image !== null){
                dishForm.append("image", image);
            };

            dishForm.append("name", data.name);
            dishForm.append("ingredients", ingredients);
            dishForm.append("categories", data.categories);
            dishForm.append("description", data.description)
            dishForm.append("price", data.price);

            setIsLoading(true);

            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await api.put(`/dishes/${dish_id}`, dishForm);

            toast.success(response.data.message);

            setTimeout(() => {
                navigate("/");

            }, 1000);
            
        } catch (error) {
            if(error.response){
                toast.error(error.response.data.message);

            }else{
                toast.error("Não foi possível atualizar o prato");
            };
            
        }finally{
            setIsLoading(false);
        }     
    };



    async function handleDeleteDish(){
        try {
            setIsDeleting(true);

            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await api.delete(`/dishes/${dish_id}`);

            toast.success(response.data.message);

            setTimeout(() => {
                navigate("/");

            }, 1000);
            
        } catch (error) {
            if(error.response){
                toast.error(error.response.data.message);

            }else{
                toast.error("Erro ao excluir prato");
            };

        }finally{
            setIsDeleting(false);
        };     
    };


    function handleBack(){
        navigate(-1);
    };

    

    useEffect(() => {
        if(dish_id){
            async function fetchDishes() {
                const response = await api.get(`/dishes/${dish_id}`);

                setCategories(response.data.categories.map(category => category.name).toString());
                setIngredients(response.data.ingredients.map(ingredient => ingredient.name));

                setValue("name", response.data.name);
                setValue("description", response.data.description);
                setValue("categories", response.data.categories.map(category => category.name).toString());
                setValue("price", response.data.price);               
            }
            
            fetchDishes();
        };
      
    
    }, [dish_id]);
    
    return (
        <Container>
            <Header/> 
            <main>
                <button className="button-back" onClick={handleBack}>
                    <PiCaretLeftBold size={22}/>
                    Voltar
                </button>

                <form onSubmit={handleSubmit(dish_id ? handleUpdateDish : handleCreateDish)} noValidate>
                    <h2 className="mobile">Novo prato</h2>
                    <h2 className="desktop">{dish_id ? "Editar" : "Adicionar"} prato</h2>
                    <div className="image-name-category">

                        <div className="img-content">
                            <p>Imagem do prato</p>
                            <label htmlFor="dish_img" className="icon_label">
                                <PiUploadSimpleBold/>
                                {
                                    !imageError && 
                                    image !== null ? 
                                    <span className="selected-img">Imagem selecionada<FaCheckCircle/></span> : <span>Selecione imagem</span>
                                }               
                                <input 
                                    type="file" 
                                    id="dish_img"
                                    name="image"
                                    onChange={handleImageChange}
                                />
                            </label>

                            {imageError && <span className="error-image">{imageError}</span>}
                        </div>
                        
                        <Input
                            className="input-name"
                            label="Nome"
                            type="text"
                            placeholder="Ex.: Salada Ceasar"
                            autoComplete="name"
                            name="dish_name"
                            id="dish_name"
                            {...register("name")}
                    
                            error={errors.name && errors.name.message}
                        />
                        
                        <CustomSelect
                            label="Categoria"
                            state={categories}
                            options={categoryOptions}
                            {...register("categories")}
                            error={errors.categories && errors.categories.message}
                                                   
                            onChange={(e) => {
                                register("categories").onChange(e); 
                                setCategories(e.target.value); 
                            }}
                           
                        />                    
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

                                {ingredientsError && <span className="error-ingredient">{ingredientsError}</span>}
                            </Ingredients>
                        </div>
                        
                        <div className="input-price">
                            <Input
                                label="Preço"
                                type="text"
                                placeholder="R$ 00,00"
                                id="Preço"
                                {...register("price")}

                                error={errors.price && errors.price.message}
                            />
                        </div>
                       
                    </div>
                   

                    <div className="dish-description">
                        <label htmlFor="description">Descrição</label>
                        <textarea 
                            id="description"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                           {...register("description")}
                        />

                        {errors.description && <span className="error-msg-desc">{errors.description.message}</span>}  
                    </div>
                    
                    <div className="custom-buttons">
                        {dish_id &&  
                            <Button
                                className="button-delete"
                                title="Excluir prato"
                                onClick={handleDeleteDish}
                                $loading={isDeleting}
                                $message="Excluindo"
                            /> 
                        }
                       
                        <Button
                            className="button-submit"
                            title="Salvar Alterações"
                            type="submit"
                            $loading={isLoading}
                            $message={dish_id ? "Atualizando" : "Carregando"}                            
                        />
                    </div>                                    
                </form>
            </main>
            <Footer/> 

            <ToastContainer />
        </Container >
    )
};