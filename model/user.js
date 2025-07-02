const mongoose = require('mongoose')

const user = mongoose.Schema({
    url: {
        type: String,
    },
    alias: {
        type: String,
    }
})

module.exports = mongoose.model('users', user);