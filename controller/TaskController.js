const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasksList = await Task.find();
        return res.send(tasksList);
        
    } catch (err) {
        res.status(499).send({ error: err.message })
    }
}

const createTask = async (req, res) => {
    const task = req.body;

    if (!task) {
    }
    try {
        await Task.create(task)

    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

module.exports = {
    getAllTasks,
    createTask
}