const locationsParent = document.querySelector("#locations");
const frameParent = document.querySelector("main article");

const locations = [
  {
    name: "Dieppe",
    location: "Bd Maréchal Foch, 76200 Dieppe",
    day: "Lundi",
    time: "De 11h30 à 21h",
    frame:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164322.36525657834!2d1.0430708618631392!3d49.94502916348821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0a200598fc607%3A0x1bc87ab9bcd54ffe!2sBd%20Mar%C3%A9chal%20Foch%2C%2076200%20Dieppe!5e0!3m2!1sfr!2sfr!4v1669759569265!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Rouen",
    location: "Quai Jean de Béthencourt, 76100 Rouen",
    day: "Mardi",
    time: "De 11h30 à 21h",
    frame:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197461.2852426111!2d0.9684296305396385!3d49.43723287250228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0de0a5a764403%3A0xbda5bfab7521e36d!2sQuai%20Jean%20de%20B%C3%A9thencourt%2C%2076100%20Rouen!5e0!3m2!1sfr!2sfr!4v1669759621801!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Tours",
    location: "Rue des Ursulines, 37000 Tours",
    day: "Mercredi",
    time: "De 11h30 à 21h",
    frame:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145316.5578552508!2d0.5897031290514888!3d47.40844093509286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd44ce1721513%3A0x6f471d3bc1fff6c!2sRue%20des%20Ursulines%2C%2037000%20Tours!5e0!3m2!1sfr!2sfr!4v1669759674624!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Clermont-Ferrand",
    location:
      "Boulevard François Mitterrand, Av. Vercingétorix, 63000 Clermont-Ferrand",
    day: "Jeudi",
    time: "De 11h30 à 21h",
    frame:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153914.64112511417!2d2.723240090871261!3d45.860774733142435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f71bebb9a5e5e3%3A0x4067eb6b510c81f4!2sAv.%20Vercing%C3%A9torix%20%26%20Bd%20Fran%C3%A7ois%20Mitterrand%2C%2063000%20Clermont-Ferrand!5e0!3m2!1sfr!2sfr!4v1669759735453!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Dijon",
    location: "Promenade de l'Ouche, 21000 Dijon",
    day: "Vendredi",
    time: "De 11h30 à 21h",
    frame:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145507.41460344708!2d5.184750665677233!3d47.33922565969368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29da1def7088b%3A0xd11ddcf42c3c13ef!2sProm.%20de%20l&#39;Ouche%2C%2021000%20Dijon!5e0!3m2!1sfr!2sfr!4v1669759796692!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Troyes",
    location: "Parc des Moulins, rue des Bas Trevois, 10000 Troyes",
    day: "Samedi",
    time: "De 11h30 à 14h",
    frame:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164973.4685734389!2d3.9256436709935083!3d48.31740471283443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee98e27a7f9393%3A0x9a7ebe0abf97342!2sParc%20des%20Moulins!5e0!3m2!1sfr!2sfr!4v1669759832055!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Orléans",
    location:
      "Parc de la fontaine de l'étuvée, Av. des Droits de l'Homme, 45000 Orléans",
    day: "Dimanche",
    time: "De 11h30 à 14h",
    frame:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170702.72061846434!2d1.8210692754360474!3d48.04789654749497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4fb2c6f3c3b73%3A0x7144dfeb8d709e2d!2sParc%20de%20la%20fontaine%20de%20l&#39;%C3%A9tuv%C3%A9e!5e0!3m2!1sfr!2sfr!4v1669759876960!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
];

function createHTMLElement(type, content, className, parent) {
  var element = document.createElement(type);
  if (className !== "") {
    element.classList.add(className);
  }
  element.innerText = content;
  parent.appendChild(element);
  return element;
}

function createHTMLButton(content, parent, callback) {
  var button = createHTMLElement("button", content, "", parent);
  button.onclick = callback;
}

function createLocationElement({ name, location, day, time, frame }) {
  var container = createHTMLElement("li", "", "", locationsParent);
  createHTMLElement("h3", name, "city", container);
  createHTMLElement("p", location, "location", container);
  createHTMLElement("p", day, "day", container);
  createHTMLElement("p", time, "hour", container);
  createHTMLButton("Voir sur la carte", container, function () {
    frameParent.innerHTML = frame;
  });
}

locations.map((data) => createLocationElement(data));
