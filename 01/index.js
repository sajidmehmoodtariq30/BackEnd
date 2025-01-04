require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000 // we will be using the port from the environment variable

const data = {
    name: 'Sajid Mehmood',
    age: 18,
    email: 'sajidmehmoodtariq5@gmail.com'
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<div><h1>Enter you credentials</h1><input type = "text" /></div>')
})

app.get('/home', (req, res) => {
    res.send('<h1>Hello Sajid</h1>')
})

app.get('/data', (req, res) => {
    res.json(data)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})