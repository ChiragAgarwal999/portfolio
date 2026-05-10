"use client";
import { motion } from "framer-motion";

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl px-4 py-16"
    >
      <h2 className="mb-8 text-3xl font-bold gradient-text">{title}</h2>
      {children}
    </motion.section>
  );
}
