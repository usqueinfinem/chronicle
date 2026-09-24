import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./Magic";

const memories = [
  {
    title: "Dharamshala Road",
    label: "Where it all began",
    text: "The first time we met. Neither of us knew the universe had already been negotiating for 26 years.",
  },
  {
    title: "The Chandigarh Run",
    label: "First hug",
    text: "Your first time in Chandigarh — and I literally ran to hug you on the road. Zero regrets, full speed.",
  },
  {
    title: "Between the Vows",
    label: "The car nap",
    text: "The first time we slept in the car, your head on my shoulder, right in the middle of a marriage. Poetic, honestly.",
  },
  {
    title: "The First Kiss",
    label: "Sealed",
    text: "The first kiss you gave me. Some spells are permanent from the very first cast.",
  },
  {
    title: "The Gift Box in Bir",
    label: "Waiting for me",
    text: "I came to Bir and you had a gift box waiting. I didn't know which was sweeter — the gift or the waiting.",
  },
  {
    title: "The 14th",
    label: "The day we decided",
    text: "The first call of an arranged Valentine's plan — and the day we decided to be together. A date I can never forget.",
  },
  {
    title: "ISKCON & Vrindavan",
    label: "Faith, together",
    text: "Visiting ISKCON. The entire Vrindavan trip. Some of the calmest magic we've ever made.",
  },
  {
    title: "TDI Evenings",
    label: "Home is a hug",
    text: "Staying at TDI and hugging you the moment I came home after work. The best kind of ritual.",
  },
  {
    title: "Maggi at Wellington Heights",
    label: "Chef issshii's debut",
    text: "You making Maggi for the very first time. Random, tiny — and it still brings the biggest smile to my face.",
  },
  {
    title: "Stupid Videos HQ",
    label: "The guessing game",
    text: "Hotel challenges, TDI chaos, and now that legendary 'ye sikhni ho gayi hai' number-guessing game.",
  },
  {
    title: "Burgers, Made for You",
    label: "Acts of service",
    text: "Burgers prepared by me, for you. Not bad for a boy who can't compete with golgappe.",
  },
  {
    title: "The Theatre Chronicles",
    label: "Row two, centre",
    text: "Dhurandhar 2 · Mortal Kombat · Evil Dead Burn · Main Wapas Aaunga · Hamlet · Spider-Man — and a couple more I'm surely forgetting.",
  },
];

function MemoryCard({ m, index }: { m: (typeof memories)[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
      onClick={() => setFlipped((f) => !f)}
      className="group relative h-64 cursor-pointer [perspective:1200px]"
      aria-label={`Memory: ${m.title}. Tap to reveal.`}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* front — the vial */}
        <div className="night-panel absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-lg p-6 [backface-visibility:hidden]">
          <svg viewBox="0 0 40 64" className="h-16 w-10" aria-hidden>
            <path
              d="M14 6 h12 v10 l6 10 v30 a6 6 0 0 1 -6 6 h-12 a6 6 0 0 1 -6 -6 v-30 l6 -10 Z"
              fill="color-mix(in oklab, var(--gold) 16%, transparent)"
              stroke="var(--gold)"
              strokeWidth="1.6"
            />
            <path d="M12 38 q8 6 16 0 v14 a4 4 0 0 1 -4 4 h-8 a4 4 0 0 1 -4 -4 Z" fill="var(--gold)" opacity="0.6" />
            <rect x="12" y="3" width="16" height="4" rx="2" fill="var(--gold)" />
          </svg>
          <h3 className="font-display text-base font-semibold text-gold">{m.title}</h3>
          <p className="text-sm text-muted-foreground">{m.label}</p>
          <span className="mt-auto font-display text-[0.55rem] tracking-[0.3em] text-gold/70 uppercase">
            Tap to pour
          </span>
        </div>

        {/* back — the memory */}
        <div className="parchment-panel absolute inset-0 flex flex-col justify-center rounded-lg p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="font-display text-[0.6rem] tracking-[0.3em] uppercase opacity-70">
            {m.label}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold">{m.title}</h3>
          <p className="mt-3 font-letter text-base leading-relaxed">{m.text}</p>
        </div>
      </motion.div>
    </motion.button>
  );
}

export default function Pensieve() {
  return (
    <section className="relative px-4 py-28 sm:py-36">
      <SectionHeading
        eyebrow="The Pensieve"
        title="Memories, bottled & preserved"
        subtitle="Seven and a half months, and the vials overflow. Tap one — step inside."
      />
      <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((m, i) => (
          <MemoryCard key={m.title} m={m} index={i} />
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-xl text-center font-hand text-2xl text-gold">
        And there are so, so, so many more.
      </p>
    </section>
  );
}
