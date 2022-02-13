// fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
// .then(res => res.json())
// .then(data => displayMeals(data));

// const displayMeals = meals => {
//     const mealsDiv = document.getElementById('meals');
//     for (let i = 0; i < meals.length; i++) {
//         const meal = meals[i];
//         const mealDiv = document.createElement('ul');
//        const h1 =document.createElement('h1');
//        h1.innerText = meal.strMeal;
//        mealDiv.appendChild(h1);
//        mealsDiv.appendChild(mealDiv);
        
//     }
    

// }

const createMealInfoDiv = (meal, mealInput) => {
    const mealPhoto = meal.strMealThumb;
    const mealName = meal.strMeal;
    const mealInfo = `
    <a href="#meal-details-section" style="text-decoration: none; color: black;">
        <div onclick="getMealDetails(${meal.idMeal})" class="card border-0 shadow cursor" style="width: 18rem; border-radius: 10px">
            <img src="${mealPhoto}" class="card-img-top" style="width: 18rem; border-radius: 10px 10px 0 0" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${mealName}</h5>
            </div>
        </div>
    </a>
    `
    const mealInfoSection = document.getElementById('meal-info-section');
    const mealInfoDiv = document.createElement('div');
    mealInfoDiv.className = 'col-xm-1 col-sm-1 col-md-3 p-3 d-flex justify-content-center';
    mealInfoDiv.innerHTML = mealInfo;
    mealInfoSection.appendChild(mealInfoDiv);
}





