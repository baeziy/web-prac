$(document).ready(function () {
  $(".nextP").hide();
  $(".btn1").click(function () {
    $("p").hide();
  });
  $(".btn2").click(function () {
    $("p").show();
  });

  $(".btnChange").click(function () {
    $(".pChange").hide();
    $(".nextP").show();
  });

  $(".btnColor").click(function () {
    $(".heading3 p").css({ color: "red" });
  });

  $(".btnBColor").click(function () {
    $("body").css({ "background-color": "pink" });
  });
});
