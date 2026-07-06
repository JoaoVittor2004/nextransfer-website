window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 30) {
    /* nav.style.background="rgba(0,0,0,.75)"; */
  } else {
    nav.style.background = "rgba(0,0,0,.15)";
  }
});

const btn = document.getElementById("theme-toggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

document.querySelector(".reserve-btn").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =============================================
// TRADUÇÕES
// =============================================

const translations = {
  pt: {
    // NAVBAR
    navHome: "Início",
    navServices: "Serviços",
    navVehicles: "Veículos",
    navContact: "Contato",
    reserveBtn: "Reservar",

    // HERO
    heroTag: "TRANSPORTE EXECUTIVO PREMIUM",
    heroTitle: "Sua jornada começa antes do destino.",
    heroDesc:
      "Transporte executivo e turismo com conforto, pontualidade e discrição para quem exige excelência.",
    heroBookBtn: "Reservar Agora",
    servicesBtn: "Conhecer Serviços",

    // DIFERENCIAIS
    difTag: "NOSSOS DIFERENCIAIS",
    difTitle: "Excelência em cada detalhe.",
    difDesc:
      "Transporte executivo e turismo com foco em conforto, segurança e pontualidade.",
    dif1Title: "Pontualidade",
    dif1Desc:
      "Seu compromisso começa no horário certo. Planejamento e eficiência em cada trajeto.",
    dif2Title: "Segurança",
    dif2Desc:
      "Motoristas experientes e viagens realizadas com total tranquilidade e confiança.",
    dif3Title: "Conforto Premium",
    dif3Desc:
      "Veículos executivos preparados para oferecer uma experiência superior do início ao fim.",

    // SERVIÇOS
    svcTag: "NOSSOS SERVIÇOS",
    svcTitle: "Soluções de mobilidade para cada ocasião.",
    svc1Title: "Transfer Aeroporto",
    svc1Desc:
      "Traslados com conforto e pontualidade para aeroportos, hotéis e destinos corporativos.",
    svc2Title: "Executivo Corporativo",
    svc2Desc:
      "Atendimento profissional para reuniões, eventos empresariais e compromissos executivos.",
    svc3Title: "Turismo Premium",
    svc3Desc:
      "Experiências exclusivas com conforto e praticidade para conhecer novos destinos.",

    // VEÍCULOS
    vehTag: "NOSSOS VEÍCULOS",
    vehTitle: "Conforto e sofisticação para cada trajeto.",
    vehDesc:
      "Veículos selecionados para oferecer segurança, elegância e uma experiência premium.",
    veh1Title: "Sedan Executivo",
    veh1Desc: "Ideal para executivos, aeroportos e compromissos importantes.",
    veh1Btn: "Solicitar Orçamento",
    veh2Title: "SUV Executivo",
    veh2Desc:
      "Mais espaço, ideal para grupos e familiares, conforto e presença para viagens especiais.",
    veh2Btn: "Solicitar Orçamento",
    veh3Title: "Van Executiva",
    veh3Desc: "A solução ideal para grupos, turismo e eventos corporativos.",
    veh3Btn: "Solicitar Orçamento",
    veh4Title: "Blindado Executivo",
    veh4Desc: "Máxima segurança, conforto e discrição para viagens executivas.",
    veh4Btn: "Solicitar Orçamento",

    // CONTATO
    contactTag: "FALE CONOSCO",
    contactTitle: "Pronto para sua próxima viagem?",
    contactDesc:
      "Entre em contato e solicite um orçamento personalizado. Nossa equipe está pronta para atender você.",
    contactBtn: "Solicitar Orçamento",

    // FOOTER
    footerDesc: "Transporte Executivo e Turismo.",
    footerContactTitle: "Contato",
    footerServiceTitle: "Atendimento",
    footerServiceHours: "24 horas",
    footerServiceDays: "Todos os dias da semana",
    footerRights: "© 2026 Nextransfer • Todos os direitos reservados.",
  },

  en: {
    // NAVBAR
    navHome: "Home",
    navServices: "Services",
    navVehicles: "Vehicles",
    navContact: "Contact",
    reserveBtn: "Book Now",

    // HERO
    heroTag: "PREMIUM EXECUTIVE TRANSPORTATION",
    heroTitle: "Your journey begins before the destination.",
    heroDesc:
      "Executive transport and tourism with comfort, punctuality and discretion for those who demand excellence.",
    heroBookBtn: "Book Now",
    servicesBtn: "Explore Services",

    // DIFERENCIAIS
    difTag: "OUR HIGHLIGHTS",
    difTitle: "Excellence in every detail.",
    difDesc:
      "Executive transport and tourism focused on comfort, safety and punctuality.",
    dif1Title: "Punctuality",
    dif1Desc:
      "Your commitment starts on time. Planning and efficiency on every route.",
    dif2Title: "Safety",
    dif2Desc:
      "Experienced drivers and trips carried out with complete peace of mind and trust.",
    dif3Title: "Premium Comfort",
    dif3Desc:
      "Executive vehicles designed to deliver a superior experience from start to finish.",

    // SERVIÇOS
    svcTag: "OUR SERVICES",
    svcTitle: "Mobility solutions for every occasion.",
    svc1Title: "Airport Transfer",
    svc1Desc:
      "Comfortable and punctual transfers to airports, hotels and corporate destinations.",
    svc2Title: "Corporate Executive",
    svc2Desc:
      "Professional service for meetings, business events and executive engagements.",
    svc3Title: "Premium Tourism",
    svc3Desc:
      "Exclusive experiences with comfort and convenience to explore new destinations.",

    // VEÍCULOS
    vehTag: "OUR VEHICLES",
    vehTitle: "Comfort and sophistication for every journey.",
    vehDesc:
      "Selected vehicles to provide safety, elegance and a premium experience.",
    veh1Title: "Executive Sedan",
    veh1Desc: "Ideal for executives, airports and important engagements.",
    veh1Btn: "Request a Quote",
    veh2Title: "Executive SUV",
    veh2Desc:
      "More space, ideal for groups and families, comfort and presence for special trips.",
    veh2Btn: "Request a Quote",
    veh3Title: "Executive Van",
    veh3Desc: "The perfect solution for groups, tourism and corporate events.",
    veh3Btn: "Request a Quote",
    veh4Title: "Executive Armored",
    veh4Desc: "Maximum security, comfort and discretion for executive trips.",
    veh4Btn: "Request a Quote",

    // CONTATO
    contactTag: "CONTACT US",
    contactTitle: "Ready for your next trip?",
    contactDesc:
      "Get in touch and request a personalized quote. Our team is ready to assist you.",
    contactBtn: "Request a Quote",

    // FOOTER
    footerDesc: "Executive Transport and Tourism.",
    footerContactTitle: "Contact",
    footerServiceTitle: "Service Hours",
    footerServiceHours: "24 hours",
    footerServiceDays: "Every day of the week",
    footerRights: "© 2026 Nextransfer • All rights reserved.",
  },

  es: {
    // NAVBAR
    navHome: "Inicio",
    navServices: "Servicios",
    navVehicles: "Vehículos",
    navContact: "Contacto",
    reserveBtn: "Reservar",

    // HERO
    heroTag: "TRANSPORTE EJECUTIVO PREMIUM",
    heroTitle: "Tu viaje comienza antes del destino.",
    heroDesc:
      "Transporte ejecutivo y turismo con comodidad, puntualidad y discreción para quienes exigen excelencia.",
    heroBookBtn: "Reservar Ahora",
    servicesBtn: "Conocer Servicios",

    // DIFERENCIAIS
    difTag: "NUESTROS DIFERENCIALES",
    difTitle: "Excelencia en cada detalle.",
    difDesc:
      "Transporte ejecutivo y turismo enfocados en comodidad, seguridad y puntualidad.",
    dif1Title: "Puntualidad",
    dif1Desc:
      "Tu compromiso comienza a la hora exacta. Planificación y eficiencia en cada trayecto.",
    dif2Title: "Seguridad",
    dif2Desc:
      "Conductores experimentados y viajes realizados con total tranquilidad y confianza.",
    dif3Title: "Comodidad Premium",
    dif3Desc:
      "Vehículos ejecutivos preparados para ofrecer una experiencia superior de principio a fin.",

    // SERVIÇOS
    svcTag: "NUESTROS SERVICIOS",
    svcTitle: "Soluciones de movilidad para cada ocasión.",
    svc1Title: "Transfer Aeropuerto",
    svc1Desc:
      "Traslados con comodidad y puntualidad hacia aeropuertos, hoteles y destinos corporativos.",
    svc2Title: "Ejecutivo Corporativo",
    svc2Desc:
      "Atención profesional para reuniones, eventos empresariales y compromisos ejecutivos.",
    svc3Title: "Turismo Premium",
    svc3Desc:
      "Experiencias exclusivas con comodidad y practicidad para conocer nuevos destinos.",

    // VEÍCULOS
    vehTag: "NUESTROS VEHÍCULOS",
    vehTitle: "Comodidad y sofisticación para cada trayecto.",
    vehDesc:
      "Vehículos seleccionados para ofrecer seguridad, elegancia y una experiencia premium.",
    veh1Title: "Sedán Ejecutivo",
    veh1Desc: "Ideal para ejecutivos, aeropuertos y compromisos importantes.",
    veh1Btn: "Solicitar Cotización",
    veh2Title: "SUV Ejecutivo",
    veh2Desc:
      "Más espacio, ideal para grupos y familias, comodidad y presencia para viajes especiales.",
    veh2Btn: "Solicitar Cotización",
    veh3Title: "Van Ejecutiva",
    veh3Desc: "La solución ideal para grupos, turismo y eventos corporativos.",
    veh3Btn: "Solicitar Cotización",
    veh4Title: "Blindado Ejecutivo",
    veh4Desc: "Máxima seguridad, conforto y discrição para viagens executivas.",
    veh4Btn: "Solicitar Cotización",

    // CONTATO
    contactTag: "CONTÁCTANOS",
    contactTitle: "¿Listo para tu próximo viaje?",
    contactDesc:
      "Contáctanos y solicita un presupuesto personalizado. Nuestro equipo está listo para atenderte.",
    contactBtn: "Solicitar Cotización",

    // FOOTER
    footerDesc: "Transporte Ejecutivo y Turismo.",
    footerContactTitle: "Contacto",
    footerServiceTitle: "Atención",
    footerServiceHours: "24 horas",
    footerServiceDays: "Todos los días de la semana",
    footerRights: "© 2026 Nextransfer • Todos los derechos reservados.",
  },
};

// =============================================
// FUNÇÃO TRADUZIR
// =============================================

function changeLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // NAVBAR
  document.querySelector('a[href="#start"]').textContent = t.navHome;
  document.querySelector('a[href="#services"]').textContent = t.navServices;
  document.querySelector('a[href="#vehicles"]').textContent = t.navVehicles;
  document.querySelectorAll('a[href="#contact"]').forEach((el) => {
    if (
      !el.classList.contains("reserve-btn") &&
      !el.classList.contains("whatsapp-btn") &&
      !el.classList.contains("primary")
    ) {
      el.textContent = t.navContact;
    }
  });
  document.querySelector(".reserve-btn").textContent = t.reserveBtn;

  // HERO
  document.querySelector(".tag").textContent = t.heroTag;
  document.getElementById("heroTitle").textContent = t.heroTitle;
  document.querySelector(".hero-content p").textContent = t.heroDesc;
  document.getElementById("reserveBtn").textContent = t.heroBookBtn;
  document.getElementById("servicesBtn").textContent = t.servicesBtn;

  // DIFERENCIAIS
  const difSection = document.querySelector(".diferenciais");
  difSection.querySelector(".section-title span").textContent = t.difTag;
  difSection.querySelector(".section-title h2").textContent = t.difTitle;
  difSection.querySelector(".section-title p").textContent = t.difDesc;
  const difCards = difSection.querySelectorAll(".diferencial-card");
  difCards[0].querySelector("h3").textContent = t.dif1Title;
  difCards[0].querySelector("p").textContent = t.dif1Desc;
  difCards[1].querySelector("h3").textContent = t.dif2Title;
  difCards[1].querySelector("p").textContent = t.dif2Desc;
  difCards[2].querySelector("h3").textContent = t.dif3Title;
  difCards[2].querySelector("p").textContent = t.dif3Desc;

  // SERVIÇOS
  const svcSection = document.querySelector(".servicos-content");
  svcSection.querySelector("span").textContent = t.svcTag;
  svcSection.querySelector("h2").textContent = t.svcTitle;
  const svcItems = svcSection.querySelectorAll(".service-item");
  svcItems[0].querySelector("h3").textContent = t.svc1Title;
  svcItems[0].querySelector("p").textContent = t.svc1Desc;
  svcItems[1].querySelector("h3").textContent = t.svc2Title;
  svcItems[1].querySelector("p").textContent = t.svc2Desc;
  svcItems[2].querySelector("h3").textContent = t.svc3Title;
  svcItems[2].querySelector("p").textContent = t.svc3Desc;

  // VEÍCULOS
  const vehSection = document.querySelector(".veiculos");
  vehSection.querySelector(".section-title span").textContent = t.vehTag;
  vehSection.querySelector(".section-title h2").textContent = t.vehTitle;
  vehSection.querySelector(".section-title p").textContent = t.vehDesc;
  const vehCards = vehSection.querySelectorAll(".veiculo-card");
  vehCards[0].querySelector("h3").textContent = t.veh1Title;
  vehCards[0].querySelector("p").textContent = t.veh1Desc;
  vehCards[0].querySelector(".vehicle-btn").textContent = t.veh1Btn;
  vehCards[1].querySelector("h3").textContent = t.veh2Title;
  vehCards[1].querySelector("p").textContent = t.veh2Desc;
  vehCards[1].querySelector(".vehicle-btn").textContent = t.veh2Btn;
  vehCards[2].querySelector("h3").textContent = t.veh3Title;
  vehCards[2].querySelector("p").textContent = t.veh3Desc;
  vehCards[2].querySelector(".vehicle-btn").textContent = t.veh3Btn;
  vehCards[3].querySelector("h3").textContent = t.veh4Title;
  vehCards[3].querySelector("p").textContent = t.veh4Desc;
  vehCards[3].querySelector(".vehicle-btn").textContent = t.veh4Btn;

  // CONTATO
  const contactSection = document.querySelector(".contato");
  contactSection.querySelector("span").textContent = t.contactTag;
  contactSection.querySelector("h2").textContent = t.contactTitle;
  contactSection.querySelector("p").textContent = t.contactDesc;
  contactSection.querySelector(".whatsapp-btn").textContent = t.contactBtn;

  // FOOTER
  const footer = document.querySelector(".footer");
  footer.querySelector("p").textContent = t.footerDesc;
  const footerCols = footer.querySelectorAll(".footer-grid > div");
  footerCols[1].querySelector("h4").textContent = t.footerContactTitle;
  footer.querySelector(".footer-bottom").textContent = t.footerRights;
  localStorage.setItem("language", lang);
}

// =============================================
// EVENTOS IDIOMAS
// =============================================

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    changeLanguage(btn.dataset.lang);
  });
});

// Carrega idioma salvo ou padrão PT
const savedLang = localStorage.getItem("language") || "pt";
changeLanguage(savedLang);
