

import { Home } from "./home.js";

export class Area {
  constructor() {
  }

  async getAPI() {
    $(".cardDashboard .col-md-3").remove();

    $.getJSON(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`,
      (data) => {
        data.meals.map((meal) => {
          this.diplayCategory(meal);
        });
      }
    );
  }

  diplayCategory(param) {

    let areaCard = ` <div class="col-md-3">
                <div  class="category meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    
                        <h3>${param.strArea}</h3>
                        
                        
                    
                </div>
        </div>`;
    $(".category").click(function () {
      const home = new Home();
      home.apilink = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${param.strArea}`;
    $(".cardDashboard .col-md-3").remove();

      home.getAPI();
    });


    $(".cardDashboard").append(areaCard);
  }
}
