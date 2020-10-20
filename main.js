const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const menuCloseIcon = document.querySelector(".menu-close-icon");

searchIcon.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
});

mobileMenuIcon.addEventListener("click", function () {
  mobileMenuContainer.classList.add("active");
});

menuCloseIcon.addEventListener("click", function () {
  mobileMenuContainer.classList.remove("active");
});
