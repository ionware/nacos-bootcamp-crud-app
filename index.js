const express = require('express')
const path = require('path')

const app = express()

// SETUP STATIC FILES - name of static files folder is 'assets'
app.use(express.static(path.resolve(__dirname, 'assets')))

// MIDDLEWARE
app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

// TEMPLATE ENGINE - name of view folder is 'view'
app.set('view engine', 'pug')
app.set('views', './view')

module.exports = app;
