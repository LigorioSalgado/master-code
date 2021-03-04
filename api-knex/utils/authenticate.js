const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = ({email,password}) => {
    return new Promise((resolve, reject) => {
        UserModel.find({email}) //primero verificamos que el usario existe
                .then((result) => {
                    const [user] = result;
                    if(!user) reject(new Error('El usuario no existe'));
                    bcrypt.compare(password, user.password,function(err, same){ //el password es el mismo
                        same ? resolve({same, user}) : reject(new Error('El password es incorrecto'));
                    })

                }).catch((error)=>{
                    reject(error)
                })
    })

}