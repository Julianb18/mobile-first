import "../styles/main.scss";
import "regenerator-runtime/runtime";
import { mobileNav, navClick } from "./mobile-nav";

const $ = require("jquery");

mobileNav();

// Navigation on click highlight

$(".nav-links").click(function () {
  let navItems = $(".nav-links");

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("active");
  }

  this.classList.add("active");
});

// Navigation svg highlight on scroll

$(document).ready(function () {
  $(document).scroll(function () {
    let Scroll = $(window).scrollTop() + 1;
    let SectionOneOffset = $("#home-page").offset().top;
    // let SectionTwoOffset = $("#about-page").offset().top;
    let SectionTwoOffset = $("#skills-page").offset().top;
    let SectionThreeOffset = $("#projects-page").offset().top;
    let SectionFourOffset = $("#contact-page").offset().top;
    // let SectionFiveOffset = $("#contact-page").offset().top;

    if (Scroll >= SectionOneOffset) {
      $(".icon-home").addClass("active");
    } else {
      $(".icon-home").removeClass("active");
    }

    if (Scroll >= SectionTwoOffset) {
      $(".icon-skills").addClass("active");
      $(".icon-home").removeClass("active");
    } else {
      $(".icon-skills").removeClass("active");
    }

    if (Scroll >= SectionThreeOffset) {
      $(".icon-work").addClass("active");
      $(".icon-skills").removeClass("active");
    } else {
      $(".icon-work").removeClass("active");
    }
    if (Scroll >= SectionFourOffset) {
      $(".icon-contact").addClass("active");
      $(".icon-work").removeClass("active");
    } else {
      $(".icon-contact").removeClass("active");
    }
    // if (Scroll >= SectionFiveOffset) {
    //   $(".icon-contact").addClass("active");
    //   $(".icon-work").removeClass("active");
    // } else {
    //   $(".icon-contact").removeClass("active");
    // }
  });
});

// Smooth scrolling

$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    300,
    "linear"
  );
});

// Contact Form onclick highlight

// $(".contact-wrapper .inputBox").click(function () {
//   let contactLabel = $(".contact-wrapper .inputBox");

//   for (let i = 0; i < contactLabel.length; i++) {
//     contactLabel[i].classList.remove("selected");
//   }

//   this.classList.add("selected");
// });

// Contact form validation

$("form").submit((e) => {
  let nameInput = $("#name-input").val();
  let emailInput = $("#email-input").val();
  let subjectInput = $("#subject-input").val();
  let textArea = $("textarea").val();

  const nameReg = /^[a-z A-z]{3,15}$/;
  const emailReg = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+)\.([a-z]{2,6})(.[a-z]{2,6})?$/;
  const subjectReg = /^[a-z A-Z 0-9-"\.,()\[\]\?!]{3,30}$/;
  const textReg = /^[a-z A-Z 0-9-"\.,()\[\]\?!\n\r]{3,150}$/;

  if (!nameReg.test(nameInput)) {
    e.preventDefault();
    $(".name-field .line-color").css(
      "border-bottom",
      "3px solid rgb(255, 58, 50)"
    );
    $(".name-field .text").css("color", "rgb(255, 58, 50)");
    $(".name-field .error-message").css("display", "block");
  } else {
    $(".name-field .line-color").css(
      "border-bottom",
      "3px solid rgb(34, 192, 255)"
    );
    $(".name-field .text").css("color", "rgb(34, 192, 255)");
    $(".name-field .error-message").css("display", "none");
  }

  if (!emailReg.test(emailInput)) {
    e.preventDefault();
    $(".email-field .line-color").css(
      "border-bottom",
      "3px solid rgb(255, 58, 50)"
    );
    $(".email-field .text").css("color", "rgb(255, 58, 50)");
    $(".email-field .error-message").css("display", "block");
  } else {
    $(".email-field .line-color").css(
      "border-bottom",
      "3px solid rgb(34, 192, 255)"
    );
    $(".email-field .text").css("color", "rgb(34, 192, 255)");
    $(".email-field .error-message").css("display", "none");
  }

  if (!subjectReg.test(subjectInput)) {
    e.preventDefault();
    $(".subject-field .line-color").css(
      "border-bottom",
      "3px solid rgb(255, 58, 50)"
    );
    $(".subject-field .text").css("color", "rgb(255, 58, 50)");
    $(".subject-field .error-message").css("display", "block");
  } else {
    $(".subject-field .line-color").css(
      "border-bottom",
      "3px solid rgb(34, 192, 255)"
    );
    $(".subject-field .text").css("color", "rgb(34, 192, 255)");
    $(".subject-field .error-message").css("display", "none");
  }

  if (!textReg.test(textArea)) {
    e.preventDefault();
    $(".message-field .line-color").css(
      "border-bottom",
      "3px solid rgb(255, 58, 50)"
    );
    $(".message-field .text").css("color", "rgb(255, 58, 50)");
  } else {
    $(".message-field .line-color").css(
      "border-bottom",
      "3px solid rgb(34, 192, 255)"
    );
    $(".message-field .text").css("color", "rgb(34, 192, 255)");
  }
});

// Digital clock

let Flipper = (function () {
  function Flipper(node, currentTime, nextTime) {
    this.isFlipping = false;
    this.duration = 600;
    this.flipNode = node;
    this.frontNode = node.querySelector(".front");
    this.backNode = node.querySelector(".back");
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
  }

  Flipper.prototype.setFrontTime = function (time) {
    this.frontNode.dataset.number = time;
  };

  Flipper.prototype.setBackTime = function (time) {
    this.backNode.dataset.number = time;
  };

  Flipper.prototype.flipDown = function (currentTime, nextTime) {
    let _this = this;

    if (this.isFlipping) {
      return false;
    }

    this.isFlipping = true;
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
    this.flipNode.classList.add("running");

    setTimeout(function () {
      _this.flipNode.classList.remove("running");
      _this.isFlipping = false;
      _this.setFrontTime(nextTime);
    }, this.duration);
  };
  return Flipper;
})();

let getTimeFromDate = function (date) {
  return date.toTimeString().slice(0, 8).split(":").join("");
};

let flips = document.querySelectorAll(".flip");
let now = new Date();
let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
let nextTimeStr = getTimeFromDate(now);
let Flippers = Array.from(flips).map(function (flip, i) {
  return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);
});

setInterval(function () {
  let now = new Date();
  let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
  let nextTimeStr = getTimeFromDate(now);

  for (let i = 0; i < Flippers.length; i++) {
    if (nowTimeStr[i] === nextTimeStr[i]) {
      continue;
    }
    Flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
  }
}, 1000);

// var Flipper = (function () {
//   function Flipper(node, currentTime, nextTime) {
//     this.isFlipping = false;
//     this.duration = 600;
//     this.flipNode = node;
//     this.frontNode = node.querySelector(".front");
//     this.backNode = node.querySelector(".back");
//     this.setFrontTime(currentTime);
//     this.setBackTime(nextTime);
//   }
//   Flipper.prototype.setFrontTime = function (time) {
//     this.frontNode.dataset.number = time;
//   };
//   Flipper.prototype.setBackTime = function (time) {
//     this.backNode.dataset.number = time;
//   };
//   Flipper.prototype.flipDown = function (currentTime, nextTime) {
//     var _this = this;

//     if (this.isFlipping) {
//       return false;
//     }

//     this.isFlipping = true;
//     this.setFrontTime(currentTime);
//     this.setBackTime(nextTime);
//     this.flipNode.classList.add("running");
//     setTimeout(function () {
//       _this.flipNode.classList.remove("running");
//       _this.isFlipping = false;
//       _this.setFrontTime(nextTime);
//     }, this.duration);
//   };
//   return Flipper;
// })();

// var getTimeFromDate = function (date) {
//   return date.toTimeString().slice(0, 8).split(":").join("");
// };

// var flips = document.querySelectorAll(".flip");
// var now = new Date();
// var nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
// var nextTimeStr = getTimeFromDate(now);
// var Flippers = Array.from(flips).map(function (flip, i) {
//   return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);
// });

// setInterval(function () {
//   var now = new Date();
//   var nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
//   var nextTimeStr = getTimeFromDate(now);

//   for (var i = 0; i < Flippers.length; i++) {
//     if (nowTimeStr[i] === nextTimeStr[i]) {
//       continue;
//     }
//     Flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
//   }
// }, 1000);

// export { Flipper };
