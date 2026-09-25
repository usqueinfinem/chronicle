import { useEffect, useMemo, useRef } from "react";
import { motion } from "motion/react";

function seededValue(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

/* Night sky — a fixed field of twinkling stars behind everything */
export function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 140 }, (_, i) => ({
        id: i,
        left: seededValue(i + 1) * 100,
        top: seededValue(i + 141) * 100,
        size: seededValue(i + 281) * 2.2 + 1,
        delay: seededValue(i + 421) * 4,
      })),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={
            {
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              "--d": `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* Wand-sparkle trail following the cursor (desktop only) */
export function SparkTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gold = getComputedStyle(document.documentElement)
      .getPropertyValue("--gold")
      .trim() || "#e6c56a";

    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < 24) return;
      last = now;
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.4,
          life: 1,
          size: Math.random() * 2.4 + 1,
        });
      }
      if (particles.length > 120) particles = particles.slice(-120);
    };
    window.addEventListener("pointermove", onMove);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((p) => p.life > 0);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}

/* A single Great-Hall candle */
function Candle({
  left,
  top,
  scale = 1,
  delay = 0,
}: {
  left: string;
  top: string;
  scale?: number;
  delay?: number;
}) {
  return (
    <div
      className="candle"
      style={
        {
          left,
          top,
          transform: `scale(${scale})`,
          "--d": `${delay}s`,
        } as React.CSSProperties
      }
    >
      <div className="candle-flame" />
      <div className="candle-body" />
    </div>
  );
}

/* Cluster of floating candles for the Great Hall effect */
export function FloatingCandles({ count = 14 }: { count?: number }) {
  const candles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 97) % 96 + 2}%`,
        top: `${(i * 53) % 70 + 4}%`,
        scale: 0.6 + ((i * 7) % 10) / 16,
        delay: seededValue(i + 601) * 6,
      })),
    [count]
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {candles.map((c) => (
        <Candle key={c.id} left={c.left} top={c.top} scale={c.scale} delay={c.delay} />
      ))}
    </div>
  );
}

/* The Golden Snitch — a wandering, winged sphere of gold */
export function Snitch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden>
      <motion.path
        d="M52 30 C 30 6, 10 8, 4 22 C 16 18, 30 22, 50 32"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
        animate={{ scaleY: [1, 0.55, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M68 30 C 90 6, 110 8, 116 22 C 104 18, 90 22, 70 32"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
        animate={{ scaleY: [1, 0.55, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
      />
      <circle cx="60" cy="33" r="11" fill="var(--gold)" />
      <circle cx="60" cy="33" r="11" fill="none" stroke="var(--gold-bright)" strokeWidth="1.2" />
      <path
        d="M54 28 C 58 31, 62 31, 66 28 M53 34 C 58 37, 62 37, 67 34"
        fill="none"
        stroke="var(--parchment-deep)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Shared section heading — gilded, cinematic */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="gilded-text mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {subtitle}
        </p>
      ) : null}
      <div
        aria-hidden
        className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </motion.div>
  );
}

/* Small four-point sparkle used across sections */
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z"
        fill="var(--gold-bright)"
      />
    </svg>
  );
}
