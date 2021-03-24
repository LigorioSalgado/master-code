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
        expect(async () => await userService.createUser()).rejects.toThrow();
    })

    it('Esto debe devolver un arrglo de usuarios', async() => {
        const  mockUser1 = {
            name:"test user",
            email:"testuser1@gmail.com",
            password:"test"
        }

        const mockUser2 = {
            name:"test user",
            email:"testuser2@gmail.com",
            password:"test"
        }
        await userService.createUser(mockUser1);
        await userService.createUser(mockUser2);

        const users =  await userService.findUsers();

        expect(users).toHaveLength(2)
        expect(users[0]).toHaveProperty('_id')

    })


})
