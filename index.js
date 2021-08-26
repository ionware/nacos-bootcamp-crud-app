const express = require('express')
const {get : getController, about} = require('./controllers/appController')

const app = express()

app.get('/', getController)

app.get('/about', about);

app.listen(3000);

app.get()