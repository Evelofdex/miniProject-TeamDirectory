const fs = require("fs")
const express = require("express")
const app = express();

//checking, make one if its not there
if (!fs.existsSync("./data/data.json")){
    let data = []
    fs.writeFileSync("./data/data.json", JSON.stringify(data));
} 

app.get("/", (req, res) => {
    console.log("pinged");
})

app.listen(3000, () => {
    console.log("using local port 3000...")
})



