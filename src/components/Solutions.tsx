import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import solutionsApi from "@/assets/solutions-api.jpg";
import solutionsErp from "@/assets/solutions-erp.jpg";
import solutionsEcommerce from "@/assets/solutions-ecommerce.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Solutions = () => {
  const { t } = useLanguage();

  const cards = [
    { img: solutionsApi, title: t("solApi"), desc: t("solApiDesc") },
    { img: solutionsErp, title: t("solErp"), desc: t("solErpDesc") },
    { img: solutionsEcommerce, title: t("solEcom"), desc: t("solEcomDesc") },
  ];

  const projects = [
    { title: t("solCard1Title"), desc: t("solCard1Desc"), cta: null },
    { title: t("solCard2Title"), desc: t("solCard2Desc"), cta: t("contactLabel") },
  ];

  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
            {t("solLabel")}
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg font-body leading-relaxed">
            {t("solDesc")}
          </motion.p>
        </motion.div>

        {/* 3 Cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div key={card.title} variants={fadeUp} custom={i} className="group rounded-2xl overflow-hidden bg-card shadow-brand hover:shadow-elevated transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
