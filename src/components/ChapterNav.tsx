const chapters = [
  { href: "#marauders-map", label: "Her world" },
  { href: "#sorting", label: "Sorting" },
  { href: "#pensieve", label: "Memories" },
  { href: "#lands", label: "The map" },
  { href: "#finale", label: "Forever" },
];

export default function ChapterNav() {
  return (
    <nav
      aria-label="Story chapters"
      className="sticky top-0 z-30 border-y border-gold/15 bg-night/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-7 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:justify-center">
        {chapters.map((chapter, index) => (
          <a
            key={chapter.href}
            href={chapter.href}
            className="group flex shrink-0 items-center gap-2 font-display text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-gold"
          >
            <span className="text-gold/55">{String(index + 1).padStart(2, "0")}</span>
            {chapter.label}
          </a>
        ))}
      </div>
    </nav>
  );
}