const $ = require("jquery");

// function mobileNav() {
//   let menuOpen = false;
//   $(".menu-btn").click(() => {
//     if (!menuOpen) {
//       $(".menu-btn").addClass("open");
//       $(".nav-bar").css({ transform: "translateX(0%)", opacity: "1" });
//       menuOpen = true;
//     } else {
//       $(".menu-btn").removeClass("open");
//       $(".nav-bar").css({ transform: "translateX(150%)", opacity: "0" });

//       menuOpen = false;
//     }
//   });
// TODO Fix this so mobile and desktop nav work

// $(".nav-bar nav a").click(() => {
//   $(".nav-bar").css({ transform: "translateX(150%)", opacity: "0" });
//   $(".menu-btn").removeClass("open");
//   menuOpen = false;
// });
// }

let menuOpen = false;
const mobileBreakPoint = 992; // px

function openMenu() {
  $(".menu-btn").addClass("open");
  $(".nav-bar").css({ transform: "translateX(0%)", opacity: "1" });
  menuOpen = true;
}

function closeMenu() {
  $(".menu-btn").removeClass("open");
  $(".nav-bar").css({ transform: "translateX(150%)", opacity: "0" });
  menuOpen = false;
}

function mobileNav() {
  $(".menu-btn").click(() => {
    if (!menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  if (window.matchMedia) {
    // we need to check for support first https://caniuse.com/#feat=matchmedia
    // but 98% of global user is good :)

    const mediaQuery = window.matchMedia("(min-width: 992px)"); // query from _navbar.scss
    mediaQuery.addListener((query) => {
      if (query.matches) {
        // Desktop
        openMenu();
      } else {
        // Mobile
        closeMenu();
      }
    });
  }
}

export { mobileNav };
