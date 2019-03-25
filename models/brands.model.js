const mongoose = require('mongoose');

//Construyendo el esquema
const brandsSchema = new mongoose.Schema({
    brand: {
        type: String, 
        required: true
    }
});

//Modelo
const brandModel = mongoose.model('Brand', brandsSchema, 'Brands');

module.exports = brandModel;