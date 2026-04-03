# Dino Safari Tribute

A small browser prototype inspired by the 1996 `Dinosaur Safari` loop: move through prehistoric regions, wait for a dinosaur to appear, and photograph it into a field guide.

## What is in here

- `index.html`: the single-page shell and UI
- `styles.css`: retro control panel styling and responsive layout
- `app.js`: map data, encounter logic, scanner, photo capture, renderer fallback, and authored-scene loading
- `scripts/generate_authored_assets.js`: emits raster PNG assets for the authored vertical slice
- `assets/authored/`: generated background, foreground, sprite, and preview art

## Running it

No build step is required. Open [`index.html`](/Users/anderskravis/code/dinosafari/index.html) directly in a browser, or serve the folder with a simple static server if you prefer.

Example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Current gameplay

- Switch between Triassic, Jurassic, and Cretaceous zones
- Move around each 5x5 survey map with the arrow controls or by clicking sectors on the survey map
- Use `Scan` for hints about nearby dinosaurs
- Use `Photo` when a dinosaur enters the scene
- Open the `Field Guide` to see captured species fill in from locked silhouettes to colored entries, or reset the expedition from the guide header
- Use arrow keys to move, `S` to scan, and `P` to take a photo
- Start from the launch overlay to begin the survey and unlock procedural jungle/river ambience
- `Jurassic / Shadow Grove` now uses fixed-camera raster plates and a sprite strip for Brachiosaurus instead of the procedural scene renderer

## Asset Workflow

Regenerate the authored slice assets with:

```sh
node scripts/generate_authored_assets.js
```

## Good next steps

- Add more authored rooms and dinosaur strips so the fallback renderer becomes unnecessary
- Replace the generated raster art with Blender renders or painted-over plates
- Add point-and-click hotspot movement instead of direct grid controls
- Add voiced facts, ambient loops, and better encounter timing
- Capture scene thumbnails instead of only unlocking species entries
- Expand the field guide with narrated facts and kid-friendly trivia
