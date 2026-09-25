import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { FloatingCandles, Snitch, Sparkle } from "./Magic";
import sealImg from "@/assets/wax-seal.png";
import heroImg from "@/assets/hero-night.jpg";

function AcceptanceLetterOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-night/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, rotate: -2, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, scale: 0.96, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="parchment-panel relative my-auto w-full max-w-2xl rounded-sm p-8 sm:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div aria-hidden className="absolute -top-3 -right-3 h-16 w-16 sm:-top-5 sm:-right-5 sm:h-24 sm:w-24">
          <img src={sealImg} alt="" width={96} height={96} className="h-full w-full drop-shadow-xl" loading="lazy" />
        </div>

        <p className="font-display text-[0.65rem] tracking-[0.35em] uppercase opacity-70">
          Ministry of Love — Department of Ishika Affairs
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
          Dear Miss I.&nbsp;Awasthi <span className="font-hand text-3xl">(issshii)</span>,
        </h3>
        <div className="mt-5 space-y-4 font-letter text-lg leading-relaxed">
          <p>
            We are pleased to inform you that you have been accepted into the{" "}
            <em>Order of Exceptional Hearts</em>, effective 27 September, 2000 — the day
            the world received its most mischievous witch.
          </p>
          <p>
            You have been pre-sorted into <strong>Gryffindor</strong> (the Hat took zero
            seconds, for the record).
          </p>
          <p>
            Enclosed in this chronicle you will find: one Marauder&rsquo;s Map of your world,
            one Pensieve of shared memories, one Honeydukes-approved menu, and all the
            small magic that makes you, you.
          </p>
          <p>
            Term begins the moment you break the seal. No reply is required. Your
            presence was always the answer.
          </p>
          <p className="pt-2 text-right font-hand text-2xl">
            Yours in magic &amp; mischief, — one extremely smitten wizard
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full cursor-pointer rounded-sm border border-wine/40 bg-wine px-6 py-3 font-display text-xs tracking-[0.3em] text-parchment uppercase transition-all hover:brightness-110 sm:w-auto"
        >
          Begin the story
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 220]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  const begin = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById("marauders-map")?.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  return (
    <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
      {/* cinematic backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1200}
          className="h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/30 to-background" />
      </motion.div>

      <FloatingCandles count={14} />

      {/* wandering snitch */}
      <div aria-hidden className="pointer-events-none absolute top-[22%] left-0">
        <Snitch className="h-10 w-20 opacity-80" />
      </div>

      <motion.div style={{ opacity: fade }} className="relative z-10 px-4 py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="eyebrow"
        >
          An acceptance letter, sealed &amp; delivered by owl
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1 }}
          className="gilded-text text-glow-gold mx-auto mt-6 max-w-4xl font-display text-4xl leading-tight font-semibold sm:text-6xl lg:text-7xl"
        >
          Ishika Awasthi &amp; the Goblet of Forever
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 1 }}
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          26 years of the world spinning without her. Seven and a half months of making up
          for every single day. This is her story — told the only way it deserves: with
          magic.
        </motion.p>

        {/* the sealed envelope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mt-9 flex flex-col items-center gap-3"
        >
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.96 }}
            className="group relative cursor-pointer"
            aria-label="Break the seal and read the letter"
          >
            <img
              src={sealImg}
              alt="Wax seal with a golden snitch"
              width={160}
              height={160}
              className="h-32 w-32 drop-shadow-[0_0_35px_rgba(220,60,50,0.35)] transition-all group-hover:drop-shadow-[0_0_50px_rgba(220,60,50,0.55)] sm:h-40 sm:w-40"
            />
            <motion.span
              animate={{ scale: [1, 1.25], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              aria-hidden
              className="absolute inset-0 rounded-full border-2 border-wine/60"
            />
          </motion.button>
          <p className="font-display text-[0.65rem] tracking-[0.4em] text-gold uppercase">
            Break the seal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-9 flex items-center justify-center gap-3 text-sm text-muted-foreground"
        >
          <Sparkle className="h-3.5 w-3.5" />
          <span>Scroll — the candles will light the way</span>
          <Sparkle className="h-3.5 w-3.5" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open ? <AcceptanceLetterOverlay onClose={begin} /> : null}
      </AnimatePresence>
    </section>
  );
}
