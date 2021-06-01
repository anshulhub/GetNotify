const express = require("express");
const { env } = require("process");
const PORT = process.env.PORT || 8000;
const path = require("path");
const app = express();

const static_path = path.join(__dirname,"../public")
// console.log(static_path)

app.use(express.static(static_path))

app.get("/",(req,res)=>{
    res.send("index")
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})