const $ = require("jquery");

function mobileNav() {
  let menuOpen = false;
  $(".menu-btn").click(() => {
    if (!menuOpen) {
      $(".menu-btn").addClass("open");
      menuOpen = true;
    } else {
      $(".menu-btn").removeClass("open");
      menuOpen = false;
    }
  });
}

export { mobileNav };
