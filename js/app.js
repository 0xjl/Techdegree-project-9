const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");
const loading = document.querySelector(".loading-container");
let buttonToggle = document.getElementById("darkmode");
let body = document.querySelector(".all");
let svgICONS = document.querySelectorAll(".svg-icon");

function buttonChecker() {
  if (buttonToggle.innerText === "dark mode") {
    buttonToggle.innerText = "light mode";
    darkMode();
  } else if (buttonToggle.innerText === "light mode") {
    buttonToggle.innerText = "dark mode";
    lightMode();
  }
}

//functions
function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  for (let i = 0; i < svgICONS.length; i++) {
    svgICONS[i].style.fill = "white";
  }
}

function lightMode() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  for (let i = 0; i < svgICONS.length; i++) {
    svgICONS[i].style.fill = "black";
  }
}

function fadeText() {
  logoSpan.forEach((span, index) => {
    setTimeout(() => {
      span.classList.remove("active");
      span.classList.add("fade");
    }, index++ * 50);
  });
}

function revealWebsite() {
  intro.style.top = "-100vh";
}

function removeLoading() {
  loading.style.display = "none";
}

function loadingScreen() {
  logoSpan.forEach((span, index) => {
    setTimeout(() => {
      removeLoading();
      span.classList.add("active");
    }, index++ * 700);
  });
  setTimeout(fadeText, 2700);
  setTimeout(revealWebsite, 3000);
}

function introEffect() {
  setTimeout(loadingScreen, 4000);
}

//event listeners
buttonToggle.addEventListener("click", buttonChecker);
window.addEventListener("DOMContentLoaded", introEffect);
