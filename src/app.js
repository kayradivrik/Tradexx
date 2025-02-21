document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  $(document).ready(function () {
    $(".burgerIcon").on("click", function () {
      $(".burgerMenu").toggleClass("-translate-x-[105%]");
    });
    $(".closeMenu").on("click", function () {
      $(".burgerMenu").toggleClass("-translate-x-[105%]");
    });
  });
});
