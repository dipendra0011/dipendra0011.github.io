"use client";

import Image from "next/image";
import { figmaAssets } from "@/lib/figma-assets";

const clients = [
  { src: figmaAssets.client4, alt: "Client logo" },
  { src: figmaAssets.client3, alt: "Client logo" },
  { src: figmaAssets.image5, alt: "Client logo" },
  { src: figmaAssets.image8, alt: "Client logo" },
  { src: figmaAssets.client6, alt: "Client logo" },
  { src: figmaAssets.client7, alt: "Client logo" },
] as const;

export function ClientLogosSection() {
  return (
    <section aria-label="Clients" className="bg-background py-12 md:py-16">
      <div className="page-figma mx-auto max-w-figma overflow-x-auto pb-2">
        <div className="flex min-w-max items-center gap-4 md:gap-8 lg:min-w-0 lg:flex-wrap lg:justify-center">
          {clients.map((c, i) => (
            <div
              key={i}
              className="flex size-[180px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-surface opacity-70 transition-opacity hover:opacity-100 md:size-[200px] lg:size-[230px]"
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={200}
                height={100}
                className="max-h-[45%] w-auto object-contain px-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
