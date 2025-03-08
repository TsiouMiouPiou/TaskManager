// Routes define what should happend when a user makes a requests to a specific URL

const express = require("express");
const router = express.Router();

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router