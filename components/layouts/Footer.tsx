import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const exploreLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Research", href: "#research" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#innovation" },
] as const;

const unavailableLinks = ["LinkedIn", "Privacy", "Terms"] as const;

const linkStyles =
  "rounded-sm text-sm text-slate-400 underline-offset-4 outline-none transition-colors duration-300 hover:text-white hover:underline focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#18E8CF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#041019]";

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[#041019]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#18E8CF]/20"
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.7fr)_minmax(9rem,0.6fr)_minmax(12rem,0.8fr)] lg:gap-16">
          <div className="max-w-md sm:col-span-2 lg:col-span-1">
            <a
              href="#top"
              aria-label="Nexora Bio home"
              className="group inline-flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#18E8CF]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#041019]"
            >
              <span
                aria-hidden="true"
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#18E8CF]/25 bg-[#18E8CF]/[0.06]"
              >
                <span className="absolute h-3 w-3 rounded-full bg-[#18E8CF]/30 blur-[5px]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#18E8CF]" />
              </span>
              <span className="text-sm font-semibold tracking-[0.18em] text-white">
                NEXORA <span className="text-white/40">BIO</span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-400">
              Computational intelligence for biological discovery.
            </p>

            <a
              href="mailto:hello@nexorabio.com"
              className="group mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#18E8CF] outline-none transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[#18E8CF]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#041019]"
            >
              Start a conversation
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <nav aria-label="Explore Nexora Bio">
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#18E8CF]">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkStyles}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#18E8CF]">
              Connect
            </p>
            <address className="mt-5 not-italic">
              <a href="mailto:hello@nexorabio.com" className={linkStyles}>
                hello@nexorabio.com
              </a>
            </address>

            <ul aria-label="Upcoming company links" className="mt-6 space-y-3">
              {unavailableLinks.map((label) => (
                <li key={label} className="flex items-center gap-2 text-sm text-slate-600">
                  <span>{label}</span>
                  <span className="text-[8px] uppercase tracking-[0.16em] text-slate-700">
                    Soon
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:flex-row sm:items-center sm:gap-5">
            <p>© 2026 Nexora Bio</p>
            <span
              aria-hidden="true"
              className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block"
            />
            <p>Built for biological intelligence.</p>
          </div>

          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-2 rounded-sm text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 outline-none transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[#18E8CF]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#041019]"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
