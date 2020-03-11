const User = require('../models/user');
const bcrypt = require('bcrypt');
    

const create = async (body) => {

    try{
        const user = new User({
            email: body.email,
            firstName: body.firstName,
            password: bcrypt.hashSync(body.password, 10),
            surName: body.surName
        }); 
        const newUser = await user.save('-password');
        return newUser;
    }
    catch(err){
        throw err;
    }
}
module.exports = {
    create
}