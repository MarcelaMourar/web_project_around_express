# web_project_around_express

## 📌 Descrição

O **web_project_around_express** é uma API desenvolvida com **Node.js** e **Express.js** que simula o backend do projeto **EUA Afora**, criado durante o curso de Desenvolvimento Web.

A aplicação disponibiliza rotas para acessar informações de **usuários** e **cards**, retornando dados armazenados em arquivos JSON locais.

O principal objetivo deste projeto é praticar a construção de uma API REST, aplicando conceitos fundamentais do desenvolvimento backend, como organização modular do código, criação de rotas e utilização de ferramentas que auxiliam na produtividade e na padronização do projeto.

---

## 🎯 Objetivos de Aprendizagem

Durante o desenvolvimento deste projeto, foram aplicados os seguintes conceitos:

* Criar um servidor utilizando **Express.js**;
* Organizar o código de forma modular;
* Trabalhar com rotas e respostas em formato **JSON**;
* Utilizar ferramentas de desenvolvimento como **Nodemon** e **ESLint**;
* Estruturar uma API seguindo boas práticas de desenvolvimento.

---

## ⚙️ Funcionalidades

A API disponibiliza as seguintes rotas:

### 👥 Usuários

| Método | Rota         | Descrição                                      |
| ------ | ------------ | ---------------------------------------------- |
| GET    | `/users`     | Retorna a lista de todos os usuários           |
| GET    | `/users/:id` | Retorna um usuário específico pelo ID          |
| GET    | `/users/:id` | Retorna erro **404** caso o usuário não exista |

### 🖼️ Cards

| Método | Rota     | Descrição                         |
| ------ | -------- | --------------------------------- |
| GET    | `/cards` | Retorna a lista de todos os cards |

### ❌ Tratamento de rotas inexistentes

Qualquer rota não encontrada retorna a seguinte resposta:

```json
{
  "message": "A solicitação não foi encontrada"
}
```

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** → Ambiente de execução JavaScript no servidor;
* **Express.js** → Framework para criação de servidores e APIs;
* **JavaScript** → Linguagem principal do projeto;
* **Nodemon** → Reinicialização automática durante o desenvolvimento;
* **ESLint (Airbnb Style Guide)** → Padronização e qualidade do código;
* **Arquitetura Modular** → Organização do projeto em pastas, como `routes/` e `data/`.

---



## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/web_project_around_express.git
```

### 2. Acesse a pasta do projeto

```bash
cd web_project_around_express
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

Modo de desenvolvimento (com Nodemon):

```bash
npm run dev
```

Ou execute normalmente:

```bash
npm start
```

### 5. Acesse a aplicação

O servidor estará disponível em:

```text
http://localhost:3000
```

Exemplos de rotas:

```text
http://localhost:3000/users

http://localhost:3000/users/:id

http://localhost:3000/cards
```

---

## 📚 Autor

Projeto desenvolvido como parte dos estudos do curso de **Desenvolvimento Web**, com o objetivo de praticar a criação de APIs utilizando **Node.js** e **Express.js**.
