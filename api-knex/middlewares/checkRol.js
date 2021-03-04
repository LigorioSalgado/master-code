const { compareSync } = require("bcrypt");

module.exports = (rol) => { // funcion generica
    return (req,res,next) =>{
        console.log(req.user)
        if(rol === req.user.rol){
            next();
        }else{
            return res.status(403).send({message:"No tiene permiso para esto"})
        }

    }

}