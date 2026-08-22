addButton.addEventListener("click", () => {

    let nameValue = textInput.value; //before it gets deleted;

    if (noUser){ //just in case if the thing still exist, it will now cease to exist when adding
        noUser.remove();
    }

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
    for (let i = 0; i < textInput.value.length; i++){
        if (textInput.value.at(i) == " "){
            newP_profileText.innerText = textInput.value.split(" ")[0][0] + textInput.value.split(" ")[1][0]
            isFoundSpace = true;
            break;
        }
    }
    if (!isFoundSpace){
        newP_profileText.innerText = textInput.value.at(0);
    }
    newDiv_userProfile.appendChild(newP_profileText);

    let newDiv_userNameEmail = document.createElement("div")
    newDiv_userNameEmail.className = "userNameEmail";
    newDiv_userBox.appendChild(newDiv_userNameEmail);
    let newP_userName = document.createElement("p");
    newP_userName.className = "userName";
    newP_userName.innerText = textInput.value;
    newDiv_userNameEmail.appendChild(newP_userName);
    let newInputText_userEmailInput = document.createElement("input"); //input first
    newInputText_userEmailInput.className = "userEmailInput";
    newInputText_userEmailInput.type = "text";
    newDiv_userNameEmail.appendChild(newInputText_userEmailInput);
    newInputText_userEmailInput.focus();
    newInputText_userEmailInput.addEventListener("keydown", async (event) => {
        if (event.key === "Enter"){
            let newP_userEmail = document.createElement("p");
            newP_userEmail.className = "userEmail";
            newP_userEmail.innerText = newInputText_userEmailInput.value;
            newDiv_userNameEmail.appendChild(newP_userEmail);

            let inputNewData = {
                name: nameValue,
                email: newInputText_userEmailInput.value,
                isFavorite: false //default
            }

            newInputText_userEmailInput.remove(); //delete it after
            
            //send it
            console.log("sending..")
            let res = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(inputNewData)
            })
        }
    })

    let newDiv_favoriteClickArea = document.createElement("div");
    newDiv_favoriteClickArea.className = "favoriteClickArea";
    newDiv_userBox.appendChild(newDiv_favoriteClickArea);
    let newDiv_favoriteStar = document.createElement("div");
    newDiv_favoriteStar.className = "favoriteStar isNotFavorite";
    newDiv_favoriteClickArea.appendChild(newDiv_favoriteStar);
    newDiv_favoriteClickArea.addEventListener("click", () => {
        newDiv_favoriteStar.classList.toggle("isNotFavorite");
        newDiv_favoriteStar.classList.toggle("isFavorite");
    })

        
    textInput.value = "";
})



