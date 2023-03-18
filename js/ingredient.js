

import { Home } from "./home.js";

export class Ingredients {
  constructor() {
  }

  async getAPI() {
    $(".cardDashboard .col-md-3").remove();

    $.getJSON(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list
`,
      (data) => {
        data.meals.map((meal) => {
          this.diplayCategory(meal);
        });
      }
    );
  }

  diplayCategory(param) {
let description = param.strDescription.substring(0,param.strDescription.indexOf('.'))
    let ingCard = ` <div class="col-md-3">
                <div  class="category meal position-relative text-center overflow-hidden rounded-2 cursor-pointer">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    
                        <h3>${param.strIngredient}</h3>
                        <p>${description}</p>
                        
                        
                    
                </div>
        </div>`;
    $(".category").click(function () {
      const home = new Home();
      home.apilink = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${param.strIngredient}`;
    $(".cardDashboard .col-md-3").remove();

      home.getAPI();
    });


    $(".cardDashboard").append(ingCard);
  }
}
