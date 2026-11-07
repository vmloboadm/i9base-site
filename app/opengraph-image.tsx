import { makeOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OgImage() {
  return makeOg("i9base.com.br", "Sua base de tecnologia e inovação");
}
