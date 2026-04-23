import { motion } from "framer-motion";
import { ArrowRight, Cloud, Cpu, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import integrationsHero from "@/assets/integrations-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Integrations = () => {
  const { t } = useLanguage();

  const apiCards = [
    { icon: Cloud, title: t("intSaas"), desc: t("intSaasDesc") },
    { icon: Cpu, title: t("intErp"), desc: t("intErpDesc") },
    { icon: ShoppingCart, title: t("intEcom"), desc: t("intEcomDesc") },
  ];

  return (
    <section id="integracoes" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary font-body">
            {t("intLabel")}
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 text-foreground">
            {t("intTitle")}
          </motion.h2>
        </motion.div>

        {/* Two cards row */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          <motion.div variants={fadeUp} custom={0} className="bg-card rounded-2xl p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{t("intCard1Title")}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{t("intCard1Desc")}</p>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="bg-card rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{t("intCard2Title")}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{t("intCard2Desc")}</p>
          </motion.div>
        </motion.div>

        {/* About + Mission */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} custom={0} className="bg-card-gradient rounded-2xl p-8">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary font-body">{t("intAboutLabel")}</span>
              <p className="text-muted-foreground font-body mt-3 mb-4">{t("intAboutDesc")}</p>
              <a href="#contato" className="inline-flex items-center gap-1 text-primary font-semibold text-sm font-body hover:underline">
                {t("learnMore")} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="bg-card-gradient rounded-2xl p-8">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{t("intMission")}</h3>
              <p className="text-muted-foreground font-body">{t("intMissionDesc")}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* APIs section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-4xl mx-auto">
          <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-display font-bold text-foreground text-center mb-2">
            {t("intApisLabel")}
          </motion.h3>
          <motion.p variants={fadeUp} custom={1} className="text-center text-muted-foreground font-body mb-8">
            {t("intApisDesc")}
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {apiCards.map((card, i) => (
              <motion.div key={card.title} variants={fadeUp} custom={i + 2} className="bg-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{card.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
