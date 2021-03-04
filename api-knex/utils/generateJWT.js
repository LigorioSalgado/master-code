const JWT = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY
//const {SECRET_KEY} = process.env

module.exports = ({id_user, rol, email}) => {
    const payload = {
        id_user,
        rol,
        email
    }

    return JWT.sign(payload,SECRET_KEY,{ expiresIn:'24h'})

}
