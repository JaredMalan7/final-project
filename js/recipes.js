export const buildRecipes = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5165d2660cmsh21763977e15dcabp1914a1jsn1456bd73998f',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options);
      const recipes = await response.json();
  
      const mainSection = document.querySelector('main');
      mainSection.innerHTML = '';
  
      recipes.results.forEach(recipe => {
        const recipeEl = document.createElement('div');
        recipeEl.classList.add('recipe');
  
        const recipeLink = document.createElement('a');
        recipeLink.href = `https://tasty.co/recipe/${recipe.slug}`;
        recipeLink.target = '_blank';
  
        const nameEl = document.createElement('h2');
        nameEl.textContent = recipe.name;
        recipeLink.appendChild(nameEl);
  
        const thumbnailEl = document.createElement('img');
        thumbnailEl.src = recipe.thumbnail_url;
        thumbnailEl.alt = recipe.thumbnail_alt_text || '';
        recipeLink.appendChild(thumbnailEl);
  
        recipeEl.appendChild(recipeLink);
  
        const descriptionEl = document.createElement('p');
        descriptionEl.textContent = recipe.description;
        recipeEl.appendChild(descriptionEl);
  
        const servingsEl = document.createElement('p');
        servingsEl.textContent = `Servings: ${recipe.yields}`;
        recipeEl.appendChild(servingsEl);
  
        mainSection.appendChild(recipeEl);
      });
    } catch (error) {
      console.error(error);
    }
  };
  