"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

export function TrackedLink({
  href,
  event,
  attrs,
  children,
  className,
}: {
  href: string;
  event: string;
  attrs: Record<string, string>;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onClick={() => track(event, attrs)}
      className={className}
    >
      {children}
    </a>
  );
}
