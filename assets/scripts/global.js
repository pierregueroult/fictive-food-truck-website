var headerImg = document.querySelector("header img");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    headerImg.className = "scrolled";
  } else {
    headerImg.className = "";
  }
});
