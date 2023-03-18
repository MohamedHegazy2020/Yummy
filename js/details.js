export class Details {
  constructor(id) {

    this.id = id;
    this.detailLink = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`;
    this.strMealThumb = $(".strMealThumb");
    this.strMeal = $(".strMeal");
    this.strInstructions = $(".strInstructions");
    this.strArea = $(".strArea");
    this.strCategory = $(".strCategory");
    this.strTags = $(".strTags");
    this.strYoutube = $(".strYoutube");
    this.strSource = $(".strSource");
    this.strIngredient = $(".strIngredient");
  }
  async getAPI() {

    $.getJSON(this.detailLink, (data) => {
      data.meals.map((meal) => {
        this.diplayMealDetail(meal);
      });
    });


  }
  diplayMealDetail(meal) {
    $("#allMeals").addClass("d-none");
    $("#mealDetails").removeClass("d-none");
    this.strMealThumb.attr("src", meal.strMealThumb);
    this.strYoutube.attr("href", meal.strYoutube);
    this.strSource.attr("href", meal.strSource);
    this.strMeal.html(meal.strMeal);
    this.strInstructions.html(meal.strInstructions);
    this.strCategory.html(meal.strCategory);
    this.strArea.html(meal.strArea);

    // all ingresients
    let allIngredients = [
      meal.strMeasure1 +" "+ meal.strIngredient1,
      meal.strMeasure2 +" "+ meal.strIngredient2,
      meal.strMeasure3 +" "+ meal.strIngredient3,
      meal.strMeasure4 +" "+ meal.strIngredient4,
      meal.strMeasure5 +" "+ meal.strIngredient5,
      meal.strMeasure6 +" "+ meal.strIngredient6,
      meal.strMeasure7 +" "+ meal.strIngredient7,
      meal.strMeasure8 +" "+ meal.strIngredient8,
      meal.strMeasure9 +" "+ meal.strIngredient9,
      meal.strMeasure10 +" "+ meal.strIngredient10,
      meal.strMeasure11 +" "+ meal.strIngredient11,
      meal.strMeasure12 +" "+ meal.strIngredient12,
      meal.strMeasure13 +" "+ meal.strIngredient13,
      meal.strMeasure14 +" "+ meal.strIngredient14,
      meal.strMeasure15 +" "+ meal.strIngredient15,
      meal.strMeasure16 +" "+ meal.strIngredient16,
      meal.strMeasure17 +" "+ meal.strIngredient17,
      meal.strMeasure18 +" "+ meal.strIngredient18,
      meal.strMeasure19 +" "+ meal.strIngredient19,
      meal.strMeasure20 +" "+ meal.strIngredient20,
    ];
    let ingred = "";
    for (const i of allIngredients) {
      if (i != " " && i != "  ") {
        ingred += `<li class="alert alert-info m-2 p-1">${i}</li>`;
      }
    }
    this.strIngredient.html(ingred);
    // display all tags
    let allTags = meal.strTags;
    let splitedTags = allTags.split(",");
    let tag = "";
    for (const i of splitedTags) {
      if (i != null) {
        tag += `<li class="alert alert-danger m-2 p-1">${i}</li>`;
      }
    }
    this.strTags.html(tag);




  }







}
