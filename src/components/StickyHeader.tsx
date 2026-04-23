import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import headerLogo from "@/assets/header-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const StickyHeader = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t("navHome"), href: "#" },
    { label: t("navSolucoes"), href: "#solucoes" },
    { label: t("navIntegracoes"), href: "#integracoes" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white rounded-b-2xl"
        >
          <div className="container mx-auto px-6 flex items-center justify-between h-16">
            <a href="#">
              <img src={headerLogo} alt="Traction" className="h-16" />
            </a>
            <nav className="flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
              <div className="relative">
                <LanguageSelector variant="header" />
              </div>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
