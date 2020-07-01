const express = require("express")
let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})

app.get("/name/:id", (req, res) => {
    res.send(`hello ${req.params.id}`)
})
app.get("/id", (req, res) => {
    res.send(`never GONNA HAPPEN`)
})
app.get("*", (req, res) => {
    res.send(`${req.url} is nonsense man!`)
})

app.listen(8888, () => console.log("listening"))