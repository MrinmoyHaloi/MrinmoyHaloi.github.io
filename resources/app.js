
var to_top = document.getElementById("to-top");
var navbar = document.getElementById("navbar");

function myFunction() {
  if (window.pageYOffset <= 90) {
    to_top.classList.add("to-top-invisible");
  } else {
    to_top.classList.remove("to-top-invisible");
  }
  if (window.pageYOffset <= 100){
    navbar.classList.add("pinned-nav");
  } else{
    navbar.classList.remove("pinned-nav")
  }
}
var typed = new Typed(".element", {
  strings: [
    "",
    "Web developer",
    "Software engineer",
    "Freelancer",
    "Graphic designer",
    "Video Editor",
  ],
  typeSpeed: 80,
  backSpeed: 10,
  loop: true,
});
