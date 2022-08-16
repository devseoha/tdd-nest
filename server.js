const express = require('express')
const productRoutes = require('./routes');
const mongoose = require('mongoose');
const PORT = 5000;

const app = express();
console.log(process.env.PASSWORD);

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@tddtest.0lekl7f.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`)
    .then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT);