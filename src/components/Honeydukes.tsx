import { motion } from "motion/react";
import { SectionHeading } from "./Magic";

const approved = [
  "Momos (a religion, really)",
  "Golgappe — 'gog gappe'",
  "Spring rolls",
  "Bingsoo — 'bingsooo'",
  "Rasmalai (the one and only sweet)",
  "Pringles — orange & original",
  "Orange Lays",
  "Ice cream: coffee, cookie & salted caramel",
  "Mumma ke haath ka khana",
  "Himachali Dham, traditional & true",
];

const boggarts = [
  "Oreo anything",
  "Dark chocolate",
  "Green apple",
  "Burgers (sorry, my burgers)",
  "Bread",
  "Patties",
  "Paneer items",
  "Black currant ice cream",
  "Rum raisin",
];

export default function Honeydukes() {
  return (
    <section className="relative px-4 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Honeydukes, curate's edition"
        title="The Official Menu of the Issshii"
        subtitle="Approved delicacies — and the boggarts that shall never pass the door."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="parchment-panel rounded-lg p-8"
        >
          <h3 className="font-display text-xl font-semibold">
            Sweet Sorcery <span className="font-hand text-2xl">(highly approved)</span>
          </h3>
          <ul className="mt-6 space-y-3">
            {approved.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-start gap-3 font-letter text-lg"
              >
                <svg viewBox="0 0 20 20" className="mt-1.5 h-3.5 w-3.5 shrink-0" aria-hidden>
                  <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="var(--wine)" />
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="night-panel rounded-lg p-8"
        >
          <h3 className="font-display text-xl font-semibold text-gold">
            Boggarts <span className="font-hand text-2xl">(repelled on sight)</span>
          </h3>
          <ul className="mt-6 space-y-3">
            {boggarts.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-start gap-3 text-lg text-muted-foreground"
              >
                <svg viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 shrink-0" aria-hidden>
                  <circle cx="10" cy="10" r="8" fill="none" stroke="var(--wine)" strokeWidth="2" />
                  <path d="M4 16 L16 4" stroke="var(--wine)" strokeWidth="2" />
                </svg>
                <span className="line-through decoration-wine/70">{item}</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 font-hand text-2xl text-gold">
            Riddikulus — and honestly, good riddance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
