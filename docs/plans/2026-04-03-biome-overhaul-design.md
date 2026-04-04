# Biome Overhaul Design

## Goal
Replace the 6 generic shared biomes with 15 era-specific biomes that are historically accurate, visually distinct, and render well at 160×100 pixel-art resolution.

## Biome Definitions

### Triassic (hot, arid, Pangaea)
- **desert-scrub** — Red-brown terrain, low scrubby bushes, mesa silhouettes, heat shimmer
- **volcanic** — Dark smoky sky, black ground, jagged rocks, orange glow, smoke wisps
- **conifer-oasis** — Green patch in arid surroundings, tall primitive conifers, water pool
- **river-delta** — Brown river across midground, horsetails on banks, muddy terrain
- **salt-flat** — Pale cream ground, harsh sky, almost no vegetation, cracked texture

### Jurassic (lush, humid, peak dinos)
- **fern-prairie** — Golden-green ground, tall conifers with orange trunks + triangular canopies, open spacious feel (matches original game screenshot)
- **conifer-forest** — Dense tall trunks, filtered light, mossy floor, cathedral feel
- **cycad-grove** — Cycads with palm-like fronds, tree ferns, warm tropical tones
- **lagoon** — Calm blue-green water, sandy shore, conifers in background silhouette
- **swamp** — Dark murky water, fallen logs, dense ferns, fog/mist

### Cretaceous (first flowers, most modern)
- **flowering-meadow** — Open grassland, wildflower color pops, broadleaf trees with round canopies
- **redwood-forest** — Massive dark trunks, deep shade, fern understory, imposing
- **coastal-plain** — Low rolling terrain, ocean on horizon, wide sky, mixed vegetation
- **chalk-cliff** — White cliff face, sparse grass on top, ocean beyond
- **river-valley** — Winding river, lush broadleaf banks, rolling hills

## World Maps (5×5 grids)

### Triassic
```
volcanic        volcanic        desert-scrub    desert-scrub    salt-flat
volcanic        desert-scrub    desert-scrub    conifer-oasis   river-delta
desert-scrub    desert-scrub    conifer-oasis   conifer-oasis   river-delta
salt-flat       desert-scrub    conifer-oasis   river-delta     river-delta
salt-flat       salt-flat       desert-scrub    river-delta     conifer-oasis
```
- Coelophysis → desert-scrub [1,1]
- Plateosaurus → conifer-oasis [3,3]
- Postosuchus → river-delta [4,1]

### Jurassic
```
fern-prairie    fern-prairie    conifer-forest  lagoon          lagoon
fern-prairie    fern-prairie    conifer-forest  conifer-forest  lagoon
swamp           fern-prairie    fern-prairie    conifer-forest  cycad-grove
swamp           swamp           fern-prairie    cycad-grove     cycad-grove
lagoon          swamp           fern-prairie    cycad-grove     conifer-forest
```
- Stegosaurus → fern-prairie [0,1]
- Brachiosaurus → conifer-forest [3,1]
- Allosaurus → swamp [1,3]

### Cretaceous
```
redwood-forest  redwood-forest  flowering-meadow coastal-plain   coastal-plain
redwood-forest  flowering-meadow flowering-meadow flowering-meadow coastal-plain
chalk-cliff     flowering-meadow river-valley    flowering-meadow redwood-forest
chalk-cliff     chalk-cliff     river-valley    redwood-forest  redwood-forest
coastal-plain   chalk-cliff     flowering-meadow redwood-forest  coastal-plain
```
- Parasaurolophus → river-valley [2,2]
- Triceratops → coastal-plain [4,0]
- Tyrannosaurus → redwood-forest [0,1]

## Rendering Approach
- All biomes rendered procedurally on canvas at 480×300 logical resolution
- Downsampled to 160×100 pixel buffer for chunky pixel-art look
- Upscaled to display with nearest-neighbor (image-rendering: pixelated)
- Each biome has unique palette + unique drawing elements (tree shapes, terrain features, sky mood)
- Dinosaurs with authored sprites use hybrid mode (sprite overlay on procedural background)

## Dinosaur Coordinate Changes
Each dino has exactly 1 coordinate (down from 2). No two dinos are adjacent on the grid.
