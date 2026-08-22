const fs = require("fs")
const express = require("express")
const app = express();


app.get("/", (req, res) => {
    console.log("pinged");
})

app.listen(3000, () => {
    console.log("using local port 3000...")
})



