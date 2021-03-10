const { get } = require('../db');


function getCollection(name){
    const database = get().db('apimongo');
    const collection = database.collection(name);
    return collection
}

module.exports = {

    findAll: () =>{
        
        return new Promise((resolve,reject) =>{
            getCollection('users').find({}).toArray(function(err,result) {
                if(err)reject(err);
                resolve(result)
            })
        });
    },

    create: (data) =>{

        return new Promise((resolve,reject) =>{
            getCollection('users').insertOne(data, function(err,result){
                if(err) reject(err);
                const [obj] = result.ops
                resolve(obj);
            })

        });

    }


}