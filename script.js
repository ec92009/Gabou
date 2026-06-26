const root = document.documentElement;

const translations = {
  fr: {
    optionOne: "Option 1",
    optionOneName: "Galerie",
    optionTwo: "Option 2",
    optionTwoName: "Atelier vivant",
    optionThree: "Option 3",
    optionThreeName: "Nocturne",
    optionFour: "Option 4",
    optionFourName: "Biome",
    optionFive: "Option 5",
    optionFiveName: "Brut",
    optionSix: "Option 6",
    optionSixName: "Lumina",
    navMaterials: "Matières",
    navAtelier: "Atelier",
    navCollection: "Collection",
    navContact: "Contact",
    day: "Jour",
    night: "Nuit",
    heroTitle: "Sacs sculpturaux en cuir, bois et laiton",
    heroLead:
      "Gabou façonne des sacs haut de gamme inspirés par les formes champignon et mycélium, entre objet d'art et compagnon quotidien.",
    atelierHeroLead:
      "Les formes fongiques deviennent lignes portées: souplesse du cuir, densité du bois, précision du laiton.",
    nocturneHeroLead:
      "Un volume noir, presque végétal, où le cuir plissé capte la lumière du laiton et trace une silhouette de nuit.",
    biomeHeroLead:
      "Les formes fongiques rencontrent la douceur de la forêt : cuir vert sauge, socle en liège et laiton satiné.",
    brutHeroLead:
      "Une silhouette radicale et géométrique où le cèdre massif s'allie au cuir noir de carbone et à l'acier brut.",
    luminaHeroLead:
      "Une fusion techno-couture de cuir d'obsidienne et de résine aux filaments de mycélium bioluminescents.",
    primaryCta: "Explorer la collection",
    secondaryCta: "Demander un rendez-vous",
    materialsTitle: "Matières d'exception",
    materialsText:
      "Cuir pleine fleur, bois massif poli, laiton patiné et structures mycélium cultivées composent une présence dense, précise, durable.",
    livingMaterialsTitle: "Matières vivantes",
    livingMaterialsText:
      "Les surfaces sont choisies pour leur réaction à la main: cuir tanné, bois huilé, laiton qui se patine et reliefs mycélium.",
    biomeMaterialsTitle: "Écosystème matériel",
    biomeMaterialsText:
      "Des matières prélevées dans le respect du vivant: liège régénératif, cuir tanné végétal, et teintures aux lichens de sous-bois.",
    brutMaterialsTitle: "Vérité structurelle",
    brutMaterialsText:
      "Pas de fioritures. La matière s'exprime dans sa nudité : cèdre brossé, cuir de caractère, acier brut usiné.",
    luminaMaterialsTitle: "Matières photoniques",
    luminaMaterialsText:
      "La technologie fusionne avec le biologique : résines transparentes photoréactives et cuir d'obsidienne plissé.",
    materialLeather: "Cuir",
    materialWood: "Bois",
    materialMycelium: "Mycélium",
    materialBrass: "Laiton",
    materialCork: "Liège",
    materialSteel: "Acier",
    materialTitanium: "Titane",
    materialResin: "Résine",
    collectionTitle: "Trois silhouettes, une même exigence",
    collectionText:
      "Chaque modèle est produit en petites séries, avec un équilibre entre sculpture, usage et réparabilité.",
    productOneTitle: "Spore",
    productOneText: "Coiffe mycélium ivoire, corps en cuir noir, base en noyer.",
    productTwoTitle: "Lamelle",
    productTwoText: "Cuir brun plissé, anse bois sculptée et attaches laiton.",
    productThreeTitle: "Nocturne",
    productThreeText: "Volume noir laqué, veinage organique et lumière cuivre.",
    productFourTitle: "Écorce",
    productFourText: "Cuir vert sauge, coque de liège naturel et attaches en bronze brossé.",
    productFiveTitle: "Slab",
    productFiveText: "Châssis en cèdre brut, corps en cuir noir de carbone et charnières acier.",
    productSixTitle: "Aura",
    productSixText: "Résine translucide infusée de filaments lumineux, cuir plissé sombre.",
    productSevenTitle: "Lichen",
    productSevenText: "Cuir vert olive, coiffe mycélium mousseuse, attaches patinées.",
    productEightTitle: "Stump",
    productEightText: "Chêne massif carbonisé, cuir épais texturé noir, charnières brutes.",
    productNineTitle: "Block",
    productNineText: "Corps en mycélium compressé et poignée en acier brossé.",
    productTenTitle: "Glow",
    productTenText: "Filaments fongiques phosphorescents, cuir noir-violet.",
    productElevenTitle: "Nova",
    productElevenText: "Résine iridescente bleu-violet et cage structurelle en titane.",
    atelierTitle: "L'atelier",
    atelierText:
      "Chaque sac naît d'un dialogue entre matière, geste et temps. Les pièces sont assemblées, poncées et patinées en atelier.",
    atelierLink: "Découvrir l'atelier",
    processText:
      "De la culture du mycélium à l'assemblage final, chaque étape est guidée par le geste et l'attention.",
    processOne: "Cultiver la forme",
    processTwo: "Tailler le bois",
    processThree: "Patiner le métal",
    processFour: "Assembler à la main",
    nocturneAtelierText:
      "Un savoir-faire exigeant: gestes précis, volumes libres, finitions sombres et durables.",
    biomeAtelierText:
      "Un geste respectueux de la matière brute : liège prélevé avec soin et cuir teinté aux pigments végétaux.",
    brutAtelierText:
      "Une approche architecturale et franche : coupes nettes, assemblages visibles et surfaces sans artifice.",
    luminaAtelierText:
      "Une recherche d'avant-garde : hybridation de biomatériaux, résines optiques et micro-détails photoluminescents.",
    contactTitle: "Présentation privée",
    contactText:
      "Échangeons autour d'une pièce existante, d'une commande spéciale ou d'une collaboration matière.",
    contactCta: "hello@gabou.fr",
  },
  en: {
    optionOne: "Option 1",
    optionOneName: "Gallery",
    optionTwo: "Option 2",
    optionTwoName: "Living Atelier",
    optionThree: "Option 3",
    optionThreeName: "Nocturne",
    optionFour: "Option 4",
    optionFourName: "Biome",
    optionFive: "Option 5",
    optionFiveName: "Brut",
    optionSix: "Option 6",
    optionSixName: "Lumina",
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
      "Les formes fongiques deviennent lignes portées: souplesse du cuir, densité du bois, précision du laiton.",
    nocturneHeroLead:
      "A black, almost vegetal volume where pleated leather catches brass light and draws a night silhouette.",
    biomeHeroLead:
      "Fungal forms meet the softness of the forest: sage green leather, cork oak base and satin brass.",
    brutHeroLead:
      "A radical, geometric silhouette combining solid cedar wood, carbon black leather, and raw steel.",
    luminaHeroLead:
      "A techno-couture fusion of obsidian leather and resin infused with bioluminescent mycelium threads.",
    primaryCta: "Explore the collection",
    secondaryCta: "Request an appointment",
    materialsTitle: "Exceptional materials",
    materialsText:
      "Full-grain leather, polished solid wood, patinated brass and cultivated mycelium structures create a dense, precise, durable presence.",
    livingMaterialsTitle: "Living materials",
    livingMaterialsText:
      "Surfaces are selected for how they answer the hand: tanned leather, oiled wood, brass that patinates and mycelium reliefs.",
    biomeMaterialsTitle: "Material Ecosystem",
    biomeMaterialsText:
      "Materials harvested with respect for the living: regenerative cork, vegetable-tanned leather, and dyes from undergrowth lichen.",
    brutMaterialsTitle: "Structural Truth",
    brutMaterialsText:
      "No embellishments. The material speaks for itself: brushed cedar, textured leather, raw machined steel.",
    luminaMaterialsTitle: "Photonic Materials",
    luminaMaterialsText:
      "Technology merges with biology: photoreactive transparent resins and pleated obsidian-dark leather.",
    materialLeather: "Leather",
    materialWood: "Wood",
    materialMycelium: "Mycelium",
    materialBrass: "Brass",
    materialCork: "Cork",
    materialSteel: "Steel",
    materialTitanium: "Titanium",
    materialResin: "Resin",
    collectionTitle: "Three silhouettes, one standard",
    collectionText:
      "Each model is produced in small series, balancing sculpture, use and repairability.",
    productOneTitle: "Spore",
    productOneText: "Ivory mycelium cap, black leather body, walnut base.",
    productTwoTitle: "Lamelle",
    productTwoText: "Pleated brown leather, carved wood handle and brass fittings.",
    productThreeTitle: "Nocturne",
    productThreeText: "Black lacquer volume, organic veining and copper light.",
    productFourTitle: "Écorce",
    productFourText: "Sage green leather, natural cork shell and brushed bronze fittings.",
    productFiveTitle: "Slab",
    productFiveText: "Raw cedar frame, carbon black leather body and steel hinges.",
    productSixTitle: "Aura",
    productSixText: "Translucent resin infused with glowing threads, pleated dark leather.",
    productSevenTitle: "Lichen",
    productSevenText: "Olive green leather, mossy mycelium cap, patinated fittings.",
    productEightTitle: "Stump",
    productEightText: "Charred solid oak, heavy textured black leather, raw iron joints.",
    productNineTitle: "Block",
    productNineText: "Compressed mycelium block body and brushed steel handle.",
    productTenTitle: "Glow",
    productTenText: "Phosphorescent fungal threads, dark black-violet leather.",
    productElevenTitle: "Nova",
    productElevenText: "Iridescent blue-violet resin and titanium structural cage.",
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
    biomeAtelierText:
      "A craft respectful of raw materials: gently harvested cork and leather dyed with plant pigments.",
    brutAtelierText:
      "An architectural, honest approach: clean cuts, visible joints, and unadorned surfaces.",
    luminaAtelierText:
      "An avant-garde exploration: hybridization of biomaterials, optical resins, and photoluminescent micro-details.",
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
