const menu = {
  mainTitle: {
    fr: "Voilà ce que l'on sert :",
    en: "Here is what we serve :",
  },
  dishes: {
    name: {
      fr: "Plat",
      en: "Dishe",
    },
    fr: [
      {
        id: 1,
        name: "Salade Normande",
        imgSrc: "./assets/images/norman_salad.webp",
        description:
          "Sûrement le meilleur plat normand, cette salade est composée de laitue et de roquette, accompagné de pommes de vergers normands, de noix, ainsi que de généreux morceaux de camembert pané.",
        price: 12,
        ingredients: [
          "Salade de Saison",
          "Camembert Normand",
          "Pommes",
          "Cerneaux de Noix",
        ],
      },
      {
        id: 2,
        name: "Escalope au Calendos",
        imgSrc: "./assets/images/camembert_escalope.jpg",
        price: 8,
        description:
          "Une simple escalope de dinde ou de veau, servi avec de la sauce à la crème et au Camembert. Ce plat est accompagné de frites ou de légumes de saison.",
        ingredients: [
          "Camembert Normand",
          "Escalope de Dinde/Poulet",
          "Crème Fraiche Normande",
        ],
      },
      {
        id: 3,
        name: "Escalope à la Normande",
        imgSrc: "./assets/images/norman_escalope.jpg",
        price: 10,
        description:
          "Une simple escalope de dinde ou de veau cuite avec de l'alcool (Calva), accompagné d'une sauce à la crème aux champignons. Ce plat est servi avec frites ou légumes de saison.",
        ingredients: [
          "Escalope de Porc",
          "Calvados/Eaux de Vie",
          "Champignon de Saison",
          "Crème Fraiche Normande",
        ],
      },
    ],
    en: [
      {
        id: 1,
        name: "Norman Salad",
        imgSrc: "./assets/images/norman_salad.webp",
        price: 12,
        description:
          "Surely the best Norman dish, this salad is composed of lettuce and arugula, accompanied by normand orchard apples, walnuts, as well as generous pieces of breaded camembert.",
        ingredients: [
          "Seanonal salad",
          "Norman Camembert",
          "Apples",
          "Walnut Kernels",
        ],
      },
      {
        id: 2,
        name: "Calendos Cutlet",
        imgSrc: "./assets/images/camembert_escalope.jpg",
        price: 8,
        description:
          "A simple turkey or veal cutlet, served with cream and Camembert sauce. This dish is served with fries or seasonal vegetables.",
        ingredients: [
          "Norman Camembert",
          "Chicken/Turkey Cutlet",
          "Normandy Fresh Cream",
        ],
      },
      {
        id: 3,
        name: "Norman Cutlet",
        imgSrc: "./assets/images/norman_escalope.jpg",
        description:
          "A simple turkey or veal cutlet cooked with alcohol (Calva) accompanied by a mushroom cream sauce. This dish is served with fries or seasonal vegetables.",
        price: 10,
        ingredients: [
          "Pork Cutlet",
          "Calvados/Brandies",
          "Seasonal Mushroom",
          "Normandy Fresh Cream",
        ],
      },
    ],
  },
  specialities: {
    name: {
      fr: "Spécialité",
      en: "Specialtie",
    },
    fr: [
      {
        id: 4,
        name: "Le trou Normand",
        imgSrc: "./assets/images/norman_trou.jpg",
        description:
          "Digestif typiquement normand, composé d'un sorbet à la pomme posé sur un lit d'Eau de vie (Calva). Il se consomme entre deux étapes du repas pour faire passer.",
        price: 4,
        ingredients: ["Sorbet à la Pomme", "Calvados/Eaux de Vie"],
      },
    ],
    en: [
      {
        id: 4,
        name: "Le trou Normand",
        imgSrc: "./assets/images/norman_trou.jpg",
        description:
          "A typical Normand digestive, consisting of an apple sorbet soaked in Calva. It is eaten between two stages of the meal to let place for the next dish.",
        price: 4,
        ingredients: ["Apple sorbet", "Calvados/Brandies"],
      },
    ],
  },
  dessert: {
    name: {
      fr: "Dessert",
      en: "Dessert",
    },
    fr: [
      {
        id: 5,
        name: "Le Teurgoule",
        imgSrc: "./assets/images/teurgoule.webp",
        description:
          "Spécialité à base de riz, c'est en fait un riz au lait qui a cuit pendant de longues heures à basse température. Il se mange chaud, attention à pas se tordre la goule !",
        price: 6,
        ingredients: [
          "Riz Rond",
          "Lait",
          "Cannelle",
          "Sucre Blanc ou Cassonade",
        ],
      },
    ],
    en: [
      {
        id: 5,
        name: "The Teurgoule",
        imgSrc: "./assets/images/teurgoule.webp",
        description:
          "A rice-based specialty, it's actually a rice pudding that has been cooked for long hours at low temperature. It is eaten hot, be careful to not 'tordre la goule'",
        price: 6,
        ingredients: ["Round Rice", "Milk", "Cinnamon", "Sugar"],
      },
    ],
  },
};
