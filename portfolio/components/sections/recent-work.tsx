"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { figmaAssets } from "@/lib/figma-assets";

const projects = [
  {
    image: figmaAssets.projectA,
    title: "Service Booking",
    tag: "Web Design",
    href: "#",
  },
  {
    image: figmaAssets.projectB,
    title: "Service Booking",
    tag: "Web Design",
    href: "#",
  },
  {
    image: figmaAssets.projectC,
    title: "Service Booking",
    tag: "Web Design",
    href: "#",
  },
  {
    image: figmaAssets.projectA,
    title: "Service Booking",
    tag: "Web Design",
    href: "#",
  },
] as const;

export function RecentWorkSection() {
  return (
    <section id="work" className="bg-background py-16 md:py-24">
      <div className="page-figma mx-auto max-w-figma">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,5.625rem)] font-medium uppercase leading-[0.95] tracking-[-0.023em] text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              MY RECENT
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-1"
            >
              Work
            </motion.p>
          </div>

          <p className="max-w-xl font-[family-name:var(--font-inter)] text-[22px] font-normal leading-[34px] tracking-[0.025em] text-white lg:max-w-[680px] lg:pt-28">
            Design is more than pixels; it&apos;s about creating experiences that
            matter. Here&apos;s a look into my process, challenges, and solutions that
            brought each project to life.
          </p>
        </div>

        <ul className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-14">
          {projects.map((p, i) => (
            <motion.li
              key={`${p.title}-${i}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group"
            >
              <Link
                href={p.href}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-lime"
              >
                <div className="relative aspect-[659/450] w-full overflow-hidden rounded-t-[10px]">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-[family-name:var(--font-instrument)] text-base font-semibold uppercase leading-7 text-white">
                    {p.title}
                  </span>
                  <span className="font-[family-name:var(--font-instrument)] text-lg font-medium text-muted-strong transition-colors group-hover:text-white">
                    View Design
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
