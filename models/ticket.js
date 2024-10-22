const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    region: {
        require: true,
        type: String
    },
    status: {
        require: true,
        type: String
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports= {Ticket}