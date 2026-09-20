"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SLOGAN } from "@/lib/data";

function withHome(pathname: string | null, href: string) {
  return href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
}
import { INSTAGRAM_URL, NAV, WHATSAPP_URL, waLink } from "@/lib/data";
import { track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hrefFor = (href: string) => withHome(pathname, href);

  useEffect(() => {
    track('page_view', { page: pathname === '/' ? 'home' : pathname });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open ]);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(37,99,235,0.15)] bg-[#0b0f14]/60 backdrop-blur-xl transition-all duration-300">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${scrolled ? 'h-16 shadow-[0_4px_24px_rgba(37,99,235,0.15)]' : 'h-20'}`}
      >
        <a href={hrefFor('#topo')} className="flex items-center gap-2.5">
          <Image src="/logo-dark.png" alt="i9BASE" width={1420} height={371} className="h-8 w-auto" />
          <span className="hidden text-[11px] text-slate-400 lg:inline">
            Sua base de tecnologia e inovação
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={hrefFor(item.href)}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink('Oi! Vim pelo site da i9BASE e quero conversar sobre meu negócio.')}
            target="_blank"
            rel="noopener"
            onClick={() => track('whatsapp_click', { from: 'header' })}
            className="rounded-lg bg-i9-blue px-4 py-2 text-sm font-semibold text-white hover:bg-i9-blue-deep"
          >
            Chamar no WhatsApp
          </a>
        </nav>
        <button
          className="rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>
      <div aria-hidden className="animate-lightline h-px bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.8),transparent)] bg-[length:200%_100%]" />
      {open && (
        <nav className="fixed inset-0 top-0 z-50 flex flex-col bg-i9-ink px-6 pb-10 pt-24 md:hidden">
          <button
            className="absolute right-4 top-5 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            Fechar
          </button>
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={hrefFor(item.href)}
              onClick={() => setOpen(false)}
              style={{ animationDelay: (i * 60) + 'ms' }}
              className="animate-drawer-item border-b border-white/10 py-4 font-display text-2xl font-bold text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink('Oi! Vim pelo site da i9BASE e quero conversar sobre meu negócio.')}
            target="_blank"
            rel="noopener"
            style={{ animationDelay: (NAV.length * 60) + 'ms' }}
            className="animate-drawer-item mt-6 rounded-lg bg-i9-blue px-4 py-3 text-center font-semibold text-white"
          >
            Chamar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/logo-slate.png"
            alt="i9BASE"
            width={810}
            height={756}
            className="h-16 w-auto"
          />
          <p className="mt-3 font-display text-sm font-bold text-i9-ink">
            {SLOGAN}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Estruture, automatize e evolua.
          </p>
        </div>
        <div>
          <p className="label-eyebrow text-slate-400">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={withHome(pathname, item.href)} className="text-i9-slate hover:text-i9-blue">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-eyebrow text-slate-400">Fale com a gente</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="text-i9-slate hover:text-i9-blue"
              >
                WhatsApp, 24h todos os dias
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                className="text-i9-slate hover:text-i9-blue"
              >
                Instagram @i9base
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <p className="label-eyebrow text-slate-400">Tecnologias que usamos</p>
          <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { name: "Vercel", slug: "vercel" },
              { name: "Next.js", slug: "nextdotjs" },
              { name: "Supabase", slug: "supabase" },
              { name: "n8n", slug: "n8n" },
              { name: "OpenAI", slug: "openai" },
              { name: "Node.js", slug: "nodedotjs" },
              { name: "Tailwind", slug: "tailwindcss" },
              { name: "WhatsApp", slug: "whatsapp" },
            ].map((t) => (
              <li key={t.slug} className="flex items-center gap-1.5">
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}/3A4A5C`}
                  alt=""
                  aria-hidden
                  width={16}
                  height={16}
                  loading="lazy"
                  className="h-4 w-4"
                />
                <span className="text-xs font-medium text-slate-500">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© 2026 i9BASE. Todos os direitos reservados.</span>
          <span>Campos dos Goytacazes e região</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatWhats() {  return (
    <a
      href={waLink("Oi! Vim pelo site da i9BASE e quero conversar sobre meu negócio.")}
      target="_blank"
      rel="noopener"
      aria-label="Conversar no WhatsApp"
      onClick={() => track("whatsapp_click", { from: "float" })}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4Zm-3.2 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 3 4.7 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7 0l-.9 1.1c-.2.2-.3.2-.6.1a7.6 7.6 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8.4 8c-.2-.4-.4-.3-.6-.3H8.8Z" />
      </svg>
    </a>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <a
      href="#topo"
      aria-label="Voltar ao topo"
      className="fixed bottom-5 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-i9-slate shadow-lg transition hover:border-i9-blue hover:text-i9-blue"
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 13V3 M3.5 7.5 8 3l4.5 4.5" />
      </svg>
    </a>
  );
}
