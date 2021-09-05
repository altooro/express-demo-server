const express = require('express')
const app = express();

let users_map = { "1": { "name": "John Doe", "age": 25 }, "2": { "name": "Elizabeth Windsor", "age": 90 } }

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to demo express server")
});

app.get('/users', (req, res) => {
    res.send(users_map)
})

app.get('/user/:userId', (req, res) => {
    res.send(users_map[req.params["userId"]])
})

app.post('/users/:userId', (req, res) => {
    users_map[req.params["userId"]] = req.body
    res.send(req.body)
})

app.listen(8000, () => console.log("localhost:8000"))