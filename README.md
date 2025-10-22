Nome do Projeto:web_project_around_express

Descrição:
Este projeto é uma API criada com Node.js e Express que simula o backend do projeto EUA Afora, desenvolvido no curso de Desenvolvimento Web.  
A aplicação fornece rotas para acessar informações de usuários e cards, retornando os dados a partir de arquivos JSON locais.

O objetivo principal deste projeto é aprender a:
 → Criar um servidor com Express;
 → Organizar o código de forma modular:
 → Trabalhar com rotas e respostas JSON;
 → Utilizar ferramentas de lint e recarga automática (ESLint e Nodemon);

Funcionalidades:

 → GET /users → Retorna todos os usuários;
 → GET /users/:id → Retorna um usuário específico (ou erro 404 se não existir);
 → GET /cards → Retorna todos os cards;
 → Rota inexistente → Retorna um JSON com a mensagem ("A solicitação não foi encontrada");

Tecnologias e Técnicas Utilizadas:

 → Node.js → Ambiente de execução JavaScript no servidor;
 → Express.js→ Framework para criação de servidores e APIs ;
 → Nodemon → Recarga automática durante o desenvolvimento  
 → ESLint (Airbnb Style Guide)→ Padronização e qualidade do código  
 → JavaScript → Linguagem de programação principal;
 → Arquitetura Modular → Separação do código em pastas (`routes/` e `data/`);

