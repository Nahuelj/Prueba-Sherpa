import express from 'express'

const app = express()
app.use(express.json())

const PORT = 8080

app.listen(PORT, () => {
    console.log("server corriendo en http://localhost:8080");
})

app.get("/ping", (req, res) => {
    console.log("pong")
    res.send("pong")
})