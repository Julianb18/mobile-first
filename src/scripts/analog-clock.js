const $ = require("jquery");

function clock() {
  const deg = 6;
  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    $(".hrs").css("transform", `rotateZ(${hh + mm / 12}deg)`);
    $(".mins").css("transform", `rotateZ(${mm}deg)`);
    $(".secs").css("transform", `rotateZ(${ss}deg)`);
  });
}

export { clock };
