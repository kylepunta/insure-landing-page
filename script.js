const hamburgerMenu = document.querySelector(".hamburger-menu > img");
const navMenuMobile = document.querySelector(".nav-menu.mobile");

function toggleMenu() {
  const isClosed = hamburgerMenu.dataset.state === "closed";

  navMenuMobile.classList.toggle("hidden");

  hamburgerMenu.src = isClosed
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg";

  hamburgerMenu.dataset.state = isClosed ? "open" : "closed";
}

hamburgerMenu.addEventListener("click", toggleMenu);
