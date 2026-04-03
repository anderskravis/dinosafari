# T-Rex Authored Sprite — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create authored pixel-art T-Rex sprite assets and wire hybrid rendering so authored sprites can appear on procedural biome backgrounds.

**Architecture:** Extend `generate_authored_assets.js` with T-Rex drawing functions, generate sprite strip + contact + guide PNGs, then modify `app.js` to support authored sprites on top of procedural canvas backgrounds (hybrid mode). Currently authored sprites only work with full authored scenes.

**Tech Stack:** Node.js pixel-art generation, Canvas 2D rendering, PNG encoding

---

### Task 1: Add T-Rex palette and drawing function to generate script

**Files:**
- Modify: `scripts/generate_authored_assets.js`

**Step 1: Add T-Rex palette colors**

Add after the existing `brachio4` line in PALETTE:

```javascript
  trex0: hex("#6b2e1a"),   // deep red-brown body
  trex1: hex("#8a4428"),   // mid body
  trex2: hex("#a85c38"),   // lighter body
  trex3: hex("#c47a4e"),   // highlight
  trex4: hex("#4e1f12"),   // dark shadow
  trexBelly: hex("#c89a6e"), // lighter underbelly
  trexTeeth: hex("#e8dcc4"), // teeth/claws
```

**Step 2: Write `drawTyrannosaurus()` function**

Add after `drawBrachiosaurus()`. T-Rex anatomy: massive skull (~1/3 body length), tiny forelimbs, powerful hind legs, thick counterbalancing tail. 72×96px frame.

```javascript
function drawTyrannosaurus(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.trex1,
    shadow: PALETTE.trex4,
    highlight: PALETTE.trex3,
    bodyAlt: PALETTE.trex2,
    belly: PALETTE.trexBelly,
    teeth: PALETTE.trexTeeth,
    eye: PALETTE.eye,
  };

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.2;
  const headLift = Math.cos(phase) * 1.8;
  const tailSwing = Math.sin(phase) * 4;
  const jawOpen = Math.max(0, Math.sin(phase * 2)) * 2.5;
  const legFront = Math.sin(phase) * 1.8;
  const legBack = Math.cos(phase) * 1.6;

  // Ground shadow
  drawGroundShadow(image, 36, 86 + bob, 28, 7, overridePalette ? 0.12 : 0.2);

  // Tail (thick, tapered, sweeps left)
  drawTube(image, [
    [14, 52 + bob],
    [6 + tailSwing * 0.4, 48 + bob],
    [2 + tailSwing * 0.2, 52 + bob],
  ], 5.5, 2.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Main body (large barrel chest)
  drawEllipsoid(image, 30, 48 + bob, 20, 14, palette.body, palette.shadow, palette.highlight);

  // Belly highlight
  drawEllipsoid(image, 30, 54 + bob, 12, 6, palette.belly || palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Hind legs (massive, powerful)
  drawTube(image, [
    [22, 58 + bob],
    [18, 70 + bob + legBack],
    [20, 84 + bob],
  ], 6, 3.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  drawTube(image, [
    [36, 58 + bob],
    [40, 70 + bob - legBack],
    [38, 84 + bob],
  ], 5.5, 3.2, palette.body, palette.shadow, palette.highlight);

  // Neck (thick, short, angled up)
  drawTube(image, [
    [44, 44 + bob],
    [50, 34 + bob + headLift],
    [56, 26 + bob + headLift],
  ], 7, 5.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Head (MASSIVE - key T-Rex feature)
  drawEllipsoid(image, 60, 22 + bob + headLift, 12, 8, palette.body, palette.shadow, palette.highlight);

  // Upper jaw
  drawTube(image, [
    [62, 20 + bob + headLift],
    [70, 18 + bob + headLift],
  ], 5, 3, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Lower jaw (opens with jawOpen)
  drawTube(image, [
    [58, 26 + bob + headLift],
    [68, 24 + bob + headLift + jawOpen],
  ], 4, 2.5, palette.body, palette.shadow, palette.highlight);

  // Teeth
  if (jawOpen > 0.8) {
    for (let t = 0; t < 4; t += 1) {
      const tx = 62 + t * 2.5;
      const ty = 21 + bob + headLift;
      drawLine(image, tx, ty, tx, ty + 2, palette.teeth || PALETTE.trexTeeth);
    }
  }

  // Eye (fierce)
  setPixel(image, 63, 19 + bob + headLift, palette.eye);
  setPixel(image, 64, 19 + bob + headLift, [180, 60, 20, 255]); // red glint

  // Brow ridge
  drawLine(image, 59, 17 + bob + headLift, 66, 16 + bob + headLift, palette.shadow);

  // Tiny arms (iconic!)
  drawTube(image, [
    [44, 42 + bob],
    [48, 40 + bob],
    [50, 38 + bob + Math.sin(phase) * 0.8],
  ], 2, 1.2, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Texture/stipple
  stippleEllipse(image, 30, 48 + bob, 14, 8, palette.shadow, 0.14, 9200 + frameIndex);
}
```

**Step 3: Run script to verify no errors**

Run: `cd /Users/anderskravis/code/dinosafari && node scripts/generate_authored_assets.js`
Expected: No errors (T-Rex function exists but isn't called yet)

---

### Task 2: Generate T-Rex PNG assets

**Files:**
- Modify: `scripts/generate_authored_assets.js`
- Create: `assets/authored/tyrannosaurus/` directory + PNGs

**Step 1: Add T-Rex generation calls to `main()`**

```javascript
function main() {
  ensureDir(path.join(OUT_DIR, "shadow-grove"));
  ensureDir(path.join(OUT_DIR, "brachiosaurus"));
  ensureDir(path.join(OUT_DIR, "tyrannosaurus"));

  // ... existing brachio calls ...

  writePng(path.join(OUT_DIR, "tyrannosaurus", "strip.png"), makeTyrannosaurusStrip());
  writePng(path.join(OUT_DIR, "tyrannosaurus", "contact.png"), makeTyrannosaurusContact());
  writePng(path.join(OUT_DIR, "tyrannosaurus", "guide.png"), makeTyrannosaurusGuide());
}
```

**Step 2: Add strip/contact/guide generator functions**

Follow exact same pattern as Brachiosaurus versions:

```javascript
function makeTyrannosaurusStrip() {
  const frameWidth = 72;
  const frameHeight = 96;
  const frames = 8;
  const strip = surface(frameWidth * frames, frameHeight, PALETTE.transparent);

  for (let index = 0; index < frames; index += 1) {
    const frame = surface(frameWidth, frameHeight, PALETTE.transparent);
    drawTyrannosaurus(frame, index, frames);
    blit(strip, frame, index * frameWidth, 0);
  }

  return strip;
}

function makeTyrannosaurusContact() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);

  const silhouette = surface(140, 86, PALETTE.transparent);
  drawTyrannosaurus(silhouette, 1, 8, {
    body: PALETTE.black,
    shadow: PALETTE.black,
    highlight: PALETTE.black,
    eye: PALETTE.black,
  });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makeTyrannosaurusGuide() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 8021);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 8022);

  const dino = surface(120, 96, PALETTE.transparent);
  drawTyrannosaurus(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 8023);
  return image;
}
```

**Step 3: Run the generator**

Run: `node scripts/generate_authored_assets.js`
Expected: Creates files in `assets/authored/tyrannosaurus/`: `strip.png`, `contact.png`, `guide.png`

**Step 4: Verify files exist**

Run: `ls -la assets/authored/tyrannosaurus/`
Expected: 3 PNG files

**Step 5: Commit**

```bash
git add scripts/generate_authored_assets.js assets/authored/tyrannosaurus/
git commit -m "feat: add authored T-Rex pixel art sprite assets"
```

---

### Task 3: Wire T-Rex contact + guide authored assets

**Files:**
- Modify: `app.js` (AUTHORED_DINOSAURS object, ~line 247)

**Step 1: Add T-Rex to AUTHORED_DINOSAURS**

```javascript
const AUTHORED_DINOSAURS = {
  brachiosaurus: {
    contact: "./assets/authored/brachiosaurus/contact.png",
    guide: "./assets/authored/brachiosaurus/guide.png",
  },
  tyrannosaurus: {
    contact: "./assets/authored/tyrannosaurus/contact.png",
    guide: "./assets/authored/tyrannosaurus/guide.png",
  },
};
```

**Step 2: Verify in browser**

Navigate to Cretaceous period, scan for T-Rex. The contact panel should now show the authored silhouette PNG instead of the procedural canvas drawing. Open the Field Guide — the T-Rex entry should show the authored guide preview.

**Step 3: Commit**

```bash
git add app.js
git commit -m "feat: wire T-Rex authored contact and guide previews"
```

---

### Task 4: Add hybrid sprite rendering (authored sprite on procedural background)

This is the key architecture change. Currently `renderAuthoredScene()` only shows sprites when `currentAuthoredScene()` returns a full scene. We need sprites to also show on procedural backgrounds.

**Files:**
- Modify: `app.js`

**Step 1: Add sprite config to AUTHORED_DINOSAURS**

Extend the T-Rex entry with a `sprite` field containing the strip path and default placement:

```javascript
const AUTHORED_DINOSAURS = {
  brachiosaurus: {
    contact: "./assets/authored/brachiosaurus/contact.png",
    guide: "./assets/authored/brachiosaurus/guide.png",
  },
  tyrannosaurus: {
    contact: "./assets/authored/tyrannosaurus/contact.png",
    guide: "./assets/authored/tyrannosaurus/guide.png",
    sprite: {
      src: "./assets/authored/tyrannosaurus/strip.png",
      frames: 8,
      fps: 6,
      frameWidth: 72,
      frameHeight: 96,
    },
  },
};
```

**Step 2: Modify `renderAuthoredScene()` to support hybrid sprites**

After the existing `if (!scene)` early return, add a fallback that checks for authored dino sprites. When a visible dino has a `sprite` entry in `AUTHORED_DINOSAURS` but no full authored scene exists, overlay the sprite on the procedural canvas:

In `renderAuthoredScene()`, replace the early return when `!scene` with:

```javascript
function renderAuthoredScene() {
  const scene = currentAuthoredScene();
  const hasFullScene = Boolean(scene);

  // Check for hybrid mode: authored sprite on procedural background
  const authoredDino = state.visibleDinoId ? AUTHORED_DINOSAURS[state.visibleDinoId] : null;
  const hybridSprite = !hasFullScene && authoredDino?.sprite;

  elements.viewport.classList.toggle("is-authored", hasFullScene);

  if (!hasFullScene) {
    elements.sceneBg.removeAttribute("src");
    elements.sceneFg.removeAttribute("src");
  }

  if (!hasFullScene && !hybridSprite) {
    elements.sceneSprite.classList.remove("is-visible");
    return;
  }

  if (hasFullScene) {
    // Existing full scene logic (background + foreground)
    if (elements.sceneBg.getAttribute("src") !== scene.background) {
      elements.sceneBg.src = scene.background;
    }
    if (elements.sceneFg.getAttribute("src") !== scene.foreground) {
      elements.sceneFg.src = scene.foreground;
    }
  }

  // Resolve sprite asset from either full scene or hybrid
  const spriteAsset = hasFullScene
    ? (state.visibleDinoId ? scene.dinosaurs[state.visibleDinoId] : null)
    : hybridSprite;

  if (!spriteAsset) {
    elements.sceneSprite.classList.remove("is-visible");
    elements.sceneSpriteStrip.removeAttribute("src");
    elements.sceneSpriteStrip.style.transform = "translateX(0)";
    return;
  }

  const spriteSrc = spriteAsset.sprite || spriteAsset.src;
  if (elements.sceneSpriteStrip.getAttribute("src") !== spriteSrc) {
    elements.sceneSpriteStrip.src = spriteSrc;
  }

  if (hasFullScene) {
    // Full scene: use scene-relative placement
    const widthPercent = (spriteAsset.width / scene.resolution.width) * 100;
    const heightPercent = (spriteAsset.height / scene.resolution.height) * 100;
    const leftPercent = (spriteAsset.left / scene.resolution.width) * 100;
    const topPercent = (spriteAsset.top / scene.resolution.height) * 100;

    elements.sceneSprite.style.width = `${widthPercent}%`;
    elements.sceneSprite.style.height = `${heightPercent}%`;
    elements.sceneSprite.style.left = `${leftPercent}%`;
    elements.sceneSprite.style.top = `${topPercent}%`;
  } else {
    // Hybrid mode: use default placement centered in viewport
    elements.sceneSprite.style.width = "18%";
    elements.sceneSprite.style.height = "48%";
    elements.sceneSprite.style.left = "38%";
    elements.sceneSprite.style.top = "22%";
  }

  elements.sceneSpriteStrip.style.width = `${spriteAsset.frames * 100}%`;
  elements.sceneSpriteStrip.style.transform = "translateX(0)";
  elements.sceneSprite.dataset.frames = String(spriteAsset.frames);
  elements.sceneSprite.dataset.fps = String(spriteAsset.fps);
  elements.sceneSprite.classList.add("is-visible");
}
```

**Step 3: Update `updateAuthoredSceneAnimation()` to work in hybrid mode**

Currently it only animates when `currentAuthoredScene()` returns a scene. Update to also animate hybrid sprites:

```javascript
function updateAuthoredSceneAnimation(time) {
  const scene = currentAuthoredScene();
  const authoredDino = state.visibleDinoId ? AUTHORED_DINOSAURS[state.visibleDinoId] : null;

  if (!state.visibleDinoId) {
    return;
  }

  // Get sprite asset from either full scene or hybrid
  const spriteAsset = scene
    ? scene.dinosaurs[state.visibleDinoId]
    : authoredDino?.sprite;

  if (!spriteAsset || !elements.sceneSprite.classList.contains("is-visible")) {
    return;
  }

  const frame = Math.floor((time / 1000) * spriteAsset.fps) % spriteAsset.frames;
  const offsetPercent = (frame * 100) / spriteAsset.frames;
  elements.sceneSpriteStrip.style.transform = `translateX(-${offsetPercent}%)`;
}
```

**Step 4: Hide procedural dino when authored sprite is showing**

In `drawSceneFrame()`, skip drawing the procedural dinosaur when an authored sprite is being used. Find the `if (state.visibleDinoId)` block and add a guard:

```javascript
if (state.visibleDinoId) {
  const dino = dinoById[state.visibleDinoId];
  const hasAuthoredSprite = AUTHORED_DINOSAURS[state.visibleDinoId]?.sprite;
  const inAuthoredScene = Boolean(currentAuthoredScene());

  // Skip procedural dino if authored sprite is handling it
  if (!hasAuthoredSprite && !inAuthoredScene) {
    // ... existing procedural drawing code (with exit animation) ...
  }
}
```

**Step 5: Verify in browser**

1. Navigate to Cretaceous period
2. Find and encounter T-Rex
3. Should see pixel-art T-Rex sprite animating on the procedural background
4. Take photo — celebration should work, sprite should fade via CSS exit animation
5. Check that Brachiosaurus in Shadow Grove still works correctly (full authored scene)
6. Check that other procedural dinos still render normally

**Step 6: Commit**

```bash
git add app.js
git commit -m "feat: hybrid rendering - authored sprites on procedural backgrounds"
```

---

### Task 5: Visual tuning and polish

**Files:**
- Modify: `scripts/generate_authored_assets.js` (T-Rex drawing adjustments)
- Modify: `app.js` (hybrid sprite placement)
- Modify: `styles.css` (sprite display on procedural)

**Step 1: Adjust hybrid sprite placement and sizing**

The default `38%/22%` placement may need tuning. Test with different biomes and adjust. May need per-shape-type placement offsets similar to the existing `scenePlacement()` function.

**Step 2: Ensure sprite blends with procedural scene**

May need to add a subtle CSS drop-shadow to the hybrid sprite to ground it:

```css
.viewport:not(.is-authored) .scene-sprite.is-visible {
  filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3));
}
```

Also show the scene-sprite element even when viewport is not `.is-authored`:

```css
.viewport:not(.is-authored) .scene-sprite.is-visible {
  display: block;
  z-index: 1;
}
```

**Step 3: Regenerate T-Rex assets if anatomy needs adjustment**

Run: `node scripts/generate_authored_assets.js`

Iterate on the `drawTyrannosaurus()` function until the T-Rex looks right — proportions, colors, animation. This is an iterative visual step.

**Step 4: Final visual verification**

Open game, encounter T-Rex on multiple biomes (fern, woodland, coast, marsh), verify it looks acceptable on each. Compare to Brachiosaurus quality.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: polish T-Rex sprite rendering and hybrid placement"
```
