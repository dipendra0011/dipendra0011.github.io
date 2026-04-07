"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { figmaAssets } from "@/lib/figma-assets";
import { SITE_NAV_ITEMS } from "@/lib/site-navigation";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="border-b border-surface-raised bg-background"
    >
      <div className="page-figma mx-auto max-w-figma pb-12 pt-6 md:pb-16 md:pt-2 lg:pb-20">
        {/* Figma 1:699 — headline + vertical nav on large screens */}
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-8 lg:pt-4">
          <div className="max-w-4xl space-y-8 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,7vw,5rem)] font-bold uppercase leading-[1.05] tracking-[-0.04em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                <span className="text-accent-lime">Hi!!</span>{" "}
                <span className="text-white">I am</span>
              </h1>
              <p className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5.5vw,4.25rem)] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-white">
                DIPENDRA SHRESTHA
              </p>
              <div className="mt-6 flex flex-wrap items-baseline gap-x-1 font-[family-name:var(--font-instrument)] text-[17px] font-semibold uppercase">
                <span className="text-white">Product Designer</span>
                <span className="text-muted">+ Digital Marketer</span>
              </div>
            </motion.div>

            <p className="hidden font-[family-name:var(--font-display)] text-xs font-normal uppercase tracking-[0.12em] text-muted-strong lg:absolute lg:right-0 lg:top-[18rem] lg:block xl:right-[11rem]">
              FEATURED
            </p>
          </div>

          {/* Before first viewport scroll: vertical nav (Figma desktop) / stacked (mobile) */}
          <nav
            className="hidden font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-[0.1em] text-muted lg:flex lg:flex-col lg:items-end lg:gap-5 lg:pt-2 lg:text-right"
            aria-label="Section navigation"
          >
            {SITE_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.heroLabel}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative mt-12 grid gap-10 md:mt-16 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#footer"
              className="flex h-12 items-center justify-center rounded-full border-2 border-black bg-white px-8 font-[family-name:var(--font-inter)] text-[17.6px] font-normal uppercase leading-5 text-black transition-opacity hover:opacity-90"
            >
              Let&apos;s talk
            </Link>
            <span className="relative inline-flex size-[45px] shrink-0 items-center justify-center">
              <Image
                src={figmaAssets.iconArrowBadge}
                alt=""
                width={45}
                height={45}
                className="size-[45px]"
              />
              <span className="absolute flex size-[34px] rotate-[48deg] items-center justify-center">
                <Image
                  src={figmaAssets.arrowUp}
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
            </span>
          </div>

          <Link
            href="#about"
            className="relative order-first border border-[rgba(133,133,133,0.7)] bg-white p-8 transition-opacity hover:opacity-95 md:order-none lg:mx-4 lg:max-w-[303px]"
          >
            <span className="absolute left-7 top-5 block size-[60px]">
              <Image
                src={figmaAssets.iconSpark}
                alt=""
                width={60}
                height={60}
              />
            </span>
            <span className="mt-14 block font-[family-name:var(--font-display)] text-[32px] font-bold leading-10 text-black">
              More About
              <br />
              Me?
            </span>
            <span className="mt-16 inline-flex flex-col">
              <span className="font-[family-name:var(--font-display)] text-lg font-medium text-black">
                Download
              </span>
              <span className="relative mt-1 block h-px w-[100px]">
                <Image
                  src={figmaAssets.lineDecor}
                  alt=""
                  width={100}
                  height={1}
                  className="w-full"
                />
              </span>
            </span>
          </Link>

          <div className="relative aspect-square w-full max-w-[322px] justify-self-end border border-[rgba(133,133,133,0.7)] lg:justify-self-end">
            <Image
              src={figmaAssets.rectangle2}
              alt="Featured project mockup on laptop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 322px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
