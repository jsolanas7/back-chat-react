const express = require('express');
const app = express();
const {create } = require('../repository/user.repository')


app.post('/user/create', [] ,async function(req, res){
    try{
        console.log('asd');
        const newUser = await create(req.body);
        res.json(
            {
                id: newUser._id,
                firstName: newUser.firstName,
                surName: newUser.surName,
                email: newUser.email
            })
    }
    catch(err){
        res.status(400).json({
            ok:false,
            err,
            message: 'No se pudo crear el usuario'
        })
    }
})


module.exports = app;