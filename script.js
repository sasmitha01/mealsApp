document.addEventListener("DOMContentLoaded", function () {
    const foodSearchInput = document.getElementById("food-search");
    const searchButton = document.getElementById("search-button");
    const foodItemsList = document.getElementById("food-items");

    // Define a sample dataset of rice and dal items
    const foodItems = [
        "Steamed Rice",
        "Fried Rice",
        "Basmati Rice",
        "Brown Rice",
        "Jasmine Rice",
        "Wild Rice",
        "Masoor Dal",
        "Toor Dal",
        "Chana Dal",
        "Moong Dal",
        "Urad Dal",
        "Arhar Dal",
        "Mix-veg Curry",
        "Paneer Curry",
        "Mushroom Curry",   
    ];
    searchButton.addEventListener("click", function () {
        const searchQuery = foodSearchInput.value.toLowerCase();
        const filteredFoodItems = foodItems.filter(item =>
            item.toLowerCase().includes(searchQuery)
        );

        displayFoodItems(filteredFoodItems);
    });
    function displayFoodItems(items) {
        foodItemsList.innerHTML = "";
        if (items.length > 0) {
            items.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                foodItemsList.appendChild(listItem);
            });
        } else {
            const noResults = document.createElement("li");
            noResults.textContent = "No results found";
            foodItemsList.appendChild(noResults);
        }
    }
});
