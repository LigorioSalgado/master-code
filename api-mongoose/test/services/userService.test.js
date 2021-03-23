const mongoose = require('mongoose');
const dbHandler = require('../db-handler');
const userService = require('../../services/UserServices');
const userModel = require('../../models/Users');

beforeAll(async () => await dbHandler.connect());
// antes de los test ejecuta esto

afterEach(async () => await dbHandler.clearDatabase());
//despues de cada test ejecuta esto

afterAll(async () => await dbHandler.closeDatabse());
// despues de todos los test ejecuta esto

describe('User services', () =>{
    //Quiero probar todo user services

    it('Debo poder crear un usuario', async() =>{
        const mockUser = {
            name:"test user",
            email:"testuser@gmail.com",
            password:"test"
        }
        const userDb = await userService.createUser(mockUser);

        expect(mockUser.email).toBe(userDb.email);
        expect(userDb).toHaveProperty('_id');

    });

    it('Esto no debe generar un usuario', async() =>{
        
    })

})
