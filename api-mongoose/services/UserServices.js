const Users = require('../models/Users');
// en service van aestar todo lo que tenga que ver con la BD

const createUser = async(user) =>{
    if(!user) throw new Error("No hay un usario")
    const dbUser = await Users.create(user)
    return dbUser
}

const findUsers = async() => {
    return await Users.find({});
}
const findUserbyId = async(id) => {
    // return new Promise ((resolve,reject) =>{
    //     Users.findById(id).then((user) =>{
    //         if(!user) reject(new Error("Usuario no encontrado"))
    //         resolve(user)
    // }).catch((error) =>{
    //     reject(error)
    // })
    // })
    const user = await Users.findById(id);
    if(!user) throw new Error("Usuario no encontrado")
    return user
}

const updateUser = async (id,user) =>{
    if(!user) throw new Error('Se necesita un objeto usuario') 
    const userDB = await Users.updateOne({_id:id},{$set:user},{new:true});
    if(!userDB) throw new Error("Usuario no encontrado")
    return userDB
}

const deleteUser = async (id) => {
    return await Users.deleteOne({_id:id})
}

module.exports = {
    createUser,
    findUsers,
    findUserbyId,
    updateUser,
    deleteUser
}
