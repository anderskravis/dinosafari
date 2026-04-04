const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "assets", "authored");

const PALETTE = {
  transparent: [0, 0, 0, 0],
  cream0: hex("#f5f0e6"),
  cream1: hex("#e6dccd"),
  sky0: hex("#e7edf7"),
  sky1: hex("#d3deee"),
  sky2: hex("#c3d2e6"),
  mist: hex("#edf0e8"),
  hill0: hex("#9aa28d"),
  hill1: hex("#7b866f"),
  hill2: hex("#637157"),
  dirt0: hex("#b5986d"),
  dirt1: hex("#a3835c"),
  dirt2: hex("#846849"),
  dirt3: hex("#665037"),
  trunk0: hex("#6e4d2f"),
  trunk1: hex("#845f3a"),
  trunk2: hex("#9a7347"),
  root: hex("#5f442a"),
  fern0: hex("#4a953b"),
  fern1: hex("#66b84b"),
  fern2: hex("#38712b"),
  fern3: hex("#7bcf58"),
  shrub0: hex("#56864a"),
  shrub1: hex("#3d6a37"),
  shadow: [28, 20, 14, 255],
  brachio0: hex("#7f6344"),
  brachio1: hex("#947451"),
  brachio2: hex("#b08f67"),
  brachio3: hex("#c8ab7f"),
  brachio4: hex("#5f4730"),
  trex0: hex("#6b2e1a"),   // deep red-brown body
  trex1: hex("#8a4428"),   // mid body
  trex2: hex("#a85c38"),   // lighter body
  trex3: hex("#c47a4e"),   // highlight
  trex4: hex("#4e1f12"),   // dark shadow
  trexBelly: hex("#c89a6e"), // lighter underbelly
  trexTeeth: hex("#e8dcc4"), // teeth/claws
  eye: hex("#1d120d"),
  black: hex("#11100f"),
  // Coelophysis – small Triassic runner
  coelo0: hex("#6b56af"),   // body purple
  coelo1: hex("#8470c8"),   // lighter purple
  coelo2: hex("#534098"),   // dark purple shadow
  coelo3: hex("#a08de0"),   // highlight
  coeloBelly: hex("#c4b8e6"),
  // Plateosaurus – medium Triassic prosauropod
  plateo0: hex("#7f6242"),  // body brown
  plateo1: hex("#9a7a55"),  // lighter
  plateo2: hex("#604830"),  // dark shadow
  plateo3: hex("#b89770"),  // highlight
  plateoBelly: hex("#c8b498"),
  // Postosuchus – Triassic croc-like runner
  posto0: hex("#87523c"),   // reddish-brown body
  posto1: hex("#a06a50"),   // lighter
  posto2: hex("#6a3c28"),   // dark shadow
  posto3: hex("#c08868"),   // highlight
  postoBelly: hex("#c8a888"),
  postoArmor: hex("#5e3822"),
  // Stegosaurus – Jurassic plated dino
  stego0: hex("#b06d3f"),   // orange-brown body
  stego1: hex("#c88555"),   // lighter
  stego2: hex("#8a5530"),   // dark shadow
  stego3: hex("#daa070"),   // highlight
  stegoBelly: hex("#d8c098"),
  stegoPlate: hex("#c45a2a"), // plate accent
  // Allosaurus – Jurassic large theropod
  allo0: hex("#944632"),    // red body
  allo1: hex("#ae5a44"),    // lighter
  allo2: hex("#7a3424"),    // dark shadow
  allo3: hex("#c87058"),    // highlight
  alloBelly: hex("#c8a080"),
  alloTeeth: hex("#e8dcc4"),
  // Parasaurolophus – Cretaceous crested hadrosaur
  para0: hex("#618f70"),    // green body
  para1: hex("#78a888"),    // lighter
  para2: hex("#4a7058"),    // dark shadow
  para3: hex("#90c0a0"),    // highlight
  paraBelly: hex("#b0d0b8"),
  paraCrest: hex("#3e6850"), // crest accent
  // Triceratops – Cretaceous horned ceratopsian
  trice0: hex("#866f4b"),   // brown body
  trice1: hex("#a08860"),   // lighter
  trice2: hex("#6a5538"),   // dark shadow
  trice3: hex("#baa478"),   // highlight
  triceBelly: hex("#c8b898"),
  triceFrill: hex("#9a7a50"), // frill accent
  triceHorn: hex("#e8dcc0"), // horn color
};

function main() {
  ensureDir(path.join(OUT_DIR, "shadow-grove"));
  ensureDir(path.join(OUT_DIR, "brachiosaurus"));
  ensureDir(path.join(OUT_DIR, "tyrannosaurus"));

  writePng(path.join(OUT_DIR, "shadow-grove", "background.png"), makeShadowGroveBackground());
  writePng(path.join(OUT_DIR, "shadow-grove", "foreground.png"), makeShadowGroveForeground());
  writePng(path.join(OUT_DIR, "brachiosaurus", "shadow-grove-strip.png"), makeBrachiosaurusStrip());
  writePng(path.join(OUT_DIR, "brachiosaurus", "contact.png"), makeContactPreview());
  writePng(path.join(OUT_DIR, "brachiosaurus", "guide.png"), makeGuidePreview());
  writePng(path.join(OUT_DIR, "tyrannosaurus", "strip.png"), makeTyrannosaurusStrip());
  writePng(path.join(OUT_DIR, "tyrannosaurus", "contact.png"), makeTyrannosaurusContact());
  writePng(path.join(OUT_DIR, "tyrannosaurus", "guide.png"), makeTyrannosaurusGuide());

  ensureDir(path.join(OUT_DIR, "coelophysis"));
  writePng(path.join(OUT_DIR, "coelophysis", "strip.png"), makeCoelophysisStrip());
  writePng(path.join(OUT_DIR, "coelophysis", "contact.png"), makeCoelophysisContact());
  writePng(path.join(OUT_DIR, "coelophysis", "guide.png"), makeCoelophysisGuide());

  ensureDir(path.join(OUT_DIR, "plateosaurus"));
  writePng(path.join(OUT_DIR, "plateosaurus", "strip.png"), makePlateosaurusStrip());
  writePng(path.join(OUT_DIR, "plateosaurus", "contact.png"), makePlateosaurusContact());
  writePng(path.join(OUT_DIR, "plateosaurus", "guide.png"), makePlateosaurusGuide());

  ensureDir(path.join(OUT_DIR, "postosuchus"));
  writePng(path.join(OUT_DIR, "postosuchus", "strip.png"), makePostosuchusStrip());
  writePng(path.join(OUT_DIR, "postosuchus", "contact.png"), makePostosuchusContact());
  writePng(path.join(OUT_DIR, "postosuchus", "guide.png"), makePostosuchusGuide());

  ensureDir(path.join(OUT_DIR, "stegosaurus"));
  writePng(path.join(OUT_DIR, "stegosaurus", "strip.png"), makeStegosaurusStrip());
  writePng(path.join(OUT_DIR, "stegosaurus", "contact.png"), makeStegosaurusContact());
  writePng(path.join(OUT_DIR, "stegosaurus", "guide.png"), makeStegosaurusGuide());

  ensureDir(path.join(OUT_DIR, "allosaurus"));
  writePng(path.join(OUT_DIR, "allosaurus", "strip.png"), makeAllosaurusStrip());
  writePng(path.join(OUT_DIR, "allosaurus", "contact.png"), makeAllosaurusContact());
  writePng(path.join(OUT_DIR, "allosaurus", "guide.png"), makeAllosaurusGuide());

  ensureDir(path.join(OUT_DIR, "parasaurolophus"));
  writePng(path.join(OUT_DIR, "parasaurolophus", "strip.png"), makeParasaurolophusStrip());
  writePng(path.join(OUT_DIR, "parasaurolophus", "contact.png"), makeParasaurolophusContact());
  writePng(path.join(OUT_DIR, "parasaurolophus", "guide.png"), makeParasaurolophusGuide());

  ensureDir(path.join(OUT_DIR, "triceratops"));
  writePng(path.join(OUT_DIR, "triceratops", "strip.png"), makeTriceratopsStrip());
  writePng(path.join(OUT_DIR, "triceratops", "contact.png"), makeTriceratopsContact());
  writePng(path.join(OUT_DIR, "triceratops", "guide.png"), makeTriceratopsGuide());
}

function makeShadowGroveBackground() {
  const image = surface(320, 200, PALETTE.sky0);

  gradientRect(image, 0, 0, 320, 60, mix(PALETTE.sky0, PALETTE.mist, 0.24), PALETTE.sky2);
  drawCloudBand(image, 28, 26, 312, 18, 9, [255, 255, 255, 110], 4101);
  drawCloudBand(image, 180, 18, 220, 20, 7, [255, 255, 255, 92], 4102);
  drawSunbeam(image, 76, 92, 0.15);
  drawSunbeam(image, 190, 110, 0.12);
  drawHills(image);
  drawScrubLine(image, 44, 58, 90210);
  gradientRect(image, 0, 58, 320, 142, PALETTE.dirt0, PALETTE.dirt3);
  stippleRect(image, 0, 58, 320, 142, [PALETTE.dirt1, PALETTE.dirt2, PALETTE.dirt3], 0.24, 9911);
  addGroundVariation(image, 58, 9912);
  drawForestPath(image, 184, 62, 196, 44, 128);
  drawDappledLight(image, 9915);
  drawCanopyShade(image, 9916);

  drawShadowPatch(image, 18, 142, 44, 24, 0.22);
  drawShadowPatch(image, 210, 120, 96, 34, 0.14);
  drawShadowPatch(image, 268, 116, 58, 20, 0.1);

  drawTree(image, -10, 206, 28, 158, 2001);
  drawTree(image, 96, 174, 30, 154, 2002);
  drawTree(image, 236, 118, 18, 112, 2003);
  drawTree(image, 262, 110, 15, 104, 2004);
  drawTree(image, 288, 98, 12, 92, 2005);
  drawTree(image, 306, 94, 10, 88, 2006);

  drawFernCluster(image, 24, 156, 0.9, 3001);
  drawFernCluster(image, 292, 170, 1.1, 3002);
  drawFernCluster(image, 68, 84, 0.55, 3003);
  drawFernCluster(image, 202, 76, 0.42, 3004);
  drawFernCluster(image, 256, 72, 0.48, 3005);
  drawFernCluster(image, 168, 88, 0.35, 3006);
  drawFernCluster(image, 136, 124, 0.28, 3007);
  drawFernCluster(image, 214, 132, 0.32, 3008);
  drawFernCluster(image, 188, 108, 0.26, 3009);
  drawFernCluster(image, 44, 112, 0.3, 3010);

  drawShrub(image, 92, 116, 14, 3011);
  drawShrub(image, 156, 126, 10, 3012);
  drawShrub(image, 170, 80, 8, 3013);
  drawShrub(image, 226, 88, 9, 3014);
  drawShrub(image, 278, 94, 8, 3015);
  drawBranchLitter(image, 110, 152, 3016);
  drawBranchLitter(image, 244, 144, 3017);

  sprinklePebbles(image, 58, 9913);
  applyFilmGrain(image, 0.08, 9914);
  return image;
}

function makeShadowGroveForeground() {
  const image = surface(320, 200, PALETTE.transparent);
  drawCanopyFringe(image, 7000);
  drawTree(image, 6, 206, 24, 168, 7001);
  drawFernCluster(image, 286, 202, 1.55, 7002);
  drawFernCluster(image, 302, 192, 1.15, 7003);
  drawFernCluster(image, 12, 178, 1.1, 7004);
  drawFernCluster(image, 96, 194, 0.85, 7005);
  drawFernCluster(image, 246, 194, 0.75, 7006);
  drawShadowPatch(image, 250, 168, 56, 16, 0.16);
  drawShadowPatch(image, 72, 188, 42, 12, 0.12);
  drawBranchLitter(image, 58, 186, 7008);
  applyFilmGrain(image, 0.04, 7007);
  return image;
}

function makeBrachiosaurusStrip() {
  const frameWidth = 72;
  const frameHeight = 96;
  const frames = 8;
  const strip = surface(frameWidth * frames, frameHeight, PALETTE.transparent);

  for (let index = 0; index < frames; index += 1) {
    const frame = surface(frameWidth, frameHeight, PALETTE.transparent);
    drawBrachiosaurus(frame, index, frames);
    blit(strip, frame, index * frameWidth, 0);
  }

  return strip;
}

function makeContactPreview() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);

  const silhouette = surface(140, 86, PALETTE.transparent);
  drawBrachiosaurus(silhouette, 1, 8, {
    body: PALETTE.black,
    shadow: PALETTE.black,
    highlight: PALETTE.black,
    eye: PALETTE.black,
  });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makeGuidePreview() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7021);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7022);

  const dino = surface(120, 96, PALETTE.transparent);
  drawBrachiosaurus(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7023);
  return image;
}

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
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7031);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7032);

  const dino = surface(120, 96, PALETTE.transparent);
  drawTyrannosaurus(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7033);
  return image;
}

// ─── Coelophysis ───────────────────────────────────────────────────────

function makeCoelophysisStrip() {
  const fw = 72, fh = 96, frames = 8;
  const strip = surface(fw * frames, fh, PALETTE.transparent);
  for (let i = 0; i < frames; i++) {
    const frame = surface(fw, fh, PALETTE.transparent);
    drawCoelophysis(frame, i, frames);
    blit(strip, frame, i * fw, 0);
  }
  return strip;
}

function makeCoelophysisContact() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);
  const silhouette = surface(140, 86, PALETTE.transparent);
  drawCoelophysis(silhouette, 1, 8, { body: PALETTE.black, shadow: PALETTE.black, highlight: PALETTE.black, eye: PALETTE.black });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makeCoelophysisGuide() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7041);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7042);
  const dino = surface(120, 96, PALETTE.transparent);
  drawCoelophysis(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7043);
  return image;
}

function drawCoelophysis(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.coelo0,
    shadow: PALETTE.coelo2,
    highlight: PALETTE.coelo3,
    bodyAlt: PALETTE.coelo1,
    belly: PALETTE.coeloBelly,
    eye: PALETTE.eye,
  };

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.0;
  const headBob = Math.cos(phase) * 1.2;
  const tailSway = Math.sin(phase) * 5;
  const legShift = Math.sin(phase) * 2.2;

  // Ground shadow
  drawGroundShadow(image, 36, 88 + bob, 22, 5, overridePalette ? 0.12 : 0.18);

  // Tail – long, thin, extends left
  drawTube(image, [
    [4 + tailSway * 0.5, 52 + bob],
    [10 + tailSway * 0.3, 50 + bob],
    [18 + tailSway * 0.1, 50 + bob],
    [26, 52 + bob],
  ], 1.2, 3.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Hind legs
  const kneeA = Math.sin(phase) * 2;
  const kneeB = Math.sin(phase + Math.PI) * 2;
  drawTube(image, [
    [32, 56 + bob], [30 + kneeA, 68 + bob], [32, 78 + bob], [33, 88 + bob + legShift],
  ], 3.2, 1.8, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [38, 56 + bob], [40 + kneeB, 68 + bob], [38, 78 + bob], [37, 88 + bob - legShift],
  ], 3.5, 2.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Feet
  fillEllipse(image, 33, 89 + bob + legShift, 3, 1.5, palette.shadow);
  fillEllipse(image, 37, 89 + bob - legShift, 3, 1.5, palette.shadow);

  // Body – small, slim
  drawEllipsoid(image, 36, 52 + bob, 10, 7, palette.body, palette.shadow, palette.highlight);
  // Belly
  fillEllipse(image, 36, 56 + bob, 7, 3, [(palette.belly || palette.body)[0], (palette.belly || palette.body)[1], (palette.belly || palette.body)[2], 60]);

  // Neck – long thin
  drawTube(image, [
    [42, 48 + bob],
    [48, 42 + bob + headBob * 0.3],
    [54, 36 + bob + headBob * 0.6],
    [58, 32 + bob + headBob],
  ], 3.5, 2.2, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Head – small, narrow snout
  const hx = 60, hy = 30 + bob + headBob;
  drawEllipsoid(image, hx, hy, 5, 4, palette.body, palette.shadow, palette.highlight);
  drawEllipsoid(image, hx + 4, hy + 1, 3, 2.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Jaw line
  drawLine(image, hx, hy + 2, hx + 6, hy + 3, palette.shadow);
  // Eye
  setPixel(image, hx - 1, hy - 1, palette.eye);
  setPixel(image, hx, hy - 1, palette.eye);

  // Tiny arms
  drawTube(image, [
    [40, 48 + bob], [42, 52 + bob], [43, 55 + bob],
  ], 1.2, 0.6, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Texture
  stippleEllipse(image, 36, 52 + bob, 8, 5, palette.shadow, 0.1, 8200 + frameIndex);
}

// ─── Plateosaurus ──────────────────────────────────────────────────────

function makePlateosaurusStrip() {
  const fw = 72, fh = 96, frames = 8;
  const strip = surface(fw * frames, fh, PALETTE.transparent);
  for (let i = 0; i < frames; i++) {
    const frame = surface(fw, fh, PALETTE.transparent);
    drawPlateosaurus(frame, i, frames);
    blit(strip, frame, i * fw, 0);
  }
  return strip;
}

function makePlateosaurusContact() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);
  const silhouette = surface(140, 86, PALETTE.transparent);
  drawPlateosaurus(silhouette, 1, 8, { body: PALETTE.black, shadow: PALETTE.black, highlight: PALETTE.black, eye: PALETTE.black });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makePlateosaurusGuide() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7051);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7052);
  const dino = surface(120, 96, PALETTE.transparent);
  drawPlateosaurus(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7053);
  return image;
}

function drawPlateosaurus(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.plateo0,
    shadow: PALETTE.plateo2,
    highlight: PALETTE.plateo3,
    bodyAlt: PALETTE.plateo1,
    belly: PALETTE.plateoBelly,
    eye: PALETTE.eye,
  };

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.4;
  const headBob = Math.cos(phase) * 2.0;
  const tailSway = Math.sin(phase) * 4;
  const legShift = Math.sin(phase) * 1.8;

  drawGroundShadow(image, 34, 86 + bob, 26, 7, overridePalette ? 0.12 : 0.2);

  // Thick tail
  drawTube(image, [
    [2 + tailSway * 0.4, 54 + bob],
    [8 + tailSway * 0.2, 52 + bob],
    [16, 50 + bob],
    [24, 50 + bob],
  ], 2.0, 5.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Hind legs
  const kneeA = Math.sin(phase) * 1.5;
  const kneeB = Math.sin(phase + Math.PI) * 1.5;
  drawTube(image, [
    [28, 56 + bob], [26 + kneeA, 68 + bob], [28, 78 + bob], [29, 88 + bob + legShift],
  ], 4.8, 2.8, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [36, 56 + bob], [38 + kneeB, 68 + bob], [36, 78 + bob], [35, 88 + bob - legShift],
  ], 5.0, 3.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 29, 89 + bob + legShift, 4, 2, palette.shadow);
  fillEllipse(image, 35, 89 + bob - legShift, 4, 2, palette.shadow);

  // Body – medium barrel
  drawEllipsoid(image, 34, 50 + bob, 14, 10, palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 34, 55 + bob, 10, 4, [(palette.belly || palette.body)[0], (palette.belly || palette.body)[1], (palette.belly || palette.body)[2], 55]);

  // Front legs (can be semi-bipedal, shorter)
  drawTube(image, [
    [44, 54 + bob], [46, 64 + bob], [45, 74 + bob], [44, 88 + bob + legShift * 0.5],
  ], 3.0, 1.8, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  drawTube(image, [
    [48, 54 + bob], [50, 64 + bob], [49, 74 + bob], [48, 88 + bob - legShift * 0.5],
  ], 2.8, 1.6, palette.body, palette.shadow, palette.highlight);

  // Neck – longish
  drawTube(image, [
    [44, 46 + bob],
    [50, 38 + bob + headBob * 0.3],
    [56, 30 + bob + headBob * 0.6],
    [60, 24 + bob + headBob],
  ], 4.5, 3.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Head – small
  const hx = 62, hy = 22 + bob + headBob;
  drawEllipsoid(image, hx, hy, 5, 4, palette.body, palette.shadow, palette.highlight);
  drawEllipsoid(image, hx + 3, hy + 1, 3, 2.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  drawLine(image, hx, hy + 2, hx + 5, hy + 3, palette.shadow);
  setPixel(image, hx - 1, hy - 1, palette.eye);
  setPixel(image, hx, hy - 1, palette.eye);

  stippleEllipse(image, 34, 50 + bob, 11, 7, palette.shadow, 0.1, 8300 + frameIndex);
}

// ─── Postosuchus ───────────────────────────────────────────────────────

function makePostosuchusStrip() {
  const fw = 72, fh = 96, frames = 8;
  const strip = surface(fw * frames, fh, PALETTE.transparent);
  for (let i = 0; i < frames; i++) {
    const frame = surface(fw, fh, PALETTE.transparent);
    drawPostosuchus(frame, i, frames);
    blit(strip, frame, i * fw, 0);
  }
  return strip;
}

function makePostosuchusContact() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);
  const silhouette = surface(140, 86, PALETTE.transparent);
  drawPostosuchus(silhouette, 1, 8, { body: PALETTE.black, shadow: PALETTE.black, highlight: PALETTE.black, eye: PALETTE.black });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makePostosuchusGuide() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7061);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7062);
  const dino = surface(120, 96, PALETTE.transparent);
  drawPostosuchus(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7063);
  return image;
}

function drawPostosuchus(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.posto0,
    shadow: PALETTE.posto2,
    highlight: PALETTE.posto3,
    bodyAlt: PALETTE.posto1,
    belly: PALETTE.postoBelly,
    armor: PALETTE.postoArmor,
    eye: PALETTE.eye,
  };

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 0.8;
  const headBob = Math.cos(phase) * 1.0;
  const tailSway = Math.sin(phase) * 4;
  const legShift = Math.sin(phase) * 1.6;

  // Low-slung body, crocodilian posture
  drawGroundShadow(image, 36, 88 + bob, 28, 6, overridePalette ? 0.12 : 0.22);

  // Heavy muscular tail
  drawTube(image, [
    [2 + tailSway * 0.5, 62 + bob],
    [8 + tailSway * 0.3, 60 + bob],
    [16 + tailSway * 0.1, 58 + bob],
    [24, 58 + bob],
  ], 2.5, 5.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Sprawled legs – short and wide-set
  const kneeA = Math.sin(phase) * 1.5;
  const kneeB = Math.sin(phase + Math.PI) * 1.5;
  // Hind legs
  drawTube(image, [
    [26, 62 + bob], [22 + kneeA, 72 + bob], [24, 80 + bob], [26, 88 + bob + legShift],
  ], 4.5, 2.5, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [32, 62 + bob], [36 + kneeB, 72 + bob], [34, 80 + bob], [32, 88 + bob - legShift],
  ], 5.0, 2.8, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Front legs
  drawTube(image, [
    [48, 62 + bob], [44, 72 + bob], [46, 80 + bob], [48, 88 + bob + legShift * 0.6],
  ], 3.5, 2.0, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [54, 62 + bob], [58, 72 + bob], [56, 80 + bob], [54, 88 + bob - legShift * 0.6],
  ], 3.8, 2.2, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Feet
  fillEllipse(image, 26, 89 + bob + legShift, 3.5, 1.5, palette.shadow);
  fillEllipse(image, 32, 89 + bob - legShift, 3.5, 1.5, palette.shadow);
  fillEllipse(image, 48, 89 + bob + legShift * 0.6, 3, 1.5, palette.shadow);
  fillEllipse(image, 54, 89 + bob - legShift * 0.6, 3, 1.5, palette.shadow);

  // Body – long, low, horizontal
  drawEllipsoid(image, 38, 58 + bob, 18, 8, palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 38, 62 + bob, 14, 4, [(palette.belly || palette.body)[0], (palette.belly || palette.body)[1], (palette.belly || palette.body)[2], 55]);

  // Armor ridge along back
  const armorColor = palette.armor || palette.shadow;
  for (let i = 0; i < 8; i++) {
    const ax = 22 + i * 4;
    const ay = 52 + bob - Math.abs(i - 3.5) * 0.5;
    setPixel(image, ax, ay, armorColor);
    setPixel(image, ax, ay - 1, armorColor);
    setPixel(image, ax + 1, ay, armorColor);
  }

  // Neck – short, thick, forward
  drawTube(image, [
    [52, 56 + bob],
    [58, 54 + bob + headBob * 0.3],
    [62, 52 + bob + headBob * 0.6],
  ], 5.0, 4.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Head – long snout, crocodilian
  const hx = 64, hy = 52 + bob + headBob;
  drawEllipsoid(image, hx, hy, 6, 4.5, palette.body, palette.shadow, palette.highlight);
  // Long snout
  drawEllipsoid(image, hx + 5, hy + 1, 4, 3, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Jaw
  drawLine(image, hx - 2, hy + 3, hx + 8, hy + 3, palette.shadow);
  // Teeth
  for (let t = 0; t < 3; t++) {
    setPixel(image, hx + 2 + t * 3, hy + 4, palette.highlight);
  }
  // Eye
  setPixel(image, hx - 2, hy - 1, palette.eye);
  setPixel(image, hx - 1, hy - 1, palette.eye);

  stippleEllipse(image, 38, 58 + bob, 14, 6, palette.shadow, 0.12, 8400 + frameIndex);
}

// ─── Stegosaurus ───────────────────────────────────────────────────────

function makeStegosaurusStrip() {
  const fw = 72, fh = 96, frames = 8;
  const strip = surface(fw * frames, fh, PALETTE.transparent);
  for (let i = 0; i < frames; i++) {
    const frame = surface(fw, fh, PALETTE.transparent);
    drawStegosaurus(frame, i, frames);
    blit(strip, frame, i * fw, 0);
  }
  return strip;
}

function makeStegosaurusContact() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);
  const silhouette = surface(140, 86, PALETTE.transparent);
  drawStegosaurus(silhouette, 1, 8, { body: PALETTE.black, shadow: PALETTE.black, highlight: PALETTE.black, eye: PALETTE.black });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makeStegosaurusGuide() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7071);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7072);
  const dino = surface(120, 96, PALETTE.transparent);
  drawStegosaurus(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7073);
  return image;
}

function drawStegosaurus(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.stego0,
    shadow: PALETTE.stego2,
    highlight: PALETTE.stego3,
    bodyAlt: PALETTE.stego1,
    belly: PALETTE.stegoBelly,
    plate: PALETTE.stegoPlate,
    eye: PALETTE.eye,
  };

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.0;
  const headBob = Math.cos(phase) * 1.2;
  const tailSway = Math.sin(phase) * 3;
  const legShift = Math.sin(phase) * 1.4;

  drawGroundShadow(image, 34, 88 + bob, 28, 7, overridePalette ? 0.12 : 0.22);

  // Tail with thagomizer spikes
  drawTube(image, [
    [2 + tailSway * 0.5, 56 + bob],
    [8 + tailSway * 0.3, 56 + bob],
    [16, 56 + bob],
    [22, 58 + bob],
  ], 2.0, 5.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Thagomizer – 4 spikes at tail tip
  const plateColor = palette.plate || palette.highlight;
  const tx = 2 + tailSway * 0.5, ty = 56 + bob;
  fillPolygon(image, [[tx, ty - 2], [tx - 4, ty - 8], [tx - 2, ty - 2]], plateColor);
  fillPolygon(image, [[tx + 2, ty - 2], [tx - 1, ty - 10], [tx + 4, ty - 2]], plateColor);
  fillPolygon(image, [[tx, ty + 2], [tx - 4, ty + 8], [tx - 2, ty + 2]], plateColor);
  fillPolygon(image, [[tx + 2, ty + 2], [tx - 1, ty + 9], [tx + 4, ty + 2]], plateColor);

  // Legs – short front, taller hind
  const kneeA = Math.sin(phase) * 1.2;
  const kneeB = Math.sin(phase + Math.PI) * 1.2;
  // Hind legs (taller)
  drawTube(image, [
    [24, 62 + bob], [22 + kneeA, 72 + bob], [24, 80 + bob], [25, 88 + bob + legShift],
  ], 5.0, 3.0, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [30, 62 + bob], [32 + kneeB, 72 + bob], [30, 80 + bob], [29, 88 + bob - legShift],
  ], 5.5, 3.2, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Front legs (shorter)
  drawTube(image, [
    [48, 64 + bob], [46, 74 + bob], [48, 82 + bob], [49, 88 + bob + legShift * 0.5],
  ], 3.8, 2.2, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [54, 64 + bob], [56, 74 + bob], [54, 82 + bob], [53, 88 + bob - legShift * 0.5],
  ], 4.0, 2.4, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Feet
  fillEllipse(image, 25, 89 + bob + legShift, 4, 2, palette.shadow);
  fillEllipse(image, 29, 89 + bob - legShift, 4, 2, palette.shadow);
  fillEllipse(image, 49, 89 + bob + legShift * 0.5, 3, 1.5, palette.shadow);
  fillEllipse(image, 53, 89 + bob - legShift * 0.5, 3, 1.5, palette.shadow);

  // Body – barrel shaped, arched back
  drawEllipsoid(image, 36, 60 + bob, 18, 10, palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 36, 65 + bob, 14, 5, [(palette.belly || palette.body)[0], (palette.belly || palette.body)[1], (palette.belly || palette.body)[2], 55]);

  // PLATES – 5 diamond/kite shapes along arched spine (the iconic feature!)
  const plateSizes = [5, 7, 9, 7, 5];
  const plateXs = [24, 30, 36, 42, 48];
  for (let i = 0; i < 5; i++) {
    const px = plateXs[i];
    const archY = 52 + bob - Math.sin((i / 4) * Math.PI) * 4; // arched spine
    const sz = plateSizes[i];
    // Diamond shape pointing up
    fillPolygon(image, [
      [px, archY - sz],       // top
      [px + sz * 0.45, archY], // right
      [px, archY + 2],        // bottom
      [px - sz * 0.45, archY], // left
    ], plateColor);
    // Plate outline/shadow
    drawLine(image, px, archY - sz, px + Math.floor(sz * 0.45), archY, palette.shadow);
    drawLine(image, px, archY - sz, px - Math.floor(sz * 0.45), archY, palette.highlight);
  }

  // Neck – short, sloping down
  drawTube(image, [
    [50, 60 + bob],
    [56, 62 + bob + headBob * 0.3],
    [60, 64 + bob + headBob * 0.6],
  ], 4.5, 3.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Head – small, held low
  const hx = 63, hy = 66 + bob + headBob;
  drawEllipsoid(image, hx, hy, 5, 3.5, palette.body, palette.shadow, palette.highlight);
  drawEllipsoid(image, hx + 3, hy, 3, 2.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  drawLine(image, hx, hy + 2, hx + 5, hy + 2, palette.shadow);
  setPixel(image, hx - 1, hy - 1, palette.eye);
  setPixel(image, hx, hy - 1, palette.eye);

  stippleEllipse(image, 36, 60 + bob, 14, 7, palette.shadow, 0.1, 8500 + frameIndex);
}

// ─── Allosaurus ────────────────────────────────────────────────────────

function makeAllosaurusStrip() {
  const fw = 72, fh = 96, frames = 8;
  const strip = surface(fw * frames, fh, PALETTE.transparent);
  for (let i = 0; i < frames; i++) {
    const frame = surface(fw, fh, PALETTE.transparent);
    drawAllosaurus(frame, i, frames);
    blit(strip, frame, i * fw, 0);
  }
  return strip;
}

function makeAllosaurusContact() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);
  const silhouette = surface(140, 86, PALETTE.transparent);
  drawAllosaurus(silhouette, 1, 8, { body: PALETTE.black, shadow: PALETTE.black, highlight: PALETTE.black, eye: PALETTE.black });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makeAllosaurusGuide() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7081);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7082);
  const dino = surface(120, 96, PALETTE.transparent);
  drawAllosaurus(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7083);
  return image;
}

function drawAllosaurus(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.allo0,
    shadow: PALETTE.allo2,
    highlight: PALETTE.allo3,
    bodyAlt: PALETTE.allo1,
    bodyDark: PALETTE.allo2,
    belly: PALETTE.alloBelly,
    teeth: PALETTE.alloTeeth,
    eye: PALETTE.eye,
  };

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.2;
  const headBob = Math.cos(phase) * 1.5;
  const tailSway = Math.sin(phase) * 4;
  const legShift = Math.sin(phase) * 1.8;
  const jawOpen = Math.max(0, Math.sin(phase * 0.5)) * 2.5;

  drawGroundShadow(image, 36, 86 + bob, 28, 7, overridePalette ? 0.12 : 0.22);

  // Tail
  drawTube(image, [
    [4 + tailSway * 0.4, 46 + bob],
    [10 + tailSway * 0.2, 46 + bob],
    [18, 46 + bob],
  ], 2.0, 4.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Hind legs
  const kneeA = Math.sin(phase) * 1.5;
  const kneeB = Math.sin(phase + Math.PI) * 1.5;
  drawTube(image, [
    [28, 54 + bob], [25 + kneeA, 66 + bob], [27, 76 + bob], [28, 88 + bob + legShift],
  ], 5.2, 2.8, palette.bodyDark || palette.body, palette.shadow, palette.highlight);
  drawTube(image, [
    [36, 54 + bob], [39 + kneeB, 66 + bob], [37, 76 + bob], [36, 88 + bob - legShift],
  ], 5.5, 3.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 28, 89 + bob + legShift, 4, 2, palette.shadow);
  fillEllipse(image, 36, 89 + bob - legShift, 4, 2, palette.shadow);
  // Toe claws
  setPixel(image, 25, 90 + bob + legShift, palette.teeth || palette.highlight);
  setPixel(image, 31, 90 + bob + legShift, palette.teeth || palette.highlight);
  setPixel(image, 33, 90 + bob - legShift, palette.teeth || palette.highlight);
  setPixel(image, 39, 90 + bob - legShift, palette.teeth || palette.highlight);

  // Body
  drawEllipsoid(image, 34, 46 + bob, 16, 11, palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 36, 52 + bob, 11, 5, [
    (palette.belly || palette.highlight)[0],
    (palette.belly || palette.highlight)[1],
    (palette.belly || palette.highlight)[2], 60,
  ]);
  drawEllipsoid(image, 34, 46 + bob, 14, 9, palette.body, palette.shadow, palette.highlight);

  // Neck
  drawTube(image, [
    [46, 44 + bob],
    [50, 40 + bob + headBob * 0.3],
    [54, 38 + bob + headBob * 0.6],
  ], 5.5, 4.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Head – big, with brow ridges
  const hx = 58, hy = 36 + bob + headBob;
  drawEllipsoid(image, hx, hy, 9, 6, palette.body, palette.shadow, palette.highlight);
  drawEllipsoid(image, hx + 5, hy + 1, 5, 4.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Lower jaw
  const jawY = hy + 4 + jawOpen;
  drawEllipsoid(image, hx + 3, jawY, 7, 2.5, palette.bodyDark || palette.body, palette.shadow, palette.highlight);

  // Teeth
  if (jawOpen > 0.8) {
    const tc = palette.teeth || palette.highlight;
    for (let t = 0; t < 3; t++) {
      const ttx = hx + t * 3;
      if (ttx < 71) { setPixel(image, ttx, hy + 4, tc); setPixel(image, ttx, hy + 5, tc); }
    }
  }

  // Eye
  setPixel(image, hx - 3, hy - 2, palette.eye);
  setPixel(image, hx - 2, hy - 2, palette.eye);

  // Brow ridges – distinctive crests above each eye
  drawLine(image, hx - 5, hy - 4, hx, hy - 4, palette.shadow);
  drawLine(image, hx - 5, hy - 5, hx, hy - 5, palette.bodyDark || palette.shadow);
  // Triangular crest bump
  fillPolygon(image, [[hx - 4, hy - 5], [hx - 3, hy - 8], [hx - 1, hy - 5]], [180, 50, 30, 200]);

  // Nostril
  setPixel(image, Math.min(hx + 9, 70), hy, palette.shadow);

  // Small arms (slightly bigger than T-Rex)
  drawTube(image, [
    [44, 46 + bob], [46, 50 + bob], [48, 54 + bob], [49, 56 + bob],
  ], 2.0, 1.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  setPixel(image, 50, 57 + bob, palette.teeth || palette.highlight);

  stippleEllipse(image, 34, 46 + bob, 12, 7, palette.shadow, 0.1, 8600 + frameIndex);
}

// ─── Parasaurolophus ───────────────────────────────────────────────────

function makeParasaurolophusStrip() {
  const fw = 72, fh = 96, frames = 8;
  const strip = surface(fw * frames, fh, PALETTE.transparent);
  for (let i = 0; i < frames; i++) {
    const frame = surface(fw, fh, PALETTE.transparent);
    drawParasaurolophus(frame, i, frames);
    blit(strip, frame, i * fw, 0);
  }
  return strip;
}

function makeParasaurolophusContact() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);
  const silhouette = surface(140, 86, PALETTE.transparent);
  drawParasaurolophus(silhouette, 1, 8, { body: PALETTE.black, shadow: PALETTE.black, highlight: PALETTE.black, eye: PALETTE.black });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makeParasaurolophusGuide() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7091);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7092);
  const dino = surface(120, 96, PALETTE.transparent);
  drawParasaurolophus(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7093);
  return image;
}

function drawParasaurolophus(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.para0,
    shadow: PALETTE.para2,
    highlight: PALETTE.para3,
    bodyAlt: PALETTE.para1,
    belly: PALETTE.paraBelly,
    crest: PALETTE.paraCrest,
    eye: PALETTE.eye,
  };

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.2;
  const headBob = Math.cos(phase) * 1.5;
  const tailSway = Math.sin(phase) * 4;
  const legShift = Math.sin(phase) * 1.6;

  drawGroundShadow(image, 34, 88 + bob, 26, 7, overridePalette ? 0.12 : 0.2);

  // Tail – long, flat
  drawTube(image, [
    [4 + tailSway * 0.4, 52 + bob],
    [10 + tailSway * 0.2, 50 + bob],
    [18, 48 + bob],
    [24, 48 + bob],
  ], 2.0, 5.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Hind legs – sturdy
  const kneeA = Math.sin(phase) * 1.5;
  const kneeB = Math.sin(phase + Math.PI) * 1.5;
  drawTube(image, [
    [26, 56 + bob], [24 + kneeA, 68 + bob], [26, 78 + bob], [27, 88 + bob + legShift],
  ], 5.0, 2.8, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [34, 56 + bob], [36 + kneeB, 68 + bob], [34, 78 + bob], [33, 88 + bob - legShift],
  ], 5.5, 3.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 27, 89 + bob + legShift, 4, 2, palette.shadow);
  fillEllipse(image, 33, 89 + bob - legShift, 4, 2, palette.shadow);

  // Body – upright bipedal posture
  drawEllipsoid(image, 34, 48 + bob, 15, 11, palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 34, 54 + bob, 11, 5, [(palette.belly || palette.body)[0], (palette.belly || palette.body)[1], (palette.belly || palette.body)[2], 55]);

  // Small arms
  drawTube(image, [
    [42, 46 + bob], [44, 50 + bob], [45, 54 + bob],
  ], 2.0, 1.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Neck – medium
  drawTube(image, [
    [42, 42 + bob],
    [46, 36 + bob + headBob * 0.3],
    [50, 30 + bob + headBob * 0.6],
  ], 5.0, 3.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Head – duck-billed, with iconic crest
  const hx = 52, hy = 28 + bob + headBob;
  drawEllipsoid(image, hx, hy, 6, 5, palette.body, palette.shadow, palette.highlight);
  // Duck bill – flattened snout
  drawEllipsoid(image, hx + 5, hy + 2, 4, 3, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Bill flat end
  drawLine(image, hx + 7, hy, hx + 8, hy + 4, palette.highlight);

  // CREST – the iconic long curved tube sweeping backward
  const crestColor = palette.crest || palette.shadow;
  drawTube(image, [
    [hx - 1, hy - 3],
    [hx - 6, hy - 10],
    [hx - 12, hy - 14],
    [hx - 18, hy - 12],
  ], 2.5, 1.2, crestColor, palette.shadow, palette.highlight);
  // Crest highlight
  drawLine(image, hx - 1, hy - 4, hx - 12, hy - 15, palette.highlight);

  // Eye
  setPixel(image, hx - 2, hy - 1, palette.eye);
  setPixel(image, hx - 1, hy - 1, palette.eye);
  // Nostril
  setPixel(image, hx + 7, hy + 1, palette.shadow);

  stippleEllipse(image, 34, 48 + bob, 12, 8, palette.shadow, 0.1, 8700 + frameIndex);
}

// ─── Triceratops ───────────────────────────────────────────────────────

function makeTriceratopsStrip() {
  const fw = 72, fh = 96, frames = 8;
  const strip = surface(fw * frames, fh, PALETTE.transparent);
  for (let i = 0; i < frames; i++) {
    const frame = surface(fw, fh, PALETTE.transparent);
    drawTriceratops(frame, i, frames);
    blit(strip, frame, i * fw, 0);
  }
  return strip;
}

function makeTriceratopsContact() {
  const image = surface(210, 120, PALETTE.cream0);
  gradientRect(image, 0, 0, 210, 120, PALETTE.cream0, PALETTE.cream1);
  fillRect(image, 0, 88, 210, 32, [0, 0, 0, 16]);
  const silhouette = surface(140, 86, PALETTE.transparent);
  drawTriceratops(silhouette, 1, 8, { body: PALETTE.black, shadow: PALETTE.black, highlight: PALETTE.black, eye: PALETTE.black });
  tintAlpha(silhouette, PALETTE.black);
  blitScaled(image, silhouette, 34, 16, 140, 86);
  return image;
}

function makeTriceratopsGuide() {
  const image = surface(220, 132, PALETTE.cream0);
  gradientRect(image, 0, 0, 220, 68, PALETTE.sky0, PALETTE.sky2);
  gradientRect(image, 0, 68, 220, 64, PALETTE.dirt0, PALETTE.dirt2);
  drawCloudBand(image, 88, 30, 130, 14, 5, [255, 255, 255, 88], 7101);
  drawCloudBand(image, 176, 24, 76, 12, 4, [255, 255, 255, 64], 7102);
  const dino = surface(120, 96, PALETTE.transparent);
  drawTriceratops(dino, 2, 8);
  blitScaled(image, dino, 54, 18, 112, 92);
  drawShadowPatch(image, 112, 98, 56, 14, 0.12);
  applyFilmGrain(image, 0.05, 7103);
  return image;
}

function drawTriceratops(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.trice0,
    shadow: PALETTE.trice2,
    highlight: PALETTE.trice3,
    bodyAlt: PALETTE.trice1,
    belly: PALETTE.triceBelly,
    frill: PALETTE.triceFrill,
    horn: PALETTE.triceHorn,
    eye: PALETTE.eye,
  };

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.0;
  const headBob = Math.cos(phase) * 1.0;
  const tailSway = Math.sin(phase) * 3;
  const legShift = Math.sin(phase) * 1.4;

  drawGroundShadow(image, 34, 88 + bob, 28, 7, overridePalette ? 0.12 : 0.22);

  // Short tail
  drawTube(image, [
    [6 + tailSway * 0.4, 58 + bob],
    [12 + tailSway * 0.2, 56 + bob],
    [18, 56 + bob],
  ], 2.5, 5.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Four thick legs
  const kneeA = Math.sin(phase) * 1.2;
  const kneeB = Math.sin(phase + Math.PI) * 1.2;
  // Hind legs
  drawTube(image, [
    [22, 62 + bob], [20 + kneeA, 72 + bob], [22, 80 + bob], [23, 88 + bob + legShift],
  ], 5.5, 3.2, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [30, 62 + bob], [32 + kneeB, 72 + bob], [30, 80 + bob], [29, 88 + bob - legShift],
  ], 6.0, 3.5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Front legs
  drawTube(image, [
    [46, 62 + bob], [44 + kneeB * 0.5, 72 + bob], [46, 80 + bob], [47, 88 + bob + legShift * 0.5],
  ], 5.0, 3.0, palette.shadow, palette.shadow, palette.highlight);
  drawTube(image, [
    [52, 62 + bob], [54 + kneeA * 0.5, 72 + bob], [52, 80 + bob], [51, 88 + bob - legShift * 0.5],
  ], 5.2, 3.2, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Feet
  fillEllipse(image, 23, 89 + bob + legShift, 4, 2, palette.shadow);
  fillEllipse(image, 29, 89 + bob - legShift, 4, 2, palette.shadow);
  fillEllipse(image, 47, 89 + bob + legShift * 0.5, 4, 2, palette.shadow);
  fillEllipse(image, 51, 89 + bob - legShift * 0.5, 4, 2, palette.shadow);

  // Bulky body
  drawEllipsoid(image, 34, 56 + bob, 18, 12, palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 34, 62 + bob, 14, 5, [(palette.belly || palette.body)[0], (palette.belly || palette.body)[1], (palette.belly || palette.body)[2], 55]);

  // Neck – short, thick
  drawTube(image, [
    [48, 54 + bob],
    [54, 50 + bob + headBob * 0.3],
    [58, 48 + bob + headBob * 0.6],
  ], 6.0, 5.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // FRILL – large shield behind head (draw before head so head overlaps)
  const frillColor = palette.frill || palette.bodyAlt || palette.body;
  const fx = 56, fy = 42 + bob + headBob;
  fillPolygon(image, [
    [fx - 2, fy + 6],     // bottom-left of frill
    [fx - 8, fy - 2],     // left edge
    [fx - 6, fy - 10],    // top-left
    [fx, fy - 14],         // top center
    [fx + 6, fy - 10],    // top-right
    [fx + 8, fy - 2],     // right edge
    [fx + 2, fy + 6],     // bottom-right
  ], frillColor);
  // Frill edge highlights
  drawLine(image, fx - 6, fy - 10, fx, fy - 14, palette.highlight);
  drawLine(image, fx, fy - 14, fx + 6, fy - 10, palette.shadow);
  // Scalloped edge detail
  for (let i = -2; i <= 2; i++) {
    setPixel(image, fx + i * 3, fy - 13 + Math.abs(i), palette.highlight);
  }

  // Head – large relative to body
  const hx = 60, hy = 50 + bob + headBob;
  drawEllipsoid(image, hx, hy, 7, 5, palette.body, palette.shadow, palette.highlight);
  // Beak/snout
  drawEllipsoid(image, hx + 5, hy + 1, 4, 3, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // THREE HORNS
  const hornColor = palette.horn || palette.highlight;
  // Nose horn (short)
  fillPolygon(image, [
    [hx + 7, hy - 1],
    [hx + 9, hy - 5],
    [hx + 8, hy + 1],
  ], hornColor);
  // Brow horns (two long ones, sweeping up and forward)
  fillPolygon(image, [
    [hx - 2, hy - 4],
    [hx + 2, hy - 14],
    [hx + 4, hy - 12],
    [hx, hy - 3],
  ], hornColor);
  fillPolygon(image, [
    [hx + 2, hy - 4],
    [hx + 6, hy - 14],
    [hx + 8, hy - 12],
    [hx + 4, hy - 3],
  ], hornColor);

  // Eye
  setPixel(image, hx - 2, hy - 1, palette.eye);
  setPixel(image, hx - 1, hy - 1, palette.eye);
  // Nostril
  setPixel(image, Math.min(hx + 8, 70), hy + 1, palette.shadow);

  // Beak detail
  drawLine(image, hx + 3, hy + 3, hx + 8, hy + 3, palette.shadow);

  stippleEllipse(image, 34, 56 + bob, 14, 8, palette.shadow, 0.1, 8800 + frameIndex);
}

function drawHills(image) {
  fillPolygon(image, [
    [0, 92],
    [0, 74],
    [18, 80],
    [36, 90],
    [56, 78],
    [82, 88],
    [112, 74],
    [148, 88],
    [188, 70],
    [236, 96],
    [320, 96],
    [320, 92],
  ], PALETTE.hill0);

  fillPolygon(image, [
    [0, 98],
    [0, 86],
    [24, 98],
    [48, 86],
    [72, 102],
    [102, 82],
    [138, 96],
    [176, 84],
    [220, 104],
    [258, 90],
    [320, 104],
    [320, 98],
  ], PALETTE.hill1);

  fillPolygon(image, [
    [0, 110],
    [0, 98],
    [28, 104],
    [62, 118],
    [92, 100],
    [126, 116],
    [170, 100],
    [224, 120],
    [270, 102],
    [320, 112],
    [320, 110],
  ], PALETTE.hill2);

  drawMist(image, 0, 100, 320, 16);
}

function drawScrubLine(image, startY, endY, seed) {
  const rng = mulberry32(seed);
  for (let x = 0; x < image.width; x += 2) {
    const height = 2 + Math.floor(rng() * 7);
    const top = endY - height - Math.floor(rng() * 4);
    for (let y = top; y <= endY; y += 1) {
      setPixel(image, x, y, y % 2 === 0 ? PALETTE.shrub0 : PALETTE.shrub1);
    }
  }
}

function addGroundVariation(image, groundY, seed) {
  const rng = mulberry32(seed);
  for (let y = groundY; y < image.height; y += 1) {
    for (let x = 0; x < image.width; x += 1) {
      const roll = rng();
      if (roll < 0.08) {
        setPixel(image, x, y, PALETTE.dirt1);
      } else if (roll < 0.11) {
        setPixel(image, x, y, PALETTE.dirt3);
      } else if (roll < 0.125) {
        setPixel(image, x, y, PALETTE.fern2);
      }
    }
  }
}

function drawTree(image, x, baseY, width, height, seed) {
  const left = x;
  const top = baseY - height;
  const rng = mulberry32(seed);
  const topInsetLeft = Math.floor(width * (0.08 + rng() * 0.18));
  const topInsetRight = Math.floor(width * (0.05 + rng() * 0.16));
  const lean = Math.floor((rng() - 0.5) * Math.min(10, width * 0.4));

  for (let py = top; py < baseY; py += 1) {
    const t = (py - top) / Math.max(height, 1);
    const rowLeft = Math.floor(left + topInsetLeft * (1 - t) + lean * t);
    const rowRight = Math.ceil(left + width - topInsetRight * (1 - t) + lean * t);
    for (let px = rowLeft; px < rowRight; px += 1) {
      const band = (px - rowLeft) / Math.max(rowRight - rowLeft - 1, 1);
      const bark = band < 0.28 ? PALETTE.trunk0 : band > 0.76 ? PALETTE.trunk2 : PALETTE.trunk1;
      setPixel(image, px, py, bark);
      if ((py + px) % 6 === 0 && rng() < 0.78) {
        setPixel(image, px, py, PALETTE.trunk0);
      }
      if ((py * 3 + px) % 17 === 0 && rng() < 0.34) {
        setPixel(image, px, py, PALETTE.trunk2);
      }
    }
  }

  const trunkCenter = left + width / 2 + lean * 0.45;
  for (let stripe = -1; stripe <= 1; stripe += 1) {
    drawBarkStripe(image, trunkCenter + stripe * (width * 0.16), top + 8, baseY - 12, stripe * 2, 0.18 + (stripe + 1) * 0.06);
  }

  for (let index = 0; index < 6; index += 1) {
    const rootW = 6 + Math.floor(rng() * 10);
    const rootX = left - 4 + index * Math.max(2, width / 6);
    fillPolygon(image, [
      [rootX, baseY],
      [rootX + rootW, baseY],
      [rootX + rootW + 6, baseY + 8 + Math.floor(rng() * 8)],
      [rootX - 4, baseY + 10 + Math.floor(rng() * 6)],
    ], rng() < 0.5 ? PALETTE.root : PALETTE.trunk0);
  }

  drawTreeShadow(image, x + width * 0.55, baseY - 4, width * 1.6, 34, seed + 11);
}

function drawTreeShadow(image, x, y, width, length, seed) {
  const rng = mulberry32(seed);
  for (let offset = 0; offset < width; offset += 1) {
    const startX = Math.floor(x + offset - width / 2);
    for (let step = 0; step < length; step += 1) {
      if (rng() < 0.82 - step / (length * 1.4)) {
        blendPixel(image, startX + Math.floor(step * 0.9), y + step, [20, 14, 10, 28]);
      }
    }
  }
}

function drawFernCluster(image, x, y, scale, seed) {
  const rng = mulberry32(seed);
  const fronds = 8 + Math.floor(scale * 4);

  for (let index = 0; index < fronds; index += 1) {
    const angle = -1.1 + (index / Math.max(fronds - 1, 1)) * 2.2;
    const length = (18 + rng() * 16) * scale;
    const stemX = x + Math.cos(angle) * 4 * scale;
    const stemY = y + Math.sin(angle) * 2 * scale;
    drawFernFrond(image, stemX, stemY, angle, length, scale, rng());
  }

  fillEllipse(image, x, y + 1, 8 * scale, 4 * scale, PALETTE.root);
  if (scale > 0.9) {
    fillEllipse(image, x - 2, y - 3, 11 * scale, 6 * scale, [0, 0, 0, 22]);
  }
}

function drawFernFrond(image, x, y, angle, length, scale, phase) {
  const steps = Math.max(10, Math.floor(length * 0.6));
  let prevX = x;
  let prevY = y;

  for (let step = 1; step <= steps; step += 1) {
    const t = step / steps;
    const curve = Math.sin(t * Math.PI) * 8 * scale;
    const px = x + Math.cos(angle) * length * t + Math.cos(angle + Math.PI / 2) * curve * 0.18;
    const py = y - Math.sin(angle) * length * t - t * 5 * scale + Math.sin(phase + t * 5) * 0.8;
    drawLine(image, prevX, prevY, px, py, step % 2 === 0 ? PALETTE.fern1 : PALETTE.fern2);

    if (step < steps - 1) {
      const leafLen = (5 + (1 - t) * 10) * scale;
      const leftAngle = angle + 2.2;
      const rightAngle = angle - 2.2;
      drawLine(image, px, py, px + Math.cos(leftAngle) * leafLen, py - Math.sin(leftAngle) * leafLen, PALETTE.fern3);
      drawLine(image, px, py, px + Math.cos(rightAngle) * leafLen, py - Math.sin(rightAngle) * leafLen, PALETTE.fern0);
    }

    prevX = px;
    prevY = py;
  }
}

function drawShrub(image, x, y, radius, seed) {
  const rng = mulberry32(seed);
  for (let index = 0; index < radius * 14; index += 1) {
    const angle = rng() * Math.PI * 2;
    const distance = rng() * radius;
    const px = x + Math.cos(angle) * distance;
    const py = y + Math.sin(angle) * distance * 0.65;
    setPixel(image, px, py, rng() < 0.5 ? PALETTE.shrub0 : PALETTE.shrub1);
  }
}

function drawShadowPatch(image, x, y, width, height, opacity) {
  for (let py = -height; py <= height; py += 1) {
    for (let px = -width; px <= width; px += 1) {
      const norm = (px * px) / (width * width) + (py * py) / (height * height);
      if (norm <= 1) {
        const alpha = Math.round((1 - norm) * 255 * opacity);
        blendPixel(image, x + px, y + py, [20, 14, 10, alpha]);
      }
    }
  }
}

function sprinklePebbles(image, groundY, seed) {
  const rng = mulberry32(seed);
  for (let index = 0; index < 260; index += 1) {
    const x = Math.floor(rng() * image.width);
    const y = groundY + Math.floor(rng() * (image.height - groundY));
    if (rng() < 0.55) {
      setPixel(image, x, y, PALETTE.dirt3);
    }
  }
}

function drawMist(image, x, y, width, height) {
  for (let py = 0; py < height; py += 1) {
    for (let px = 0; px < width; px += 1) {
      const alpha = Math.round((1 - py / height) * 36);
      blendPixel(image, x + px, y + py, [255, 255, 255, alpha]);
    }
  }
}

function drawCloudBand(image, cx, cy, width, height, blobs, color, seed) {
  const rng = mulberry32(seed);
  for (let index = 0; index < blobs; index += 1) {
    const px = cx - width / 2 + (index / Math.max(blobs - 1, 1)) * width + rng() * 8 - 4;
    const py = cy + rng() * 8 - 4;
    fillEllipse(image, px, py, width / blobs * (0.7 + rng() * 0.4), height * (0.7 + rng() * 0.3), color);
  }
}

function drawSunbeam(image, x, width, opacity) {
  for (let y = 0; y < image.height; y += 1) {
    const spread = width * (0.28 + y / image.height);
    const center = x + y * 0.18;
    for (let px = Math.floor(center - spread / 2); px <= Math.ceil(center + spread / 2); px += 1) {
      const norm = Math.abs(px - center) / Math.max(spread / 2, 1);
      if (norm <= 1) {
        const alpha = Math.round((1 - norm) * 255 * opacity * (1 - y / (image.height * 1.05)));
        blendPixel(image, px, y, [255, 245, 214, alpha]);
      }
    }
  }
}

function drawCanopyShade(image, seed) {
  const rng = mulberry32(seed);
  for (let x = 0; x < image.width; x += 1) {
    const edge = 18 + Math.sin(x * 0.11) * 4 + Math.sin(x * 0.04 + 1.1) * 6;
    for (let y = 0; y < edge; y += 1) {
      blendPixel(image, x, y, [34, 40, 22, Math.round(110 * (1 - y / Math.max(edge, 1)))]);
    }
  }

  for (let index = 0; index < 16; index += 1) {
    const x = 6 + index * 20 + rng() * 14 - 7;
    const y = 10 + rng() * 14;
    fillEllipse(image, x, y, 14 + rng() * 12, 8 + rng() * 4, [46, 68, 34, 52]);
  }
}

function drawCanopyFringe(image, seed) {
  const rng = mulberry32(seed);
  for (let index = 0; index < 26; index += 1) {
    const x = index * 14 + rng() * 10 - 5;
    const width = 16 + rng() * 18;
    const depth = 14 + rng() * 12;
    fillEllipse(image, x, depth - 6, width, depth, [48, 74, 36, 170]);
  }

  for (let vine = 0; vine < 7; vine += 1) {
    const x = 18 + vine * 44 + rng() * 10;
    drawLine(image, x, 0, x + rng() * 4 - 2, 18 + rng() * 16, [56, 76, 42, 180]);
  }
}

function drawForestPath(image, centerX, startY, endY, topWidth, bottomWidth) {
  fillPolygon(image, [
    [centerX - topWidth / 2, startY],
    [centerX + topWidth / 2, startY],
    [centerX + bottomWidth / 2, endY],
    [centerX - bottomWidth / 2, endY],
  ], mix(PALETTE.dirt0, PALETTE.cream1, 0.14));

  drawShadowPatch(image, centerX + 10, endY - 10, bottomWidth * 0.42, 10, 0.08);
}

function drawDappledLight(image, seed) {
  const rng = mulberry32(seed);
  for (let index = 0; index < 18; index += 1) {
    const x = 22 + rng() * 276;
    const y = 88 + rng() * 96;
    const width = 18 + rng() * 42;
    const height = 8 + rng() * 18;
    fillEllipse(image, x, y, width, height, [255, 240, 194, 18 + Math.floor(rng() * 18)]);
  }
}

function drawBranchLitter(image, x, y, seed) {
  const rng = mulberry32(seed);
  for (let branch = 0; branch < 3; branch += 1) {
    const startX = x + rng() * 16 - 8;
    const startY = y + rng() * 6 - 3;
    const endX = startX + 14 + rng() * 16;
    const endY = startY + rng() * 6 - 3;
    drawLine(image, startX, startY, endX, endY, PALETTE.root);
    if (rng() < 0.6) {
      drawLine(image, startX + 4, startY - 1, startX + 8, startY - 5, PALETTE.root);
    }
  }
}

function drawBarkStripe(image, x, top, bottom, drift, opacity) {
  for (let y = top; y < bottom; y += 1) {
    const offsetX = Math.round(x + Math.sin(y * 0.08 + drift) * 2);
    blendPixel(image, offsetX, y, [255, 222, 168, Math.round(255 * opacity)]);
    blendPixel(image, offsetX - 2, y, [55, 33, 18, Math.round(255 * opacity * 0.5)]);
  }
}

function drawBrachiosaurus(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.brachio1,
    shadow: PALETTE.brachio4,
    highlight: PALETTE.brachio3,
    bodyAlt: PALETTE.brachio2,
    eye: PALETTE.eye,
  };

  // Shift everything left by 6px to fit within 72px frame
  const ox = -6;

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.8;
  const headLift = Math.cos(phase) * 2.8;
  const tailShift = Math.sin(phase) * 5;
  const legFront = Math.sin(phase) * 2.5;
  const legBack = Math.cos(phase) * 2.2;
  const chestShift = Math.sin(phase + Math.PI / 2) * 1.6;

  drawGroundShadow(image, 33 + ox, 84 + bob, 25, 8, overridePalette ? 0.12 : 0.18);

  drawTube(image, [
    [26 + ox + tailShift, 64 + bob],
    [14 + ox + tailShift * 0.6, 60 + bob],
    [4 + ox + tailShift * 0.3, 64 + bob],
  ], 3.5, 2.1, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  drawEllipsoid(image, 37 + ox, 62 + bob, 21, 11, palette.body, palette.shadow, palette.highlight);
  drawEllipsoid(image, 56 + ox, 58 + bob + chestShift * 0.2, 11, 8, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  drawTube(image, [
    [56 + ox, 48 + bob],
    [60 + ox, 38 + bob + headLift],
    [64 + ox, 26 + bob + headLift],
    [69 + ox, 16 + bob + headLift],
  ], 5.3, 3.3, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  drawEllipsoid(image, 70 + ox, 11 + bob + headLift, 6, 5, palette.highlight, palette.shadow, palette.highlight);
  setPixel(image, 73 + ox, 10 + bob + headLift, palette.eye);
  drawLine(image, 69 + ox, 11 + bob + headLift, 75 + ox, 13 + bob + headLift, palette.shadow);

  drawLeg(image, 28 + ox, 68 + bob, 5, 24 + legFront, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  drawLeg(image, 42 + ox, 68 + bob, 5, 26 - legFront, palette.body, palette.shadow, palette.highlight);
  drawLeg(image, 54 + ox, 68 + bob, 5, 26 + legBack, palette.highlight, palette.shadow, palette.highlight);
  drawLeg(image, 64 + ox, 68 + bob, 5, 27 - legBack, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  stippleEllipse(image, 37 + ox, 60 + bob, 14, 6, palette.shadow, 0.12, 8100 + frameIndex);
  fillEllipse(image, 28 + ox, 58 + bob, 6, 2, [palette.highlight[0], palette.highlight[1], palette.highlight[2], 90]);
}

function drawTyrannosaurus(image, frameIndex, frameCount, overridePalette = null) {
  const palette = overridePalette || {
    body: PALETTE.trex1,
    shadow: PALETTE.trex4,
    highlight: PALETTE.trex3,
    bodyAlt: PALETTE.trex2,
    bodyDark: PALETTE.trex0,
    belly: PALETTE.trexBelly,
    teeth: PALETTE.trexTeeth,
    eye: PALETTE.eye,
  };

  // Forward-leaning theropod posture: body nearly horizontal, head thrust forward,
  // heavy tail counterbalancing behind. Hip is the highest point (~y=40).
  // All x coordinates stay within 0–71.

  const phase = (frameIndex / frameCount) * Math.PI * 2;
  const bob = Math.sin(phase) * 1.2;
  const headBob = Math.cos(phase) * 1.5;
  const tailSway = Math.sin(phase) * 4;
  const legShift = Math.sin(phase) * 1.8;
  const jawOpen = Math.max(0, Math.sin(phase * 0.5)) * 3.0;

  // ground shadow — wide, under the whole body
  drawGroundShadow(image, 36, 86 + bob, 30, 7, overridePalette ? 0.12 : 0.22);

  // --- TAIL: extends left, thick at base, tapers to tip ---
  // Tail tip (far left)
  drawTube(image, [
    [6 + tailSway * 0.4, 44 + bob],
    [1 + tailSway * 0.6, 42 + bob],
  ], 2.0, 1.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Tail mid
  drawTube(image, [
    [18, 44 + bob],
    [12 + tailSway * 0.2, 44 + bob],
    [6 + tailSway * 0.4, 44 + bob],
  ], 4.5, 2.0, palette.body, palette.shadow, palette.highlight);

  // --- HIND LEGS (under hip at ~x=28-36) ---
  const kneeA = Math.sin(phase) * 1.5;
  const kneeB = Math.sin(phase + Math.PI) * 1.5;

  // Far leg
  drawTube(image, [
    [28, 52 + bob],
    [25 + kneeA, 64 + bob],
    [27, 76 + bob],
    [28, 88 + bob + legShift],
  ], 5.5, 3.0, palette.bodyDark || palette.body, palette.shadow, palette.highlight);

  // Near leg
  drawTube(image, [
    [36, 52 + bob],
    [39 + kneeB, 64 + bob],
    [37, 76 + bob],
    [36, 88 + bob - legShift],
  ], 6.0, 3.2, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Feet
  fillEllipse(image, 28, 89 + bob + legShift, 4, 2, palette.shadow);
  fillEllipse(image, 36, 89 + bob - legShift, 4, 2, palette.shadow);
  // Toe claws
  setPixel(image, 25, 90 + bob + legShift, palette.teeth || palette.highlight);
  setPixel(image, 31, 90 + bob + legShift, palette.teeth || palette.highlight);
  setPixel(image, 33, 90 + bob - legShift, palette.teeth || palette.highlight);
  setPixel(image, 39, 90 + bob - legShift, palette.teeth || palette.highlight);

  // --- BODY: large horizontal torso, hip is highest point ---
  // Main torso — horizontal oval, tilted slightly forward-down
  drawEllipsoid(image, 34, 44 + bob, 18, 12, palette.body, palette.shadow, palette.highlight);

  // Belly highlight
  fillEllipse(image, 36, 50 + bob, 12, 5, [
    (palette.belly || palette.highlight)[0],
    (palette.belly || palette.highlight)[1],
    (palette.belly || palette.highlight)[2],
    65,
  ]);

  // Redraw body center on top of leg joins
  drawEllipsoid(image, 34, 44 + bob, 16, 10, palette.body, palette.shadow, palette.highlight);
  fillEllipse(image, 36, 50 + bob, 10, 4, [
    (palette.belly || palette.highlight)[0],
    (palette.belly || palette.highlight)[1],
    (palette.belly || palette.highlight)[2],
    50,
  ]);

  // --- NECK: short thick, angling forward and slightly down from body ---
  drawTube(image, [
    [46, 42 + bob],
    [50, 38 + bob + headBob * 0.3],
    [54, 36 + bob + headBob * 0.6],
  ], 6.0, 5.0, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // --- MASSIVE HEAD: thrust forward, the defining T-Rex feature ---
  // Upper skull — big, elongated forward
  const hx = 60;
  const hy = 34 + bob + headBob;
  drawEllipsoid(image, hx, hy, 10, 7, palette.body, palette.shadow, palette.highlight);
  // Snout — extends forward
  drawEllipsoid(image, hx + 6, hy + 1, 5, 5, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);

  // Lower jaw (opens/closes)
  const jawY = hy + 5 + jawOpen;
  drawEllipsoid(image, hx + 3, jawY, 8, 3, palette.bodyDark || palette.body, palette.shadow, palette.highlight);

  // Teeth when jaw open
  if (jawOpen > 1.0) {
    const tc = palette.teeth || palette.highlight;
    // upper teeth row
    for (let t = 0; t < 4; t += 1) {
      const tx = hx - 2 + t * 4;
      if (tx < 71) {
        setPixel(image, tx, hy + 5, tc);
        setPixel(image, tx, hy + 6, tc);
      }
    }
    // lower teeth row
    for (let t = 0; t < 3; t += 1) {
      const tx = hx + t * 4;
      if (tx < 71) {
        setPixel(image, tx, jawY - 2, tc);
        setPixel(image, tx, jawY - 1, tc);
      }
    }
  }

  // Eye — fierce, set back on skull
  setPixel(image, hx - 4, hy - 2, palette.eye);
  setPixel(image, hx - 3, hy - 2, palette.eye);
  // Red glint above eye
  setPixel(image, hx - 4, hy - 3, [180, 40, 30, 200]);

  // Heavy brow ridge
  drawLine(image, hx - 7, hy - 4, hx + 1, hy - 4, palette.shadow);
  drawLine(image, hx - 7, hy - 5, hx + 1, hy - 5, palette.bodyDark || palette.shadow);

  // Nostril near snout tip
  setPixel(image, Math.min(hx + 10, 70), hy, palette.shadow);

  // --- TINY FOREARMS: hanging down from chest area ---
  drawTube(image, [
    [44, 44 + bob],
    [46, 48 + bob],
    [47, 51 + bob],
  ], 1.8, 0.8, palette.bodyAlt || palette.body, palette.shadow, palette.highlight);
  // Tiny claw
  setPixel(image, 48, 52 + bob, palette.teeth || palette.highlight);

  // --- Texture stippling ---
  stippleEllipse(image, 34, 44 + bob, 14, 8, palette.shadow, 0.1, 9200 + frameIndex);
  stippleEllipse(image, hx, hy, 8, 5, palette.shadow, 0.08, 9300 + frameIndex);
}

function drawGroundShadow(image, x, y, radiusX, radiusY, opacity) {
  for (let py = -radiusY; py <= radiusY; py += 1) {
    for (let px = -radiusX; px <= radiusX; px += 1) {
      const norm = (px * px) / (radiusX * radiusX) + (py * py) / (radiusY * radiusY);
      if (norm <= 1) {
        blendPixel(image, x + px, y + py, [0, 0, 0, Math.round((1 - norm) * 255 * opacity)]);
      }
    }
  }
}

function drawLeg(image, x, y, radius, height, body, shadow, highlight) {
  drawTube(image, [
    [x, y],
    [x, y + height],
  ], radius, radius - 0.6, body, shadow, highlight);
}

function drawTube(image, points, startRadius, endRadius, body, shadow, highlight) {
  const segments = [];
  let totalLength = 0;

  for (let index = 0; index < points.length - 1; index += 1) {
    const from = points[index];
    const to = points[index + 1];
    const length = Math.hypot(to[0] - from[0], to[1] - from[1]);
    segments.push({ from, to, length });
    totalLength += length;
  }

  let traveled = 0;
  segments.forEach((segment) => {
    const steps = Math.max(1, Math.ceil(segment.length * 1.5));
    for (let step = 0; step <= steps; step += 1) {
      const t = step / steps;
      const globalT = (traveled + segment.length * t) / Math.max(totalLength, 1);
      const radius = lerp(startRadius, endRadius, globalT);
      const x = lerp(segment.from[0], segment.to[0], t);
      const y = lerp(segment.from[1], segment.to[1], t);
      fillEllipse(image, x + radius * 0.2, y + radius * 0.25, radius * 1.05, radius * 0.78, shadow);
      fillEllipse(image, x, y, radius, radius * 0.72, body);
      fillEllipse(image, x - radius * 0.35, y - radius * 0.18, radius * 0.5, radius * 0.24, [highlight[0], highlight[1], highlight[2], 120]);
    }
    traveled += segment.length;
  });
}

function drawEllipsoid(image, cx, cy, rx, ry, body, shadow, highlight) {
  for (let y = -Math.ceil(ry); y <= Math.ceil(ry); y += 1) {
    for (let x = -Math.ceil(rx); x <= Math.ceil(rx); x += 1) {
      const norm = (x * x) / (rx * rx) + (y * y) / (ry * ry);
      if (norm <= 1) {
        const light = 1 - norm;
        const color = light > 0.6 ? highlight : light < 0.16 ? shadow : body;
        setPixel(image, cx + x, cy + y, color);
      }
    }
  }
}

function stippleEllipse(image, cx, cy, rx, ry, color, density, seed) {
  const rng = mulberry32(seed);
  for (let y = -Math.ceil(ry); y <= Math.ceil(ry); y += 1) {
    for (let x = -Math.ceil(rx); x <= Math.ceil(rx); x += 1) {
      const norm = (x * x) / (rx * rx) + (y * y) / (ry * ry);
      if (norm <= 1 && rng() < density) {
        blendPixel(image, cx + x, cy + y, [color[0], color[1], color[2], 80]);
      }
    }
  }
}

function tintAlpha(image, color) {
  for (let index = 0; index < image.data.length; index += 4) {
    if (image.data[index + 3] === 0) {
      continue;
    }
    image.data[index + 0] = color[0];
    image.data[index + 1] = color[1];
    image.data[index + 2] = color[2];
  }
}

function applyFilmGrain(image, amount, seed) {
  const rng = mulberry32(seed);
  for (let index = 0; index < image.data.length; index += 4) {
    const alpha = image.data[index + 3];
    if (alpha === 0) {
      continue;
    }
    const delta = Math.floor((rng() - 0.5) * 255 * amount);
    image.data[index + 0] = clampByte(image.data[index + 0] + delta);
    image.data[index + 1] = clampByte(image.data[index + 1] + delta);
    image.data[index + 2] = clampByte(image.data[index + 2] + delta);
  }
}

function stippleRect(image, x, y, width, height, colors, density, seed) {
  const rng = mulberry32(seed);
  for (let py = y; py < y + height; py += 1) {
    for (let px = x; px < x + width; px += 1) {
      if (rng() < density) {
        setPixel(image, px, py, colors[Math.floor(rng() * colors.length)]);
      }
    }
  }
}

function gradientRect(image, x, y, width, height, topColor, bottomColor) {
  for (let row = 0; row < height; row += 1) {
    const t = row / Math.max(height - 1, 1);
    const color = mix(topColor, bottomColor, t);
    for (let col = 0; col < width; col += 1) {
      setPixel(image, x + col, y + row, color);
    }
  }
}

function fillRect(image, x, y, width, height, color) {
  for (let py = y; py < y + height; py += 1) {
    for (let px = x; px < x + width; px += 1) {
      setPixel(image, px, py, color);
    }
  }
}

function fillEllipse(image, cx, cy, rx, ry, color) {
  const minX = Math.floor(cx - rx);
  const maxX = Math.ceil(cx + rx);
  const minY = Math.floor(cy - ry);
  const maxY = Math.ceil(cy + ry);

  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const norm = ((x - cx) * (x - cx)) / (rx * rx) + ((y - cy) * (y - cy)) / (ry * ry);
      if (norm <= 1) {
        setPixel(image, x, y, color);
      }
    }
  }
}

function fillPolygon(image, points, color) {
  const minY = Math.floor(Math.min(...points.map((point) => point[1])));
  const maxY = Math.ceil(Math.max(...points.map((point) => point[1])));

  for (let y = minY; y <= maxY; y += 1) {
    const intersections = [];
    for (let index = 0; index < points.length; index += 1) {
      const current = points[index];
      const next = points[(index + 1) % points.length];
      const y1 = current[1];
      const y2 = next[1];
      if ((y1 <= y && y2 > y) || (y2 <= y && y1 > y)) {
        const t = (y - y1) / (y2 - y1);
        intersections.push(current[0] + t * (next[0] - current[0]));
      }
    }

    intersections.sort((a, b) => a - b);
    for (let index = 0; index < intersections.length; index += 2) {
      const startX = Math.floor(intersections[index]);
      const endX = Math.ceil(intersections[index + 1]);
      for (let x = startX; x <= endX; x += 1) {
        setPixel(image, x, y, color);
      }
    }
  }
}

function drawLine(image, x0, y0, x1, y1, color) {
  let startX = Math.round(x0);
  let startY = Math.round(y0);
  const endX = Math.round(x1);
  const endY = Math.round(y1);
  const deltaX = Math.abs(endX - startX);
  const deltaY = Math.abs(endY - startY);
  const stepX = startX < endX ? 1 : -1;
  const stepY = startY < endY ? 1 : -1;
  let error = deltaX - deltaY;

  while (true) {
    setPixel(image, startX, startY, color);
    if (startX === endX && startY === endY) {
      break;
    }
    const error2 = error * 2;
    if (error2 > -deltaY) {
      error -= deltaY;
      startX += stepX;
    }
    if (error2 < deltaX) {
      error += deltaX;
      startY += stepY;
    }
  }
}

function blit(target, source, dx, dy) {
  for (let y = 0; y < source.height; y += 1) {
    for (let x = 0; x < source.width; x += 1) {
      const sourceIndex = (y * source.width + x) * 4;
      const alpha = source.data[sourceIndex + 3];
      if (alpha === 0) {
        continue;
      }
      blendPixel(target, dx + x, dy + y, [
        source.data[sourceIndex + 0],
        source.data[sourceIndex + 1],
        source.data[sourceIndex + 2],
        alpha,
      ]);
    }
  }
}

function blitScaled(target, source, dx, dy, width, height) {
  for (let y = 0; y < height; y += 1) {
    const sourceY = Math.floor((y / height) * source.height);
    for (let x = 0; x < width; x += 1) {
      const sourceX = Math.floor((x / width) * source.width);
      const sourceIndex = (sourceY * source.width + sourceX) * 4;
      const alpha = source.data[sourceIndex + 3];
      if (alpha === 0) {
        continue;
      }
      blendPixel(target, dx + x, dy + y, [
        source.data[sourceIndex + 0],
        source.data[sourceIndex + 1],
        source.data[sourceIndex + 2],
        alpha,
      ]);
    }
  }
}

function setPixel(image, x, y, color) {
  const px = Math.round(x);
  const py = Math.round(y);
  if (px < 0 || py < 0 || px >= image.width || py >= image.height) {
    return;
  }

  if ((color[3] ?? 255) < 255) {
    blendPixel(image, px, py, color);
    return;
  }

  const index = (py * image.width + px) * 4;
  image.data[index + 0] = color[0];
  image.data[index + 1] = color[1];
  image.data[index + 2] = color[2];
  image.data[index + 3] = color.length > 3 ? color[3] : 255;
}

function blendPixel(image, x, y, color) {
  const px = Math.round(x);
  const py = Math.round(y);
  if (px < 0 || py < 0 || px >= image.width || py >= image.height) {
    return;
  }

  const index = (py * image.width + px) * 4;
  const alpha = (color[3] ?? 255) / 255;
  const inverse = 1 - alpha;

  image.data[index + 0] = Math.round(color[0] * alpha + image.data[index + 0] * inverse);
  image.data[index + 1] = Math.round(color[1] * alpha + image.data[index + 1] * inverse);
  image.data[index + 2] = Math.round(color[2] * alpha + image.data[index + 2] * inverse);
  image.data[index + 3] = Math.round((color[3] ?? 255) + image.data[index + 3] * inverse);
}

function surface(width, height, fillColor) {
  const image = {
    width,
    height,
    data: new Uint8ClampedArray(width * height * 4),
  };

  for (let index = 0; index < image.data.length; index += 4) {
    image.data[index + 0] = fillColor[0];
    image.data[index + 1] = fillColor[1];
    image.data[index + 2] = fillColor[2];
    image.data[index + 3] = fillColor.length > 3 ? fillColor[3] : 255;
  }

  return image;
}

function writePng(filePath, image) {
  const png = encodePng(image.width, image.height, image.data);
  fs.writeFileSync(filePath, png);
}

function encodePng(width, height, rgba) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = chunk("IHDR", Buffer.concat([
    uint32(width),
    uint32(height),
    Buffer.from([8, 6, 0, 0, 0]),
  ]));

  const raw = Buffer.alloc((width * 4 + 1) * height);
  const rgbaBuffer = Buffer.from(rgba.buffer, rgba.byteOffset, rgba.byteLength);
  for (let y = 0; y < height; y += 1) {
    raw[y * (width * 4 + 1)] = 0;
    rgbaBuffer.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }

  const idat = chunk("IDAT", zlib.deflateSync(raw, { level: 9 }));
  const iend = chunk("IEND", Buffer.alloc(0));
  return Buffer.concat([signature, ihdr, idat, iend]);
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  return Buffer.concat([uint32(data.length), typeBuffer, data, uint32(crc32(Buffer.concat([typeBuffer, data])))]);
}

function uint32(value) {
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32BE(value >>> 0, 0);
  return buffer;
}

function crc32(buffer) {
  let crc = -1;
  for (let index = 0; index < buffer.length; index += 1) {
    crc = CRC_TABLE[(crc ^ buffer[index]) & 255] ^ (crc >>> 8);
  }
  return (crc ^ -1) >>> 0;
}

function ensureDir(directory) {
  fs.mkdirSync(directory, { recursive: true });
}

function mix(a, b, amount) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * amount),
    Math.round(a[1] + (b[1] - a[1]) * amount),
    Math.round(a[2] + (b[2] - a[2]) * amount),
    Math.round((a[3] ?? 255) + ((b[3] ?? 255) - (a[3] ?? 255)) * amount),
  ];
}

function lerp(a, b, amount) {
  return a + (b - a) * amount;
}

function hex(value) {
  const normalized = value.replace("#", "");
  const expanded = normalized.length === 3
    ? normalized.split("").map((segment) => segment + segment).join("")
    : normalized;
  const int = Number.parseInt(expanded, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255, 255];
}

function clampByte(value) {
  return Math.max(0, Math.min(255, value));
}

function mulberry32(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let index = 0; index < 256; index += 1) {
    let c = index;
    for (let bit = 0; bit < 8; bit += 1) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[index] = c >>> 0;
  }
  return table;
})();

main();
