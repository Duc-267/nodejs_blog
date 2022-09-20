const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')

const app = express()
const port = 3000

const route = require('./routes')

//Http logger middleware
app.use(morgan('combined'))
app.use('/public',express.static(path.join(__dirname, '/public')))

//template engine setup
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))
console.log(path.join(__dirname, 'public'))

route(app)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})