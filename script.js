const root = document.documentElement;

const translations = {
  fr: {
    optionOne: "Option 1",
    optionOneName: "Galerie",
    optionTwo: "Option 2",
    optionTwoName: "Atelier vivant",
    optionThree: "Option 3",
    optionThreeName: "Nocturne",
    navMaterials: "Matieres",
    navAtelier: "Atelier",
    navCollection: "Collection",
    navContact: "Contact",
    day: "Jour",
    night: "Nuit",
    heroTitle: "Sacs sculpturaux en cuir, bois et laiton",
    heroLead:
      "Gabou faconne des sacs haut de gamme inspires par les formes champignon et mycelium, entre objet d'art et compagnon quotidien.",
    atelierHeroLead:
      "Les formes fongiques deviennent lignes portees: souplesse du cuir, densite du bois, precision du laiton.",
    nocturneHeroLead:
      "Un volume noir, presque vegetal, ou le cuir plisse capte la lumiere du laiton et trace une silhouette de nuit.",
    primaryCta: "Explorer la collection",
    secondaryCta: "Demander un rendez-vous",
    materialsTitle: "Matieres d'exception",
    materialsText:
      "Cuir pleine fleur, bois massif poli, laiton patine et structures mycelium cultivees composent une presence dense, precise, durable.",
    livingMaterialsTitle: "Matieres vivantes",
    livingMaterialsText:
      "Les surfaces sont choisies pour leur reaction a la main: cuir tanne, bois huile, laiton qui se patine et reliefs mycelium.",
    materialLeather: "Cuir",
    materialWood: "Bois",
    materialMycelium: "Mycelium",
    materialBrass: "Laiton",
    collectionTitle: "Trois silhouettes, une meme exigence",
    collectionText:
      "Chaque modele est produit en petites series, avec un equilibre entre sculpture, usage et reparabilite.",
    productOneTitle: "Spore",
    productOneText: "Coiffe mycelium ivoire, corps en cuir noir, base en noyer.",
    productTwoTitle: "Lamelle",
    productTwoText: "Cuir brun plisse, anse bois sculptee et attaches laiton.",
    productThreeTitle: "Nocturne",
    productThreeText: "Volume noir laque, veinage organique et lumiere cuivre.",
    atelierTitle: "L'atelier",
    atelierText:
      "Chaque sac nait d'un dialogue entre matiere, geste et temps. Les pieces sont assemblees, poncees et patinees en atelier.",
    atelierLink: "Decouvrir l'atelier",
    processText:
      "De la culture du mycelium a l'assemblage final, chaque etape est guidee par le geste et l'attention.",
    processOne: "Cultiver la forme",
    processTwo: "Tailler le bois",
    processThree: "Patiner le metal",
    processFour: "Assembler a la main",
    nocturneAtelierText:
      "Un savoir-faire exigeant: gestes precis, volumes libres, finitions sombres et durables.",
    contactTitle: "Presentation privee",
    contactText:
      "Echangeons autour d'une piece existante, d'une commande speciale ou d'une collaboration matiere.",
    contactCta: "hello@gabou.fr",
  },
  en: {
    optionOne: "Option 1",
    optionOneName: "Gallery",
    optionTwo: "Option 2",
    optionTwoName: "Living Atelier",
    optionThree: "Option 3",
    optionThreeName: "Nocturne",
    navMaterials: "Materials",
    navAtelier: "Atelier",
    navCollection: "Collection",
    navContact: "Contact",
    day: "Day",
    night: "Night",
    heroTitle: "Sculptural leather, wood and brass handbags",
    heroLead:
      "Gabou shapes high-value handbags inspired by mushroom and mycelium forms, between art object and daily companion.",
    atelierHeroLead:
      "Fungal forms become wearable lines: leather suppleness, wood density, brass precision.",
    nocturneHeroLead:
      "A black, almost vegetal volume where pleated leather catches brass light and draws a night silhouette.",
    primaryCta: "Explore the collection",
    secondaryCta: "Request an appointment",
    materialsTitle: "Exceptional materials",
    materialsText:
      "Full-grain leather, polished solid wood, patinated brass and cultivated mycelium structures create a dense, precise, durable presence.",
    livingMaterialsTitle: "Living materials",
    livingMaterialsText:
      "Surfaces are selected for how they answer the hand: tanned leather, oiled wood, brass that patinates and mycelium reliefs.",
    materialLeather: "Leather",
    materialWood: "Wood",
    materialMycelium: "Mycelium",
    materialBrass: "Brass",
    collectionTitle: "Three silhouettes, one standard",
    collectionText:
      "Each model is produced in small series, balancing sculpture, use and repairability.",
    productOneTitle: "Spore",
    productOneText: "Ivory mycelium cap, black leather body, walnut base.",
    productTwoTitle: "Lamelle",
    productTwoText: "Pleated brown leather, carved wood handle and brass fittings.",
    productThreeTitle: "Nocturne",
    productThreeText: "Black lacquer volume, organic veining and copper light.",
    atelierTitle: "The atelier",
    atelierText:
      "Each bag begins as a dialogue between material, gesture and time. Pieces are assembled, sanded and patinated in the atelier.",
    atelierLink: "Discover the atelier",
    processText:
      "From mycelium cultivation to final assembly, every step is guided by craft and attention.",
    processOne: "Cultivate the form",
    processTwo: "Carve the wood",
    processThree: "Patinate the metal",
    processFour: "Assemble by hand",
    nocturneAtelierText:
      "Demanding know-how: precise gestures, free volumes, dark and durable finishes.",
    contactTitle: "Private presentation",
    contactText:
      "Let us discuss an existing piece, a special order or a material collaboration.",
    contactCta: "hello@gabou.fr",
  },
};

const state = {
  look: localStorage.getItem("gabou-look") || "gallery",
  lang: localStorage.getItem("gabou-lang") || "fr",
  theme: localStorage.getItem("gabou-theme") || "day",
};

const lookButtons = Array.from(document.querySelectorAll("[data-look-target]"));
const lookPanels = Array.from(document.querySelectorAll("[data-look-panel]"));
const langButtons = Array.from(document.querySelectorAll("[data-lang-choice]"));
const themeButtons = Array.from(document.querySelectorAll("[data-theme-choice]"));
const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));

function setLook(look, scrollToTop = false) {
  state.look = look;
  localStorage.setItem("gabou-look", look);

  lookButtons.forEach((button) => {
    const active = button.dataset.lookTarget === look;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  lookPanels.forEach((panel) => {
    const active = panel.dataset.lookPanel === look;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("gabou-lang", lang);
  root.lang = lang;

  i18nNodes.forEach((node) => {
    const value = translations[lang][node.dataset.i18n];
    if (value) {
      node.textContent = value;
    }
  });

  langButtons.forEach((button) => {
    const active = button.dataset.langChoice === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem("gabou-theme", theme);
  root.dataset.theme = theme;

  themeButtons.forEach((button) => {
    const active = button.dataset.themeChoice === theme;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

lookButtons.forEach((button) => {
  button.addEventListener("click", () => setLook(button.dataset.lookTarget, true));
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langChoice));
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
});

setLook(state.look);
setLanguage(state.lang);
setTheme(state.theme);
