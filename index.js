const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/product.model')
const productRoutes = require('./routes/product.route')

app.listen(3000, ()=>{
    console.log('Server is Running on Port 3000');
})

// Middleware
app.use(express.json()) //middleware for CRUD through JSON FORMAT
app.use(express.urlencoded({extended: false})) //middleware that allows encodes form data to be CRUD-ed

// routes
app.use("/api/products", productRoutes)

mongoose.connect("mongodb+srv://admin:nFoSywKE0hkb1Il2@simple-crud-api.enbvlb6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=simple-crud-api")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed");
})