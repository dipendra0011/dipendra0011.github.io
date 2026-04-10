"use client";

import Image from "next/image";
import { figmaAssets } from "@/lib/figma-assets";

const clients = [
  { src: figmaAssets.client4, alt: "Wild Yak" },
  { src: figmaAssets.client3, alt: "Salaka Krishi" },
  { src: figmaAssets.image5, alt: "Wild Yak Expeditions" },
  { src: figmaAssets.image8, alt: "Sairam" },
  { src: figmaAssets.client6, alt: "FutureHub Asia Pacific" },
  { src: figmaAssets.client7, alt: "Pathseed Consulting" },
] as const;

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex size-[160px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-surface opacity-80 transition-opacity hover:opacity-100 sm:size-[180px] md:size-[200px] lg:size-[230px]">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={100}
        className="max-h-[45%] w-auto max-w-[85%] object-contain px-3"
      />
    </div>
  );
}

export function ClientLogosSection() {
  return (
    <section aria-label="Clients" className="bg-background py-12 md:py-16">
      <div className="client-logos-marquee relative w-full overflow-hidden">
        {/* edge fade so marquee doesn’t look cut off */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r from-background to-transparent md:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-background to-transparent md:w-16"
          aria-hidden
        />

        <div className="client-logos-marquee-track">
          <div className="flex shrink-0 gap-4 pr-4 md:gap-8 md:pr-8">
            {clients.map((c, i) => (
              <LogoTile
                key={`a-${idForKey(c, i)}`}
                src={c.src}
                alt={c.alt}
              />
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4 md:gap-8 md:pr-8" aria-hidden>
            {clients.map((c, i) => (
              <LogoTile
                key={`b-${idForKey(c, i)}`}
                src={c.src}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function idForKey(c: (typeof clients)[number], i: number) {
  return `${c.src}-${i}`;
}
