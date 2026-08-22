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
        let isFavorite = false;
        newDiv_favoriteClickArea.addEventListener("click", () => {
            if (isFavorite){
                isFavorite = false;
                favoriteCounter.innerText = Number(favoriteCounter.innerText) - 1;
            } else {
                isFavorite = true;
                favoriteCounter.innerText = Number(favoriteCounter.innerText) + 1;
            }
            newDiv_favoriteStar.classList.toggle("isNotFavorite");
            newDiv_favoriteStar.classList.toggle("isFavorite");
        })
    }
}