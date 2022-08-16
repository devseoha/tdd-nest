const express = require('express')
const productRoutes = require('./routes');
const mongoose = require('mongoose');
const PORT = 5000;

require("dotenv").config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@tddtest.0lekl7f.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`)
    .then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT);