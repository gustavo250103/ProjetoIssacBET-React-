# Sample Snack app

# Site de Apostas IssacBet

Este é um projeto de um site de apostas simples desenvolvido em React. O site permite que os usuários se cadastrem, façam login, naveguem por um menu principal, façam apostas que sorteiam um número aleatório, visualizem seu perfil e adicionem dinheiro à sua conta.

## Funcionalidades

- **Cadastro:** Permite que novos usuários se cadastrem no site.
- **Login:** Permite que os usuários existentes façam login.
- **Menu Principal:** Navegação para as diferentes funcionalidades do site.
- **Apostas:** Permite que os usuários façam apostas e recebam um número aleatório.
- **Perfil:** Exibe as informações do perfil do usuário.
- **Adicionar Dinheiro:** Permite que os usuários adicionem dinheiro à sua conta.

## Tecnologias Utilizadas

- React
- React Router (para navegação)
- Context API (para gerenciamento de estado)
- CSS (para estilização)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## Estrutura do Projeto

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Cadastro.js
│   │   ├── Login.js
│   │   ├── Menu.js
│   │   ├── Aposta.js
│   │   ├── Perfil.js
│   │   └── AdicionarDinheiro.js
│   ├── context
│   │   └── AuthContext.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
