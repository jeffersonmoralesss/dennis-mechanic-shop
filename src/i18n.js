// src/i18n.js
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

/** -----------------------------------------
 *  Translation dictionary (EN + ES)
 *  ----------------------------------------*/
const dict = {
  en: {
    // Header (logo alt + contact bits)
    header: {
      logoAlt: "Dennis General Mechanic Logo",
      phone: "240-764-7004",
      address: "4720 Baltimore Ave Hyattsville, MD 20781",
    },

    // Top nav labels (+ extra for sitemap)
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      commercial: "Commercial",
      reservation: "Book a Reservation",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      privacyChoices: "Your Privacy Choices",
      accessibility: "Accessibility",
      sitemap: "Sitemap",
    },

    footer: {
      since: "2007",
      rights: "All Rights Reserved.",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      choices: "Your Privacy Choices",
      accessibility: "Accessibility",
      sitemap: "Sitemap",
    },

    home: {
      hero: {
        title: "Keep Your Car Running Right",
        subtitle:
          "Hyattsville’s honest, full-service mechanics—fast, friendly, and fair.",
        reserve: "Schedule a Reservation",
        call: "Call (240) 764-7004",
      },
      features: {
        oneH: "ASE-Style Expertise",
        oneP: "Seasoned techs, modern diagnostics, done right the first time.",
        twoH: "Same-Day Service",
        twoP: "Quick turnarounds for common repairs and maintenance.",
        threeH: "Up-Front Pricing",
        threeP: "Clear estimates and updates—no surprises.",
        fourH: "Quality Parts",
        fourP: "OEM-grade components for reliability and safety.",
      },
      quick: ["Oil Change", "Brakes", "Diagnostics", "Alignment", "Tires"],
      weekTitle: "This Week’s Work",
      testimonials: "Testimonials",
    },

    commercial: {
      heroH: "Commercial Services & Fleet Support",
      heroP:
        "Keep your business moving with dependable, fast turnaround service in Hyattsville, MD.",
      quote: "Request a Commercial Quote",
      seeAll: "See All Services",
      introH: "Built for Vans, Light Trucks & Small Fleets",
      introP1:
        "At Dennis General Mechanic, we know downtime costs money. Whether you run delivery vans, trades trucks, or service vehicles, our team focuses on fast diagnostics, clear communication, and reliable repairs that keep your drivers on schedule.",
      introP2:
        "From tires and brakes to electrical and engine diagnostics, we service most makes and models with OEM-grade parts and modern equipment. We’ll help you plan maintenance, reduce surprise breakdowns, and stretch your operating budget.",
      stripH: "Why Businesses Choose Dennis General Mechanic",
      b1: "Fast turnarounds & clear ETAs",
      b2: "OEM-grade parts & modern diagnostics",
      b3: "Up-front estimates—no surprises",
      b4: "Maintenance plans that fit your routes",
      offerH: "Commercial services we offer",
      list: [
        "Fleet maintenance programs (oil, filters, inspections)",
        "Brake service (pads/rotors, hydraulics, ABS diagnostics)",
        "Tires: mount/balance, rotations, flats, alignments",
        "Engine & electrical diagnostics (OBD-II, sensors, charging)",
        "Suspension & steering (shocks/struts, tie-rods, ball joints)",
        "Cooling system service (radiators, thermostats, flushes)",
      ],
      learn: "Learn About Our Shop",
      quoteBlock:
        "“Dennis keeps our work vans on the road. Honest, fast and fair pricing—exactly what a small business needs.”",
      quoteBy: "— Local Business Owner",
    },

    services: {
      heroH: "Our Services",
      heroP: "Quality auto care you can trust—book online in minutes.",
      searchPH: "Search services (e.g., brakes, oil, alignment)",
      all: "All",
      reserve: "Reserve",
      empty: "No services match your search.",
    },

    about: {
      heroH: "About Us",
      heroP: "Your trusted partner in automotive care",
      whoH: "Who We Are",
      p1: "At Dennis General Mechanic Shop, we believe every driver deserves a safe, reliable, and well-maintained vehicle. Proudly serving our community, we combine years of hands-on experience with modern diagnostic tools to deliver trusted automotive care.",
      p2: "From brake repairs and oil changes to complete engine diagnostics, our certified team is dedicated to getting the job done right the first time. We value honesty, transparency, and quality service — because we're not just fixing cars, we're building lasting relationships.",
      p3: "Whether you're here for routine maintenance or urgent repairs, you can count on us for fast, friendly, and dependable service that keeps you safely on the road. Your car's health is our mission.",
      h1: "Certified & Experienced Technicians",
      h2: "Comprehensive Auto Services",
      h3: "Honest & Transparent Service",
    },

    sitemap: {
      title: "Website Sitemap",
      home: "Home",
      services: "Services",
      about: "About Us",
      commercial: "Commercial",
    },

    legal: {
      terms: {
        title: "Terms of Use",
        updated: "Last Updated",
        intro:
          "Welcome to the website of Dennis General Mechanic (“Company,” “we,” “us,” or “our”). By accessing or using this website (the “Site”), you agree to be bound by these Terms of Use (the “Terms”). If you do not agree to these Terms, please do not use the Site.",
        useH: "Eligibility and Use of the Site",
        useP:
          "You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site in any manner that could disable, overburden, damage, or impair the Site or interfere with any other party’s use of the Site.",
        ipH: "Intellectual Property",
        ipP:
          "All content on the Site is owned by Dennis General Mechanic or its licensors and protected by applicable laws.",
        noWH: "No Warranties",
        noWP:
          "The Site is provided on an “AS IS” and “AS AVAILABLE” basis without warranties of any kind.",
        limH: "Limitation of Liability",
        limP:
          "To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
        linksH: "Third-Party Links",
        linksP:
          "The Site may contain links to third-party websites for your convenience. We have no control over those sites and accept no responsibility for them.",
        lawH: "Governing Law",
        lawP:
          "These Terms are governed by the laws of the jurisdiction of our principal place of business, without regard to conflict of laws.",
        changeH: "Changes to These Terms",
        changeP:
          "We may revise these Terms from time to time. Your continued use of the Site means you accept the changes.",
        contactH: "Contact",
        contactP: "For questions about these Terms, contact us at legal@dennismechanic.com.",
      },

      privacy: {
        title: "Privacy Policy",
        updated: "Last Updated",
        intro:
          "This Privacy Policy describes how Dennis General Mechanic (“Company,” “we,” “us,” or “our”) collects, uses, discloses, and safeguards personal information obtained through our website (the “Site”).",
        collectH: "Information We Collect",
        collectP:
          "We may collect information you provide directly to us (e.g., name, email, phone number, service details) and information collected automatically (e.g., IP address, browser type, pages visited) via cookies or analytics.",
        useH: "How We Use Information",
        useL: [
          "To provide and improve services and customer support",
          "To communicate with you about appointments, services, and promotions",
          "To maintain Site functionality, security, and analytics",
        ],
        shareH: "Sharing of Information",
        shareP:
          "We may share information with service providers who perform functions on our behalf, as required by law, or with your consent. We do not sell personal information in the traditional sense.",
        cookieH: "Cookies and Tracking",
        cookieP:
          "We use cookies and similar technologies to operate the Site and understand usage. You can adjust cookie settings in your browser.",
        securityH: "Data Security",
        securityP:
          "We implement safeguards to protect personal information. However, no method of transmission or storage is 100% secure.",
        childH: "Children’s Privacy",
        childP:
          "The Site is not directed to children under 13. We do not knowingly collect personal information from children under 13.",
        rightsH: "Your Rights",
        rightsP:
          "Depending on your location, you may have rights to access, correct, or delete your personal information, or to object to certain processing. To submit a request, contact privacy@dennismechanic.com.",
        changeH: "Changes to This Policy",
        changeP:
          "We may update this Policy from time to time. The updated version will be indicated by an updated “Last Updated” date.",
        contactH: "Contact",
        contactP: "Questions? Contact privacy@dennismechanic.com.",
      },

      choices: {
        title: "Your Privacy Choices",
        updated: "Last Updated",
        intro:
          "Certain privacy laws (such as the California Consumer Privacy Act, “CCPA”) provide you with specific rights regarding your personal information. This page explains how to exercise those rights.",
        outH: "Right to Opt-Out of Sale/Sharing",
        outP:
          "You may request that we do not sell or share your personal information by emailing privacy@dennismechanic.com with the subject “Do Not Sell or Share.”",
        knowH: "Right to Know and Access",
        knowP:
          "You may request a report of the categories and specific pieces of personal information we have collected about you.",
        delH: "Right to Delete",
        delP:
          "You may request deletion of your personal information, subject to certain exceptions under applicable law.",
        corrH: "Right to Correct",
        corrP:
          "You may request correction of inaccurate personal information we maintain about you.",
        howH: "How to Submit a Request",
        howP:
          "Submit requests by emailing privacy@dennismechanic.com. We may need to verify your identity before processing your request.",
      },

      access: {
        title: "Accessibility Statement",
        updated: "Last Updated",
        intro:
          "Dennis General Mechanic is committed to ensuring digital accessibility for people with disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.",
        measuresH: "Measures to Support Accessibility",
        measuresL: [
          "Design and development practices aimed at WCAG 2.1 AA",
          "Ongoing improvements based on user feedback",
        ],
        feedbackH: "Feedback",
        feedbackP:
          "We welcome your feedback on the accessibility of our Site. Please let us know if you encounter accessibility barriers:",
        emailLabel: "Email:",
      },
    },

    // Services catalog text (titles/categories/desc/durations)
    svc: {
      "computerized-diagnostics": {
        title: "Computerized Diagnostics",
        category: "Diagnostics & Electrical",
        duration: "60–90 min",
        desc: "OBD-II scan, fault code analysis, and live data checks to pinpoint issues fast.",
      },
      "electrical-service": {
        title: "Electrical Service",
        category: "Diagnostics & Electrical",
        duration: "1–2 hrs",
        desc: "Battery, alternator, starter testing, wiring/relay diagnostics, and repairs.",
      },
      "engine-service": {
        title: "Engine Service",
        category: "Engine & Transmission",
        duration: "2–3 hrs",
        desc: "Tune-ups, misfire diagnosis, sensors, belts/hoses, and performance checks.",
      },
      "transmission-service": {
        title: "Transmission Service",
        category: "Engine & Transmission",
        duration: "2–3 hrs",
        desc: "Fluid exchange, filter, pan gasket (as applicable), and shifting diagnostics.",
      },
      "exhaust-service": {
        title: "Exhaust Service",
        category: "Engine & Transmission",
        duration: "1–2 hrs",
        desc: "Mufflers, catalytic converters, O2 sensors, leak checks, and hangers.",
      },
      "radiator-service": {
        title: "Radiator Service",
        category: "Engine & Transmission",
        duration: "1–2 hrs",
        desc: "Cooling system flush, leak test, pressure test, and thermostat checks.",
      },
      "oil-change": {
        title: "Lube, Oil & Filter Change",
        category: "Maintenance & Inspection",
        duration: "45–60 min",
        desc: "Premium oil, OEM filter, multi-point inspection, and fluid top-off.",
      },
      "maintenance-service": {
        title: "Maintenance Service",
        category: "Maintenance & Inspection",
        duration: "60–90 min",
        desc: "Factory-scheduled service: filters, fluids, belts, and general health checks.",
      },
      "state-inspection": {
        title: "State Inspection Service",
        category: "Maintenance & Inspection",
        duration: "30–60 min",
        desc: "Complete safety/emissions inspection to keep you legal and safe.",
      },
      wipers: {
        title: "Windshield Wipers Service",
        category: "Maintenance & Inspection",
        duration: "15–30 min",
        desc: "Blade replacement and streak-free operation check for clear visibility.",
      },
      "brake-service": {
        title: "Brake Service",
        category: "Brakes & Suspension",
        duration: "2–3 hrs",
        desc: "Pads/rotors as needed, brake fluid test, hardware, and road test.",
      },
      "front-end-service": {
        title: "Front End Service",
        category: "Brakes & Suspension",
        duration: "1–2 hrs",
        desc: "Steering components, tie-rods, ball joints, and alignment readiness check.",
      },
      "shocks-struts": {
        title: "Shocks & Struts Service",
        category: "Brakes & Suspension",
        duration: "2–4 hrs",
        desc: "Ride control evaluation and replacement for stable handling and comfort.",
      },
      "suspension-service": {
        title: "Suspension Service",
        category: "Brakes & Suspension",
        duration: "1–3 hrs",
        desc: "Bushings, control arms, links, and noise/vibration diagnostics.",
      },
      "tire-service": {
        title: "Tire Service",
        category: "Tires & Wheels",
        duration: "45–75 min",
        desc: "Rotation, balance, flat repair, tread check, and proper torque.",
      },
      "custom-wheels": {
        title: "Custom Wheels Service",
        category: "Tires & Wheels",
        duration: "1–2 hrs",
        desc: "Aftermarket wheel fitment, mount/balance, and hub/offset verification.",
      },
      "wheel-alignments": {
        title: "Wheel Alignments",
        category: "Tires & Wheels",
        duration: "60–90 min",
        desc: "Four-wheel alignment with printout and steering wheel centering.",
      },
      "glass-repair": {
        title: "Glass Repair Service",
        category: "Glass & Body",
        duration: "45–90 min",
        desc: "Chip/crack repair or replacement coordination for safe, clear glass.",
      },
      "towing-service": {
        title: "Towing Service",
        category: "Towing",
        duration: "ETA varies",
        desc: "Local towing and roadside assistance—call for availability and rates.",
      },
      "dot-inspection": {
        title: "DOT & Trailer Inspection",
        category: "Commercial",
        duration: "60–90 min",
        desc: "Federal DOT and trailer safety inspections to keep your fleet compliant and on the road."
      },
      "trailer-inspection": {
        title: "Trailer Inspection",
        category: "Commercial",
        duration: "45–75 min",
        desc: "Lights, brakes, tires, and coupling systems checked to keep trailers safe and legal."
      },
      "fleet-service": {
        title: "Fleet Service",
        category: "Commercial",
        duration: "Varies",
        desc: "Proactive maintenance programs, priority scheduling, and clear reporting for vans and work trucks."
      },
    },
  },

  es: {
    header: {
      logoAlt: "Logotipo de Dennis General Mechanic",
      phone: "240-764-7004",
      address: "4720 Baltimore Ave Hyattsville, MD 20781",
    },

    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      commercial: "Comercial",
      reservation: "Reservar una cita",
      terms: "Términos de uso",
      privacy: "Política de privacidad",
      privacyChoices: "Tus opciones de privacidad",
      accessibility: "Accesibilidad",
      sitemap: "Mapa del sitio",
    },

    footer: {
      since: "2007",
      rights: "Todos los derechos reservados.",
      terms: "Términos de uso",
      privacy: "Política de privacidad",
      choices: "Tus opciones de privacidad",
      accessibility: "Accesibilidad",
      sitemap: "Mapa del sitio",
    },

    home: {
      hero: {
        title: "Mantén tu vehículo en perfectas condiciones",
        subtitle:
          "Mecánicos honestos y de servicio completo en Hyattsville—rápidos, amables y justos.",
        reserve: "Programar una cita",
        call: "Llamar (240) 764-7004",
      },
      features: {
        oneH: "Experiencia tipo ASE",
        oneP: "Técnicos con experiencia y diagnóstico moderno, bien a la primera.",
        twoH: "Servicio el mismo día",
        twoP: "Entregas rápidas para reparaciones y mantenimiento comunes.",
        threeH: "Precios claros",
        threeP: "Estimados y actualizaciones transparentes—sin sorpresas.",
        fourH: "Piezas de calidad",
        fourP: "Componentes de grado OEM para confiabilidad y seguridad.",
      },
      quick: ["Cambio de aceite", "Frenos", "Diagnóstico", "Alineación", "Llantas"],
      weekTitle: "Trabajo de esta semana",
      testimonials: "Testimonios",
    },

    commercial: {
      heroH: "Servicios Comerciales y Soporte para Flotas",
      heroP:
        "Mantén tu negocio en movimiento con servicio confiable y rápido en Hyattsville, MD.",
      quote: "Solicitar cotización comercial",
      seeAll: "Ver todos los servicios",
      introH: "Para vans, camiones ligeros y flotas pequeñas",
      introP1:
        "En Dennis General Mechanic, sabemos que el tiempo fuera de servicio cuesta dinero. Ya sea que manejes vans de entrega, camiones de oficio o vehículos de servicio, nos enfocamos en diagnósticos rápidos, comunicación clara y reparaciones confiables.",
      introP2:
        "Desde llantas y frenos hasta sistemas eléctricos y diagnóstico de motor, atendemos la mayoría de marcas y modelos con piezas de grado OEM y equipo moderno. Te ayudamos a planear el mantenimiento, reducir fallas sorpresivas y optimizar tu presupuesto.",
      stripH: "Por qué las empresas nos eligen",
      b1: "Tiempos rápidos y ETAs claros",
      b2: "Piezas de grado OEM y diagnóstico moderno",
      b3: "Estimados por adelantado—sin sorpresas",
      b4: "Planes de mantenimiento que se adaptan a tus rutas",
      offerH: "Servicios comerciales que ofrecemos",
      list: [
        "Programas de mantenimiento de flota (aceite, filtros, inspecciones)",
        "Servicio de frenos (pastas/rotos, hidráulico, diagnóstico ABS)",
        "Llantas: montaje/balanceo, rotaciones, ponchaduras, alineaciones",
        "Diagnóstico de motor y eléctrico (OBD-II, sensores, carga)",
        "Suspensión y dirección (amortiguadores, terminales, rótulas)",
        "Sistema de enfriamiento (radiadores, termostatos, limpieza)",
      ],
      learn: "Conoce nuestro taller",
      quoteBlock:
        "“Dennis mantiene nuestras vans de trabajo en la carretera. Honesto, rápido y con precio justo—exactamente lo que un negocio necesita.”",
      quoteBy: "— Propietario de negocio local",
    },

    services: {
      heroH: "Nuestros Servicios",
      heroP: "Cuidado automotriz de calidad—reserva en minutos.",
      searchPH: "Buscar servicios (ej.: frenos, aceite, alineación)",
      all: "Todos",
      reserve: "Reservar",
      empty: "No hay servicios que coincidan con tu búsqueda.",
    },

    about: {
      heroH: "Sobre nosotros",
      heroP: "Tu aliado de confianza en el cuidado automotriz",
      whoH: "Quiénes somos",
      p1: "En Dennis General Mechanic Shop, creemos que todo conductor merece un vehículo seguro, confiable y bien mantenido. Servimos con orgullo a nuestra comunidad con años de experiencia y diagnóstico moderno.",
      p2: "Desde frenos y cambios de aceite hasta diagnóstico de motor, nuestro equipo certificado hace el trabajo bien a la primera. Valoramos la honestidad, la transparencia y el servicio de calidad.",
      p3: "Ya sea mantenimiento rutinario o reparaciones urgentes, cuenta con nosotros: rápidos, amables y confiables para mantenerte seguro en la carretera.",
      h1: "Técnicos certificados y con experiencia",
      h2: "Servicios automotrices integrales",
      h3: "Servicio honesto y transparente",
    },

    sitemap: {
      title: "Mapa del sitio",
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      commercial: "Comercial",
    },

    legal: {
      terms: {
        title: "Términos de uso",
        updated: "Última actualización",
        intro:
          "Bienvenido al sitio web de Dennis General Mechanic (“Compañía”, “nosotros”). Al usar este sitio, aceptas estos Términos de uso. Si no estás de acuerdo, no utilices el Sitio.",
        useH: "Elegibilidad y uso del Sitio",
        useP:
          "Solo puedes usar el Sitio para fines lícitos y conforme a estos Términos. No debes usarlo de forma que lo dañe o lo sobrecargue.",
        ipH: "Propiedad intelectual",
        ipP:
          "Todo el contenido del Sitio pertenece a Dennis General Mechanic o sus licenciantes y está protegido por las leyes aplicables.",
        noWH: "Sin garantías",
        noWP:
          "El Sitio se proporciona “TAL CUAL” y “SEGÚN DISPONIBILIDAD” sin garantías de ningún tipo.",
        limH: "Limitación de responsabilidad",
        limP:
          "En la máxima medida legal, no seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos.",
        linksH: "Enlaces de terceros",
        linksP:
          "El Sitio puede incluir enlaces a sitios de terceros. No controlamos su contenido ni somos responsables por ellos.",
        lawH: "Ley aplicable",
        lawP:
          "Estos Términos se rigen por las leyes del lugar de nuestro domicilio comercial, sin atender conflictos de leyes.",
        changeH: "Cambios a estos Términos",
        changeP:
          "Podemos modificar estos Términos. El uso continuo del Sitio implica que aceptas los cambios.",
        contactH: "Contacto",
        contactP: "Dudas sobre estos Términos: legal@dennismechanic.com.",
      },

      privacy: {
        title: "Política de privacidad",
        updated: "Última actualización",
        intro:
          "Esta Política describe cómo Dennis General Mechanic recopila, usa, divulga y protege la información personal obtenida a través de este sitio.",
        collectH: "Información que recopilamos",
        collectP:
          "Podemos recopilar información que proporcionas (nombre, correo, teléfono, detalles del servicio) e información automática (IP, navegador, páginas visitadas) mediante cookies o analítica.",
        useH: "Cómo usamos la información",
        useL: [
          "Brindar y mejorar servicios y soporte",
          "Comunicarnos sobre citas, servicios y promociones",
          "Mantener funcionalidad, seguridad y analítica del sitio",
        ],
        shareH: "Compartir información",
        shareP:
          "Podemos compartir con proveedores de servicio, por ley o con tu consentimiento. No vendemos información personal en el sentido tradicional.",
        cookieH: "Cookies y seguimiento",
        cookieP:
          "Usamos cookies y tecnologías similares para operar el Sitio y entender su uso. Puedes ajustar las cookies en tu navegador.",
        securityH: "Seguridad de los datos",
        securityP:
          "Aplicamos medidas de seguridad; sin embargo, ningún método es 100% seguro.",
        childH: "Privacidad de menores",
        childP:
          "El Sitio no está dirigido a menores de 13 años y no recopilamos datos de ellos conscientemente.",
        rightsH: "Tus derechos",
        rightsP:
          "Según tu ubicación, puedes acceder, corregir o eliminar tus datos, u oponerte a ciertos tratamientos. Solicitudes: privacy@dennismechanic.com.",
        changeH: "Cambios a esta Política",
        changeP:
          "Podemos actualizar esta Política periódicamente. La versión actual mostrará la fecha de “Última actualización”.",
        contactH: "Contacto",
        contactP: "Dudas: privacy@dennismechanic.com.",
      },

      choices: {
        title: "Tus opciones de privacidad",
        updated: "Última actualización",
        intro:
          "Ciertas leyes (como CCPA) otorgan derechos específicos sobre tu información personal.",
        outH: "Derecho a optar por no vender/compartir",
        outP:
          "Solicita que no vendamos ni compartamos tu información enviando un correo a privacy@dennismechanic.com con el asunto “Do Not Sell or Share”.",
        knowH: "Derecho a saber y acceder",
        knowP:
          "Solicita un reporte de las categorías y piezas específicas de información personal que hemos recopilado.",
        delH: "Derecho a eliminar",
        delP:
          "Solicita la eliminación de tu información, sujeto a excepciones legales.",
        corrH: "Derecho a corregir",
        corrP:
          "Solicita la corrección de información personal inexacta.",
        howH: "Cómo enviar una solicitud",
        howP:
          "Envía solicitudes a privacy@dennismechanic.com. Podríamos verificar tu identidad.",
      },

      access: {
        title: "Declaración de accesibilidad",
        updated: "Última actualización",
        intro:
          "Dennis General Mechanic está comprometido con la accesibilidad digital. Procuramos cumplir o superar WCAG 2.1 nivel AA.",
        measuresH: "Medidas de apoyo",
        measuresL: [
          "Prácticas de diseño/desarrollo alineadas con WCAG 2.1 AA",
          "Mejoras continuas basadas en comentarios",
        ],
        feedbackH: "Comentarios",
        feedbackP:
          "Agradecemos tus comentarios sobre la accesibilidad del Sitio. Si encuentras barreras, avísanos:",
        emailLabel: "Correo:",
      },
    },

    svc: {
      "computerized-diagnostics": {
        title: "Diagnóstico computarizado",
        category: "Diagnóstico y eléctrico",
        duration: "60–90 min",
        desc: "Escaneo OBD-II, análisis de códigos y datos en vivo para identificar fallas rápidamente.",
      },
      "electrical-service": {
        title: "Servicio eléctrico",
        category: "Diagnóstico y eléctrico",
        duration: "1–2 h",
        desc: "Pruebas de batería, alternador y arranque; diagnóstico de cableado/relevadores y reparaciones.",
      },
      "engine-service": {
        title: "Servicio de motor",
        category: "Motor y transmisión",
        duration: "2–3 h",
        desc: "Afinaciones, diagnóstico de fallas, sensores, bandas/mangueras y rendimiento.",
      },
      "transmission-service": {
        title: "Servicio de transmisión",
        category: "Motor y transmisión",
        duration: "2–3 h",
        desc: "Cambio de fluido, filtro, empaque del cárter (según aplique) y diagnóstico de cambios.",
      },
      "exhaust-service": {
        title: "Sistema de escape",
        category: "Motor y transmisión",
        duration: "1–2 h",
        desc: "Silenciadores, catalizadores, sensores O2, revisión de fugas y soportes.",
      },
      "radiator-service": {
        title: "Servicio de radiador",
        category: "Motor y transmisión",
        duration: "1–2 h",
        desc: "Limpieza del sistema, prueba de fugas y presión, y revisión de termostato.",
      },
      "oil-change": {
        title: "Cambio de aceite y filtro",
        category: "Mantenimiento e inspección",
        duration: "45–60 min",
        desc: "Aceite premium, filtro OEM, inspección multipunto y rellenado de fluidos.",
      },
      "maintenance-service": {
        title: "Servicio de mantenimiento",
        category: "Mantenimiento e inspección",
        duration: "60–90 min",
        desc: "Servicio según fábrica: filtros, fluidos, bandas y revisión general.",
      },
      "state-inspection": {
        title: "Inspección estatal",
        category: "Mantenimiento e inspección",
        duration: "30–60 min",
        desc: "Inspección completa de seguridad/emisiones para mantenerte al día.",
      },
      wipers: {
        title: "Servicio de limpiaparabrisas",
        category: "Mantenimiento e inspección",
        duration: "15–30 min",
        desc: "Cambio de gomas y verificación para visión clara sin rayas.",
      },
      "brake-service": {
        title: "Servicio de frenos",
        category: "Frenos y suspensión",
        duration: "2–3 h",
        desc: "Pastas/rotos según necesidad, prueba de fluido, herrajes y prueba de manejo.",
      },
      "front-end-service": {
        title: "Servicio de tren delantero",
        category: "Frenos y suspensión",
        duration: "1–2 h",
        desc: "Dirección, terminales, rótulas y verificación de alineación.",
      },
      "shocks-struts": {
        title: "Amortiguadores y struts",
        category: "Frenos y suspensión",
        duration: "2–4 h",
        desc: "Evaluación y reemplazo para manejo estable y cómodo.",
      },
      "suspension-service": {
        title: "Servicio de suspensión",
        category: "Frenos y suspensión",
        duration: "1–3 h",
        desc: "Bujes, brazos de control, eslabones y diagnóstico de ruidos/vibraciones.",
      },
      "tire-service": {
        title: "Servicio de llantas",
        category: "Llantas y rines",
        duration: "45–75 min",
        desc: "Rotación, balanceo, reparación de ponchaduras, revisión de dibujo y torque correcto.",
      },
      "custom-wheels": {
        title: "Rines personalizados",
        category: "Llantas y rines",
        duration: "1–2 h",
        desc: "Ajuste de rines aftermarket, montaje/balanceo y verificación de centro/desplazamiento.",
      },
      "wheel-alignments": {
        title: "Alineaciones",
        category: "Llantas y rines",
        duration: "60–90 min",
        desc: "Alineación de las cuatro ruedas con reporte y volante centrado.",
      },
      "glass-repair": {
        title: "Reparación de parabrisas",
        category: "Cristales y carrocería",
        duration: "45–90 min",
        desc: "Reparación de astilladuras/grietas o coordinación de reemplazo para visibilidad segura.",
      },
      "towing-service": {
        title: "Servicio de grúa",
        category: "Remolque",
        duration: "ETA variable",
        desc: "Remolque local y asistencia vial—llama para disponibilidad y tarifas.",
      },
      "dot-inspection": {
        title: "Inspección DOT y de Remolques",
        category: "Comercial",
        duration: "60–90 min",
        desc: "Inspecciones federales DOT y de seguridad de remolques para mantener su flota en regla y en la carretera."
      },
      "trailer-inspection": {
        title: "Inspección de Remolques",
        category: "Comercial",
        duration: "45–75 min",
        desc: "Revisión de luces, frenos, llantas y sistemas de enganche para un remolque seguro y legal."
      },
      "fleet-service": {
        title: "Servicio para Flotas",
        category: "Comercial",
        duration: "Variable",
        desc: "Programas de mantenimiento preventivo, prioridad en agenda y reportes claros para vans y camiones de trabajo."
      }
    },
  },
};

/** -----------------------------------------
 *  Tiny i18n runtime
 *  ----------------------------------------*/
const I18nCtx = createContext(null);

const deepGet = (obj, path, fb) => {
  if (!obj || !path) return fb ?? path;
  const val = path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  return val === undefined ? (fb ?? path) : val;
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
  }, [lang]);

  const t = useMemo(() => (path, fallback) => deepGet(dict[lang], path, fallback), [lang]);

  // Convenience for headers/components that expect these names
  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "es" : "en"));
  const value = useMemo(
    () => ({ lang, language: lang, setLang, toggleLanguage, t }),
    [lang, t]
  );

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
