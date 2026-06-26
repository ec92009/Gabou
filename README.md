# Gabou

Static GitHub Pages chooser for Gabou, a luxury handbag concept built around
mushroom and mycelium forms with leather, solid wood, and brass.

## Preview

- Main page: `index.html`
- Public URL after GitHub Pages publishes: `https://ec92009.github.io/Gabou/`
- Visual concept board: `docs/concept-board.png`

## Implemented Directions

1. `Option 1 - Gallery`: museum-grade ivory, black and brass editorial luxury.
2. `Option 2 - Living Atelier`: tactile mycelium workshop with warm leather and wood.
3. `Option 3 - Nocturne`: dark cinematic boutique with black lacquer and copper-brass light.
4. `Option 4 - Biome`: forest-floor organic with sage green leather, cork oak base, and matte brass.
5. `Option 5 - Brut`: minimalist architectural brutalism with raw cedar frame, black leather, and steel.
6. `Option 6 - Lumina`: futuristic bioluminescent resin with glowing mycelium filaments and titanium.

## Controls

- Top chooser switches complete page looks.
- Each page look includes its own FR/EN and day/night controls.
- Choices persist locally in `localStorage`.

## Local Preview

```sh
python3 -m http.server 8125
```

Then open `http://localhost:8125/`.

## Files

- `index.html`: static chooser and three page looks.
- `styles.css`: visual systems, responsive layout, and theme variants.
- `script.js`: option, language, and theme state.
- `assets/`: generated product visuals and Gabou mark.
- `SUMMARY.md`: conversation and implementation summary.
- `BACKLOG.md`: next numbered work items.
