const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;
module.exports = (password) => {
return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if(err) reject(err);
        bcrypt.hash(password,salt,function(err,hash){
            //HS256 --> WPA2
            if(err) reject(err);
            resolve(hash)
        })
    })
})
}