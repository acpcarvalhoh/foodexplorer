# 🍽️ FOOD EXPLORER.

Bem-vindo ao repositório do **Food Explorer**! Esta aplicação é um uma aplicação web que simula um menu interativo de um restaurante fictício. Aqui você encontrará todas as informações necessárias para configurar, executar e contribuir para este projeto.

## Visão geral

O **Food Explorer** é uma aplicação web construída com a blibioteca[React] usando linguagem[JavaScript]. Permite aos usuários explorar uma ampla variedade de pratos, visualizar detalhes, adicionar pratos aos favoritos, gerenciar histórico de pedidos, admin é a pessoa responsável pelo restaurante, logo, poderá criar, visualizar, editar e apagar um prato a qualquer momento. A aplicação utiliza [API de de restaurantes https://github.com/acpcarvalhoh/foodexplorer-api] para gerenciar  a aplicação.


## 📋 Índice

- 📦 [Pré-requisitos](#-pré-requisitos)
- 🛠️ [Instalação](#%EF%B8%8F-instalação)
- 💻 [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- 🤝 [Contribuições](#-contribuições)
- 📄 [Licença](#-licença)
- 📄 [Autor](#-autor)

##  preview 💻

[acesse a aplicação aqui](https://foodexplorer-delivery.vercel.app/)

## Conta de demostração admin
```bash
e-mail: acp@gmail.com
senha: 123456
```

## 💻 Tecnologias Utilizadas

As principais tecnologias utilizadas no desenvolvimento desta aplicação são:

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- React Router: Roteamento para aplicativos React, facilitando a navegação entre páginas.
- React Hooks: Permite o uso de estados e outros recursos do React em componentes de função.
- React Hook Form: Biblioteca para gerenciar formulários de maneira eficiente em componentes React.
- Axios: Cliente HTTP para fazer requisições à API.
- Styled Components: Biblioteca para estilizar componentes React usando tagged template - literals.
- Joi: Biblioteca para validação de esquemas em JavaScript.
- Toastify: Biblioteca para exibir notificações em estilo tostado (toast) em aplicativos React.

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
   API_KEY=YOUR_API_KEY
   ```

   Certifique-se de substituir `YOUR_API_KEY` pela sua chave de API válida da [API de Filmes].

4. **Inicie o servidor de desenvolvimento**

   ```
   npm run dev
   ```

   O servidor de desenvolvimento será iniciado e a aplicação estará acessível em [ http://localhost:5173/](http://localhost:5173/).

## Contribuição

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

O RocketMovies é distribuído sob a licença [MIT]. Leia o arquivo [LICENSE] para obter mais informações.


## Autor

Este projeto foi desenvolvido por Adão Carvalho. Aqui estão algumas informações sobre o autor:

- **Nome**: Adão Carvalho
- **Descrição**: Sou um desenvolvedor de software apaixonado por tecnologia e programação. Tenho experiência no desenvolvimento de aplicações web e estou sempre buscando aprender novas tecnologias. Este projeto foi criado como parte do meu aprendizado e prática de desenvolvimento de APIs.
- **Contato**: Você pode entrar em contato comigo pelo e-mail carvalhohuzumak@gmail.com.
- **Perfil**: Você pode encontrar mais projetos e trabalhos no meu perfil do GitHub: [acpcarvalhoh](https://github.com/acpcarvalhoh)

Sinta-se à vontade para entrar em contato comigo para mais informações sobre o projeto ou para qualquer outra questão relacionada.