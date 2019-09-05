(function() {
  var nav = document.querySelector(".main-nav");
  var burger = document.querySelector(".main-nav__toggle--burger");
  var cross = document.querySelector(".main-nav__toggle--cross");

  nav.classList.remove("main-nav--no-js");
  nav.classList.add("main-nav--closed");

  burger.addEventListener("click", function() {
    nav.classList.remove("main-nav--closed");
  });

  cross.addEventListener("click", function() {
    nav.classList.add("main-nav--closed");
  });
})();
