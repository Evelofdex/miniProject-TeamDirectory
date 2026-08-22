let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    let dataInput = textInput.value.toLowerCase();
    let filteredData = allData.filter((data) => {
        return data.name.toLowerCase().includes(dataInput);
    })

    renderData(filteredData);
})