const express = require('express');
const mongoose = require('mongoose');
const Users = require('./models/Users');
const app = express();
const MONGO_URI = "mongodb+srv://edwin:prueba123@cluster0.vp6hz.mongodb.net/apimongo?retryWrites=true&w=majority"

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// esta es la conexion a mongo
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}) // inicia la conexion
const db = mongoose.connection // aqui esta guardada el status de la conexion

db.on('error',function(err){ // se va a ejecutar varia veces si encuentra un error en la conexion
    console.log('Connection error', err)
})

db.once('open', function(){ // esto se va a ejecutar una vez y as vez solo cuando se haya completado la conexion
    console.log('Connected to database!!')
})

app.get('/users', (req,res) => {
    Users.find({}).then((result) =>{
        res.status(200).send(result)
    })
})

app.post('/users', (req, res) => {
    Users.create(req.body).then((user) =>{
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })

})
// app.post('/users', async(req,res)=>{ 
//     try{
//      const user = await Users.create(req.body) 
//      return res.status(201).send(user)
//     }catch(error){
//          return res.status(400).send(error)
//     }
// })

app.listen(3000,() =>{
    console.log("Server ready 🚀!!!")
})