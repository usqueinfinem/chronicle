import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SectionHeading, Snitch, Sparkle } from "./Magic";

function useBirthdayCountdown() {
  // target: 27 September, local time (year-aware)
  const [left, setLeft] = useState<null | { d: number; h: number; m: number; s: number }>(null);

  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const year = now.getFullYear();
      let target = new Date(year, 8, 27, 0, 0, 0); // September = month 8
      if (target.getTime() <= now.getTime()) {
        target = new Date(year + 1, 8, 27, 0, 0, 0);
      }
      const diff = Math.max(0, target.getTime() - now.getTime());
      setLeft({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor(diff / 3_600_000) % 24,
        m: Math.floor(diff / 60_000) % 60,
        s: Math.floor(diff / 1_000) % 60,
      });
    };
    compute();
    const id = setInterval(compute, 1000);
    return () => clearInterval(id);
  }, []);

  return left;
}

const mores = [
  "more mornings",
  "more stupid fights",
  "more movies",
  "more trips",
  "more food",
  "more hugs",
  "more kisses",
  "more random conversations",
  "more nights that run too late",
  "more ordinary days that become favourites",
];

export default function Finale() {
  const left = useBirthdayCountdown();

  return (
    <section className="relative overflow-hidden px-4 pt-28 pb-20 sm:pt-36">
      <SectionHeading
        eyebrow="27 September — the day magic was born"
        title="Happy Birthday, meri Cuntu Bamby"
        subtitle="And if time could be saved in a bottle, every day would be spent with you."
      />

      {/* countdown */}
      <div className="mx-auto mt-14 flex max-w-2xl justify-center gap-3 sm:gap-5">
        {[
          { v: left?.d ?? "--", l: "days" },
          { v: left?.h ?? "--", l: "hours" },
          { v: left?.m ?? "--", l: "minutes" },
          { v: left?.s ?? "--", l: "seconds" },
        ].map((c) => (
          <div
            key={c.l}
            className="night-panel min-w-16 rounded-lg px-3 py-5 text-center sm:min-w-24 sm:px-6"
          >
            <p className="gilded-text font-display text-3xl font-bold sm:text-5xl">{c.v}</p>
            <p className="mt-2 font-display text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase">
              {c.l}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        …until the castle celebrates its brightest witch.
      </p>

      {/* the mores cascade */}
      <div className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3">
        {mores.map((m, i) => (
          <motion.span
            key={m}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="font-letter text-xl text-foreground/90"
          >
            {m} <span className="text-gold">·</span>
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: mores.length * 0.1 + 0.2, duration: 0.7 }}
          className="gilded-text text-glow-gold font-display text-3xl font-bold"
        >
          and more of you.
        </motion.span>
      </div>

      {/* mischief managed */}
      <div className="relative mx-auto mt-24 max-w-2xl text-center">
        <div className="flex items-center justify-center gap-4">
          <Sparkle className="h-4 w-4" />
          <Snitch className="h-10 w-20" />
          <Sparkle className="h-4 w-4" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="gilded-text mt-8 font-display text-4xl font-semibold tracking-[0.2em] sm:text-5xl"
        >
          Mischief Managed
        </motion.p>
        <p className="mt-8 font-hand text-3xl text-foreground">
          I love you. More than I can ever properly put into words.
        </p>
        <p className="mt-3 font-hand text-4xl text-gold">— Tumhara ❤️</p>
        <p className="mt-12 text-xs text-muted-foreground">
          Made with love, candlelight &amp; approximately seven and a half months of
          magic.
        </p>
      </div>
    </section>
  );
}
