# Dino Safari Tribute

A small browser prototype inspired by the 1996 `Dinosaur Safari` loop: move through prehistoric regions, wait for a dinosaur to appear, and photograph it into a field guide.

## What is in here

- `index.html`: the single-page shell and UI
- `styles.css`: retro control panel styling and responsive layout
- `app.js`: map data, encounter logic, scanner, photo capture, and generated SVG dinosaur art

## Running it

No build step is required. Open [`index.html`](/Users/anderskravis/code/dinosafari/index.html) directly in a browser, or serve the folder with a simple static server if you prefer.

Example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Current gameplay

- Switch between Triassic, Jurassic, and Cretaceous zones
- Move around each 5x5 survey map
- Use `Scan` for hints about nearby dinosaurs
- Use `Photo` when a dinosaur enters the scene
- Open the `Field Guide` to see captured species and locked entries
- Use arrow keys to move, `S` to scan, and `P` to take a photo

## Good next steps

- Replace generated SVG dinosaurs with sprite sheets or prerendered scenes
- Add point-and-click hotspot movement instead of direct grid controls
- Add voiced facts, ambient loops, and better encounter timing
- Capture scene thumbnails instead of only unlocking species entries
- Expand the field guide with narrated facts and kid-friendly trivia
