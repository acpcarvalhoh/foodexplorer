import { Container, Form } from "./styles";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api"
import { createUserFormSchema } from "../../validators/registerValidator";
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export function SignUp(){
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
       
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: joiResolver(createUserFormSchema)
    });

   
    async function HandleRegister(data){
       
        try{
           setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await api.post("/users", data);
            toast.success(response.data.message);

            setTimeout(() => navigate(-1), 1000);
           
        }catch(error){
            if(error.response){
                toast.error(error.response.data.message);

            }else{
                toast.error("Não foi possível cadastar!");
            };
            
        }finally{
            setIsLoading(false);
        }

       
    };


    return (
        <Container >
            <Brand />
            <Form  onSubmit={handleSubmit(HandleRegister)} noValidate>
                <h2>Crie sua conta</h2>

                <Input
                    label="Seu nome"
                    placeholder="Exemplo: Adão Carvalho"
                    autoComplete="name"
                    type="text"
                    id="input_name"
                    {...register("name")}
                    error={errors.name && errors.name.message}
                />
                              
                <Input
                    label="Email"
                    autoComplete="email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="email"
                    id="input_mail"
                    {...register("email")}
                    error={errors.email && errors.email.message}                    
                />
                
                <Input
                    label="Senha"
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    id="input_password"
                    {...register("password")}
                    error={errors.password && errors.password.message} 
                    
                />

                <Button 
                    title="Cadastrar"
                    type="submit"
                    $loading={isLoading}
                    $message="Cadastrando"
                />
               
                <Link to="/login">
                    Já tenho uma conta
                </Link>
                <ToastContainer />
            </Form>
        </Container >
    )
};