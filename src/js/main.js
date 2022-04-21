const showMeals =  document.getElementById('show-meals')  // line 28
const onload = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`
  fetch(url)
  .then(res => res.json())
    .then(data => displayFood(data.meals))
}
onload();
const searchMeals = () => {
    const searchInput = document.getElementById('searchInput')
    const searchText = searchInput.value;
    searchInput.value = '';
    // console.log(searchText);


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals));

    showMeals.textContent = '';

}
const displayFood = foods => {
  
    foods.forEach(food => {
        // console.log(food);
        
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
  .then(data => showDetails(data.meals[0]))
}

const showDetails = food => {
  console.log(food);
  const showDetail = document.getElementById('showDetails')
  showDetail.textContent = '';
  const div = document.createElement('div')
  div.classList.add('card')
  div.style.width = '18rem';
  div.innerHTML=`
  <img src="${food.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${food.strMeal} </h5>
    <p class="card-text">If you want to see how to make this food watch youtube or want to see the recepies click visit</p>
    <a href="${food.strSource}" class="btn btn-primary">visit</a>
    <a href="${food.strYoutube}" class="btn btn-primary">Youtoube</a>
  </div>
  `;

  showDetail.appendChild(div)

}