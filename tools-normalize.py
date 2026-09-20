"""Padroniza os cases em 4/3 (1200x900) com center-crop inteligente."""
import glob
import os
from PIL import Image, ImageOps

D = "/root/projetos/i9base/07-site/public/cases"
TW, TH = 1200, 900
TR = TW / TH

# Ajuste fino por imagem: (cx, cy) foco do crop, 0.0-1.0
FOCUS = {
    "panela-da-roca.png": (0.5, 0.35),
    "convite-ana.jpg": (0.5, 0.45),
    "convite-vicente.jpg": (0.5, 0.45),
    "gymfitness.png": (0.5, 0.4),
    "alien-burger.png": (0.5, 0.45),
}

for f in sorted(glob.glob(D + "/*")):
    if not f.lower().endswith((".png", ".jpg", ".jpeg")):
        continue
    name = os.path.basename(f)
    im = Image.open(f)
    im = ImageOps.exif_transpose(im).convert("RGB")
    w, h = im.size
    r = w / h
    cx, cy = FOCUS.get(name, (0.5, 0.5))
    if r > TR:
        # larga demais: corta laterais com viés do foco
        nw = int(h * TR)
        x0 = int((w - nw) * cx)
        box = (x0, 0, x0 + nw, h)
    else:
        # alta demais: corta topo/base
        nh = int(w / TR)
        y0 = int((h - nh) * cy)
        box = (0, y0, w, y0 + nh)
    out = im.crop(box).resize((TW, TH), Image.LANCZOS)
    out.save(f, quality=88)
    print(f"OK {name} {w}x{h} -> 1200x900")
print("DONE")
