import { Container, Form } from "./styles"
import { Brand } from "../../components/Brand"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth";
import { createUserFormSchema } from "../../validators/loginValidator";
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignIn(){
    const { signIn, isLoading } = useAuth();

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: joiResolver(createUserFormSchema),
    });

    async function handleSignIn(data){
        await signIn(data);
    };

  
    return (
        <Container >
            <Brand />
            <Form onSubmit={handleSubmit(handleSignIn)} noValidate>
                <h2>Faça Login</h2>
                
                <Input
                    label="Email"
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
                    title="Entrar"
                    type="submit"
                    $loading={isLoading}
                    $message="Carregando"
                />

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>

            <div style={{ position: "absolute"}}>
                <ToastContainer/>
            </div>
        </Container >
    )
};