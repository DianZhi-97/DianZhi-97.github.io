var slideIndex = 1;
$('document').ready(function () {

  showSlide(slideIndex)

  var intervalID = window.setInterval(autoSlide, 3000);

  // when window scrolled down, adjust the size of the navigation bar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $(".navbar").css("padding", "10px 10px");
      $(".navbar a").css("fontSize", "16px");
    } else {
      $(".navbar").css("padding", "30px 10px");
      $(".navbar a").css("fontSize", "18px");
    }
  });
});

function nextSlide(n) { showSlide(slideIndex += n); }

function currentSlide(n) { showSlide(slideIndex = n); }

function showSlide(n) {
  console.log("hello")
  var i;
  var slides = $(".slide img");
  console.log(slides)
  var dots = $(".slide_indicator span")
  console.log(dots)
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    $(slides[i]).css("display", "none")
  }
  for (i = 0; i < dots.length; i++) {
    $(dots[i]).attr("class", "")
  }
  $(slides[slideIndex - 1]).css("display", "block")
  $(dots[slideIndex - 1]).attr("class", "dot_active")
}

function autoSlide() {
  nextSlide(1)
}