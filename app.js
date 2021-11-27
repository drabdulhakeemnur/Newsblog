const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const ejs= require('ejs')
const path = require('path')
dotenv.config({ path: "./config/config.env" });
// express setup
const app= express()
app.use(express.json())


// db setup
const db=process.env.DATABASE_LOCAL_Url
// mongoose.connect('db')

// import routes
const articlesRouter=require('./src/routes/articlesroute')

// middlewares
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('views', "public/views")
app.set('view engine', 'ejs')



// routes
app.use('/articles', articlesRouter)






// server 
const port= process.env.PORT || 3030
app.listen(port, ()=>{
    console.log(`Server running on development mode on ${port} `)
})