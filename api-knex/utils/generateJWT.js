const JWT = require('jsonwebtoken');
const SECRET_KEY = 'IvGtsACXInB9Ld8CG63Yucb3r2l+dTo2PstIP5hcskNIqEn64q81aQ=='

module.exports = ({id_user, rol, email}) => {
    const payload = {
        id_user,
        rol,
        email
    }

    return JWT.sign(payload,SECRET_KEY,{ expiresIn:'24h'})

}
