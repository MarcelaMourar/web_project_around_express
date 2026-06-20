# web_project_around_express

## 📌 Description

**web_project_around_express** is an API built with **Node.js** and **Express.js**. It works as the backend for the **Around The U.S.** project, created during the Web Development course.

The application has routes to access information about **users** and **cards**. It returns data from local JSON files.

The main goal of this project is to practice building a REST API, applying basic backend development concepts like modular code organization, creating routes, and using tools for productivity and code standards.

---

## 🎯 Learning Objectives

During the development of this project, the following concepts were applied:

* Create a server using **Express.js**;
* Organize code in a modular way;
* Work with routes and responses in **JSON** format;
* Use development tools like **Nodemon** and **ESLint**;
* Structure an API following coding best practices.

---

## ⚙️ Features

The API provides the following routes:

### 👥 Users

| Method | Route        | Description                                  |
| ------ | ------------ | -------------------------------------------- |
| GET    | `/users`     | Returns a list of all users                  |
| GET    | `/users/:id` | Returns a specific user by ID                |
| GET    | `/users/:id` | Returns a **404** error if the user does not exist |

### 🖼️ Cards

| Method | Route    | Description                         |
| ------ | -------- | ----------------------------------- |
| GET    | `/cards` | Returns a list of all cards         |

### ❌ Handling Non-Existent Routes

Any route that is not found returns the following response:

```json
{
  "message": "Requested resource not found"
}

## 🛠️ Technologies Used

* **Node.js** → JavaScript runtime environment for the server;
* **Express.js** → Framework for building servers and APIs;
* **JavaScript** → Main language of the project;
* **Nodemon** → Automatic server restart during development;
* **ESLint (Airbnb Style Guide)** → Code standardization and quality;
* **Arquitetura Modular** → Project organization using folders like `routes/` and `data/`.

---



## 🚀 How to run the project

### 1. Clone the repository

```bash
git clone https://github.com/MarcelaMourar/web_project_around_express.git
```

### 2. Go to the project folder

```bash
cd web_project_around_express
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

Development mode (with Nodemon):

```bash
npm run dev
```

Or run normally:

```bash
npm start
```

### 5. Access the application

The server will be available at:

```text
http://localhost:3000
```

Route examples:

```text
http://localhost:3000/users

http://localhost:3000/users/:id

http://localhost:3000/cards
```

---

## 📚 Author

Project developed as part of **Web Development** studies to practice building **APIs with Node.js and Express.js**.
