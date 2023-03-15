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
  showSlides((slider += n));
}

function home() {
  location.href = "#home";
}

function about() {
  location.href = "#about";
}

function projects() {
  location.href = "#projectCarousel";
}

function services() {
  location.href = "#services";
}

function boxRotate(num){
  let service_icon_element = document.getElementsByClassName("service-icon");
  let service_content_element = document.getElementsByClassName("service-content");
  service_icon_element[num].classList.add("service-icon-rotate");
  service_content_element[num].classList.add("service-content-rotate");
}

function boxNormal(num){
  let service_icon_element = document.getElementsByClassName("service-icon");
  let service_content_element = document.getElementsByClassName("service-content");
  service_icon_element[num].classList.remove("service-icon-rotate");
  service_content_element[num].classList.remove("service-content-rotate");
}
