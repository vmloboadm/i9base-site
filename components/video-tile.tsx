"use client";

import Image from "next/image";
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
  posterPriority,
}: {
  src: string;
  poster?: string;
  alt: string;
  className: string;
  caption?: string;
  playLabel?: string;
  posterPriority?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      track("video_play", { video: src });
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure
      className={
        caption
          ? "frame-corners w-full overflow-hidden rounded-sm border border-i9-line break-inside-avoid"
          : "frame-corners w-full overflow-hidden rounded-sm border border-white/15"
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
        <span className={`relative block ${className}`}>
          {poster && (
            <Image
              src={poster}
              alt=""
              fill
              priority={posterPriority}
              fetchPriority={posterPriority ? "high" : undefined}
              unoptimized
              sizes="(max-width: 640px) 90vw, 384px"
              className={`object-cover transition-opacity duration-300 ${
                playing ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          <video
            ref={ref}
            src={src}
            muted
            loop
            playsInline
            preload="none"
            controls={playing}
            aria-label={alt}
            className={`absolute inset-0 h-full w-full object-cover ${
              playing ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>
        <span
          aria-hidden
          className={`absolute inset-0 flex items-center justify-center bg-i9-ink/30 transition ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-i9-ink">
            {playing ? <PauseIcon /> : <PlayIcon />}
          </span>
        </span>
      </button>
      {caption && (
        <figcaption className="px-3 py-2 text-xs font-medium text-i9-slate">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
