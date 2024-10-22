const moongoose = require('mongoose');
require('dotenv').config()
const mongoDBString = process.env.MONGO_DB_URL;

console.log(mongoDBString)

moongoose.connect(mongoDBString);
const database= moongoose.connection;

database.on('error', (error)=>{
    console.log('Error in connecting: ', error)
})

database.once('connected', ()=>{
    console.log('Connected Successfully')
})