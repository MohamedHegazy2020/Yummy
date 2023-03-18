

import { Home } from "./home.js";

export class Categories {
  constructor() {

    
  }

  async getAPI() {

    $(".cardDashboard .col-md-3").remove();

    $.getJSON(`https://www.themealdb.com/api/json/v1/1/categories.php`, (data) => {
      data.categories.map((meal) => {

        this.diplayCategory(meal);
      });
    });


  }

  diplayCategory(param) {

    let categoryCard = ` <div class="col-md-3">
                <div  class="category meal text-center  position-relative overflow-hidden rounded-2 cursor-pointer" id = "${param.idCategory}">
                    <img class="w-100" src="${param.strCategoryThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 flex-column">
                        <h3>${param.strCategory}</h3>
                        <p>${param.strCategoryDescription}</p>
                        
                    </div>
                </div>
        </div>`;
    $(".category").click(function () {

    let home = new Home();

      home.apilink = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.strCategory}`;
    $(".cardDashboard .col-md-3").remove();

      home.getAPI();
    });


    $(".cardDashboard").append(categoryCard);
  }
}
