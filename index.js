const express = require("express")
const mongoose = require("mongoose")
const todoRoutes = require("./src/routes/todoRoutes")
const cors = require("cors")

const PORT = 3030;
const app = express();
mongoose.set('strictQuery', true);

const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://Valentina:f.Y89dZqmT4GYFm@mongodb101.tkldh7i.mongodb.net/?retryWrites=true&w=majority", connectionOptions);
const connection = mongoose.connection

connection.once('open', () => {
    console.log('Db is connected')
})

app.use("/todos", todoRoutes);


app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT)
})

