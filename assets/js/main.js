(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  // i18n ES/EN
  const translations = {
    es: {
      'a11y.skip': 'Saltar al contenido principal',
      'a11y.langToggle': 'Cambiar idioma',
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.about': 'Nosotros',
      'nav.blog': 'Blog',
      'nav.contact': 'Contacto',
      'cta.header': 'Solicitar asesoría',

      'hero.eyebrow': 'Tu brújula regulatoria',
      'hero.title': 'Asesoría legal, regulatoria y corporativa en Panamá',
      'hero.subtitle': 'Acompañamos tu cumplimiento normativo y tu expansión regional con criterios técnicos, legales y estratégicos.',
      'hero.primary': 'Solicitar asesoría',
      'hero.secondary': 'Ver servicios',
      'hero.trust1': 'Confidencialidad y rigor',
      'hero.trust2': 'Enfoque regional',
      'hero.trust3': 'Respuesta ágil',
      'hero.cardBadge': 'Expansión regional',
      'hero.cardText': 'Brindamos asesoría en múltiples jurisdicciones para impulsar tu crecimiento con seguridad regulatoria.',
      'hero.meta1Label': 'Cobertura',
      'hero.meta1Value': 'Panamá',
      'hero.meta2Label': 'Enfoque',
      'hero.meta2Value': 'Cumplimiento & Estrategia',

      'services.title': 'Nuestros servicios',
      'services.desc': 'Soluciones integrales para cumplimiento, registros y gestión corporativa.',
      'services.s1Title': 'Regulación farmacéutica',
      'services.s1a': 'Registros y renovaciones',
      'services.s1b': 'Cumplimiento y auditoría',
      'services.s1c': 'Gestión documental',
      'services.s2Title': 'Derecho corporativo',
      'services.s2a': 'Constitución y gobierno corporativo',
      'services.s2b': 'Contratos y acuerdos',
      'services.s2c': 'Debida diligencia',
      'services.s3Title': 'Registro de marcas',
      'services.s3a': 'Búsqueda y viabilidad',
      'services.s3b': 'Registro y oposición',
      'services.s3c': 'Renovaciones y vigilancia',
      'services.s4Title': 'Asesoría laboral',
      'services.s4a': 'Políticas internas',
      'services.s4b': 'Contratación y desvinculación',
      'services.s4c': 'Gestión de riesgos laborales',
      'services.s5Title': 'Contrataciones públicas',
      'services.s5a': 'Pliegos y propuestas',
      'services.s5b': 'Impugnaciones y recursos',
      'services.s5c': 'Cumplimiento contractual',
      'services.s6Title': 'Consultoría regional',
      'services.s6a': 'Estrategia de expansión',
      'services.s6b': 'Coordinación multi-país',
      'services.s6c': 'Soporte continuo',
      'services.s7Title': 'Gestión documental',
      'services.s7a': 'Estandarización y control',
      'services.s7b': 'Plantillas y compliance',
      'services.s7c': 'Soporte a auditorías',

      'about.title': 'Quiénes somos',
      'about.desc': 'Un equipo multidisciplinario con enfoque técnico, legal y corporativo para acompañar decisiones con impacto.',
      'about.p1': 'En Carrijara asesoramos a empresas que requieren una ruta clara para cumplir, registrar y operar con confianza. Trabajamos con procesos verificables, comunicación directa y criterios alineados a tus objetivos.',
      'about.stat1': 'Años de experiencia',
      'about.stat2': 'Clientes satisfechos',
      'about.stat3': 'Casos exitosos',
      'about.stat4': 'Equipo especializado',
      'about.cta': 'Conversemos',

      'blog.title': 'Actualidad y recursos',
      'blog.desc': 'Ideas, guías y novedades para operar con seguridad.',
      'blog.p1Title': 'Impacto de las nuevas regulaciones en Panamá',
      'blog.p1Desc': 'Qué cambia y cómo prepararte sin fricciones operativas.',
      'blog.p2Title': 'Guía para el registro de marcas internacionales',
      'blog.p2Desc': 'Pasos, tiempos y errores comunes que encarecen el proceso.',
      'blog.p3Title': 'Claves para una gestión laboral eficiente',
      'blog.p3Desc': 'Políticas internas y control de riesgos para operar sólido.',
      'blog.read': 'Leer más',

      'contact.title': '¿Listo para avanzar con seguridad regulatoria?',
      'contact.desc': 'Cuéntanos tu caso y te orientamos con una ruta clara.',
      'contact.emailBtn': 'Escribir por correo',
      'contact.callBtn': 'Llamar',

      'footer.contact': 'Contacto',
      'footer.addrLine1': 'Pueblo Nuevo, Hato Pintado, Calle 77A Oeste, Casa G21',
      'footer.links': 'Enlaces',
      'footer.rights': 'Todos los derechos reservados.',
      'servicesPage.kicker': 'Servicios',
      'servicesPage.title': 'Soluciones regulatorias y legales, de punta a punta.',
      'servicesPage.subtitle': 'Profundizamos cada servicio con un enfoque práctico: requisitos, documentación, seguimiento y cumplimiento.',
      'servicesPage.sidebarTitle': 'Servicios',

      'servicesPage.side.lic': 'Licencias Sanitarias',
      'servicesPage.side.reg': 'Registros Sanitarios',
      'servicesPage.side.fv': 'Farmaco-tecnovigilancia',
      'servicesPage.side.tr': 'Asesoría Técnico-Regulatoria',
      'servicesPage.side.legal': 'Asesoría Legal y Marcas',
      'servicesPage.side.method': 'Método de trabajo',

      'servicesPage.tag.cert': 'Certificaciones',
      'servicesPage.tag.consult': 'Consultorías',

      'servicesPage.lic.title': 'Licencias sanitarias',
      'servicesPage.lic.desc': 'Orientamos el proceso completo: requisitos, expediente, presentación y seguimiento ante la autoridad competente.',
      'servicesPage.lic.b1': 'Obtención, renovación y actualización de licencias.',
      'servicesPage.lic.b2': 'Auditoría previa de documentación y cumplimiento.',
      'servicesPage.lic.b3': 'Gestión de observaciones y respuesta técnica.',
      'servicesPage.lic.b4': 'Tiempos, cronograma y control de hitos.',

      'servicesPage.reg.title': 'Registros sanitarios',
      'servicesPage.reg.desc': 'Estructuramos el expediente técnico-legal y aseguramos trazabilidad documental en todo el ciclo del registro.',
      'servicesPage.reg.b1': 'Preparación y validación del dossier.',
      'servicesPage.reg.b2': 'Traducciones, legalizaciones y control de versiones.',
      'servicesPage.reg.b3': 'Renovaciones, modificaciones y ampliaciones.',
      'servicesPage.reg.b4': 'Seguimiento, respuestas y cierre de observaciones.',

      'servicesPage.fv.title': 'Farmaco-tecnovigilancia',
      'servicesPage.fv.desc': 'Implementamos y fortalecemos tu sistema de vigilancia: reportes, procedimientos, capacitación y control.',
      'servicesPage.fv.b1': 'Diseño/actualización de procedimientos y formatos.',
      'servicesPage.fv.b2': 'Gestión de reportes y trazabilidad.',
      'servicesPage.fv.b3': 'Capacitación y auditoría interna.',
      'servicesPage.fv.b4': 'Acompañamiento ante inspecciones.',

      'servicesPage.tr.title': 'Asesoría técnico-regulatoria',
      'servicesPage.tr.desc': 'Alineamos tu operación con normativa aplicable, reducimos riesgos y mejoramos velocidad de respuesta regulatoria.',
      'servicesPage.tr.b1': 'Estrategia de cumplimiento y planes de acción.',
      'servicesPage.tr.b2': 'Evaluación documental y brechas.',
      'servicesPage.tr.b3': 'Soporte técnico en comunicaciones oficiales.',
      'servicesPage.tr.b4': 'Estandarización y control documental.',

      'servicesPage.legal.title': 'Asesoría legal y marcas',
      'servicesPage.legal.desc': 'Cubrimos lo corporativo y de propiedad intelectual con criterios de riesgo, cumplimiento y protección comercial.',
      'servicesPage.legal.b1': 'Contratos, acuerdos y soporte corporativo.',
      'servicesPage.legal.b2': 'Registro, oposición y vigilancia de marcas.',
      'servicesPage.legal.b3': 'Estrategia legal para expansión regional.',
      'servicesPage.legal.b4': 'Cumplimiento y gestión de riesgos.',

      'servicesPage.method.title': 'Método estandarizado de trabajo',
      'servicesPage.method.desc': 'Un flujo claro para que sepas en qué punto estás, qué falta y cuándo se entrega cada hito.',
      'servicesPage.method.s1t': 'Diagnóstico',
      'servicesPage.method.s1d': 'Revisión de requisitos, riesgos y ruta regulatoria.',
      'servicesPage.method.s2t': 'Estructura',
      'servicesPage.method.s2d': 'Checklist, control documental y cronograma.',
      'servicesPage.method.s3t': 'Gestión',
      'servicesPage.method.s3d': 'Presentación, seguimiento y respuesta a observaciones.',
      'servicesPage.method.s4t': 'Cierre',
      'servicesPage.method.s4d': 'Entrega, respaldo y plan de mantenimiento/renovaciones.',
      'aboutPage.kicker': 'Quiénes somos',
      'aboutPage.title': 'Rigor regulatorio, criterio legal y ejecución con método.',
      'aboutPage.subtitle': 'Acompañamos a empresas que necesitan operar, registrar y crecer con seguridad. Sin improvisación, sin fricción.',
      'aboutPage.badge1': 'Confidencialidad',
      'aboutPage.badge2': 'Trazabilidad',
      'aboutPage.badge3': 'Enfoque regional',
      'aboutPage.tag1': 'Equipo',
      'aboutPage.tag2': 'Cumplimiento',

      'aboutPage.section1Title': 'Asesores',
      'aboutPage.section1Lead': 'Carrijara integra asesoría regulatoria, legal y corporativa con un estándar operativo claro: documentación controlada, entregables verificables y seguimiento real.',
      'aboutPage.b1t': 'Diagnóstico sin vueltas',
      'aboutPage.b1d': 'Identificamos brechas, riesgos y ruta regulatoria antes de ejecutar.',
      'aboutPage.b2t': 'Ejecución con control',
      'aboutPage.b2d': 'Checklist, control de versiones y cronogramas para cumplir en tiempo.',
      'aboutPage.b3t': 'Comunicación directa',
      'aboutPage.b3d': 'Estado real del caso, próximos pasos y fechas claras.',

      'aboutPage.noteTitle': 'Qué puedes esperar',
      'aboutPage.note1': 'Ruta de requisitos clara desde el inicio.',
      'aboutPage.note2': 'Documentación ordenada y auditable.',
      'aboutPage.note3': 'Seguimiento activo y respuesta ágil.',

      'aboutPage.mvTitle': 'Misión y visión',
      'aboutPage.mvDesc': 'Lo que hacemos hoy y hacia dónde construimos.',
      'aboutPage.missionTitle': 'Misión',
      'aboutPage.missionText': 'Brindar asesoría regulatoria y legal con rigor técnico, garantizando cumplimiento, trazabilidad documental y decisiones informadas para nuestros clientes.',
      'aboutPage.visionTitle': 'Visión',
      'aboutPage.visionText': 'Ser referencia regional por un estándar de trabajo claro, resultados consistentes y acompañamiento estratégico en mercados regulados.',

      'aboutPage.valuesTitle': 'Valores operativos',
      'aboutPage.valuesDesc': 'Cómo trabajamos cuando nadie está mirando.',
      'aboutPage.v1t': 'Rigor',
      'aboutPage.v1d': 'Revisión técnica, evidencias y decisiones sustentadas.',
      'aboutPage.v2t': 'Confidencialidad',
      'aboutPage.v2d': 'Manejo responsable de información sensible y documentación.',
      'aboutPage.v3t': 'Trazabilidad',
      'aboutPage.v3d': 'Control de versiones, entregables y respaldo del expediente.',
      'aboutPage.v4t': 'Agilidad',
      'aboutPage.v4d': 'Respuesta rápida sin sacrificar calidad técnica.',
      'aboutPage.v5t': 'Claridad',
      'aboutPage.v5d': 'Comunicación directa: estado, próximos pasos y fechas.',
      'aboutPage.v6t': 'Estandarización',
      'aboutPage.v6d': 'Procesos repetibles para resultados consistentes.',

      'aboutPage.methodTitle': 'Cómo trabajamos',
      'aboutPage.methodDesc': 'Un flujo simple: diagnóstico, control y ejecución.',
      'aboutPage.ms1t': 'Diagnóstico',
      'aboutPage.ms1d': 'Requisitos, brechas y ruta regulatoria.',
      'aboutPage.ms2t': 'Plan y checklist',
      'aboutPage.ms2d': 'Documentación, roles, hitos y tiempos.',
      'aboutPage.ms3t': 'Ejecución',
      'aboutPage.ms3d': 'Presentación, seguimiento y respuestas técnicas.',
      'aboutPage.ms4t': 'Cierre',
      'aboutPage.ms4d': 'Entregables, respaldo y mantenimiento.',

      'aboutPage.coverageTitle': 'Enfoque regional',
      'aboutPage.coverageDesc': 'Coordinamos procesos en Panamá y la región con una lógica: consistencia documental, cumplimiento y seguimiento.',
      'aboutPage.c1': 'Estrategia de expansión y cronogramas.',
      'aboutPage.c2': 'Coordinación multi-jurisdicción.',
      'aboutPage.c3': 'Soporte continuo y mantenimiento.',
      'aboutPage.coverageCardTitle': 'Seguridad y confidencialidad',
      'aboutPage.coverageCardText': 'Aplicamos buenas prácticas de control documental y acceso mínimo necesario para proteger información sensible.',
      'aboutPage.pill1': 'Control de versiones',
      'aboutPage.pill2': 'Respaldo',
      'aboutPage.pill3': 'Acceso limitado',


    },

    en: {
      'a11y.skip': 'Skip to main content',
      'a11y.langToggle': 'Switch language',
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.blog': 'Insights',
      'nav.contact': 'Contact',
      'cta.header': 'Request advice',

      'hero.eyebrow': 'Your regulatory compass',
      'hero.title': 'Legal, regulatory and corporate advisory in Panama',
      'hero.subtitle': 'We support your compliance and regional expansion with technical, legal and strategic criteria.',
      'hero.primary': 'Request advice',
      'hero.secondary': 'View services',
      'hero.trust1': 'Confidential & rigorous',
      'hero.trust2': 'Regional focus',
      'hero.trust3': 'Fast turnaround',
      'hero.cardBadge': 'Regional expansion',
      'hero.cardText': 'We advise across multiple jurisdictions to help you grow with regulatory certainty.',
      'hero.meta1Label': 'Coverage',
      'hero.meta1Value': 'Panama',
      'hero.meta2Label': 'Focus',
      'hero.meta2Value': 'Compliance & Strategy',

      'services.title': 'Our services',
      'services.desc': 'Integrated solutions for compliance, registrations and corporate management.',
      'services.s1Title': 'Pharmaceutical regulation',
      'services.s1a': 'Registrations & renewals',
      'services.s1b': 'Compliance & audits',
      'services.s1c': 'Documentation management',
      'services.s2Title': 'Corporate law',
      'services.s2a': 'Incorporation & governance',
      'services.s2b': 'Contracts & agreements',
      'services.s2c': 'Due diligence',
      'services.s3Title': 'Trademark registration',
      'services.s3a': 'Search & feasibility',
      'services.s3b': 'Filing & oppositions',
      'services.s3c': 'Renewals & monitoring',
      'services.s4Title': 'Labor advisory',
      'services.s4a': 'Internal policies',
      'services.s4b': 'Hiring & separation',
      'services.s4c': 'Labor risk management',
      'services.s5Title': 'Public procurement',
      'services.s5a': 'Bids & proposals',
      'services.s5b': 'Challenges & appeals',
      'services.s5c': 'Contract compliance',
      'services.s6Title': 'Regional consulting',
      'services.s6a': 'Expansion strategy',
      'services.s6b': 'Multi-country coordination',
      'services.s6c': 'Ongoing support',
      'services.s7Title': 'Documentation management',
      'services.s7a': 'Standardization & control',
      'services.s7b': 'Templates & compliance',
      'services.s7c': 'Audit support',

      'about.title': 'About us',
      'about.desc': 'A multidisciplinary team with technical, legal and corporate focus to support high-impact decisions.',
      'about.p1': 'At Carrijara we advise companies that need a clear route to comply, register and operate with confidence. We work with verifiable processes, direct communication and criteria aligned to your goals.',
      'about.stat1': 'Years of experience',
      'about.stat2': 'Satisfied clients',
      'about.stat3': 'Successful cases',
      'about.stat4': 'Specialized team',
      'about.cta': 'Let’s talk',

      'blog.title': 'Insights & resources',
      'blog.desc': 'Ideas, guides and updates to operate with confidence.',
      'blog.p1Title': 'How new regulations impact Panama',
      'blog.p1Desc': 'What changes and how to prepare without operational friction.',
      'blog.p2Title': 'Guide to international trademark registration',
      'blog.p2Desc': 'Steps, timelines and common mistakes that raise costs.',
      'blog.p3Title': 'Keys to efficient labor management',
      'blog.p3Desc': 'Internal policies and risk control to operate solidly.',
      'blog.read': 'Read more',

      'contact.title': 'Ready to move forward with regulatory certainty?',
      'contact.desc': 'Tell us your case and we’ll propose a clear path.',
      'contact.emailBtn': 'Email us',
      'contact.callBtn': 'Call',

      'footer.contact': 'Contact',
      'footer.addrLine1': 'Pueblo Nuevo, Hato Pintado, Street 77A West, G21',
      'footer.links': 'Links',
      'footer.rights': 'All rights reserved.',
      'servicesPage.kicker': 'Services',
      'servicesPage.title': 'Regulatory and legal solutions, end to end.',
      'servicesPage.subtitle': 'We detail each service with a practical approach: requirements, documentation, follow-up and compliance.',
      'servicesPage.sidebarTitle': 'Services',

      'servicesPage.side.lic': 'Health Licenses',
      'servicesPage.side.reg': 'Health Registrations',
      'servicesPage.side.fv': 'Pharma-/Tech-Vigilance',
      'servicesPage.side.tr': 'Technical-Regulatory Advisory',
      'servicesPage.side.legal': 'Legal & Trademarks',
      'servicesPage.side.method': 'Work method',

      'servicesPage.tag.cert': 'Certifications',
      'servicesPage.tag.consult': 'Consulting',

      'servicesPage.lic.title': 'Health licenses',
      'servicesPage.lic.desc': 'We handle the full process: requirements, file setup, submission and follow-up with the competent authority.',
      'servicesPage.lic.b1': 'Obtaining, renewing and updating licenses.',
      'servicesPage.lic.b2': 'Pre-audit of documentation and compliance.',
      'servicesPage.lic.b3': 'Handling observations and technical responses.',
      'servicesPage.lic.b4': 'Timelines, milestones and tracking.',

      'servicesPage.reg.title': 'Health registrations',
      'servicesPage.reg.desc': 'We structure the technical-legal dossier and ensure document traceability throughout the registration lifecycle.',
      'servicesPage.reg.b1': 'Dossier preparation and validation.',
      'servicesPage.reg.b2': 'Translations, legalizations and version control.',
      'servicesPage.reg.b3': 'Renewals, variations and extensions.',
      'servicesPage.reg.b4': 'Follow-up, responses and closure of observations.',

      'servicesPage.fv.title': 'Pharma-/Tech-Vigilance',
      'servicesPage.fv.desc': 'We implement and strengthen your vigilance system: reporting, procedures, training and control.',
      'servicesPage.fv.b1': 'Design/update of procedures and templates.',
      'servicesPage.fv.b2': 'Report management and traceability.',
      'servicesPage.fv.b3': 'Training and internal audits.',
      'servicesPage.fv.b4': 'Support during inspections.',

      'servicesPage.tr.title': 'Technical-regulatory advisory',
      'servicesPage.tr.desc': 'We align operations with applicable rules, reduce risk and improve regulatory response speed.',
      'servicesPage.tr.b1': 'Compliance strategy and action plans.',
      'servicesPage.tr.b2': 'Document review and gap assessment.',
      'servicesPage.tr.b3': 'Technical support for official communications.',
      'servicesPage.tr.b4': 'Standardization and document control.',

      'servicesPage.legal.title': 'Legal & trademarks',
      'servicesPage.legal.desc': 'We cover corporate and IP matters with a risk, compliance and commercial protection approach.',
      'servicesPage.legal.b1': 'Contracts, agreements and corporate support.',
      'servicesPage.legal.b2': 'Trademark filing, oppositions and monitoring.',
      'servicesPage.legal.b3': 'Legal strategy for regional expansion.',
      'servicesPage.legal.b4': 'Compliance and risk management.',

      'servicesPage.method.title': 'Standard work method',
      'servicesPage.method.desc': 'A clear flow so you know where you are, what is pending and when each milestone is delivered.',
      'servicesPage.method.s1t': 'Assessment',
      'servicesPage.method.s1d': 'Requirements, risk and regulatory route.',
      'servicesPage.method.s2t': 'Structure',
      'servicesPage.method.s2d': 'Checklist, document control and timeline.',
      'servicesPage.method.s3t': 'Execution',
      'servicesPage.method.s3d': 'Submission, follow-up and responses to observations.',
      'servicesPage.method.s4t': 'Close-out',
      'servicesPage.method.s4d': 'Delivery, backup and renewals/maintenance plan.',
      'aboutPage.kicker': 'About us',
      'aboutPage.title': 'Regulatory rigor, legal judgment and execution with a method.',
      'aboutPage.subtitle': 'We support companies that need to operate, register and grow with certainty. No improvisation, no friction.',
      'aboutPage.badge1': 'Confidentiality',
      'aboutPage.badge2': 'Traceability',
      'aboutPage.badge3': 'Regional focus',
      'aboutPage.tag1': 'Team',
      'aboutPage.tag2': 'Compliance',

      'aboutPage.section1Title': 'Consultants',
      'aboutPage.section1Lead': 'Carrijara integrates regulatory, legal and corporate advisory under a clear operational standard: controlled documentation, verifiable deliverables and real follow-up.',
      'aboutPage.b1t': 'Straight assessment',
      'aboutPage.b1d': 'We identify gaps, risks and the regulatory route before executing.',
      'aboutPage.b2t': 'Controlled execution',
      'aboutPage.b2d': 'Checklists, version control and timelines to deliver on time.',
      'aboutPage.b3t': 'Direct communication',
      'aboutPage.b3d': 'Real status, next steps and clear dates.',

      'aboutPage.noteTitle': 'What to expect',
      'aboutPage.note1': 'A clear requirements path from day one.',
      'aboutPage.note2': 'Organized, auditable documentation.',
      'aboutPage.note3': 'Active follow-up and fast response.',

      'aboutPage.mvTitle': 'Mission & vision',
      'aboutPage.mvDesc': 'What we do today and where we are going.',
      'aboutPage.missionTitle': 'Mission',
      'aboutPage.missionText': 'Deliver regulatory and legal advisory with technical rigor, ensuring compliance, document traceability and informed decisions for our clients.',
      'aboutPage.visionTitle': 'Vision',
      'aboutPage.visionText': 'Become a regional reference through a clear work standard, consistent results and strategic support in regulated markets.',

      'aboutPage.valuesTitle': 'Operating values',
      'aboutPage.valuesDesc': 'How we work when nobody is watching.',
      'aboutPage.v1t': 'Rigor',
      'aboutPage.v1d': 'Technical review, evidence and supported decisions.',
      'aboutPage.v2t': 'Confidentiality',
      'aboutPage.v2d': 'Responsible handling of sensitive information and documentation.',
      'aboutPage.v3t': 'Traceability',
      'aboutPage.v3d': 'Version control, deliverables and file backups.',
      'aboutPage.v4t': 'Agility',
      'aboutPage.v4d': 'Fast response without sacrificing technical quality.',
      'aboutPage.v5t': 'Clarity',
      'aboutPage.v5d': 'Direct communication: status, next steps and dates.',
      'aboutPage.v6t': 'Standardization',
      'aboutPage.v6d': 'Repeatable processes for consistent outcomes.',

      'aboutPage.methodTitle': 'How we work',
      'aboutPage.methodDesc': 'A simple flow: assess, control and execute.',
      'aboutPage.ms1t': 'Assessment',
      'aboutPage.ms1d': 'Requirements, gaps and regulatory route.',
      'aboutPage.ms2t': 'Plan & checklist',
      'aboutPage.ms2d': 'Documents, roles, milestones and timelines.',
      'aboutPage.ms3t': 'Execution',
      'aboutPage.ms3d': 'Submission, follow-up and technical responses.',
      'aboutPage.ms4t': 'Close-out',
      'aboutPage.ms4d': 'Deliverables, backup and maintenance.',

      'aboutPage.coverageTitle': 'Regional focus',
      'aboutPage.coverageDesc': 'We coordinate processes in Panama and the region with one logic: document consistency, compliance and follow-up.',
      'aboutPage.c1': 'Expansion strategy and timelines.',
      'aboutPage.c2': 'Multi-jurisdiction coordination.',
      'aboutPage.c3': 'Ongoing support and maintenance.',
      'aboutPage.coverageCardTitle': 'Security & confidentiality',
      'aboutPage.coverageCardText': 'We apply document-control practices and least-privilege access to protect sensitive information.',
      'aboutPage.pill1': 'Version control',
      'aboutPage.pill2': 'Backups',
      'aboutPage.pill3': 'Limited access',
    }
  };

  function getInitialLang() {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    const stored = localStorage.getItem('carrijara_lang');
    const navLang = navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
    return (urlLang === 'en' || urlLang === 'es') ? urlLang
      : (stored === 'en' || stored === 'es') ? stored
      : navLang;
  }

  function setLangPill(lang) {
    const pill = $('[data-lang-toggle] .lang-pill');
    if (pill) pill.textContent = (lang || 'es').toUpperCase();
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.es;
    document.documentElement.lang = lang;

    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (typeof val === 'string') el.textContent = val;
    });

    setLangPill(lang);
    document.title = (lang === 'en')
      ? 'Carrijara | Your regulatory compass'
      : 'Carrijara | Tu brújula regulatoria';
  }

  function toggleLang() {
    const current = (document.documentElement.lang === 'en') ? 'en' : 'es';
    const next = (current === 'en') ? 'es' : 'en';
    localStorage.setItem('carrijara_lang', next);
    applyTranslations(next);
  }

  // Mobile nav
  function setupMobileNav() {
    const btn = $('[data-nav-toggle]');
    const panel = $('[data-mobile-nav]');
    if (!btn || !panel) return;

    const close = () => { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
    const open  = () => { panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); };

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      expanded ? close() : open();
    });

    $$('.mobile-link', panel).forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // Header scroll style
  function setupHeaderScroll() {
    const header = $('[data-header]');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 6);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Reveal on scroll
  function setupReveal() {
    if (prefersReducedMotion) {
      $$('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(el => io.observe(el));
  }

  // Counters
  function setupCounters() {
    if (prefersReducedMotion) return;
    const els = $$('.stat-num[data-count]');
    if (!els.length) return;

    const animate = (el) => {
      const target = Number(el.getAttribute('data-count') || '0');
      if (!Number.isFinite(target) || target <= 0) return;

      const duration = 900;
      const start = performance.now();

      const step = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    
    function setupSectionNav() {
      const links = $$('[data-section-link]');
      const sections = $$('[data-section]');
      if (!links.length || !sections.length) return;
    
      const byTarget = new Map();
      links.forEach(a => {
        const t = a.getAttribute('data-target');
        if (!t) return;
        if (!byTarget.has(t)) byTarget.set(t, []);
        byTarget.get(t).push(a);
      });
    
      const setActive = (target) => {
        links.forEach(a => {
          a.classList.toggle('is-active', a.getAttribute('data-target') === target);
          if (a.getAttribute('data-target') === target) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      };
    
      const io = new IntersectionObserver((entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    
        if (visible) setActive(visible.target.getAttribute('data-section'));
      }, { threshold: [0.18, 0.28, 0.4] });
    
      sections.forEach(s => io.observe(s));
    }
    

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.35 });

    els.forEach(el => io.observe(el));
  }

  function init() {
    const y = $('[data-year]');
    if (y) y.textContent = String(new Date().getFullYear());

    const initialLang = getInitialLang();
    applyTranslations(initialLang);
    localStorage.setItem('carrijara_lang', initialLang);

    const langBtn = $('[data-lang-toggle]');
    if (langBtn) langBtn.addEventListener('click', toggleLang);

    setupMobileNav();
    setupHeaderScroll();
    setupReveal();
    setupCounters();
    setupSectionNav();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
