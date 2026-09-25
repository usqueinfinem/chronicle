import { motion } from "motion/react";
import { SectionHeading, Sparkle } from "./Magic";

const traits = [
  {
    title: "Old School",
    text: "Believes in letters, long calls, and love that takes the long way round.",
  },
  {
    title: "Fighter",
    text: "Once had class tod-phod energy. Still argues like she's paid for it — and usually wins.",
  },
  {
    title: "Emotional",
    text: "Cries at the tiniest, closest things. Her heart wears no armour.",
  },
  {
    title: "Spiritual",
    text: "Two years of Shivratri vrat without complaint. Mata Rani comes first, always.",
  },
];

const enchantedRules = [
  "Never cut the call first. Ever. This is law.",
  "Missed her call? Message back immediately.",
  "When on a call — talk. Silence is not an option.",
  "If she's excited, never interrupt. The story deserves the whole runway.",
  "Ask if she ate. Acts of Service is her love language.",
  "Random eating noises? Boggart-grade horror. Beware.",
  "Money talk is banned in her presence. Avada— no. Just no.",
  "Jokes about the extremely close things? Straight to Azkaban.",
];

const joys = [
  "Dancing in the rain",
  "Late-night walks",
  "Stargazing",
  "Picnics",
  "Sunset watching",
  "Disney-style spins",
  "Toy train rides",
];

export default function AboutHer() {
  return (
    <section id="marauders-map" className="relative scroll-mt-16 px-4 py-20 sm:py-24">
      <SectionHeading
        eyebrow="The Marauder's Map of Ishika"
        title="I solemnly swear she is up to good"
        subtitle="Every inch of the map annotated — her nature, her laws, her little joys."
      />

      {/* traits */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="night-panel rounded-lg p-6"
          >
            <Sparkle className="h-4 w-4" />
            <h3 className="mt-4 font-display text-lg font-semibold text-gold">
              {t.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{t.text}</p>
          </motion.div>
        ))}
      </div>

      {/* love language highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="parchment-panel mx-auto mt-9 max-w-3xl rounded-lg p-8 text-center sm:p-10"
      >
        <p className="font-display text-[0.65rem] tracking-[0.35em] uppercase opacity-70">
          Love language, detected
        </p>
        <p className="mt-4 font-letter text-2xl leading-relaxed">
          She doesn&rsquo;t say love in words. She says it in{" "}
          <em>&ldquo;did you eat?&rdquo;</em>, in showing up and doing things, in never —
          <strong> never</strong> — cutting the call first.
        </p>
        <p className="mt-4 font-hand text-3xl">Acts of Service, obviously.</p>
      </motion.div>

      {/* enchanted rules */}
      <div className="mx-auto mt-12 max-w-3xl">
        <h3 className="text-center font-display text-xl font-semibold tracking-wide text-gold">
          Enchanted Rules of the Issshii
        </h3>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Break them at your own peril.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {enchantedRules.map((rule, i) => (
            <motion.li
              key={rule}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="night-panel flex items-start gap-4 rounded-md px-5 py-4"
            >
              <span className="mt-0.5 font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">{rule}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* joys chips */}
      <div className="mx-auto mt-10 max-w-3xl text-center">
        <p className="eyebrow">Known to happily apparate for</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {joys.map((j, i) => (
            <motion.span
              key={j}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="rounded-full border border-gold/35 px-4 py-2 text-sm text-foreground/90"
            >
              {j}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
