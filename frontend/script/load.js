//element focused for this script
let statusText = document.getElementById("statusText");

//variable
let allData;

window.addEventListener("load", async () => {

    userArea.innerText = "";
    
    console.log("loading data from local server...");
    memberCounter.innerText = "";
    statusText.innerText = "Fetching member data... "
    try{
        let res = await fetch("http://localhost:3000/users", {
            method: "GET"
        })

        let fetchData = await res.json();
        allData = fetchData;
        if(allData.length > 0){
            //if theres something, render it
            renderData(allData);
            console.log("rendering")
        }  
        statusText.innerText = "member loaded";
        memberCounter.innerText = allData.length;
    } catch (error){
        console.log("server currently inactive")
        subtitle.innerText = "Server inactive, could not fetch member(s) data";
    }   
})

