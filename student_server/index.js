const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods: methods")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers: Content-Type,Accept,Origin, X-Requested-With")
    next();
});
require('dotenv').config();

const mongoString = "mongodb+srv://test1234:anhthai99bn@cluster1.097sl.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoString, function (err) {
    if (err) {
        console.log(err)
    } else {
        app.listen(3000, () => {
            console.log(`Server Started at ${3000}`)
        })
    }
});
const routes = require('./routes/routes');
app.use('/api', routes)


