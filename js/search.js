import { Home } from "./home.js";

export class Search {
  constructor() {
    this.apilink = `https://www.themealdb.com/api/json/v1/1/search.php?
`;
  }
  displaySearchInput() {
    $("#searchContainer").removeClass("d-none");
    $(".cardDashboard .col-md-3").remove();
    let that = this;
    $('[placeholder="Search By Name"]').keyup(function (e) {
      let searchKey = that.apilink + "s=" + this.value;

      that.displaySearch(searchKey);
    });
    $('[placeholder="Search By First Letter"]').keyup(function (e) {
      let searchKey = that.apilink + "f=" + this.value;
      that.displaySearch(searchKey);
    });
  }

  displaySearch(param) {
    $(".cardDashboard .col-md-3").remove();
    this.getAPI(param);
  }

  async getAPI(param) {
    let home = new Home();
    $.getJSON(param, (data) => {
      data.meals.map((meal) => {
        home.diplayMeals(meal);
      });
    });
  }
}
