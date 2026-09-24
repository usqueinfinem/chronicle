import { motion } from "motion/react";
import { SectionHeading } from "./Magic";

const family = [
  { title: "Shishu", name: "Ritika" },
  { title: "Kaku", name: "Akshit" },
  { title: "Kitu", name: "Shweta" },
];

const friends = ["Anchal", "Simran P2", "Ruchi"];

function PersonCard({ title, name, index }: { title: string; name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="night-panel rounded-lg p-6 text-center"
    >
      <svg viewBox="0 0 48 48" className="mx-auto h-12 w-12" aria-hidden>
        <circle cx="24" cy="24" r="21" fill="none" stroke="var(--gold)" strokeWidth="1.4" opacity="0.6" />
        <circle cx="24" cy="18" r="7" fill="var(--gold)" opacity="0.85" />
        <path d="M10 40 a14 12 0 0 1 28 0" fill="var(--gold)" opacity="0.85" />
      </svg>
      <p className="mt-3 font-display text-[0.6rem] tracking-[0.3em] text-gold uppercase">
        {title}
      </p>
      <p className="mt-1 font-letter text-xl">{name}</p>
    </motion.div>
  );
}

export default function HerPeople() {
  return (
    <section className="relative px-4 py-28 sm:py-36">
      <SectionHeading
        eyebrow="The Order of the Issshii"
        title="Her inner circle — the real magic"
        subtitle="The people she loves fiercely, and who love her right back."
      />

      <div className="mx-auto mt-16 max-w-4xl">
        <p className="text-center font-display text-sm tracking-[0.3em] text-gold uppercase">
          The Founders &amp; the Family
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {family.map((p, i) => (
            <PersonCard key={p.name} title={p.title} name={p.name} index={i} />
          ))}
        </div>

        <p className="mt-14 text-center font-display text-sm tracking-[0.3em] text-gold uppercase">
          Dumbledore&rsquo;s Army — Friends Division
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {friends.map((name, i) => (
            <PersonCard key={name} title="Trustworthy ally" name={name} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-14 max-w-xl text-center font-letter text-xl leading-relaxed text-muted-foreground"
        >
          Behind every great witch stands a small, loyal order — and every one of them
          knows she&rsquo;d fight a mountain troll for them.
        </motion.p>
      </div>
    </section>
  );
}
