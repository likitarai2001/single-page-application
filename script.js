let slider = 1;
showSlides(slider);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img_slider");
  if (n > slides.length) {
    slider = 1;
  }
  if (n < 1) {
    slider = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slider - 1].style.display = "block";
}

function plusSlides(n) {
  dispSlide((slider += n));
}

function home() {
  location.href = "#home";
}

function about() {
  location.href = "#about";
}

function images() {
  location.href = "#img_carousel";
}

function services() {
  location.href = "#services";
}
