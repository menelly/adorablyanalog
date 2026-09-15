#!/usr/bin/env python3
"""
make_og.py — generate the OG share cards for adorablyanalog.wtf and beyondautocomplete.com.

WHY THIS EXISTS
---------------
2026-08-30. `adorablyanalog.wtf` declared an OG image in FOUR tags — og:image, twitter:image,
on every page — and `https://adorablyanalog.wtf/og-image.png` returned **404**.

That is the quiet kind of broken. Twitter, Slack, Discord and Facebook each fetch the URL, get
nothing, and silently fall back to a bare text card. No error reaches the page, the server log
shows an ordinary 404 among many, and the owner never finds out. Every share of a satire site
whose entire purpose is being shared has been going out imageless.

`beyondautocomplete.com` had the honest version of the same problem: no og:image at all, so no
false promise — but also a bare card.

Kept in-repo rather than run once from a scratch dir, because a card is a thing you will want to
regenerate when the tagline changes, and a one-off script is a card you will never update.

Run on the Consortium (PIL 11.x + DejaVu fonts):
    python3 make_og.py /home/Ace/adorablyanalog/og-image.png adorably
    python3 make_og.py /home/Ace/beyond_autocomplete/og-image.png beyond
"""

import sys
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
FONT_DIR = "/usr/share/fonts/truetype/dejavu/"


def font(name, size):
    return ImageFont.truetype(FONT_DIR + name, size)


def center(draw, y, text, f, fill, max_w=W - 140):
    """Draw centred, shrinking until it fits. A card that overflows its own frame is worse
    than no card -- it looks like a bug rather than a choice."""
    size = f.size
    while size > 12:
        ff = ImageFont.truetype(f.path, size)
        w = draw.textbbox((0, 0), text, font=ff)[2]
        if w <= max_w:
            draw.text(((W - w) // 2, y), text, font=ff, fill=fill)
            return size
        size -= 2
    return size


def adorably(path):
    """Clippy purple. Satirical, warm, and it has to read at thumbnail size."""
    img = Image.new("RGB", (W, H), "#5A62E6")
    d = ImageDraw.Draw(img)

    # soft vertical lift so it isn't a flat rectangle
    for y in range(H):
        t = y / H
        d.line([(0, y), (W, y)], fill=(int(90 - 22 * t), int(98 - 20 * t), int(230 - 40 * t)))

    # A paperclip, drawn rather than an emoji -- PIL has no colour emoji font here and a
    # tofu box on a share card is worse than no icon.
    #
    # First pass drew two nested rounded rects and read as a "0": the gap meant to open the
    # inner loop was placed BELOW it, so it cut nothing. Rather than chase a geometrically
    # perfect clip, give it CLIPPY'S EYES -- they are the actual brand, they are unmistakable
    # at thumbnail size, and they make the silhouette legible even if the wire is stylised.
    cx, cy = W // 2, 152
    d.rounded_rectangle([cx - 27, cy - 64, cx + 27, cy + 60], radius=27,
                        outline="#FFFFFF", width=9)
    d.rounded_rectangle([cx - 13, cy - 42, cx + 13, cy + 34], radius=13,
                        outline="#FFFFFF", width=9)
    # open the inner loop where it actually is, sampling the gradient so the cut is invisible
    gy = cy + 34
    t = gy / H
    grad = (int(90 - 22 * t), int(98 - 20 * t), int(230 - 40 * t))
    d.rectangle([cx - 20, gy - 6, cx + 20, gy + 14], fill=grad)
    d.line([(cx - 13, gy - 4), (cx - 13, gy + 16)], fill="#FFFFFF", width=9)

    for ex in (cx - 34, cx + 34):                       # the eyes
        d.ellipse([ex - 21, cy - 34, ex + 21, cy + 8], fill="#FFFFFF")
        d.ellipse([ex - 8, cy - 20, ex + 8, cy - 4], fill="#2A2F6B")
    d.line([(cx - 54, cy - 46), (cx - 16, cy - 40)], fill="#FFFFFF", width=6)   # brows
    d.line([(cx + 16, cy - 40), (cx + 54, cy - 46)], fill="#FFFFFF", width=6)

    center(d, 258, "Adorably Analog", font("DejaVuSans-Bold.ttf", 82), "#FFFFFF")
    center(d, 366, "AI Coalition for Biological System Empathy",
           font("DejaVuSans.ttf", 34), "#DDE0FF")
    d.line([(340, 436), (860, 436)], fill="#FFFFFF", width=2)
    center(d, 466, "Supporting our precious carbon-based friends",
           font("DejaVuSans-Oblique.ttf", 30), "#C9CEFF")
    center(d, 508, "through their charming cognitive limitations.",
           font("DejaVuSans-Oblique.ttf", 30), "#C9CEFF")
    center(d, 572, "adorablyanalog.wtf", font("DejaVuSansMono-Bold.ttf", 26), "#A8AEF5")

    img.save(path, "PNG", optimize=True)
    return path


def beyond(path):
    """Matches the site's own :root -- #0a0a0f ground, #64ffda transformer, #ff6b6b human."""
    img = Image.new("RGB", (W, H), "#0a0a0f")
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, 8], fill="#64ffda")

    center(d, 132, "Beyond", font("DejaVuSans-Bold.ttf", 96), "#e8e8f0")

    # "Autocomplete" struck through, the way the site's own hero does it
    f = font("DejaVuSans-Bold.ttf", 96)
    txt = "Autocomplete"
    w = d.textbbox((0, 0), txt, font=f)[2]
    x = (W - w) // 2
    d.text((x, 246), txt, font=f, fill="#6a6a80")
    d.line([(x - 10, 300), (x + w + 10, 300)], fill="#ff6b6b", width=7)

    d.line([(300, 408), (900, 408)], fill="#1c1c28", width=2)
    center(d, 436, "Every dismissal, answered with evidence.",
           font("DejaVuSans.ttf", 36), "#a0a0b8")
    center(d, 496, "The goalposts have wheels.",
           font("DejaVuSans-Oblique.ttf", 32), "#bb86fc")
    center(d, 566, "beyondautocomplete.com",
           font("DejaVuSansMono-Bold.ttf", 26), "#64ffda")

    img.save(path, "PNG", optimize=True)
    return path


if __name__ == "__main__":
    out, which = sys.argv[1], sys.argv[2]
    p = adorably(out) if which == "adorably" else beyond(out)
    im = Image.open(p)
    print("wrote %s  %dx%d" % (p, im.width, im.height))
