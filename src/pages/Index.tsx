import { useState } from "react";
import { motion } from "framer-motion";
import tractionLogo from "@/assets/traction-logo.png";
import { ArrowRight, Target, TrendingUp, Users, Zap, Mail } from "lucide-react";
import ShaderBackground from "@/components/ShaderBackground";
import LanguageSelector from "@/components/LanguageSelector";
import StickyHeader from "@/components/StickyHeader";
import Solutions from "@/components/Solutions";
import Integrations from "@/components/Integrations";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <ShaderBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-[1]" />
      <LanguageSelector variant="hero" />
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.img
            src={tractionLogo}
            alt="Traction"
            className="h-16 mb-8"
            variants={fadeUp}
            custom={0}
          />
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white mb-6"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            variants={fadeUp}
            custom={1}
          >
            {t("heroTitle1")}{" "}
            <span className="text-white">{t("heroTitle2")}</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-xl mb-10 font-body font-light leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            {t("heroDesc")}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={fadeUp} custom={3}>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-[#a855f7]/60 backdrop-blur-xl px-7 py-3.5 text-base font-semibold text-white hover:bg-[#a855f7]/75 transition-all"
            >
              {t("heroBtn1")} <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] backdrop-blur-xl px-7 py-3.5 text-base font-semibold text-white hover:bg-white/[0.12] transition-all"
            >
              {t("heroBtn2")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useLanguage();
  const stats = [
    { value: "150+", label: t("stat1") },
    { value: "98%", label: t("stat2") },
    { value: "10+", label: t("stat3") },
    { value: "50+", label: t("stat4") },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary font-body">
            {t("aboutLabel")}
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 text-foreground">
            {t("aboutTitle1")} <span className="text-gradient">{t("aboutTitle2")}</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed font-body">
            {t("aboutDesc")}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="bg-card-gradient rounded-2xl p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useLanguage();
  const services = [
    { icon: Target, titleKey: "svc1Title", descKey: "svc1Desc" },
    { icon: TrendingUp, titleKey: "svc2Title", descKey: "svc2Desc" },
    { icon: Zap, titleKey: "svc3Title", descKey: "svc3Desc" },
    { icon: Users, titleKey: "svc4Title", descKey: "svc4Desc" },
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary font-body">
            {t("servicesLabel")}
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 text-foreground">
            {t("servicesTitle1")} <span className="text-gradient">{t("servicesTitle2")}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              variants={fadeUp}
              custom={i}
              className="group bg-card rounded-2xl p-8 hover:bg-muted/60 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{t(service.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch("https://auto.zendry.com/webhook/traction-site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Webhook error:", err);
    }

    setSuccess(true);
    form.reset();
    setSubmitting(false);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary font-body">
                {t("contactLabel")}
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6 text-foreground">
                {t("contactTitle")}
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground font-body leading-relaxed mb-8">
                {t("contactDesc")}
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="space-y-4">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-body">contato@tractionsolucoes.com</span>
                </div>
              </motion.div>
            </div>

            <motion.form variants={fadeUp} custom={2} className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-body">{t("formName")}</label>
                <input name="name" type="text" required className="w-full rounded-full bg-card px-5 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder={t("formNamePh")} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Email</label>
                <input name="email" type="email" required className="w-full rounded-full bg-card px-5 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder={t("formEmailPh")} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-body">{t("formMsg")}</label>
                <textarea name="message" rows={4} required className="w-full rounded-2xl bg-card px-5 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none" placeholder={t("formMsgPh")} />
              </div>
              <button type="submit" disabled={submitting} className="w-full rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50">
                {t("formSubmit")}
              </button>
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-sm font-body text-primary font-semibold"
                >
                  {t("formSuccess")}
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => (
  <div className="min-h-screen">
    <StickyHeader />
    <Hero />
    <About />
    <Services />
    <Solutions />
    <Integrations />
    <Contact />
  </div>
);

export default Index;
