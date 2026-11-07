import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export async function makeOg(title: string, subtitle: string) {
  const logo = await readFile(join(process.cwd(), "public/logo-dark.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0f14",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={640} height={168} alt="i9BASE" />
        <p
          style={{
            marginTop: 24,
            fontSize: 34,
            color: "#f5f6fb",
            fontFamily: "sans-serif",
          }}
        >
          {subtitle}
        </p>
        <p
          style={{
            marginTop: 8,
            fontSize: 22,
            color: "#60a5fa",
            fontFamily: "sans-serif",
          }}
        >
          {title}
        </p>
      </div>
    ),
    { ...OG_SIZE }
  );
}
