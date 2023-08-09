// When the search form is submitted, get the nutrition data and update the table
let foodSearchForm = document.querySelector('#food-search');
if (foodSearchForm != null) {
    foodSearchForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const food = document.querySelector('#food-input').value;
        const data = await getNutritionData(food);
        
        // Clear out previous search results
        document.querySelector('#nutrition tbody').innerHTML = '';
    
        // Create and populate a table row for each food item
        data.foods.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.food_name}</td>
                <td>${item.nf_calories}</td> <!-- Calories -->
                <td>${item.nf_protein}</td> <!-- Protein -->
                <td>${item.nf_total_fat}</td> <!-- Total Fat -->
                <td>${item.nf_total_carbohydrate}</td> <!-- Carbs -->
            `;
            document.querySelector('#nutrition tbody').appendChild(row);
        });
    });
}

// When typing in the search box, get matching foods and update the suggestions
let foodInput = document.querySelector('#food-input');
let suggestions = document.querySelector('#suggestions');

if (foodInput != null && suggestions != null) {
    foodInput.addEventListener('input', async event => {
        const value = event.target.value;
        
        if (value.length > 2) {
            const data = await getMatchingFoods(value);
            
            // Clear out old suggestions
            suggestions.innerHTML = '';
    
            // Add a suggestion for each matching food
            data.common.forEach(item => {
                const option = document.createElement('div');
                option.textContent = item.food_name;
                option.addEventListener('click', () => {
                    // When a suggestion is clicked, replace the input with the suggestion and clear the suggestions
                    foodInput.value = item.food_name;
                    suggestions.innerHTML = '';
                    foodSearchForm.dispatchEvent(new Event('submit'));
                });
                suggestions.appendChild(option);
            });
        } else {
            // If the input is too short, clear the suggestions
            suggestions.innerHTML = '';
        }
    });
}

async function getMatchingFoods(query) {
    const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${encodeURIComponent(query)}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "x-app-id": "a8d20fa0",
            "x-app-key": "bc5960a841241bf430496e6c51da32bf",
        }
    });

    const data = await response.json();
    return data;
}

async function getNutritionData(query) {
    const url = `https://trackapi.nutritionix.com/v2/natural/nutrients`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "x-app-id": "a8d20fa0",
            "x-app-key": "bc5960a841241bf430496e6c51da32bf",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: query
        })
    });

    const data = await response.json();
    return data;
}

window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('#loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
});
