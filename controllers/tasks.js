// Controllers are hanldling requests and responses and perform CRUD operations
// Inserting the model schema
const Task = require('../models/Task')

// async is working on the background while I can do other things and awain means that its ready
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}) // to find all the documents in the task collection               
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json(error)
    }
}
const createTask = async (req, res) => {
    try {                       // IN order to get the instance we go model.create
         const task = await Task.create(req.body) // task will be the object and we do a request in the body
          res.status(201).json({ task }) // correct status is 201 - will be displayed in the json under the body
     } catch (error) {
        res.status(500).json(error) // Wrong status 
     }
}
const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params // Object Destructuring - Extract id from req.params adn rename it as taskID
//      const taskID = req.params.id

        const task = await Task.findOne({ _id:taskID }); // Wait for the Database Query to finish
        // We put underscore cause is a unique identifier.
        if(!task){
            return res.status(404).json({ msg:`No task with id: ${taskID}`} )
        }
        res.status(200).json({ task }) // This is the correct parameter that we are passing done as long as it's correct
    } catch (error) {
        res.status(500).json({ error })
    }
}
const updateTask = (req, res) => {
    res.send("Update Task");
}
const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({ _id:taskID })
        if(!task){
            res.status(404).json({msg:`No task do delete with this id: ${taskID}`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}