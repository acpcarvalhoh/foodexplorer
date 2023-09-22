import { Container, Form } from "./styles"
import { Brand } from "../../components/Brand"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

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

                <a href="#">Já tenho uma conta</a>
            </Form>
        </Container >
    )
};