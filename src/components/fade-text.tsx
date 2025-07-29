"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface FadeTextProps {
  translationKey: string;
  className?: string;
}

export function FadeText({ translationKey, className }: FadeTextProps) {
  const { t, i18n } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={i18n.language + translationKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className={className}
      >
        {t(translationKey)}
      </motion.p>
    </AnimatePresence>
  );
}
