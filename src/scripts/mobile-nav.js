const $ = require("jquery");

function mobileNav() {
  let menuOpen = false;
  $(".menu-btn").click(() => {
    if (!menuOpen) {
      $(".menu-btn").addClass("open");
      $(".nav-bar").css({ transform: "translateX(0%)", opacity: "1" });
      menuOpen = true;
    } else {
      $(".menu-btn").removeClass("open");
      $(".nav-bar").css({ transform: "translateX(150%)", opacity: "0" });

      menuOpen = false;
    }
  });
  // TODO Fix this so mobile and desktop nav work

  // $(".nav-bar nav a").click(() => {
  //   $(".nav-bar").css({ transform: "translateX(150%)", opacity: "0" });
  //   $(".menu-btn").removeClass("open");
  //   menuOpen = false;
  // });
}

export { mobileNav };
