export function toggleSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  toggleClasses(nav, burger);
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
}
function toggleClasses(nav, burger) {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("cross");
}
