// vamos a jugar con la conexion de mongo aca 
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer(); //estoy un mini mongo server


const connect = async () =>{
    const uri = await mongod.getUri();
    const mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }

    await mongoose.connect(uri,mongooseOptions);
}

const closeDatabse = async () =>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
} // estos se va a jecutar cuando acabe todos los test

const clearDatabase = async() =>{
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
       
    }

}// esto se va ejecutar cadavez que se ejecuta un test

module.exports = {
    connect,
    closeDatabse,
    clearDatabase
}