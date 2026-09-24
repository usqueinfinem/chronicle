import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "./Magic";

const hatThoughts = [
  "Mmm... difficult. VERY difficult.",
  "Two years of Shivratri vrat kept without a word of complaint...",
  "Cries at the smallest things, argues like a seasoned duellist...",
  "Loves her Mata Rani, her momos, and one hopeless boy beyond reason...",
  "Plenty of courage, I see. Not a bad mind either. Old-school loyalty to the bone...",
];

const verdict = "GRYFFINDOR!";

function HatSvg({ thinking }: { thinking: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="h-44 w-44"
      animate={thinking ? { rotate: [0, -3, 3, 0] } : { rotate: 0 }}
      transition={thinking ? { duration: 0.6, repeat: Infinity } : { duration: 0.4 }}
    >
      <defs>
        <linearGradient id="hatg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--parchment-deep)" />
          <stop offset="100%" stopColor="var(--ink)" />
        </linearGradient>
      </defs>
      <path
        d="M100 20 C 96 34, 88 44, 78 52 C 58 64, 40 76, 34 96 C 30 112, 38 124, 30 138 C 44 134, 50 142, 46 156 C 62 148, 72 156, 70 170 C 84 160, 96 166, 100 178 C 104 166, 116 160, 130 170 C 128 156, 138 148, 154 156 C 150 142, 158 134, 172 138 C 164 124, 172 112, 168 96 C 162 76, 144 64, 122 52 C 112 44, 104 34, 100 20 Z"
        fill="url(#hatg)"
        stroke="var(--gold)"
        strokeWidth="2"
      />
      <path
        d="M62 100 C 80 112, 120 112, 138 100 M55 122 C 80 138, 120 138, 145 122 M70 82 C 88 90, 112 90, 130 82"
        fill="none"
        stroke="color-mix(in oklab, var(--gold) 55%, transparent)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export default function SortingHat() {
  const [stage, setStage] = useState(0); // 0 = idle, 1..n = thoughts, last = verdict
  const total = hatThoughts.length;
  const sorted = stage > total;

  return (
    <section className="relative px-4 py-28 sm:py-36">
      <SectionHeading
        eyebrow="A ceremony of utmost importance"
        title="The Sorting Hat must decide"
        subtitle="Tap the hat. Let ancient magic have a look at her."
      />

      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center">
        <motion.button
          onClick={() => setStage((s) => Math.min(s + 1, total + 1))}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
          aria-label="Consult the Sorting Hat"
        >
          <HatSvg thinking={stage > 0 && !sorted} />
        </motion.button>

        <div className="mt-8 min-h-28 text-center" aria-live="polite">
          <AnimatePresence mode="wait">
            {sorted ? (
              <motion.div
                key="verdict"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <p className="gilded-text text-glow-gold font-display text-5xl font-bold tracking-wider sm:text-6xl">
                  {verdict}
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  The Hat didn&rsquo;t hesitate for a second. Neither did I.
                </p>
                <p className="mt-2 font-hand text-3xl text-gold">
                  Bravest heart in the whole castle.
                </p>
              </motion.div>
            ) : stage === 0 ? (
              <motion.p
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-muted-foreground"
              >
                The Hat waits, wrinkled and patient...
              </motion.p>
            ) : (
              <motion.p
                key={stage}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="font-letter text-2xl text-foreground/90"
              >
                &ldquo;{hatThoughts[stage - 1]}&rdquo;
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {!sorted ? (
          <p className="mt-6 font-display text-[0.6rem] tracking-[0.35em] text-gold/80 uppercase">
            {stage === 0 ? "Tap the hat to begin" : "Tap again — the Hat is deliberating"}
          </p>
        ) : null}
      </div>
    </section>
  );
}
