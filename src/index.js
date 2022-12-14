const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const db = require('./config/db')
var methodOverride = require('method-override')


//Connect to db
db.connect();

const app = express()
const port = 3000
const route = require('./routes')

app.use(methodOverride('_method'))

//Http logger middleware
app.use(morgan('combined'))
app.use('/public',express.static(path.join(__dirname, '/public')))

// encode middleware
app.use(express.urlencoded()); 
app.use(express.json());

//template engine setup
app.engine('handlebars', hbs.engine({
    helpers: {
        getIndex: a => a + 1
    }
}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources', 'views'))
console.log(path.join(__dirname, 'public'))

route(app)




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})