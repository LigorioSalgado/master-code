const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const UserController = require('./controllers/UserController');
const manageFiles = require('./middlewares/manageFiles');
const app = express();
const MONGO_URI = "mongodb+srv://edwin:prueba123@cluster0.vp6hz.mongodb.net/apimongo?retryWrites=true&w=majority"
//const MONGO_URI = `mongodb://db:27017/${process.env.MONGO_NAME}` // aqui me estoy conectando desde el contenedor de mongo

const storage = process.env.NODE_ENV === "production" 
? multer.memoryStorage() 
: multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads')
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const mult = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024  // limite de 5 mb
    }
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/uploads',express.static('uploads'))

// esta es la conexion a mongo
if(process.env.NODE_ENV !== 'test'){
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }) // inicia la conexion
}

const db = mongoose.connection // aqui esta guardada el status de la conexion

db.on('error',function(err){ // se va a ejecutar varia veces si encuentra un error en la conexion
    console.log('Connection error', err)
})

db.once('open', function(){ // esto se va a ejecutar una vez y as vez solo cuando se haya completado la conexion
    console.log('Connected to database!!')
})

app.get('/users',UserController.fetch)

app.post('/users',[mult.single('photo'),manageFiles], UserController.create)

app.get('/users/:id', UserController.findOne)

app.patch('/users/:id',[mult.single('photo'),manageFiles], UserController.update)

app.delete('/users/:id', UserController.remove)

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

module.exports = app;