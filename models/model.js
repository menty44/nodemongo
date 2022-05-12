const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    sacks: {
        required: true,
        type: Number
    },
    goals: {
        required: true,
        type: Number
    },
    touchdown: {
        required: true,
        type: Number
    },
    rushing_yards: {
        required: true,
        type: Number
    },


})

module.exports = mongoose.model('Team_player', dataSchema)