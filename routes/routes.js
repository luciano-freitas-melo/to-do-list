const routes = require("express").Router()
const TaskController = require("../controller/TaskController")



routes.get("/", TaskController.getAllTasks)
routes.put("/create", TaskController.createTask)

module.exports = routes