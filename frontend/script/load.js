//elements
let subtitle = document.getElementById("subtitle");


window.addEventListener("load", async () => {
    console.log("loading data from local server...");
    try{
        let res = await fetch("http://localhost:3000/users", {
            method: "GET"
        })

        let data = await res.json();
        console.log(data);
    } catch (error){
        console.log("server currently inactive")
        subtitle.innerText = "Server inactive, could not fetch member(s) data";
    }   
})

function renderData(){

}


