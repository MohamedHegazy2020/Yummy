import { Details } from "./details.js";

export class Home extends Details {
  constructor() {
    super();
  }

  async getAPI() {

    $.getJSON(`https://www.themealdb.com/api/json/v1/1/search.php?s=`, (data) => {
      // console.log(data);
      data.meals.map((meal) => {
        this.diplayMeals(meal);
      });
    });


  }

  diplayMeals(param) {
    let mealCard = ` <div class="col-md-3">
                <div id="${param.idMeal}"  class="meal position-relative overflow-hidden rounded-2 cursor-pointer" id = "${param.idMeal}">
                    <img class="w-100" src="${param.strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${param.strMeal}</h3>
                    </div>
                </div>
        </div>`;
       
        $(".cardDashboard").append(mealCard);
        $(`#${param.idMeal}`).click( function() {
          const detail = new Details($(this).attr("id"));
          detail.getAPI();
        });
        // console.log($(".cardDashboard"));
  }
  
}
