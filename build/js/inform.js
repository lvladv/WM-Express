$(document).ready(function() {
  // e.preventDefault();

  $(".info-ref , .go-repeat").click(function() {
    $(location).attr("href", "index.html");
    setTimeout(() => {
      $("html, body").animate({ scrollTop: 0 }, 600);
      $(".form-2").removeClass("step");
      $(".block-4").css("display", "none");
      $(".instruction").css("display", "block");
      $(".get, .form-1, .form-2, footer, header").addClass("filter");
      $(".give")
        .addClass("step")
        .removeClass("filter");
      $(".block-1").css("display", "flex");
    }, 1000);
  });

  $(".go-1").click(function() {
    $(".give")
      .removeClass("step")
      .addClass("filter");
    $(".get")
      .removeClass("filter")
      .addClass("step");
    $(".block-1").css("display", "none");
    $(".block-2").css("display", "flex");
  });

  $(".go-2").click(function() {
    $(".get")
      .removeClass("step")
      .addClass("filter");
    $(".form-1")
      .removeClass("filter")
      .addClass("step");
    $(".block-2").css("display", "none");
    $(".block-3").css("display", "flex");
  });

  $(".go-3").click(function() {
    $(".form-1")
      .removeClass("step")
      .addClass("filter");
    $(".form-2")
      .removeClass("filter")
      .addClass("step");
    $(".block-3").css("display", "none");
    $(".block-4").css("display", "flex");
  });
});
