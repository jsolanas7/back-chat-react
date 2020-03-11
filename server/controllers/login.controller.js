  
const express = require('express');
const app = express();
const { findAndValidateLogin } = require('../repository/login.repository')


app.post('/login', [],async (req, res) => {
    try{
        const token = await findAndValidateLogin(req.body);
        res.json(token)
    }
    catch(err){
        res.status(400).json({
            ok:false,
            err,
            message: 'No se pudo logear'
        })
    }
});


module.exports = app;