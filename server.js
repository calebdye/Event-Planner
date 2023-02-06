const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const guestRoutes = require('./routes/guest')
const vendorRoutes = require('./routes/vendor')
const budgetRoutes = require('./routes/budget')
const mainHomeRoutes = require('./routes/mainHome')
const methodOverride = require("method-override");

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
//Use forms for put / delete
app.use(methodOverride("_method"));

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
app.use('/guest', guestRoutes)
app.use('/vendor', vendorRoutes)
app.use('/budget', budgetRoutes)
app.use('/mainHome', mainHomeRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    