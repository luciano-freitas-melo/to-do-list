const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@todolist.dqe07gw.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log("MongoDb CONECTADO!"))
        .catch((err) => console.log(err))
}


module.exports = connectToDb