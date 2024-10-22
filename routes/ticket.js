const express = require('express');
const router = express.Router();
const {Ticket} = require('../models/ticket')

router.get('/getAllTickets', async (req, res)=>{
    try{
        const response = await Ticket.find()
        res.status(200).json(response)
    }catch(error){
        res.status(400).send("Error: ", error)
    }
})
router.get('/getTicketById', async(req,res)=>{
    const id = req.body.id;

    try{
        const response = await Ticket.findById(id);
        res.status(200).json(response)
    }catch(error){
        res.status(400).send('Error: ', error)
    }
})

router.post('/postTicketData', async (req,res)=>{
    const region = req.body.region
    const status = req.body.status

    try{
        await Ticket.create({
            region: region,
            status: status
        })
        res.status(200).send("Successfully Created Ticket!!!")
    }catch(error){
        res.status(400).send("Error: ", error)
    }

    
})


module.exports = router;