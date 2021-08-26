require('dotenv').config()
const app = require('./index')

// start database


// start application
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App listening on http://127.0.0.1:${PORT}`)
})