const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoutes');

require('dotenv').config();

const app =express()
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
//connect mongoose
mongoose
    .connect(process.env.MONGODB_URL)
    .then( () => {
        console.log ('connected into mongodb successfully !!!')
    
    } )
    .catch( (error) => console.log(error));


    app.get('/test', (req, res) => {
        return res.json({
            message:"Hello World"
        })
    })

app.use(routes)

app.listen( PORT, ()=> console.log(`listening on :${PORT}`))









