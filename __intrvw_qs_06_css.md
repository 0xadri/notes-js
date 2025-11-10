
-------------------------------------------------------

# How do you use CSS Variables?

CSS Variables = Custom Properties

Global variables - let you store reusable values i.e. colors, sizes, or fonts
Live in the DOM
Can be read or changed at runtime via JavaScript.

Make your CSS cleaner, easier to maintain, and dynamic (you can even change them with JavaScript).

todo: pros and cons?

Example Definition:

```css
:root {
  --main-color: #3498db;
  --text-color: #333;
  --padding: 1rem;
}
```

Using `:root` so variable are available everywhere. Variables must start with `--`.

Example Usage:

```css
button {
  background-color: var(--main-color);
  color: var(--text-color);
  padding: var(--padding);
}
```

Example Usage If Overriding:

```css
:root {
  --main-color: #3498db;
}

.dark-theme {
  --main-color: #222;
}

button {
  background-color: var(--main-color);
}
```

Example Usage If JavaScript Dynamic Change:

`document.documentElement.style.setProperty('--main-color', '#e74c3c');`

-------------------------------------------------------

# How does CSS work in React?

You write CSS inside JavaScript files using libraries or inline style objects:

Flavours: 
 1. CSS Modules
 2. Styled-Components
 3. Emotion
 4. Inline Styles

Recommendation:
- For most modern React apps: → Emotion or Styled-Components
- For simplicity & performance: → CSS Modules
- For quick prototypes or inline tweaks: → Inline styles

| Approach              | CSS Features | Dynamic Styles | Build Overhead | Runtime Cost | Theming | Best For                         |
| --------------------- | ------------ | -------------- | -------------- | ------------ | ------- | -------------------------------- |
| **Styled-Components** | ✅ Full       | ✅ Yes         | Medium         | Medium       | ✅ Yes   | Design systems                   |
| **CSS Modules**       | ✅ Full       | ❌ No          | Low            | None         | ❌ No    | Simple/performant apps           |
| **Emotion**           | ✅ Full       | ✅ Yes         | Medium         | Low-Medium   | ✅ Yes   | Complex apps needing flexibility |
| **Inline Styles**     | ❌ Limited    | ✅ Yes         | None           | Medium-High  | ❌ No    | Quick prototypes                 |


**CSS Modules:**

Type: CSS files with locally scoped class names.

```css
import styles from './Button.module.css';

function Button() {
  return <button className={styles.primary}>Click me</button>;
}
```

Pros:
- Simple — still uses real CSS files
- No runtime cost; compiled at build time
- Works with preprocessors (SASS/LESS)
- Easy to extract to separate CSS bundles

Cons:
- No dynamic or theme-based styling (everything is static)
- Harder to co-locate logic + styles for complex components

Best for:
- Performance-sensitive or static-style apps (e.g. marketing sites, simple React apps).

**Styled-Components:**

Type: CSS-in-JS

```javascript
import styled from 'styled-components';

const Button = styled.button`
  background: #0070f3;
  color: white;
  border-radius: 6px;
`;
```

Pros:
- True CSS syntax (supports nesting, media queries, pseudo-selectors)
- Automatic unique class names (no conflicts)
- Theming support via `<ThemeProvider>`
- Good developer experience (autocompletion, syntax highlighting)

Cons:
- Slight runtime overhead (though can be mitigated with Babel plugin)
- Larger bundle size vs CSS Modules
- Server-side rendering (SSR) adds complexity

Best for: 
- Medium-to-large apps with dynamic styling or theming (e.g. dashboards, design systems).

**Emotion:**

Type: CSS-in-JS (like styled-components)

```javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = css({
  background: '#0070f3',
  color: 'white',
  borderRadius: '6px',
});

function Button() {
  return <button css={buttonStyle}>Click me</button>;
}
```

Pros:
- Fast and flexible
- Supports both styled and css prop APIs
- Great TypeScript support
- Can extract critical CSS for SSR

Cons:
- Still adds some runtime cost
- Slightly more complex configuration for SSR setups

**Inline Styles:**

Type: Directly in JSX via `style={{}}`

`<button style={{ background: '#0070f3', color: 'white' }}>Click</button>`

Pros:
- Dead simple
- Dynamic styles (based on props/state)
- No extra tooling

Cons:
- No pseudo-classes or media queries
- No CSS features like keyframes or global selectors
- Poor performance on frequent rerenders

Best for:
- Small prototypes or dynamic one-off styles.

-------------------------------------------------------

# CSS Variables vs CSS-in-JS (react css)


todo

-------------------------------------------------------

# What's box-sizing in CSS?

The `box-sizing` property controls how the browser calculates the total width and height of an element.

1. `content-box` (default)
   - Width/height apply only to the content.
   - Padding and border are added outside of that size.

2. `border-box`
   - Width/height include content + padding + border.
   - Easier for layouts, because the size you set is the actual size.

Why it matters
 - `content-box` → precise control of just the content.
 - `border-box` → predictable layouts (padding and borders don’t break widths).

-------------------------------------------------------

## If you want to include the padding in the width calculation of an HTML element using CSS, which CSS property should you adjust?

Set the `box-sizing` property to `border-box`.

-------------------------------------------------------

# For fonts, what's the difference between em, rem, %, px ?

Rule of thumb: use `rem` (predictable).

`px` = pixels
 - Fixed size. Absolute Unit.
 - 1px = one screen pixel (sort of; it’s device-independent).
 - Doesn’t change if parent font-size or viewport changes.

`rem` (root em)
 - Relative to the root element font-size (font-size in `<html>`) - not the parent.
 - **More predictable**.

`em`
 - Relative to the font-size of the parent element.
 - Scales cumulatively with nesting.

`%` = percent
 - Relative to parent’s font-size.

-------------------------------------------------------

# For width and height, what's the difference between %, vh, vw ?

`px` = pixels
 - Fixed size. Absolute Unit.
 - 1px = one screen pixel (sort of; it’s device-independent).
 - Doesn’t change if parent font-size or viewport changes.

`%` = percent
 - Relative to parent’s box size.
 
`vh` = viewport height
 - Relative to Viewport
 - 1vh = 1% of the viewport height.

`vw` = viewport width
 - Relative to Viewport
 - 1vw = 1% of the viewport width.

Use %/vw/vh for layouts (responsive).

-------------------------------------------------------

# CSS: Flex Box vs Box Model

TODO

-------------------------------------------------------

# The display: flex basics

Setting display: flex on a container makes it a flex container.
 - Its direct children become flex items.
 - It gives you powerful control over alignment, spacing, and direction.

Essence of flexbox:
 1. flex-direction → axis
 2. justify-content → main axis alignment
 3. align-items → cross axis alignment
 4. flex-wrap → multiple lines



1. `flex-direction`: Controls the direction of items.

   - `row` (default) → items go left → right
   - `row-reverse` → right → left
   - `column` → top → bottom
   - `column-reverse` → bottom → top

2. Main Axis vs Cross Axis

   - Main axis = along the **flex-direction**
   - Cross axis = **perpendicular** to the **flex-direction**
   👉 Important because alignment properties use these axes.

3. `justify-content`: Aligns items along the **main axis**.

   - `flex-start` (default)
   - `center`
   - `flex-end`
   - `space-between`
   - `space-around`
   - `space-evenly`

4. `align-items`: Aligns items along the **cross axis**.

   - `stretch` (default)
   - `flex-start`
   - `center`
   - `flex-end`
   - `baseline`

5. `flex-wrap`

   - `nowrap`: (default) items shrink to fit in one line.
   - `wrap`: items move to the next line if needed)
   - `wrap-reverse`

-------------------------------------------------------

# Flex Box: Put Two Divs 

Image on the left side and the text on the right side, positioned in the vertically in the middle.

```css
.container {
  display: flex;
  align-items: center;    /* flex items centered vertically */
  justify-content: center;
}

.gif {
  max-width: 300px;
}

.joke {
  max-width: 400px;
}
```

-------------------------------------------------------

**TODO**

- The calc() function
- The difference between flex-grow, flex-shrink, flex-basis
- CSS Grid basics (grid-template-columns, grid-template-rows)
- Grid alignment (justify-items, align-content)
- The difference between auto-fit and auto-fill in grid
- Orientation queries (@media (orientation: portrait))
