"use client";

import Image from "next/image";
import { figmaAssets } from "@/lib/figma-assets";

export function GalleryBreakSection() {
  return (
    <section aria-label="Visual showcase" className="w-full overflow-hidden bg-background">
      <div className="relative min-h-[320px] w-full md:min-h-[500px] lg:min-h-[min(90vh,900px)]">
        <Image
          src={figmaAssets.gallery}
          alt="Outdoor posters and brand visuals"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
