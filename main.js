const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser')
const cors = require('cors');
const morgan = require('morgan');

const ProductService = require("./services/listProduct");

const app = express()
app.use(bodyParser.urlencoded({ extended: false })) // URLEncoded form data
app.use(bodyParser.json()) // application/json
app.use(cors())
app.use(morgan('dev')); // toutes les requêtes HTTP dans le log du serveur
//app.use(cookieParser()) // read cookies (obligatoire pour l'authentification)

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'guillaume',
  password: '7309',
  database: 'ArticleList'
});

const productService = new ProductService(db)

require('./datamodel/seeder')(productService)
    .then(app.listen(5555))