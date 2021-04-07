var myWidth = $(window).width();
newPos(myWidth);
myWidth = $(window).resize(function() {
  myWidth = $(window).width();
  newPos(myWidth);
});

function newPos(pos) {
  if (myWidth < 1511) {
    $("h1").addClass("newfont");
    $("h2").addClass("newfonth2");
  }
  if(myWidth < 992){
    $(".plant-img").css("width","15%");
    $(".donate-img").addClass("new-header-img");
    $(".donate-img").removeClass("donate-img");
  }
  if (myWidth < 767) {
    $(".title-header-img img").removeClass("header-img");
    $(".title-header-img img").addClass("new-header-img");
    $("h1").css("padding-top", "5%");
    $("h1").addClass("text-center");
    $("h2").addClass("text-center");
    $("p").addClass("text-center");
    $("p").css("font-weight","100");
    $("#advertise h1").addClass("newh1-style");
    $(".ready-btn").addClass("text-center");
    $("#donation .donate-btn").addClass("text-center");
    $(".donate-input").addClass("input-center");
  }
  if (myWidth > 767) {
    $(".title-header-img img").removeClass("new-header-img");
    $(".title-header-img img").addClass("header-img");
    $("h1").css("padding-top", "30%")
    $("h1").removeClass("text-center");
    $("h2").removeClass("text-center");
    $("p").removeClass("text-center")
    $("#advertise h1").removeClass("newh1-style");
    $(".ready-btn").removeClass("text-center");
    $("#donation .donate-btn").removeClass("text-center");
    $(".donate-input").removeClass("input-center");
  }
  if(myWidth > 992){
    $(".plant-img").css("width","40%");
    $(".new-header-img").addClass("donate-img");
    $(".donate-img").removeClass("new-header-img");
  }
  if (myWidth > 1511) {
    $("h1").removeClass("newfont");
    $("h2").removeClass("newfonth2");
  }
}
