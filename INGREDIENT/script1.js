const ingredientList = {
    flavorEnhancer: "MSG",
    color: "Caramel",
    preservatives: "Sodium Benzoate",
    antioxidants: "Vitamin C",
    antibiotics: "Penicillin"
};

function searchIngredients() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const searchResultsDiv = document.getElementById("result-box");
    searchResultsDiv.innerHTML = "";

    for (const prop in ingredientList) {
        const ingredient = ingredientList[prop].toLowerCase();
        if (ingredient.includes(searchInput)) {
            const resultItem = document.createElement("div");
            resultItem.textContent = `${prop}: ${ingredientList[prop]}`;
            searchResultsDiv.appendChild(resultItem);
        }
    }
}