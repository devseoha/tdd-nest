const express = require('express')
const productRoutes = require('./routes');

const PORT = 5000;

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(PORT);