const express =  require('express');
//const {MongoClient} = require('mongodb');
const { connect, get} = require('./db');
const app = express();
const MONGO_URI = "mongodb+srv://edwin:prueba123@cluster0.vp6hz.mongodb.net/apimongo?retryWrites=true&w=majority"
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/users',(req,res) => {
    // regresar todos los users
    const database = get().db('apimongo')
    const collection = database.collection('users')
    collection.find({}).toArray(function(error, results){
            res.status(200).send(results)

    })
});

app.post('/users', (req,res) => {
    //crear un nuevo user
    const database = get().db('apimongo')
    const collection = database.collection('users')
    collection.insertOne(req.body, function(err,result){
        if(err) throw err
        const [user] =  result.ops;
        res.status(201).send(user)
    })
       

});

// app.get('/users',(req,res) => {
//     // regresar todos los users
//     MongoClient.connect(MONGO_URI,function(err,db){
//         if(err) throw err;
//         const database = db.db('apimongo')
//         const collection = database.collection('users')
//         collection.find({}).toArray(function(error, results){
//             res.status(200).send(results)
//             db.close(); // terminamos de conectarnos al DB por seguridad
//         })
//     });
// });

// app.post('/users', (req,res) => {
//     //crear un nuevo user
//     MongoClient.connect(MONGO_URI,function(err,db){
//         if(err) throw err;
//         const database = db.db('apimongo')
//         const collection = database.collection('users')
//         collection.insertOne(req.body, function(err,result){
//             if(err) throw err
//             const [user] =  result.ops;
//             res.status(201).send(user)
//             db.close(); // terminamos de conectarnos al DB por seguridad
//         })
       
//     });

// });

connect(MONGO_URI,function(error){
    if(error){
        console.log("Unable to conect to mongo");
        process.exit(1) // termina con el server
    }else{
        console.log('conneted to database')
        app.listen(3000,() =>{
            console.log("Server ready!! 🚀");
        })
    }

})
