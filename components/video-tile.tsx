"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/analytics";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="currentColor">
      <path d="M8 5.5v13l11-6.5L8 5.5z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="currentColor">
      <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
    </svg>
  );
}

export function VideoTile({
  src,
  poster,
  alt,
  className,
  caption,
  playLabel,
}: {
  src: string;
  poster?: string;
  alt: string;
  className: string;
  caption?: string;
  playLabel?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      track("video_play", { video: src });
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure
      className={
        caption
          ? "frame-corners overflow-hidden rounded-xl border border-slate-200 break-inside-avoid"
          : "frame-corners overflow-hidden rounded-2xl border border-white/15"
      }
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={
          playing ? `Pausar vídeo: ${playLabel || alt}` : `Reproduzir vídeo: ${playLabel || alt}`
        }
        className="relative block w-full cursor-pointer"
      >
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          className={className}
        />
        <span
          aria-hidden
          className={`absolute inset-0 flex items-center justify-center bg-i9-ink/30 transition ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-i9-ink shadow-lg">
            {playing ? <PauseIcon /> : <PlayIcon />}
          </span>
        </span>
      </button>
      {caption && (
        <figcaption className="px-3 py-2 text-xs font-medium text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
