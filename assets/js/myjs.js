$(document).ready(function () {
  $(".exercisesolution").hide();
  $(".exercisetoggle").click(function () {
    console.log("hi");
    $(this).next(".exercisesolution").toggle(400);
  });
});
