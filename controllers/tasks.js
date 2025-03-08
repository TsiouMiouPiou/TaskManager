// Controllers are hanldling requests and responses and perform CRUD operations
// Inserting the model schema
const Task = require('../models/Task')

// async is working on the background while I can do other things and awain means that its ready
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})    // to find all the documents in the task collection               
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json(error)
    }
}
const createTask = async (req, res) => {
    try {                       // IN order to get the instance we go model.create
         const task = await Task.create(req.body) // task will be the object inside the json 
          res.status(201).json({ task }) // correct status is 201
     } catch (error) {
        res.status(500).json(error) // Wrong status is 500
     }
}
const getTask = (req, res) => {
    res.send("Get Task");
}
const updateTask = (req, res) => {
    res.send("Update Task");
}
const deleteTask = (req, res) => {
    res.json({id:req.params.id})
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}