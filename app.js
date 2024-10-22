const express = require('express');
const cors = require('cors')
require('./db/index')
const routes = require('./routes/ticket');

const app = express();
app.use(cors())
const PORT= process.env.PORT


app.use(express.json());

app.use('/api', routes)
app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(PORT, ()=>{
    console.log("App listining on port: ", PORT)
})