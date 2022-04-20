# FoodFasti
# search food from api of mealDB
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

# search meal
function name (searchMeals) 
 
 #show food dynamically
 <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">Catagory : ${food.strCategory}</p>
                  <p class="card-text">Area : ${food.strArea}</p>
                  <button type="button" class="btn btn-warning">Info</button>
                </div>
              </div>
        `;
        
  </div>
  
  
