const mongoose = require('mongoose');

// Here we specify the properties for our schema
const TaskSchema = new mongoose.Schema({
    // We need built-in validators cause I can pass in the postman no values and that would be ok but it's not
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true, // We trim the value in case it has spaces
        maxlength: [20, 'name can not be more than 20 chars'],
    },
    completed: {
        type: Boolean,
        default: false, 
    }
})

module.exports = mongoose.model('Task', TaskSchema)