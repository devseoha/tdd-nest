const express  =require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('안녕하세요');
});

module.exports = routes;

