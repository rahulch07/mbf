const express = require('express');
const router = express.Router();

router.get('/getTicketData', (req, res)=>{
    res.send('Data Sent Successfully!!!')
})

router.post('/postTicketData/:id', (req,res)=>{
    res.send(req.params.id)
})

module.exports = router;