import { createFileRoute } from "@tanstack/react-router";

import { Stars, SparkTrail } from "@/components/Magic";
import Hero from "@/components/Hero";
import ChapterNav from "@/components/ChapterNav";
import AboutHer from "@/components/AboutHer";
import SortingHat from "@/components/SortingHat";
import Pensieve from "@/components/Pensieve";
import Honeydukes from "@/components/Honeydukes";
import HerPeople from "@/components/HerPeople";
import PlacesMap from "@/components/PlacesMap";
import Prayers from "@/components/Prayers";
import Finale from "@/components/Finale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishika Awasthi & the Goblet of Forever" },
      {
        name: "description",
        content:
          "A cinematic magical chronicle for Ishika — her world, favourite memories, enchanted map and a love written in the stars.",
      },
      { property: "og:title", content: "Ishika Awasthi & the Goblet of Forever" },
      {
        property: "og:description",
        content:
          "A cinematic magical chronicle for Ishika — her world, favourite memories, enchanted map and a love written in the stars.",
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
      <ChapterNav />
      <AboutHer />
      <SortingHat />
      <Pensieve />
      <Honeydukes />
      <HerPeople />
      <PlacesMap />
      <Prayers />
      <Finale />
    </main>
  );
}
