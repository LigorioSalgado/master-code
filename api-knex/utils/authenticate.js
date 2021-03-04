const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = ({email,password}) => {
    return new Promise((resolve, reject) => {
        UserModel.find({email}) //primero verificamos que el usario existe
                .then((result) => {
                    const [user] = result;
                    console.log(user)
                    bcrypt.compare(password, user.password,function(err, same){ //el passwor es el mismo
                        same ? resolve({same, user}) : reject(new Error('El password es incorrecto'))
                    })

                }).catch((error)=>{
                    reject(error)
                })
    })

}