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

  category.getAPI();
  Loading();
});
$("#area").click(function () {
  let area = new Area();
  Loading();

  area.getAPI();
  Loading();
});
$("#ingredients").click(function () {
  let ingredient = new Ingredients();
  Loading();

  ingredient.getAPI();
  Loading();
});
$("#search").click(function () {
  let search = new Search();
  Loading();

  search.displaySearchInput();
  Loading();
});
$("#contact").click(function () {
  let contact = new Contact();
  Loading();

  contact.check();
  Loading();
});

// default side bar position

$(".side-nav-menu").css({ left: -$(".nav-tab").innerWidth() });
$(".links li#contact").css({ top: $(".nav-tab").outerHeight() });
$(".links li#ingredients").css({ top: $(".nav-tab").outerHeight() });
$(".links li#area").css({ top: $(".nav-tab").outerHeight() });
$(".links li#categories").css({ top: $(".nav-tab").outerHeight() });
$(".links li#search").css({ top: $(".nav-tab").outerHeight() });

// side bar animation
$(".close").click(function () {
  if ($(".side-nav-menu").css("left") == "0px") {
    $(".close").removeClass("fa-xmark").addClass(" fa-bars");
    $(".links li#contact").animate({ top: $(".nav-tab").outerHeight() }, 1000);
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
    $(".links li#contact").animate({ top: 0 }, 1300);
  }
});

function Loading() {
  $(".loading").toggleClass("d-none");

  $("body").removeClass("overflow-hidden");
}








// 
// contact 
