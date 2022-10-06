const express = require("express")
const app = express()
const cors = require('cors')
const routes = require("./routes/routes")
const connectToDb = require("./database/db")

const port = 3000

connectToDb()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))