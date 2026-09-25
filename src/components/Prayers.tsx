import { motion } from "motion/react";
import { SectionHeading } from "./Magic";

const prayers = [
  {
    deity: "Mata Rani",
    quote:
      "\u201cMata Rani, aapki jaisi wife se mujhe milana.\u201d",
  },
  {
    deity: "Hanuman ji",
    quote:
      "\u201cJaise aapne Ram Bhagwan ko Sita Mata se milvaya, waise mujhe bhi meri wife se mila dena.\u201d",
  },
  {
    deity: "Shiv ji, Rameshwaram",
    quote: "Apni Devi maangi thi — with everything he had.",
  },
];

export default function Prayers() {
  return (
    <section className="relative px-4 py-20 sm:py-24">
      <SectionHeading
        eyebrow="The Unbreakable Vow, in prayer form"
        title="Three Prayers, One Answer"
        subtitle="Every prayer he ever made was secretly about her."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-3">
        {prayers.map((p, i) => (
          <motion.div
            key={p.deity}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="night-panel relative rounded-lg p-8"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-night px-3 font-display text-[0.6rem] tracking-[0.3em] text-gold uppercase">
              Prayer {i + 1}
            </span>
            <h3 className="mt-2 text-center font-display text-lg font-semibold text-gold">
              {p.deity}
            </h3>
            <p className="mt-4 text-center font-letter text-xl leading-relaxed">
              {p.quote}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9 }}
        className="parchment-panel mx-auto mt-9 max-w-3xl rounded-lg p-10 text-center"
      >
        <p className="font-letter text-2xl leading-relaxed">
          And somehow, today, he looks at her and knows —{" "}
          <strong>the prayers were heard.</strong>
        </p>
        <p className="mt-4 font-hand text-3xl">The answer had a name. Ishika.</p>
      </motion.div>
    </section>
  );
}
