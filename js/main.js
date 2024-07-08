import { Home } from "./home.js";
import { Categories } from "./categories.js";
import { Area } from "./area.js";
import { Ingredients } from "./ingredient.js";
import { Search } from "./search.js";
import { Contact } from "./contact.js";
let home = new Home();
Loading();
home.getAPI();

$("#categories").click(function () {
  let category = new Categories();
  Loading();
  $("#mealDetails").addClass("d-none");
  sideBarAnimation();
  category.getAPI();
  Loading();
});
$("#area").click(function () {
  let area = new Area();
  Loading();
  $("#mealDetails").addClass("d-none");
  $("#allMeals").removeClass("d-none");
  $("#contact").addClass("d-none");

  area.getAPI();

  Loading();
});
$("#ingredients").click(function () {
  let ingredient = new Ingredients();
  Loading();
  $("#mealDetails").addClass("d-none");
  $("#allMeals").removeClass("d-none");
  $("#contact").addClass("d-none");
  sideBarAnimation();

  ingredient.getAPI();
  Loading();
});

$("#search").click(function () {
  let search = new Search();
  Loading();
  $("#mealDetails").addClass("d-none");
  $("#allMeals").removeClass("d-none");
  $("#contact").addClass("d-none");
  sideBarAnimation();

  search.displaySearchInput();
  Loading();
});
$("#contactt").click(function () {
  Loading();
  $("#mealDetails").addClass("d-none");
  $("#allMeals").addClass("d-none");
  $("#contact").removeClass("d-none");
  sideBarAnimation();

  let contact = new Contact();
  contact.check();
  Loading();
});

// default side bar position

$(".side-nav-menu").css({ left: -$(".nav-tab").innerWidth() });
$(".links li#contactt").css({ top: $(".nav-tab").outerHeight() });
$(".links li#ingredients").css({ top: $(".nav-tab").outerHeight() });
$(".links li#area").css({ top: $(".nav-tab").outerHeight() });
$(".links li#categories").css({ top: $(".nav-tab").outerHeight() });
$(".links li#search").css({ top: $(".nav-tab").outerHeight() });

// side bar animation

const sideBarAnimation = function () {
  if ($(".side-nav-menu").css("left") == "0px") {
    $(".close").removeClass("fa-xmark").addClass(" fa-bars");
    $(".links li#contactt").animate({ top: $(".nav-tab").outerHeight() }, 1000);
    $(".links li#ingredients").animate(
      { top: $(".nav-tab").outerHeight() },
      1050
    );
    $(".links li#area").animate({ top: $(".nav-tab").outerHeight() }, 1100);
    $(".links li#categories").animate(
      { top: $(".nav-tab").outerHeight() },
      1150
    );
    $(".links li#search").animate({ top: $(".nav-tab").outerHeight() }, 1200);
    $(".side-nav-menu").animate({ left: -$(".nav-tab").innerWidth() }, 1300);
  } else {
    $(".close").removeClass("fa-bars").addClass(" fa-xmark");
    $(".side-nav-menu").animate({ left: "0" }, 1000);
    $(".links li#search").animate({ top: 0 }, 1100);
    $(".links li#categories").animate({ top: 0 }, 1150);
    $(".links li#area").animate({ top: 0 }, 1200);
    $(".links li#ingredients").animate({ top: 0 }, 1250);
    $(".links li#contactt").animate({ top: 0 }, 1300);
  }
};

$(".close").click(sideBarAnimation);

function Loading() {
  $(".loading").toggleClass("d-none");

  $("body").removeClass("overflow-hidden");
}

//
// contact
