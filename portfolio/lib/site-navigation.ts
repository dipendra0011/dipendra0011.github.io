export type SiteNavItem = {
  href: string;
  /** Short label for compact sticky header */
  label: string;
  /** Typographic treatment in hero vertical nav (Figma) */
  heroLabel: string;
};

/** Primary in-page navigation — header + hero nav + mobile menu. */
export const SITE_NAV_ITEMS: readonly SiteNavItem[] = [
  { href: "#hero", label: "Home", heroLabel: "Home" },
  { href: "#work", label: "Projects", heroLabel: "PROJECTS" },
  { href: "#skills", label: "Skills", heroLabel: "SKILLS" },
  { href: "#experience", label: "Experience", heroLabel: "eXPEDRIENCE" },
] as const;
