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
router.get('/getTicketById/:id', async(req,res)=>{
    const id = req.params.id;

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

router.patch('/updateTicket/:id', async (req,res)=>{
    const id = req.params.id
    const updatedData = req.body
    try{
        const response = await Ticket.findByIdAndUpdate(id, updatedData)

        if(!response){
            return res.status(404).send('User not found')
        }
        res.status(200).json('Updated Successfully')
    }catch(error){
        console.log("Error: ", error)
    }
})

router.delete('/deleteById/:id', async(req,res)=>{
    const id = req.params.id;
    
    try{
        const response = await Ticket.findByIdAndDelete(id)
        res.status(200).send(response);
    }catch(error){
        console.error('Error: ', error)
    }
})


module.exports = router;