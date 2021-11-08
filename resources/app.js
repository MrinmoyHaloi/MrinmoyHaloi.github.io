let to_top = document.getElementById("to-top");
let navbar = document.getElementById("navbar");
let progress_bar = Array.from(document.getElementsByClassName("progress-bar"))
const date = new Date();

//sets the current year in the footer
document.getElementById("year").innerHTML = date.getFullYear();

function animate_progress() {
  if (window.pageYOffset >= 450){
    progress_bar.forEach(element => {
        element.style.width = `${element.getAttribute("aria-valuenow")}%`;
    });
  }
}

function myFunction() {
  if (window.pageYOffset <= 90) {
    to_top.classList.add("to-top-invisible");
  } else {
    to_top.classList.remove("to-top-invisible");
  }
  if (window.pageYOffset <= 370) {
    navbar.classList.add("pinned-nav");
  } else {
    navbar.classList.remove("pinned-nav");
  }
}
var i_am = "I am a "
var typed = new Typed(".element", {
  strings: [
    `${i_am} Web developer`,
    `${i_am} Software developer`,
    `${i_am} Freelancer`,
    `${i_am} Graphics designer`,
    `${i_am} Video Editor`,
  ],
  typeSpeed: 80,
  backSpeed: 10,
  loop: true,
  smartBackspace:true
})
