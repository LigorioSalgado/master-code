const JWT = require('jsonwebtoken');
const UserModel = require('../models/User');
const SECRET_KEY = process.env.SECRET_KEY;
//const { env: { SECRET_KEY } } = process;


module.exports = async (req,res,next) =>{
    const Authorization = req.get('Authorization');
    try{
        if(Authorization){
            const token = Authorization.replace('JWT ',"") // JWT uieauroewuroiweuroiewuoriuweoiruoiweuroiweur
            const payload = JWT.verify(token,SECRET_KEY)
            if(payload){
                const {id_user} = payload;
                const [user] = await UserModel.find({id_user}).catch(()=> res.status(400).send({message:"no podemos hacer esto"}))
                if(!user) return res.status(404).send({message:"Usuario no encontrado"})
                req.user = user; // iniciando la sesion en el backend, esto lo puedo ocupar o en otros middlewares o en el controller
                next(); //pasa al siguiente middleware o al controller 
            }else{
                return res.status(401).send({message:"token invalido"})
            }
        }else{
            return res.status(400).send({message:"Header no fue enviado"})
        }
}catch(error){
    return res.status(400).send(error)
}

}