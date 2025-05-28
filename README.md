# Agenda de Contatos

Uma aplicação web completa para gerenciamento de contatos pessoais, desenvolvida com Node.js, Express e MongoDB.

![Agenda de Contatos](https://via.placeholder.com/800x400?text=Agenda+de+Contatos)

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [API Endpoints](#api-endpoints)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🔍 Visão Geral

Esta aplicação permite aos usuários criar uma conta e gerenciar seus contatos pessoais. Com uma interface intuitiva, os usuários podem adicionar, visualizar, editar e excluir contatos de forma simples e eficiente.

## ✨ Funcionalidades

- **Sistema de Autenticação**:
  - Registro de novos usuários
  - Login com validação segura
  - Proteção de rotas para usuários autenticados
  - Logout seguro

- **Gerenciamento de Contatos**:
  - Criação de novos contatos
  - Visualização de contatos existentes
  - Edição de informações de contatos
  - Exclusão de contatos

- **Interface Responsiva**:
  - Design adaptado para dispositivos móveis
  - Experiência de usuário intuitiva
  - Feedback visual para ações do usuário

## 🛠️ Tecnologias Utilizadas

### Backend
- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript do lado do servidor
- **[Express](https://expressjs.com/)**: Framework web para Node.js
- **[MongoDB](https://www.mongodb.com/)**: Banco de dados NoSQL
- **[Mongoose](https://mongoosejs.com/)**: ODM para MongoDB
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: Biblioteca para hash de senhas
- **[express-session](https://www.npmjs.com/package/express-session)**: Gerenciamento de sessões
- **[connect-mongo](https://www.npmjs.com/package/connect-mongo)**: Armazenamento de sessões no MongoDB
- **[connect-flash](https://www.npmjs.com/package/connect-flash)**: Mensagens flash
- **[csurf](https://www.npmjs.com/package/csurf)**: Proteção CSRF
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Carregamento de variáveis de ambiente
- **[helmet](https://www.npmjs.com/package/helmet)**: Segurança para Express
- **[validator](https://www.npmjs.com/package/validator)**: Validação de dados

### Frontend
- **[EJS](https://ejs.co/)**: Template engine
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)**: Estilização
- **[Webpack](https://webpack.js.org/)**: Bundling de assets
- **[Babel](https://babeljs.io/)**: Transpilação de JavaScript
- **[Core-js](https://www.npmjs.com/package/core-js)**: Polyfills para JavaScript

## 📂 Estrutura do Projeto

```
agenda/
├── frontend/                # Arquivos do frontend
│   ├── assets/             # Arquivos estáticos
│   │   ├── css/           # Arquivos CSS
│   │   └── js/            # Arquivos JavaScript
│   └── main.js            # Ponto de entrada do frontend
├── public/                 # Arquivos públicos compilados
│   └── assets/            # Assets compilados
├── src/                    # Código-fonte do backend
│   ├── controllers/       # Controladores da aplicação
│   ├── middlewares/       # Middlewares
│   ├── models/            # Modelos do Mongoose
│   └── views/             # Templates EJS
├── .env                    # Variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Dependências do projeto
├── server.js              # Ponto de entrada do servidor
├── webpack.config.js      # Configuração do Webpack
└── LICENSE                # Licença do projeto
```

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (v6 ou superior)
- [MongoDB](https://www.mongodb.com/) (v4 ou superior)

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/agenda.git
   cd agenda
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## ⚙️ Configuração

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   MONGODB_URI=mongodb://localhost:27017/agenda
   SESSION_SECRET=sua_chave_secreta_aqui
   PORT=3000
   ```

2. Substitua os valores conforme necessário para o seu ambiente.

## ▶️ Execução

### Ambiente de Desenvolvimento

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

2. Em outro terminal, inicie o Webpack para compilar os assets:
   ```bash
   npm run dev
   ```

3. Acesse a aplicação em: `http://localhost:3000`

### Ambiente de Produção

1. Compile os assets:
   ```bash
   npx webpack
   ```

2. Inicie o servidor:
   ```bash
   NODE_ENV=production npm start
   ```

## 📡 API Endpoints

### Autenticação

- **POST /login/register** - Registrar um novo usuário
- **POST /login/login** - Fazer login
- **GET /login/logout** - Fazer logout

### Contatos

- **GET /contato** - Formulário para criar um novo contato
- **POST /contato/register** - Registrar um novo contato
- **GET /contato/:id** - Formulário para editar um contato existente
- **POST /contato/edit/:id** - Atualizar um contato existente
- **GET /contato/delete/:id** - Excluir um contato

## 👥 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Desenvolvido por [João Felipe](https://github.com/Joao-Felipe-coding) - &copy; 2025
