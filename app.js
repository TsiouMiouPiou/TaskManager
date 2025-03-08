const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect') //This is a function
const port = 3000

require('dotenv').config()
// middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) =>{
    res.send("Task Manager App")
});

app.use('/api/v1/tasks', tasks)

// Its a good tactic to try catch block in async await
const start = async () => {
    try{                    // we want to pass the value to DB
        await connectDB(process.env.MONGO_URI) // We start the server only if the connection to DB is ok!!!
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {   // Otherwise we throught an error
        console.log(error);
    }
}
start()

// USERNAME = ganastasiou
// PASSWORD = afjIaGBOybp62xPg