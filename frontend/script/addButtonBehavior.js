const { text } = require("body-parser");

//elemeents
let userArea = document.getElementById("userArea");
let addButton = document.getElementById("addButton");
let textInput = document.getElementById("textInput");


addButton.addEventListener("click", () => {
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
    for (let i = 0; i < textInput.innerText; i++){
        if (textInput.innerText.at(i) == " "){
            newP_profileText.innerText = textInput.innerText.split(" ")[0][0] + textInput.innerText.split(" ")[1][0]
            isFoundSpace = true;
            break;
        }
    }
    if (!isFoundSpace){
        newP_profileText.innerText = textInput.innerText.at(0);
    }
    newDiv_userProfile.appendChild(newP_profileText);

    let newDiv_userNameEmail = document.createElement("div")
    newDiv_userNameEmail.className = "userNameEmail";
    newDiv_userBox.appendChild(newDiv_userNameEmail);
    let newP_userName = document.createElement("p");
    newP_userName.className = "userName";
    newP_userName.innerText = textInput.innerText;
    newDiv_userNameEmail.appendChild(newP_userName);
    let newInputText_userEmailInput = document.createElement("input"); //input first
    newInputText_userEmailInput.className = "userEmailInput";
    newInputText_userEmailInput.type = "text";
    newDiv_userNameEmail.appendChild(newInputText_userEmailInput);
    newInputText_userEmailInput.focus();
    newInputText_userEmailInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter"){
            let newP_userEmail = document.createElement("p");
            newP_userEmail.className = "userEmail";
            newP_userEmail.innerText = newInputText_userEmailInput.value;
            newDiv_userNameEmail.appendChild(newP_userEmail);
            newInputText_userEmailInput.remove(); //delete it after
        }
    })

    let newDiv_favoriteClickArea = document.createElement("div");
    newDiv_favoriteClickArea.className = "favoriteClickArea";
    newDiv_favoriteClickArea.appendChild(newDiv_userBox);
    let newDiv_favoriteStar = document.createElement("div");
    newDiv_favoriteStar.className = "favoriteStar isNotFavorite";

    textInput.value = "";
})

