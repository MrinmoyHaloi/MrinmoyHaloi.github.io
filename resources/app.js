var to_top = document.getElementById("to-top");
var navbar = document.getElementById("navbar");
var progress_bar = document.getElementsByClassName("progress-bar")

function func() {
  if (window.pageYOffset >= 450){
    progress_bar[0].style.width = `${progress_bar[0].getAttribute("aria-valuenow")}%`;
    progress_bar[1].style.width = `${progress_bar[1].getAttribute("aria-valuenow")}%`;
    progress_bar[2].style.width = `${progress_bar[2].getAttribute("aria-valuenow")}%`;
    progress_bar[3].style.width = `${progress_bar[3].getAttribute("aria-valuenow")}%`;
    progress_bar[4].style.width = `${progress_bar[4].getAttribute("aria-valuenow")}%`;
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
