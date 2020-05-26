const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const ProductService = require("./services/product");

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // URLEncoded form data
app.use(bodyParser.json()); // application/json
app.use(cors());
app.use(morgan('dev')); // toutes les requêtes HTTP dans le log du serveur

const connectionString = "postgres://postgres:default@localhost/Products";
const db = new pg.Pool({ connectionString: connectionString });
const productService = new ProductService(db);
require('./api/product')(app, productService);
require('./datamodel/seeder')(productService)
    .then(app.listen(3333));
