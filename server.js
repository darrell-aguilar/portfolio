const express = require("express")
const app = express()
const port = 5000

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile("index.html")
})

app.post('/email', (req,res) => {
    res.send("Send email endpoint")
})

app.listen(port, () => {
    console.log(`Server listening on port number ${port}`)
})