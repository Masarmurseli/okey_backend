const express = require("express")
const app = express()
const PORT = 8080
const cors = require("cors");

const testRoute = require("./routes/testRoute")


const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}

app.use(cors(corsOptions)),
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))



app.use("/test", testRoute)


app.listen(PORT, () => console.log(`Server ist running on ${PORT}.`))