import { Container, Form } from "./styles"
import { Brand } from "../../components/Brand"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    async function hangleSignIn(){
        await signIn({ email, password });
    };

    return (
        <Container >
            <Brand />
            <Form noValidate>
                <h2>Faça Login</h2>
                
                <Input
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="email"
                    id="input_mail"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    label="Senha"
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    id="input_password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Entrar"
                    onClick={hangleSignIn}
                />

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
        </Container >
    )
};