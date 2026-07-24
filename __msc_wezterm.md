
-------------------------------------------------------

# Docs

https://wezterm.org/

-------------------------------------------------------	

# 10 things to know when getting started with WezTerm ?

1. `wezterm.lua` config file drives everything. Main place to learn. Usually under `~/.wezterm.lua`.

2. Config uses Lua, not JSON/YAML. Means logic possible: conditions, helper functions, dynamic keymaps.

3. `wezterm show-keys --lua` very useful. Shows active keybindings after config/load.

4. Multiplexing built in. Tabs, panes, workspaces exist without tmux. `leader` key setup common pattern.

5. GPU rendering big feature. Fast, smooth text, ligatures, images, good font shaping. If glitches happen, renderer settings matter.

6. Fonts matter a lot. Set `font`, `font_size`, fallback fonts, Nerd Font if using prompt icons.

7. Copy mode and search strong. Learn keyboard-driven scrollback, selection, regex/search early.

8. Remote support excellent. `wezterm ssh user@host` and built-in domains/workspaces make remote sessions cleaner than plain terminal tabs.

9. Debugging config easy. Run `wezterm start --always-new-process` from shell and check logs/errors when config breaks.

10. Keymaps highly customizable. Best early win: add split pane, close pane, workspace switch, quick launcher, reload config shortcuts.

Good first features to configure:
- color scheme
- font + size
- leader key
- pane splits
- copy/search bindings
- startup window size/padding
- tab title format

