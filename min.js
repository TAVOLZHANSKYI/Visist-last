

// ------------ slide --------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
}
// ---------------------------------------------





// -------------- containermob --------------
var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
  showSlide(slideIndex += n);
}


function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("mySlide");
  if (n > slide.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none"; 
  }
  
  slide[slideIndex-1].style.display = "block"; 
}
// ---------------------------------------------------


// ----------------- boorgar menu ---------------------
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}



// 
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}