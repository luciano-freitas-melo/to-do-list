const routes = require("express").Router()
const { getAll } = require("../controller/TaskController")



routes.get("/", getAll)


module.exports = routes