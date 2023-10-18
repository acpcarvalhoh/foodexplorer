import { Container, Form } from "./styles"
import { Brand } from "../../components/Brand"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function SignIn(){
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
                />

                <Input
                    label="Senha"
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    id="input_password"
                />

                <Button 
                    title="Entrar"
                />

                <Link to="/register">
                   Já tenho uma conta
                </Link>
            </Form>
        </Container >
    )
};