let to_top = document.getElementById("to-top");
let navbar = document.getElementById("navbar");
let progress_bar = Array.from(document.getElementsByClassName("progress-bar"))
const date = new Date();

//sets the current year in the footer
document.getElementById("year").innerHTML = date.getFullYear();

function animate_progress() {
    if (window.scrollY >= 450) {
        progress_bar.forEach(element => {
            element.style.width = `${element.getAttribute("aria-valuenow")}%`;
        });
    }
}

//changes the navbar size and makes the to top button visible on scroll
function scrollEvent() {
    if (window.scrollY <= 90) {
        to_top.classList.add("to-top-invisible");
    } else {
        to_top.classList.remove("to-top-invisible");
    }
    if (window.scrollY <= 370) {
        navbar.classList.add("pinned-nav");
    } else {
        navbar.classList.remove("pinned-nav");
    }
}
let prefix_typedjs = "I am a "
let typed = new Typed(".element", {
    strings: [
        `${prefix_typedjs} Web developer`,
        `${prefix_typedjs} Software developer`,
        `${prefix_typedjs} Freelancer`,
        `${prefix_typedjs} Graphics designer`,
        `${prefix_typedjs} Video Editor`,
    ],
    typeSpeed: 80,
    backSpeed: 10,
    loop: true,
    smartBackspace: true
})
