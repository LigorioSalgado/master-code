const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = ({email,password}) => {
    return new Promise((resolve, reject) => {
        UserModel.find({email})
                .then((result) => {
                    const [user] = result;
                    bcrypt.compare(password, user.password,function(err, same){
                        same ? resolve({same, user}) : reject(new Error('El password es incorrecto'))
                    })

                }).catch((error)=>{
                    reject(error)
                })
    })

}