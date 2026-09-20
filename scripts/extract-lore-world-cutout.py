"""Extract the floating island in imagined-lore-world-03.png onto transparency.

Border-seeded BFS flood fill with a pale-sky/cloud predicate:
- pale grays/creams and blue sky are background (v2 adds warm tan clouds)
- a protected waterfall column keeps cool water pixels; warm mist inside it
  is still removed, and the column fades out toward the bottom like the
  side-land waterfalls.
"""
from collections import deque
from PIL import Image, ImageFilter, ImageChops

SRC = 'ui/assets/tobyworld/imagined-lore-world-03.png'
DST = 'ui/assets/tobyworld/imagined-lore-world-03-cutout.png'

# waterfall protection window (x0, x1, top, image bottom)
FALL_X0, FALL_X1, FALL_TOP = 535, 760, 890


def is_background(x, y, r, g, b):
    hi, lo = max(r, g, b), min(r, g, b)
    chroma = hi - lo

    if FALL_X0 <= x <= FALL_X1 and y >= FALL_TOP:
        # inside the fall: warm pale mist/cream sky and dark cool shadow-mist
        # are background; bright water and light spray are kept
        if r > b + 12 and hi >= 170:
            return True
        return hi < 170 and chroma <= 40 and b >= r - 5

    # pale grays / creams / whites: cloud bodies and haze
    if hi >= 170 and chroma <= 42:
        return True
    # warm tan cloud shading (slightly more saturated cream)
    if hi >= 178 and chroma <= 60 and r >= g >= b:
        return True
    # blue sky (can be fairly saturated)
    if hi >= 135 and b >= r + 18 and b >= g and chroma >= 25:
        return True
    return False


def main():
    im = Image.open(SRC).convert('RGB')
    w, h = im.size
    px = im.load()

    bg = bytearray(w * h)
    q = deque()

    def seed(x, y):
        i = y * w + x
        if not bg[i] and is_background(x, y, *px[x, y]):
            bg[i] = 1
            q.append((x, y))

    for x in range(w):
        seed(x, 0)
        seed(x, h - 1)
    for y in range(h):
        seed(0, y)
        seed(w - 1, y)

    while q:
        x, y = q.popleft()
        for nx, ny in ((x-1, y), (x+1, y), (x, y-1), (x, y+1)):
            if 0 <= nx < w and 0 <= ny < h:
                i = ny * w + nx
                if not bg[i] and is_background(nx, ny, *px[nx, ny]):
                    bg[i] = 1
                    q.append((nx, ny))

    mask = Image.new('L', (w, h), 0)
    mp = mask.load()
    kept = 0
    for y in range(h):
        row = y * w
        for x in range(w):
            if not bg[row + x]:
                mp[x, y] = 255
                kept += 1
    print(f'kept {kept} / {w*h} px ({100*kept/(w*h):.1f}%)')

    # fade the waterfall column toward the bottom (dissolve like side lands)
    fade_top, fade_end = 1010, h - 4
    fmp = mask.load()
    edge = 34  # horizontal softening inside the rect so kept mist has no seam
    for y in range(FALL_TOP, min(fade_end, h)):
        t = (y - fade_top) / (fade_end - fade_top)
        fy = max(0.0, 1.0 - t)
        fy = fy * fy * (3 - 2 * fy)  # smoothstep
        for x in range(FALL_X0, FALL_X1 + 1):
            if not fmp[x, y]:
                continue
            f = fy
            # soften the protection window's vertical edges
            hx = min(x - FALL_X0, FALL_X1 - x)
            if hx < edge:
                f *= (hx + 1) / (edge + 1)
            fmp[x, y] = int(fmp[x, y] * f)
    for y in range(fade_end, h):
        for x in range(FALL_X0, FALL_X1 + 1):
            fmp[x, y] = 0

    # drop small isolated crumbs (leftover cloud specks) below this size
    crumb_limit = 150
    seen = bytearray(w * h)
    for y0 in range(h):
        row = y0 * w
        for x0 in range(w):
            i0 = row + x0
            if seen[i0] or not fmp[x0, y0]:
                continue
            comp = [i0]
            seen[i0] = 1
            qi = 0
            while qi < len(comp):
                i = comp[qi]
                qi += 1
                cx, cy = i % w, i // w
                for nx, ny in ((cx-1, cy), (cx+1, cy), (cx, cy-1), (cx, cy+1)):
                    if 0 <= nx < w and 0 <= ny < h:
                        ni = ny * w + nx
                        if not seen[ni] and fmp[nx, ny]:
                            seen[ni] = 1
                            comp.append(ni)
            if len(comp) < crumb_limit:
                for i in comp:
                    fmp[i % w, i // w] = 0

    # erode 1px to kill the pale halo, then feather
    mask = mask.filter(ImageFilter.MinFilter(3))
    soft = mask.filter(ImageFilter.GaussianBlur(1.4))
    core = mask.filter(ImageFilter.GaussianBlur(0.6))
    from PIL import ImageChops
    final = ImageChops.lighter(soft, core)

    out = im.convert('RGBA')
    out.putalpha(final)
    out.save(DST, optimize=True)
    print('wrote', DST)


if __name__ == '__main__':
    main()