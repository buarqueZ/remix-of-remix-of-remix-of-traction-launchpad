import { useState, useRef, useEffect } from "react";
import { useLanguage, Lang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const flags: { lang: Lang; emoji: string; label: string }[] = [
  { lang: "pt", emoji: "🇧🇷", label: "BR" },
  { lang: "en", emoji: "🇺🇸", label: "EN" },
  { lang: "es", emoji: "🇪🇸", label: "ES" },
];

interface LanguageSelectorProps {
  variant?: "hero" | "header";
}

const LanguageSelector = ({ variant = "hero" }: LanguageSelectorProps) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = flags.find((f) => f.lang === lang)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isHero = variant === "hero";

  return (
    <div ref={ref} className={isHero ? "absolute top-6 right-6 z-50" : "relative"}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-full pl-3 pr-2.5 py-1.5 transition-all duration-200 group ${
          isHero
            ? "bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] backdrop-blur-xl"
            : "bg-muted hover:bg-muted/80 border border-border"
        }`}
      >
        <span className="text-lg leading-none">{current.emoji}</span>
        <span className={`text-[11px] font-medium tracking-wide font-body ${isHero ? "text-white/80" : "text-foreground"}`}>
          {current.label}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""} ${isHero ? "text-white/50" : "text-muted-foreground"}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 rounded-xl overflow-hidden bg-card border border-border shadow-elevated z-50 min-w-[120px]"
          >
            {flags.map((f) => (
              <button
                key={f.lang}
                onClick={() => { setLang(f.lang); setOpen(false); }}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 w-full text-left transition-colors duration-150 ${
                  f.lang === lang
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="text-lg leading-none">{f.emoji}</span>
                <span className="text-xs font-medium tracking-wide font-body">{f.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
