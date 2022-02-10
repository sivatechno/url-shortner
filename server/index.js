const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(express.json());
const frontUrl = process.env.FRONT_END_URL;

const corsOptions = {
    
    origin: "http://localhost:3000",
    credentials: true,            
    optionSuccessStatus: 200,
    exposedHeaders: ['x-auth-token'],
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

const userRoute = require('./routes/userRoutes')
const urlRoute = require('./routes/urlRoutes')

const URL = process.env.MONGO_URL;
const port = process.env.PORT;

app.use('/',userRoute);
app.use('/',urlRoute);
mongoose.connect(URL, { useNewUrlParser: true }, (error, result) => {
    if (error) {
        console.log(error)
    } else {
        console.log("mongodb connected")
        app.listen(port, () => console.log(`the server is running on ${port}`))
    }
})


