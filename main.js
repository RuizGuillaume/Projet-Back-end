const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser')
const cors = require('cors');
const morgan = require('morgan');

const productListService = require("./services/listProduct")
const productService = require("./services/product")

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
const productListService = new ProductService(db)

require('./api/list')(app, productService , jwt)
require('./api/item')(app, productListService)
require('./datamodel/seeder')(productService)
    .then(app.listen(5555))
