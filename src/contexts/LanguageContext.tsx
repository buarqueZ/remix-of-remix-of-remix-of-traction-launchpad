import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en" | "es";

type Translations = {
  [key: string]: { pt: string; en: string; es: string };
};

const t: Translations = {
  // Nav
  navHome: { pt: "Home", en: "Home", es: "Inicio" },
  navSolucoes: { pt: "Soluções", en: "Solutions", es: "Soluciones" },
  navIntegracoes: { pt: "Integrações", en: "Integrations", es: "Integraciones" },
  // Hero
  heroTitle1: {
    pt: "Impulsionando o crescimento do seu",
    en: "Driving the growth of your",
    es: "Impulsando el crecimiento de tu",
  },
  heroTitle2: { pt: "negócio", en: "business", es: "negocio" },
  heroDesc: {
    pt: "Estratégias inteligentes e soluções criativas para levar a sua empresa ao próximo nível.",
    en: "Smart strategies and creative solutions to take your company to the next level.",
    es: "Estrategias inteligentes y soluciones creativas para llevar tu empresa al siguiente nivel.",
  },
  heroBtn1: { pt: "Comece Agora", en: "Get Started", es: "Empiece Ahora" },
  heroBtn2: { pt: "Saiba Mais", en: "Learn More", es: "Saber Más" },
  // About
  aboutLabel: { pt: "Sobre Nós", en: "About Us", es: "Sobre Nosotros" },
  aboutTitle1: { pt: "Transformamos desafios em", en: "We transform challenges into", es: "Transformamos desafíos en" },
  aboutTitle2: { pt: "resultados", en: "results", es: "resultados" },
  aboutDesc: {
    pt: "A Traction é uma empresa focada em gerar tração real para negócios. Combinamos estratégia, tecnologia e criatividade para entregar soluções que fazem a diferença.",
    en: "Traction is a company focused on generating real traction for businesses. We combine strategy, technology and creativity to deliver solutions that make a difference.",
    es: "Traction es una empresa enfocada en generar tracción real para negocios. Combinamos estrategia, tecnología y creatividad para entregar soluciones que marcan la diferencia.",
  },
  stat1: { pt: "Projetos Realizados", en: "Projects Completed", es: "Proyectos Realizados" },
  stat2: { pt: "Clientes Satisfeitos", en: "Satisfied Clients", es: "Clientes Satisfechos" },
  stat3: { pt: "Anos de Experiência", en: "Years of Experience", es: "Años de Experiencia" },
  stat4: { pt: "Profissionais", en: "Professionals", es: "Profesionales" },
  // Services
  servicesLabel: { pt: "Serviços", en: "Services", es: "Servicios" },
  servicesTitle1: { pt: "O que fazemos por", en: "What we do for", es: "Lo que hacemos por" },
  servicesTitle2: { pt: "você", en: "you", es: "usted" },
  svc1Title: { pt: "Consultoria Estratégica", en: "Strategic Consulting", es: "Consultoría Estratégica" },
  svc1Desc: {
    pt: "Análise profunda do seu negócio para identificar oportunidades de crescimento e otimização.",
    en: "Deep analysis of your business to identify growth and optimization opportunities.",
    es: "Análisis profundo de su negocio para identificar oportunidades de crecimiento y optimización.",
  },
  svc2Title: { pt: "Marketing Digital", en: "Digital Marketing", es: "Marketing Digital" },
  svc2Desc: {
    pt: "Campanhas orientadas por dados para maximizar o retorno sobre investimento.",
    en: "Data-driven campaigns to maximize return on investment.",
    es: "Campañas orientadas por datos para maximizar el retorno sobre la inversión.",
  },
  svc3Title: { pt: "Transformação Digital", en: "Digital Transformation", es: "Transformación Digital" },
  svc3Desc: {
    pt: "Modernização de processos e implementação de soluções tecnológicas inovadoras.",
    en: "Process modernization and implementation of innovative technological solutions.",
    es: "Modernización de procesos e implementación de soluciones tecnológicas innovadoras.",
  },
  svc4Title: { pt: "Gestão de Equipes", en: "Team Management", es: "Gestión de Equipos" },
  svc4Desc: {
    pt: "Capacitação e desenvolvimento de talentos para equipas de alta performance.",
    en: "Training and talent development for high-performance teams.",
    es: "Capacitación y desarrollo de talentos para equipos de alto rendimiento.",
  },
  // Solutions
  solLabel: { pt: "Nossas Soluções", en: "Our Solutions", es: "Nuestras Soluciones" },
  solDesc: {
    pt: "Tecnologia que conecta seu negócio online com eficiência.",
    en: "Technology that connects your business online efficiently.",
    es: "Tecnología que conecta su negocio en línea con eficiencia.",
  },
  solApi: { pt: "APIs para SaaS", en: "APIs for SaaS", es: "APIs para SaaS" },
  solApiDesc: {
    pt: "Integre funcionalidades sem complicações.",
    en: "Integrate functionalities without complications.",
    es: "Integre funcionalidades sin complicaciones.",
  },
  solErp: { pt: "Conexão ERP", en: "ERP Connection", es: "Conexión ERP" },
  solErpDesc: {
    pt: "Sincronize dados em tempo real.",
    en: "Synchronize data in real time.",
    es: "Sincronice datos en tiempo real.",
  },
  solEcom: { pt: "E-commerce", en: "E-commerce", es: "E-commerce" },
  solEcomDesc: {
    pt: "Facilite vendas com tecnologia robusta.",
    en: "Facilitate sales with robust technology.",
    es: "Facilite ventas con tecnología robusta.",
  },
  solProjectsLabel: { pt: "Projetos Reais", en: "Real Projects", es: "Proyectos Reales" },
  solProjectsDesc: {
    pt: "Conectamos tecnologia ao seu negócio online.",
    en: "We connect technology to your online business.",
    es: "Conectamos tecnología a su negocio en línea.",
  },
  solCard1Title: { pt: "API SaaS", en: "SaaS API", es: "API SaaS" },
  solCard1Desc: {
    pt: "Integração simples e eficiente para seu SaaS.",
    en: "Simple and efficient integration for your SaaS.",
    es: "Integración simple y eficiente para su SaaS.",
  },
  solCard2Title: { pt: "ERP Ágil", en: "Agile ERP", es: "ERP Ágil" },
  solCard2Desc: {
    pt: "Automatize processos com nossa API robusta.",
    en: "Automate processes with our robust API.",
    es: "Automatice procesos con nuestra API robusta.",
  },
  solFooterTitle: {
    pt: "Conectando tecnologia e negócios",
    en: "Connecting technology and business",
    es: "Conectando tecnología y negocios",
  },
  solFooterDesc: {
    pt: "Na Traction, criamos APIs que facilitam a integração do seu negócio online com sistemas como SaaS, ERP e e-commerce, tornando tudo mais simples e eficiente.",
    en: "At Traction, we create APIs that facilitate your online business integration with systems like SaaS, ERP, and e-commerce, making everything simpler and more efficient.",
    es: "En Traction, creamos APIs que facilitan la integración de su negocio en línea con sistemas como SaaS, ERP y e-commerce, haciendo todo más simple y eficiente.",
  },
  // Integrations
  intLabel: { pt: "Projetos Reais", en: "Real Projects", es: "Proyectos Reales" },
  intTitle: {
    pt: "Integrações que transformam negócios online.",
    en: "Integrations that transform online businesses.",
    es: "Integraciones que transforman negocios en línea.",
  },
  intCard1Title: { pt: "Conexões Ágeis", en: "Agile Connections", es: "Conexiones Ágiles" },
  intCard1Desc: {
    pt: "Criamos pontes entre seu ERP e plataformas de e-commerce, garantindo sincronização rápida e segura para que seu negócio nunca pare.",
    en: "We build bridges between your ERP and e-commerce platforms, ensuring fast and secure synchronization so your business never stops.",
    es: "Creamos puentes entre su ERP y plataformas de e-commerce, garantizando sincronización rápida y segura para que su negocio nunca pare.",
  },
  intCard2Title: { pt: "Soluções Traction", en: "Traction Solutions", es: "Soluciones Traction" },
  intCard2Desc: {
    pt: "Nossas APIs são pensadas para facilitar a vida do seu SaaS, integrando funcionalidades essenciais com simplicidade e eficiência.",
    en: "Our APIs are designed to make your SaaS life easier, integrating essential functionalities with simplicity and efficiency.",
    es: "Nuestras APIs están pensadas para facilitar la vida de su SaaS, integrando funcionalidades esenciales con simplicidad y eficiencia.",
  },
  intAboutLabel: { pt: "Quem somos nós", en: "Who we are", es: "Quiénes somos" },
  intAboutDesc: {
    pt: "Na Traction, conectamos tecnologia ao seu negócio online com APIs eficientes.",
    en: "At Traction, we connect technology to your online business with efficient APIs.",
    es: "En Traction, conectamos tecnología a su negocio en línea con APIs eficientes.",
  },
  intMission: { pt: "Nossa missão", en: "Our mission", es: "Nuestra misión" },
  intMissionDesc: {
    pt: "Facilitar a integração entre sistemas para que seu negócio cresça com tecnologia.",
    en: "Facilitate integration between systems so your business grows with technology.",
    es: "Facilitar la integración entre sistemas para que su negocio crezca con tecnología.",
  },
  intApisLabel: { pt: "Nossas APIs", en: "Our APIs", es: "Nuestras APIs" },
  intApisDesc: {
    pt: "Conecte seu negócio com tecnologia de forma simples e eficiente.",
    en: "Connect your business with technology simply and efficiently.",
    es: "Conecte su negocio con tecnología de forma simple y eficiente.",
  },
  intSaas: { pt: "Para SaaS", en: "For SaaS", es: "Para SaaS" },
  intSaasDesc: {
    pt: "APIs que facilitam a gestão e automação do seu software.",
    en: "APIs that facilitate the management and automation of your software.",
    es: "APIs que facilitan la gestión y automatización de su software.",
  },
  intErp: { pt: "Para ERPs", en: "For ERPs", es: "Para ERPs" },
  intErpDesc: {
    pt: "Integrações robustas para otimizar processos internos.",
    en: "Robust integrations to optimize internal processes.",
    es: "Integraciones robustas para optimizar procesos internos.",
  },
  intEcom: { pt: "Para E-commerce", en: "For E-commerce", es: "Para E-commerce" },
  intEcomDesc: {
    pt: "Conecte seu e-commerce para vendas mais rápidas e seguras.",
    en: "Connect your e-commerce for faster and more secure sales.",
    es: "Conecte su e-commerce para ventas más rápidas y seguras.",
  },
  // Contact
  contactLabel: { pt: "Contato", en: "Contact", es: "Contacto" },
  contactTitle: { pt: "Vamos conversar?", en: "Let's talk?", es: "¿Hablamos?" },
  contactDesc: {
    pt: "Estamos prontos para ouvir as suas necessidades e apresentar soluções à medida do seu negócio.",
    en: "We're ready to listen to your needs and present solutions tailored to your business.",
    es: "Estamos listos para escuchar sus necesidades y presentar soluciones a medida de su negocio.",
  },
  formName: { pt: "Nome", en: "Name", es: "Nombre" },
  formNamePh: { pt: "O seu nome", en: "Your name", es: "Su nombre" },
  formEmailPh: { pt: "seu@email.com", en: "your@email.com", es: "su@email.com" },
  formMsg: { pt: "Mensagem", en: "Message", es: "Mensaje" },
  formMsgPh: { pt: "Como podemos ajudar?", en: "How can we help?", es: "¿Cómo podemos ayudar?" },
  formSubmit: { pt: "Enviar Mensagem", en: "Send Message", es: "Enviar Mensaje" },
  formSuccess: {
    pt: "Enviada com sucesso! Aguarde nosso retorno.",
    en: "Sent successfully! Await our reply.",
    es: "¡Enviado con éxito! Espere nuestra respuesta.",
  },
  learnMore: { pt: "Saiba Mais", en: "Learn More", es: "Saber Más" },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");

  const translate = (key: string) => {
    return t[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
