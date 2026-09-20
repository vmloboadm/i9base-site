"use client";

import { useEffect, useRef } from "react";

// Rede neural sobre grid em perspectiva. Reage ao mouse (parallax leve),
// pausa fora da tela e desliga em movimento reduzido.
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let t = 0;
    const mouse = { x: 0.5, y: 0.5 };
    const par = { x: 0, y: 0 };

    type P = { x: number; y: number; vx: number; vy: number; pulse: number };
    let pts: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(80, Math.floor((w * h) / 18000));
      pts = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        pulse: (i * 0.7) % (Math.PI * 2),
      }));
    };

    const grid = () => {
      // Grade em perspectiva na base
      ctx.strokeStyle = "rgba(37, 99, 235, 0.10)";
      ctx.lineWidth = 1;
      const horizon = h * 0.62;
      for (let i = 0; i <= 12; i++) {
        const x = (w / 12) * i + par.x * 8;
        ctx.beginPath();
        ctx.moveTo(w / 2 + (x - w / 2) * 0.25, horizon);
        ctx.lineTo(w / 2 + (x - w / 2) * 1.6, h);
        ctx.stroke();
      }
      for (let i = 0; i < 6; i++) {
        const y = horizon + ((h - horizon) / 6) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    const step = () => {
      if (!running) return;
      t += 0.016;
      par.x += (mouse.x - 0.5 - par.x) * 0.04;
      par.y += (mouse.y - 0.5 - par.y) * 0.04;
      ctx.clearRect(0, 0, w, h);
      grid();

      const ox = par.x * 14;
      const oy = par.y * 10;
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${((1 - d / 130) * 0.35).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x + ox, a.y + oy);
            ctx.lineTo(b.x + ox, b.y + oy);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        const glow = 0.45 + 0.35 * Math.sin(t * 2 + p.pulse);
        ctx.fillStyle = `rgba(96, 165, 250, ${glow.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x + ox, p.y + oy, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / Math.max(1, rect.width);
      mouse.y = (e.clientY - rect.top) / Math.max(1, rect.height);
    };

    resize();
    if (!reduced) raf = requestAnimationFrame(step);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduced) return;
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(step);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);
    window.addEventListener("resize", resize);
    const parent = canvas.parentElement;
    parent?.addEventListener("pointermove", onMove);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      parent?.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
