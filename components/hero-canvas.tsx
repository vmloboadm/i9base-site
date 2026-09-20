"use client";

import { useEffect, useRef } from "react";

// Rede neural com pacotes de dados viajando e hubs pulsantes.
// Reage ao mouse (parallax), pausa fora da tela, desliga em reduced-motion.
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

    type P = { x: number; y: number; vx: number; vy: number; pulse: number; hub: boolean };
    type Packet = { a: number; b: number; p: number; speed: number };
    let pts: P[] = [];
    let packets: Packet[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(120, Math.floor((w * h) / 12000));
      pts = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        pulse: (i * 0.7) % (Math.PI * 2),
        hub: i % 23 === 0,
      }));
      packets = Array.from({ length: 16 }, () => ({
        a: Math.floor(Math.random() * n),
        b: Math.floor(Math.random() * n),
        p: Math.random(),
        speed: 0.004 + Math.random() * 0.008,
      }));
    };

    const grid = () => {
      ctx.strokeStyle = "rgba(37, 99, 235, 0.12)";
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
      const edges: [number, number][] = [];
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 150) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${((1 - d / 150) * 0.5).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x + ox, a.y + oy);
            ctx.lineTo(b.x + ox, b.y + oy);
            ctx.stroke();
            if (edges.length < 240) edges.push([i, j]);
          }
        }
      }
      for (const p of pts) {
        const glow = 0.5 + 0.4 * Math.sin(t * 2 + p.pulse);
        if (p.hub) {
          const r = 3 + 2 * Math.sin(t * 2 + p.pulse);
          ctx.strokeStyle = `rgba(96, 165, 250, ${(0.5 * glow).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x + ox, p.y + oy, Math.max(4, r + 4), 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.fillStyle = `rgba(147, 197, 253, ${glow.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x + ox, p.y + oy, p.hub ? 2.4 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      if (edges.length > 0) {
        for (const pk of packets) {
          const e = edges[(pk.a + pk.b) % edges.length];
          const a = pts[e[0]];
          const b = pts[e[1]];
          pk.p += pk.speed;
          if (pk.p > 1) {
            pk.p = 0;
            pk.a = Math.floor(Math.random() * pts.length);
            pk.b = Math.floor(Math.random() * pts.length);
            continue;
          }
          const x = a.x + (b.x - a.x) * pk.p + ox;
          const y = a.y + (b.y - a.y) * pk.p + oy;
          ctx.fillStyle = "rgba(125, 211, 252, 0.95)";
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
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
