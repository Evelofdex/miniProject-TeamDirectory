//element focused for this script
let statusText = document.getElementById("statusText");


window.addEventListener("load", async () => {
    console.log("loading data from local server...");
    memberCounter.innerText = "";
    statusText.innerText = "Fetching member data... "
    try{
        let res = await fetch("http://localhost:3000/users", {
            method: "GET"
        })

        let fetchData = await res.json();
        let allData = fetchData;
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

function renderData(data){
    userArea.innerHTML = "";

    for (let k = 0; k < data.length; k++){
        let newDiv_userBox = document.createElement("div");
        newDiv_userBox.className = "userBox";
        userArea.appendChild(newDiv_userBox);
    
    
        let newDiv_userProfile = document.createElement("div");
        newDiv_userProfile.className = "userProfile";
        newDiv_userBox.appendChild(newDiv_userProfile);
        let newP_profileText = document.createElement("p");
        newP_profileText.className = "profileText";
        let isFoundSpace = false;
        //check for space
        for (let i = 0; i < data[k].name.length; i++){
            if (data[k].name.at(i) == " "){
                newP_profileText.innerText = data[k].name.split(" ")[0][0] + data[k].name.split(" ")[1][0]
                isFoundSpace = true;
                break;
            }
        }
        if (!isFoundSpace){
            newP_profileText.innerText = data[k].name.at(0);
        }
        newDiv_userProfile.appendChild(newP_profileText);
    
        let newDiv_userNameEmail = document.createElement("div")
        newDiv_userNameEmail.className = "userNameEmail";
        newDiv_userBox.appendChild(newDiv_userNameEmail);
        let newP_userName = document.createElement("p");
        newP_userName.className = "userName";
        newP_userName.innerText = data[k].name;
        newDiv_userNameEmail.appendChild(newP_userName);
        let newP_userEmail = document.createElement("p");
        newP_userEmail.className = "userEmail";
        newP_userEmail.innerText = data[k].email;
        newDiv_userNameEmail.appendChild(newP_userEmail);
    
        let newDiv_favoriteClickArea = document.createElement("div");
        newDiv_favoriteClickArea.className = "favoriteClickArea";
        newDiv_userBox.appendChild(newDiv_favoriteClickArea);
        let newDiv_favoriteStar = document.createElement("div");
        if (data[k].isFavorite){
            newDiv_favoriteStar.className = "favoriteStar isFavorite";    
        } else {
            newDiv_favoriteStar.className = "favoriteStar isNotFavorite";
        }
        newDiv_favoriteClickArea.appendChild(newDiv_favoriteStar);
        newDiv_favoriteClickArea.addEventListener("click", () => {
            newDiv_favoriteStar.classList.toggle("isNotFavorite");
            newDiv_favoriteStar.classList.toggle("isFavorite");
        })
    }
}


