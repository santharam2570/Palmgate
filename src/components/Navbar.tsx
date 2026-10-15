"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { services } from "@/lib/services";
import { navLinks, site, telHref } from "@/lib/site";
import { serviceIcons } from "./icons";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const onServicePage = services.some((s) => isActive(pathname, s.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  function openServices() {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function closeServicesSoon() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }

  function closeAll() {
    setServicesOpen(false);
    setOpen(false);
  }

  const solid = scrolled || open || servicesOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto hidden max-w-7xl items-center justify-between overflow-hidden px-5 text-xs text-ink-400 transition-[max-height,opacity,margin] duration-500 lg:flex ${
          scrolled ? "max-h-0 opacity-0" : "mb-1 max-h-8 opacity-100"
        }`}
      >
        <p className="flex items-center gap-2">
          <MapPin className="size-3.5 text-palm-400" />
          {site.legalName} · {site.city}, {site.country}
        </p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 transition hover:text-white">
            <Mail className="size-3.5 text-palm-400" /> {site.email}
          </a>
          <a href={telHref(site.phone)} className="flex items-center gap-1.5 transition hover:text-white">
            <Phone className="size-3.5 text-palm-400" /> {site.phone}
          </a>
        </div>
      </div>

      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-[background-color,border-color,box-shadow] duration-500 sm:px-5 ${
          solid ? "border-white/10 bg-ink-950/95 shadow-2xl shadow-palm-900/30" : "border-transparent bg-transparent"
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            "menu" in link ? (
              <li key={link.href} ref={menuRef} className="relative" onMouseEnter={openServices} onMouseLeave={closeServicesSoon}>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-white/5 hover:text-white xl:px-4 ${
                    onServicePage || servicesOpen ? "text-white" : "text-ink-100/80"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`size-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  {onServicePage && <ActiveDot />}
                </button>
                <ServicesMenu open={servicesOpen} pathname={pathname} onNavigate={closeAll} />
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-white/5 hover:text-white xl:px-4 ${
                    isActive(pathname, link.href) ? "text-white" : "text-ink-100/80"
                  }`}
                >
                  {link.label}
                  {isActive(pathname, link.href) && <ActiveDot />}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-xl bg-palm-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-palm-600/30 transition hover:shadow-palm-400/40 sm:inline-flex"
          >
            Enquire now
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-7xl overflow-y-auto rounded-2xl border border-white/10 bg-ink-950 transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[calc(100dvh-6rem)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((link) =>
            "menu" in link ? (
              <li key={link.href} className="py-1">
                <p className="px-4 pt-2 pb-1 text-[0.65rem] font-semibold tracking-[0.2em] text-palm-300 uppercase">Services</p>
                <ul>
                  {services.map((s) => {
                    const Icon = serviceIcons[s.id];
                    return (
                      <li key={s.id}>
                        <Link
                          href={s.href}
                          onClick={closeAll}
                          className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-base font-medium hover:bg-white/5 ${
                            isActive(pathname, s.href) ? "bg-white/5 text-white" : "text-ink-100"
                          }`}
                        >
                          <Icon className="size-4.5 text-palm-300" />
                          {s.navLabel}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeAll}
                  className={`block rounded-xl px-4 py-3 text-base font-medium hover:bg-white/5 ${
                    isActive(pathname, link.href) ? "bg-white/5 text-white" : "text-ink-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
          <li className="mt-2">
            <Link
              href="/contact"
              onClick={closeAll}
              className="flex items-center justify-center gap-2 rounded-xl bg-palm-gradient px-4 py-3 font-semibold text-white"
            >
              Enquire now <ArrowRight className="size-4" />
            </Link>
          </li>
          <li className="mt-3 space-y-1 border-t border-white/10 px-4 pt-4 pb-1 text-sm text-ink-400">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2">
              <Mail className="size-4 text-palm-400" /> {site.email}
            </a>
            <a href={telHref(site.phone)} className="flex items-center gap-2">
              <Phone className="size-4 text-palm-400" /> {site.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function ActiveDot() {
  return (
    <span aria-hidden className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-palm-400 shadow-[0_0_8px] shadow-palm-400" />
  );
}

function ServicesMenu({ open, pathname, onNavigate }: { open: boolean; pathname: string; onNavigate: () => void }) {
  return (
    <div
      id="services-menu"
      className={`absolute top-full left-1/2 w-[44rem] -translate-x-1/2 pt-4 transition-[opacity,translate] duration-300 ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-950/98 shadow-2xl shadow-black/50">
        <ul className="grid grid-cols-2 gap-1 p-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.id];
            const active = isActive(pathname, s.href);
            return (
              <li key={s.id}>
                <Link
                  href={s.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`group flex h-full gap-4 rounded-xl p-4 transition-colors hover:bg-white/[0.06] ${active ? "bg-white/[0.06]" : ""}`}
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-palm-400/30 bg-palm-400/10 text-palm-300 transition group-hover:bg-palm-gradient group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                      <span className="text-palm-400">{s.number}</span> {s.navLabel}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-ink-400">{s.summary}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-7 py-3.5 text-xs">
          <p className="text-ink-400">{site.tagline}</p>
          <Link href="/industries" onClick={onNavigate} className="group flex items-center gap-1.5 font-semibold text-palm-300 hover:text-palm-200">
            Industries we serve <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
