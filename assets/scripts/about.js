const englishButton = document.getElementById("toEnglish");
const frenchButton = document.getElementById("toFrancais");
const topButton = document.getElementById("toUp");

const english = document.getElementById("english");
const french = document.getElementById("francais");

englishButton.onclick = function () {
  window.scrollTo({
    top: english.offsetTop - 150,
    left: 0,
    behavior: "smooth",
  });
};

frenchButton.onclick = function () {
  window.scrollTo({
    top: french.offsetTop - 150,
    left: 0,
    behavior: "smooth",
  });
};

topButton.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
