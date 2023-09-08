const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/database')
const Handlebars = require('handlebars');

const userRoutes = require('./routes/usersRoutes')
const postsRoutes = require('./routes/postsRoutes')

const app = express()
const port = 3000

app.use(express.static('public'))
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(
    express.urlencoded({
        extended: true
    })
)


Handlebars.registerHelper('isEqual', function (a, b, options) {
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this);
});

app.use(express.json())

app.use('/users', userRoutes)
app.use('/posts', postsRoutes)


app.listen(port)