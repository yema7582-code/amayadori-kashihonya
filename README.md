# 雨宿りの貸本屋 — web VN prototype

Plain HTML/JS/CSS, no build step. Placeholder art is drawn with CSS (colored gradients + silhouettes); audio is silent stubs.

## Run
Serve the folder (`python3 -m http.server`) and open `index.html`. Opening via `file://` also works through `scenes.bundle.js` (regenerate with `./build.sh`).

## Adding / editing scenes
- Scene files live in `scenes/*.md`; the play order is `scenes` in `game.json`. Drop a new file in and add it to the list.
- Scenes 02–10 and the endings are **stubs** generated from outline.md (marked `[STUB]`); replace them with the writer's scripts.
- Writer tags: `[bg id]` `[show char expr]` `[hide]` `[bgm id]` `[se id]` `[label x]` `[jump x]` `[flag NAME +1]` (also `-1`, `= 1`), `[choice]` … `- "text" -> label` … `[/choice]`, `Name: line`.
- Engine extensions used by stubs: `[if EXPR -> label]`, `[ending]` (picks the ending from game.json), `[title text]` (ending card), `[end]` (back to title).

## Ending logic (data-driven)
`game.json > endings` is checked top to bottom; the first `when` expression that is true wins, else `defaultEnding` (B). Expressions are JS over the flag names, e.g. `trust_shiori >= 3 && found_stamp`.

Controls: click / Space / Enter to advance, mouse wheel up = backlog, Esc closes menus.
