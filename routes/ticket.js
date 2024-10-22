const express = require('express');
const router = express.Router();
const {TIcket} = require('../models/ticket')

router.get('/getTicketData', (req, res)=>{
    res.send('Data Sent Successfully!!!')
})

router.post('/postTicketData', async (req,res)=>{
    const region = req.body.region
    const status = req.body.status

    try{
        await TIcket.create({
            region: region,
            status: status
        })
        res.send("Successfully Created Ticket!!!")
    }catch(error){
        res.send("Error: ", error)
    }

    
})

module.exports = router;