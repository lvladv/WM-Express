// open menu
$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
    $(".active").toggleClass("sidebar");
  });

  // index-open
  $(".give-mobile").click(function() {
    $(".give")
      .find("ul")
      .css("display", "block");
    $("footer, header").addClass("filter");

    $(".give li input ").on("click", function() {
      let src = $(".give ")
        .find("input:checked")
        .siblings("label")
        .find(".cyrcl img")
        .attr("src");

      let text = $(".give ")
        .find("input:checked")
        .siblings("label")
        .find("span")
        .text();

      $(".give-mobile")
        .find(".cyrcl img")
        .attr("src", src);

      $(".give-mobile")
        .find("p")
        .text(text);
      $(".give")
        .find("ul")
        .css("display", "none");
      $("footer, header").removeClass("filter");
    });
  });


  $(".get-mobile").click(function() {
    $(".get")
      .find("ul")
      .css("display", "block");
    $("footer, header").addClass("filter");

    $(".get li input ").on("click", function() {
      let src = $(".get ")
        .find("input:checked")
        .siblings("label")
        .find(".cyrcl img")
        .attr("src");

      let text = $(".get")
        .find("input:checked")
        .siblings("label")
        .find("span").first()
        .text();

      $(".get-mobile")
        .find(".cyrcl img")
        .attr("src", src);

      $(".get-mobile")
        .find("p")
        .text(text);
      $(".get")
        .find("ul")
        .css("display", "none");
      $("footer, header").removeClass("filter");
    });
  });

  // valid-form

  $(".red-error-1").keyup(function() {
    var leng = $(".red-error-1").val();
    if (leng.length > 0) {
      $(".red-info-1").css("display", "none");
    } else {
      $(".red-info-1").css("display", "block");
    }
  });

  $(".red-error-2").keyup(function() {
    var leng = $(".red-error-2").val();
    if (leng.length > 0) {
      $(".red-info-2").css("display", "none");
    } else {
      $(".red-info-2").css("display", "block");
    }
  });

  $(".red-error-3").keyup(function() {
    var leng = $(".red-error-3").val();
    if (leng.length > 0) {
      $(".red-info-3").css("display", "none");
    } else {
      $(".red-info-3").css("display", "block");
    }
  });

  // check - index

  $(".give ")
    .find("input:checked")
    .siblings("label")
    .find(".check-list")
    .addClass("click-check-list");

   

  $(".give li input ").on("click", function() {
    $(".give li input ")
      .siblings("label")
      .find(".check-list")
      .removeClass("click-check-list");
    if (
      $(".give ")
        .find("input")
        .is(":checked")
    ) {
      $(this)
        .siblings("label")
        .find(".check-list")
        .addClass("click-check-list");
    }
  });

  $(".get")
        .find("input:checked").siblings("label")
        .find(".or-button")
        .css("display", "none")

        $(".get")
        .find("input:checked").siblings("label")
        .find(".index-btn")
        .css("display", "block");
     
  $(".get li input ").on("click", function() {
    $(".get li input ")
      .siblings("label")
      .find(".or-button")
      .css("display", "block");
    $(".get li input ")
      .siblings("label")
      .find(".index-btn")
      .css("display", "none");
    if (
      $(".get")
        .find("input")
        .is(":checked")
    ) {
      $(this)
        .siblings("label")
        .find(".or-button")
        .css("display", "none");
      $(this)
        .siblings("label")
        .find(".index-btn")
        .css("display", "block");
    }
  });

  // accardion faq

  $(".toggle").click(function(e) {
    e.preventDefault();

    let $this = $(this);

    if (
      $this.next().hasClass("show") &&
      $this.find("span img").hasClass("chevron")
    ) {
      $this.find("span img").removeClass("chevron");
      $this.next().removeClass("show");
      $this.next().slideUp(350);
    } else {
      $this.find("span img").toggleClass("chevron");
      $this.next().toggleClass("show");
      $this.next().slideToggle(350);
    }
  });
});
