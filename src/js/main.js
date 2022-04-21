console.log('hello');
const searchMeals = () => {
    const searchInput = document.getElementById('searchInput')
    const searchText = searchInput.value;
    // searchInput.value = '';
    console.log(searchText);


     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals));

}
const displayFood = foods => {
    // console.log(foods);
    foods.forEach(food => {
        // console.log(food);
        const showMeals =  document.getElementById('show-meals')
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">Catagory : ${food.strCategory}</p>
                  <p class="card-text">Area : ${food.strArea}</p>
                  <button onclick="showFoodDetails(${food.idMeal})" type="button" class="btn btn-warning">Info</button>
                </div>
              </div>
        `;
        showMeals.appendChild(div);
        
    })

}

// take food Id and call api
const showFoodDetails = foodId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.meals[0]))
}
