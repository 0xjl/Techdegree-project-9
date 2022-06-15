const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");
const loading = document.querySelector(".loading-container");

/* INTRO SECTION */
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

window.addEventListener("DOMContentLoaded", introEffect);
