const express = require('express')
const path = require('path')
const axios = require('axios')
const cors = require('cors')

// init app
const app = express()
// middwares 
// for json
app.use(express.json())
// to aviod cors issue 
app.use(cors())

// to server react frotent
// this required so BE can know where are FE files .
app.use(express.static(path.join(__dirname, 'dist')));

// API requset
app.get('/api/posts', (req,res)=>{
    try {
        axios.get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
        .then((response)=>{
            res.json(response.data)
        })
    } catch (error) {
        console.log(error)
    }
})


// API requset
app.get('/api/users', (req,res)=>{
    try {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            res.json(response.data)
        })
    } catch (error) {
        console.log(error)
    }
})

const port = 8080
app.listen(port,()=>{
    console.log('server runing on port '+ port)
})