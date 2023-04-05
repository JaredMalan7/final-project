export function buildRecipes(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5165d2660cmsh21763977e15dcabp1914a1jsn1456bd73998f',
            'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
    };
    
    fetch('https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup', options)
        .then(response => response.json())
        .then(response => {
            const recipesContainer = document.createElement('div');
            recipesContainer.classList.add('recipes-container');

            response.searches.forEach(search => {
                const recipeItem = document.createElement('div');
                recipeItem.classList.add('recipe-item');
                recipeItem.textContent = search;
                recipesContainer.appendChild(recipeItem);
            });

            const main = document.querySelector('main');
            main.appendChild(recipesContainer);
        })
        .catch(err => console.error(err));
}
