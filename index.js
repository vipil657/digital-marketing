// ==========================.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.....

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

var content1 = document.querySelector("#services-1");
var content2 = document.querySelector("#services-2");
var content3 = document.querySelector("#services-3");
var content4 = document.querySelector("#services-4");
// var content5 = document.querySelector("#services-5");

function openlink1() {
  content1.style.display = "inline-block";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
  // content5.style.display = "none";
}

function openlink2() {
  content1.style.display = "none";
  content2.style.display = "inline-block";
  content3.style.display = "none";
  content4.style.display = "none";
  // content5.style.display = "none";
}

function openlink3() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "inline-block";
  content4.style.display = "none";
  // content5.style.display = "none";
}

function openlink4() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "inline-block";
  // content5.style.display = "none";
}

// function openlink5() {
//   content1.style.display = "none";
//   content2.style.display = "none";
//   content3.style.display = "none";
//   content4.style.display = "none";
//   // content5.style.display = "inline-block";
// }
