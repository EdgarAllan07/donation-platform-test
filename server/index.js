import express from "express";
import router from "./routes/zbd.routes.js";
const app = express()

app.use(express.json())
app.use(router)

app.listen(4000)
console.log("Server listen on port 400")