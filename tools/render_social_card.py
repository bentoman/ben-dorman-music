"""Render the social card with Pillow and the brand's macOS fonts."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SCALE = 3
ROOT = Path(__file__).resolve().parents[1]
image = Image.new('RGB', (1200 * SCALE, 630 * SCALE), '#F4F1E9')
draw = ImageDraw.Draw(image)
fonts = Path('/System/Library/Fonts/Supplemental')
name = ImageFont.truetype(str(fonts / 'Georgia Bold.ttf'), 104 * SCALE)
roles = ImageFont.truetype(str(fonts / 'Arial Bold.ttf'), 22 * SCALE)

def centered(text, font, top, color, tracking=0):
    tracking *= SCALE
    if tracking:
        width = sum(draw.textlength(c, font=font) for c in text) + tracking * (len(text) - 1)
    else:
        box = draw.textbbox((0, 0), text, font=font)
        width = box[2] - box[0]
    assert width < 1040 * SCALE
    x = (image.width - width) / 2
    y = top * SCALE - draw.textbbox((0, 0), text, font=font)[1]
    if tracking:
        for char in text:
            draw.text((x, y), char, font=font, fill=color)
            x += draw.textlength(char, font=font) + tracking
    else:
        draw.text((x - box[0], y), text, font=font, fill=color)

centered('BEN DORMAN', name, 240, '#12110F')
centered('COMPOSER · LYRICIST · MUSICAL DIRECTOR', roles, 355, '#806313', 3)
image = image.resize((1200, 630), Image.Resampling.LANCZOS)
image.save(ROOT / 'docs/assets/ben-dorman-social.png', optimize=True)
