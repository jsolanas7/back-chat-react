const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SEED = process.env.SEED;

const findAndValidateLogin = async (body) =>{
    if(!body.email){
        throw ({err: {
            message: 'Debe ingresar un mail'
        }});
    }
    try{
        const userDB = await User.findOne({email: body.email});
        console.log(userDB.password)
        console.log(body.password);
        if (bcrypt.compareSync(body.password, userDB.password)) {
            let token =  jwt.sign({
                user: userDB
            }, SEED, {expiresIn: 60 * 60});
            return token;
        }else{
            throw({
                err: {
                    message: 'Mail o (password) invalidos'
                }
            })
        }
    }catch(err){
        throw({
            err: {
                message: 'Mail o (password) invalidos'
            }
        });
    }
}

module.exports = {
    findAndValidateLogin
}