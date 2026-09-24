import { createFileRoute } from "@tanstack/react-router";

import { Stars, SparkTrail } from "@/components/Magic";
import Hero from "@/components/Hero";
import AboutHer from "@/components/AboutHer";
import SortingHat from "@/components/SortingHat";
import Pensieve from "@/components/Pensieve";
import Honeydukes from "@/components/Honeydukes";
import HerPeople from "@/components/HerPeople";
import PlacesMap from "@/components/PlacesMap";
import TheLetter from "@/components/TheLetter";
import Prayers from "@/components/Prayers";
import Finale from "@/components/Finale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishika Awasthi & the Goblet of Forever" },
      {
        name: "description",
        content:
          "A magical, cinematic storybook for issshii — a sealed acceptance letter, floating candles, the Sorting Hat, a Pensieve of memories, and one very true letter.",
      },
      { property: "og:title", content: "Ishika Awasthi & the Goblet of Forever" },
      {
        property: "og:description",
        content:
          "A magical, cinematic storybook for issshii — a sealed acceptance letter, floating candles, the Sorting Hat, a Pensieve of memories, and one very true letter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background font-serif text-foreground">
      <Stars />
      <SparkTrail />
      <Hero />
      <AboutHer />
      <SortingHat />
      <Pensieve />
      <Honeydukes />
      <HerPeople />
      <PlacesMap />
      <TheLetter />
      <Prayers />
      <Finale />
    </main>
  );
}
