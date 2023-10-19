import { Container, Form } from "./styles";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api"


export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    async function HandleRegister(){
        if(!name || !email || !password){
           return alert("Preencha todos os campos!")
        };

        try{
           const response = await api.post("/users", { name, email, password });

           alert(response.data.message);
           navigate(-1);

        }catch(error){
            if(error.response){
                alert(error.response.data.message);

            }else{
                alert("Não foi possível cadastar!");
            };
        };
    };


    return (
        <Container >
            <Brand />
            <Form noValidate>
                <h2>Crie sua conta</h2>

                <Input
                    label="Seu nome"
                    placeholder="Exemplo: Adão Carvalho"
                    type="text"
                    id="input_name"
                    onChange={e => setName(e.target.value)}
                />
                
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
                    onClick={HandleRegister}
                />

                
                <Link to="..">
                    Já tenho uma conta
                </Link>
                
            </Form>
        </Container >
    )
};