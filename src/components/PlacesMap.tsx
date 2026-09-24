import { motion } from "motion/react";
import { SectionHeading, Snitch } from "./Magic";

const places = [
  { name: "Sundernagar", note: "Hometown — where the story lives" },
  { name: "Mandi", note: "The nearby market runs" },
  { name: "Palampur", note: "Nani Ghar — unlimited refills of love & khana" },
  { name: "Barot Valley", note: "River-side quiet, mountain air" },
  { name: "Bir", note: "Where a gift box was waiting for me" },
  { name: "Prayagraj", note: "Sangam & prayers" },
  { name: "Baralacha La", note: "The trek above the clouds" },
  { name: "Shrikhand Mahadev", note: "A pilgrimage of a lifetime" },
  { name: "Vaishno Devi", note: "Where Mata Rani listens" },
];

export default function PlacesMap() {
  return (
    <section className="relative px-4 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Annotated in enchanted ink"
        title="Her Map of Magical Lands"
        subtitle="Every place she carries with her — and one dream, plotted for someday."
      />

      <div className="mx-auto mt-16 max-w-5xl">
        <div className="parchment-panel relative rounded-xl p-8 sm:p-12">
          {/* compass rose */}
          <svg
            viewBox="0 0 80 80"
            aria-hidden
            className="absolute top-6 right-6 h-14 w-14 opacity-50 sm:h-16 sm:w-16"
          >
            <circle cx="40" cy="40" r="30" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
            <path d="M40 10 L46 40 L40 70 L34 40 Z" fill="var(--ink)" opacity="0.7" />
            <path d="M10 40 L40 34 L70 40 L40 46 Z" fill="var(--ink)" opacity="0.4" />
            <text x="40" y="8" textAnchor="middle" fontSize="9" fill="var(--ink)">N</text>
          </svg>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="rounded-md border border-ink/25 bg-parchment-deep/40 p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-wine" aria-hidden />
                  <h3 className="font-display text-base font-semibold">{p.name}</h3>
                </div>
                <p className="mt-2 font-letter text-base leading-snug opacity-80">{p.note}</p>
              </motion.div>
            ))}
          </div>

          {/* the dream */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-6 overflow-hidden rounded-md border-2 border-gold/60 bg-night p-6 text-center sm:p-8"
          >
            <div className="absolute inset-0 opacity-15" aria-hidden>
              <div className="absolute top-4 left-8 h-1 w-1 rounded-full bg-gold-bright" />
              <div className="absolute top-10 left-1/3 h-1.5 w-1.5 rounded-full bg-gold-bright" />
              <div className="absolute bottom-6 right-10 h-1 w-1 rounded-full bg-gold-bright" />
              <div className="absolute bottom-12 left-12 h-1.5 w-1.5 rounded-full bg-gold-bright" />
            </div>
            <div className="relative flex flex-col items-center gap-2">
              <Snitch className="h-8 w-16" />
              <h3 className="gilded-text font-display text-xl font-semibold sm:text-2xl">
                Switzerland — the Dream
              </h3>
              <p className="font-letter text-lg text-muted-foreground">
                Status: apparition pending. One day, we land there together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
