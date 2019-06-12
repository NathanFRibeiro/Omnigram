const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Conectando com o mongo db
mongoose.connect('mongodb+srv://week:week@cluster0-6iy5p.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3333);