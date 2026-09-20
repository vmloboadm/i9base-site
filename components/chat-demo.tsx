"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { from: "client" | "agent"; text: string };

const SCRIPT: Msg[] = [
  { from: "client", text: "oi, vocês fazem site pra lanchonete?" },
  { from: "agent", text: "oi! fazemos sim. me conta: você já tem logo e cardápio?" },
  { from: "client", text: "tenho logo, cardápio ainda não" },
  {
    from: "agent",
    text: "perfeito. monto site com cardápio digital e QR pra você. quer ver as opções?",
  },
  { from: "client", text: "quero" },
  {
    from: "agent",
    text: "registrei aqui. uma pessoa do time continua com você agora mesmo.",
  },
];

function Typing() {
  return (
    <span className="inline-flex items-center gap-1 px-1 py-2" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 180}ms` }}
          className="typing-dot inline-block h-1.5 w-1.5 rounded-full bg-slate-400"
        />
      ))}
    </span>
  );
}

// Demonstração do atendimento automático. Roda em loop, pausa fora da tela
// e mostra tudo estático para quem prefere movimento reduzido.
export function ChatDemo() {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const reduced = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) {
      setCount(SCRIPT.length);
      return;
    }
    let timers: ReturnType<typeof setTimeout>[] = [];
    let alive = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && timers.length === 0 && alive) run();
      },
      { threshold: 0.2 }
    );
    const box = boxRef.current;
    if (box) io.observe(box);

    function run() {
      let t = 600;
      SCRIPT.forEach((m, i) => {
        if (m.from === "agent") {
          timers.push(
            setTimeout(() => alive && setTyping(true), t)
          );
          t += 1100;
          timers.push(
            setTimeout(() => {
              if (!alive) return;
              setTyping(false);
              setCount(i + 1);
            }, t)
          );
          t += 1100;
        } else {
          timers.push(
            setTimeout(() => alive && setCount(i + 1), t)
          );
          t += 1300;
        }
      });
      timers.push(
        setTimeout(() => {
          if (!alive) return;
          setCount(0);
          timers = [];
          run();
        }, t + 5000)
      );
    }
    run();
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const box = boxRef.current;
    if (box) box.scrollTop = box.scrollHeight;
  }, [count, typing]);

  const visible = reduced.current ? SCRIPT : SCRIPT.slice(0, count);

  return (
    <figure className="mx-auto w-full max-w-sm">
      <div className="rounded-[1.6rem] border border-white/15 bg-i9-ink2 p-2 shadow-2xl">
        <div className="rounded-[1.2rem] bg-[#0e141d] px-3 py-3">
          <p className="border-b border-white/10 px-1 pb-2 text-left text-xs font-semibold text-slate-300">
            i9BASE · atendimento automático
            <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
          </p>
          <div
            ref={boxRef}
            aria-hidden
            className="flex h-72 flex-col gap-2 overflow-hidden px-1 py-3"
          >
            {visible.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-left text-[13px] leading-snug ${
                  m.from === "client"
                    ? "self-end bg-i9-blue text-white"
                    : "self-start bg-white/10 text-slate-100"
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="self-start rounded-xl bg-white/10 px-2">
                <Typing />
              </div>
            )}
          </div>
          <p className="px-1 pb-1 text-left text-[11px] text-slate-500">
            Demonstração. O seu cliente vive isso no seu WhatsApp.
          </p>
        </div>
      </div>
      <figcaption className="sr-only">
        Demonstração de conversa automática: o cliente pede um site e o agente
        atende, qualifica e encaminha para uma pessoa.
      </figcaption>
    </figure>
  );
}
