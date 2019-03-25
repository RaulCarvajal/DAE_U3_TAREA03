const bodyParser = require('body-parser');
const express = require('express');
const wagner = require('wagner-core');

require('./models/model')(wagner);

//Importar productRouter
const brandRouter = require('./routers/brand.router')(wagner);

// Configurando servidor express
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/brands",brandRouter);

module.exports = app;