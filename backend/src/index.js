// npm install express
//importamos para o projeto o Express
const express = require('express');

const fs = require('fs'); 

const cors = require('cors');

//vamos importar as rotas do arquivo routes.js
const routes = require('./routes');

//instanciamos a aplicação
const app = express();

app.use(cors());
//aqui dizemos para o app utilizar essas coisas
app.use(express.json());
app.use(routes);


//npm install nodemon -D (Só para dev)

//banco de dados: iremos usar o Knex.js para ser
//o nosso query builder.

//npm install knex --save
// npm install sqlite3

//npx knex init

//aqui indicamos a porta que a aplicação deve usar para escutar

app.listen(3333);
