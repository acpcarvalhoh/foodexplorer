# 🍽️ FOOD EXPLORER
![Preview do projeto](src/assets/preview-projeto.PNG)

Bem-vindo ao repositório do **Food Explorer**! Esta aplicação é um uma aplicação web que simula um menu interativo de um restaurante fictício. Aqui você encontrará todas as informações necessárias para configurar, executar e contribuir para este projeto.


## Visão geral

O **Food Explorer** é uma aplicação web construída com a blibioteca [React](https://react.dev) usando linguagem [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript). Permite aos usuários explorar uma ampla variedade de pratos, visualizar detalhes, adicionar pratos aos favoritos, gerenciar histórico de pedidos, admin é a pessoa responsável pelo restaurante, logo, poderá criar, visualizar, editar e apagar um prato a qualquer momento. A aplicação utiliza API de de restaurantes https://github.com/acpcarvalhoh/foodexplorer-api para gerenciar  a aplicação.


## Índice

- 💻 [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- 📁 [Estrutura do Projeto](#estrutura-do-projeto)
- 📋 [Funcionalidades principais](#funcionalidades-principais)
- ⚙️ [Configuração](#configuração)
- 🤝 [Contribuições](#contribuições)
- 📄 [Licença](#licença)
- 👨‍💻 [Autor](#autor)



##  Preview 


A aplicação está disponível em! [https://foodexplorer-delivery.vercel.app](https://foodexplorer-delivery.vercel.app)


## Conta de demostração admin
```bash
e-mail: acp@gmail.com
senha: 123456
```

## Tecnologias Utilizadas

As principais tecnologias utilizadas no desenvolvimento desta aplicação são:

- [**React**](https://react.dev)
- [**React Hook Form**](https://react-hook-form.com)
- [**Joi**](https://joi.dev)
- [**Styled Components**](https://styled-components.com)
- [**Axios**](https://axios-http.com)
- [**React Router**](https://reactrouter.com/en/main)
- [**React-toastify**](https://fkhadra.github.io/react-toastify/introduction)


## Estrutura do Projeto

A estrutura do projeto está organizada em componentes, hooks, páginas e serviços. Aqui estão os principais diretórios:

- `src/components`: Componentes reutilizáveis.
- `src/hooks`: Hooks customizados.
- `src/pages`: Páginas do aplicativo.
- `src/routes`:  Rotas do aplicativo.
- `src/services`: Integração com a API.
- `src/styles`: Estilos globais e componentes estilizados.
- `src/utils`: Funções utilitárias.
- `src/validators`: Esquemas de validação.


## Funcionalidades principais

- Pesquisar pratos por nome ou ingredientes.
- Visualizar detalhes dos pratos, como ingredientes, descrição, preço, etc.
- Adicionar pratos aos favoritos.
- Consultar histórico de pedidos.
- Escolher método de pagamento e finalizar pedido.
- Criar, visualizar, editar e apagar um prato a qualquer momento(ADMIN).


## Configuração

Siga as etapas abaixo para configurar o ambiente de desenvolvimento e executar o **Food Explorer** localmente:

1. **Clone o repositório**

   ```
   git clone https://github.com/acpcarvalhoh/foodexplorer.git
   ```

2. **Instale as dependências**

   ```
   cd ./foodexplorer
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

   ```
   VITE_API_URL="SUA_API"
   ```

   Certifique-se de substituir `SUA_API` pela sua chave de API válida da API de restaurantes.

4. **Inicie o servidor de desenvolvimento**

   ```
   npm run dev
   ```

   O servidor de desenvolvimento será iniciado e a aplicação estará acessível em http://localhost:5173/.

## Contribuições

Agradecemos o seu interesse em contribuir para o **Food Explorer**! Se você deseja ajudar a melhorar a aplicação, siga as etapas abaixo:

1. Faça um fork deste repositório.

2. Crie uma branch para a sua nova funcionalidade ou correção:

   ```
   git checkout -b minha-nova-funcionalidade
   ```

3. Faça as alterações necessárias e adicione os arquivos modificados:

   ```
   git add .
   ```

4. Faça o commit das suas alterações:

   ```
   git commit -m "Adicionar nova funcionalidade"
   ```

5. Faça o push para o seu fork:

   ```
   git push origin minha-nova-funcionalidade
   ```

6. Abra uma Pull Request neste repositório e aguarde a revisão.

## Licença

O **Food Explorer** é distribuído sob a MIT. Leia o arquivo [licença MIT](./LICENSE) para obter mais informações.


## Autor


Este projeto foi desenvolvido por Adão Carvalho. Aqui estão algumas informações sobre o autor:

- **Nome**: Adão Carvalho
- **Descrição**: Sou um desenvolvedor de software apaixonado por tecnologia e programação. Tenho experiência no desenvolvimento de aplicações web e estou sempre buscando aprender novas tecnologias. Este projeto foi criado como parte do meu aprendizado e prática de desenvolvimento de aplicações Full Stack.
- **Contato**: Você pode entrar em contato comigo pelo e-mail carvalhohuzumak@gmail.com.
- **Perfil**: Você pode encontrar mais projetos e trabalhos no meu perfil do GitHub: [acpcarvalhoh](https://github.com/acpcarvalhoh)

Sinta-se à vontade para entrar em contato comigo para mais informações sobre o projeto ou para qualquer outra questão relacionada.
