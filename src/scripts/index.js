import "../styles/main.scss";
import "regenerator-runtime/runtime";
import { mobileNav } from "./mobile-nav";

const $ = require("jquery");

mobileNav();

// Contact Form onclick highlight

$(".contact-wrapper .inputBox").click(function () {
  let contactLabel = $(".contact-wrapper .inputBox");

  for (let i = 0; i < contactLabel.length; i++) {
    contactLabel[i].classList.remove("selected");
  }

  this.classList.add("selected");
});

// Contact form validation

$("form").submit((e) => {
  e.preventDefault();
});
