const fs = require("fs")
const express = require("express")
const app = express();

//checking, make one if its not there
if (!fs.existsSync("./data/data.json")){
    let data = [{
        name: "Someone Example",
        email: "someone@example.com",
        isFavorite: false,
        id: 1
    }]
    fs.writeFileSync("./data/data.json", JSON.stringify(data));
} 

app.get("/users", (req, res) => {
    res.json(JSON.parse(fs.readFileSync("./data/data.json")))
})

app.listen(3000, () => {
    console.log("using local port 3000...")
})



