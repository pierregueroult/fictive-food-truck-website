const languageButton = document.getElementById("changeLanguage");
const menuElementsSection = document.getElementById("menuElements");
const menuElementSection = document.getElementById("menuElement");
const elementFilterButtons = document.querySelectorAll(
  ".title > ul > li:not(:last-child)"
);

var currentLanguage = "en";
var currentFilter = {
  dishes: false,
  specialty: false,
  dessert: false,
};
var currentExposedElement = 0;

function changeButtonImage(lang) {
  languageButton.innerHTML =
    currentLanguage == "fr"
      ? '<img src="./assets/images/flag-united-kingdom.png" alt="drapeau anglais"/>'
      : '<img src="./assets/images/flag-france.png" alt="drapeau francais"/>';
}

function swapCurrentLanguage() {
  currentLanguage == "fr" ? (currentLanguage = "en") : (currentLanguage = "fr");
}

function updateMenuLocalStorage() {
  var elementsList = [];
  if (
    !currentFilter.dishes &&
    !currentFilter.specialty &&
    !currentFilter.dessert
  ) {
    elementsList = [
      ...menu.dishes[currentLanguage],
      ...menu.specialities[currentLanguage],
      ...menu.dessert[currentLanguage],
    ];
  } else {
    if (currentFilter.dishes) {
      elementsList.push(...menu.dishes[currentLanguage]);
    }
    if (currentFilter.dessert) {
      elementsList.push(...menu.dessert[currentLanguage]);
    }
    if (currentFilter.specialty) {
      elementsList.push(...menu.specialities[currentLanguage]);
    }
  }
  localStorage.setItem("menuCurrentItems", JSON.stringify(elementsList));
}

function createMenuElement(name, img, id) {
  var titleElement = document.createElement("h2");
  titleElement.innerText = name;
  var imageElement = document.createElement("img");
  imageElement.setAttribute("src", img);
  imageElement.setAttribute("alt", name);
  var container = document.createElement("article");
  container.setAttribute("key", id);
  container.setAttribute("onclick", `updateCurrentExposedElement(${id})`);
  container.appendChild(titleElement);
  container.appendChild(imageElement);
  menuElementsSection.appendChild(container);
}

function updateHtmlContent() {
  var content = JSON.parse(localStorage.getItem("menuCurrentItems"));
  menuElementsSection.innerHTML = "";
  content.map(({ name, imgSrc, id }) => {
    createMenuElement(name, imgSrc, id);
  });
}

function changeLanguage() {
  swapCurrentLanguage();
  changeButtonImage();

  // on change le titre
  document.querySelector("#main-section h1").textContent =
    menu.mainTitle[currentLanguage];

  updateMenuLocalStorage();
  updateHtmlContent();
  updateCurrentExposedElement();
}

elementFilterButtons.forEach((value) => {
  value.onclick = function () {
    if (currentFilter[value.attributes.content.value] == true) {
      currentFilter[value.attributes.content.value] = false;
      value.classList.remove("selected");
    } else {
      currentFilter[value.attributes.content.value] = true;
      value.classList.add("selected");
    }
    if (
      currentFilter.dishes &&
      currentFilter.specialty &&
      currentFilter.dessert
    ) {
      currentFilter = {
        dishes: false,
        specialty: false,
        dessert: false,
      };
      elementFilterButtons.forEach((value) => {
        value.classList.remove("selected");
      });
    }
    updateMenuLocalStorage();
    updateHtmlContent();
  };
});

function generateInMenuElementSection(
  name,
  img,
  description,
  price,
  ingredients
) {
  var titleEl = document.createElement("h2");
  titleEl.innerText = name;
  var imageEl = document.createElement("img");
  imageEl.setAttribute("src", img);
  imageEl.setAttribute("alt", "image du plat");
  var descriptionEl = document.createElement("p");
  descriptionEl.innerText = description;
  var priceEl = document.createElement("p");
  priceEl.innerText = currentLanguage == "fr" ? price + "€" : price + "£";
  var ingredientsList = document.createElement("ul");
  for (const i in ingredients) {
    var ingredientEl = document.createElement("li");
    ingredientEl.innerText = ingredients[i];
    ingredientsList.appendChild(ingredientEl);
  }
  var container = document.createElement("div");
  container.appendChild(titleEl);
  container.appendChild(priceEl);
  container.appendChild(descriptionEl);
  menuElementSection.appendChild(container);
  menuElementSection.appendChild(imageEl);
  menuElementSection.appendChild(ingredientsList);
}

function updateCurrentExposedElement(id) {
  if (id != undefined) {
    currentExposedElement = id;
  }
  menuElementSection.innerHTML = "";
  if (currentExposedElement == 0) {
    var empty = document.createElement("h3");
    empty.innerText =
      currentLanguage == "fr"
        ? "Cliquer sur un plat pour le sélectionner !"
        : "Click onto a dish to select it !";
    empty.classList.add("no-selection");
    menuElementSection.appendChild(empty);
  } else {
    var listData = [
      ...menu.dishes[currentLanguage],
      ...menu.specialities[currentLanguage],
      ...menu.dessert[currentLanguage],
    ];
    var data = listData[currentExposedElement - 1];
    generateInMenuElementSection(
      data.name,
      data.imgSrc,
      data.description,
      data.price,
      data.ingredients
    );
  }
}

changeLanguage();
updateCurrentExposedElement(0);

languageButton.onclick = changeLanguage;
