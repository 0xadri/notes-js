
-------------------------------------------------------

# Mobile-First Responsive Websites: Best Practices By Category ?

1. Layout & Structure
2. Media Queries
3. Typography
4. Images & Media
5. Navigation
6. Performance
7. Forms and Inputs
8. Accessibility
9. Interactions & Animations
10. Content Strategy
11. Testing
12. Progressive Enhancement

**1. Layout & Structure**

Use a mobile-first approach
- Start with small screens, then progressively enhance with media queries.
- Base layout should work even without media queries.

Flexible grid systems
- Use CSS `Grid`/`Flexbox` for adaptive layouts.
- Avoid `fixed-width` containers; use `percentages`, `fr`, or `minmax()`.

Consistent spacing & modular scale
- Define spacing tokens (e.g., `4`, `8`, `12`, `16px`).
- Use responsive units like `rem`, `em`, `vw`, `vh`.

Avoid horizontal scrolling
- Apply overflow-x:hidden sparingly; fix root cause instead (fixed-width content, large images).

**2. Media Queries**

Use `min-width` (mobile-first)

```css
@media (min-width: 600px) { ... } 
@media (min-width: 900px) { ... }
```

Limit the number of breakpoints
- Add breakpoints based on design breaking, not device sizes.
- 3–5 well-chosen breakpoints is typical.

Use container queries when appropriate
- Style components based on available space—not the screen size.

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

TODO



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

# Where Can You Use rem ?

You can use `rem` for any CSS attribute value that's for a size and it's always relative to the font size on HTML tag.

 - Anywhere CSS expects a length or size value: `padding`, `margin`, `width`, `height`, `font-size`, `border-width`, `border-radius`, `gaps`, `transforms`, `shadows`, etc.
 
 - Always relative to the root element’s (`<html>`) font size

-------------------------------------------------------

# Isn't It Weird To Use rem on layout elements (i.e. padding, margin, width)?

Tying spacing and sizing to a font size may seem odd at first but it has several advantages
- Predictable Design
- Consistency Across the Page
- Accessibility / User Scaling

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

# CSS: Flexbox vs Box Model

TODO

-------------------------------------------------------

# What Are The Basics Of Flexbox?

Great for:
- Centering elements easily (both vertically & horizontally)
- Making responsive layouts that adapt to different screen sizes
- Controlling space between items dynamically

Setting `display: flex` on a container makes it a flex container.
 - Its direct children become flex items - only and exclusively its direct children
 - It gives you powerful control over alignment, spacing, and direction.

Essence of flexbox:
| Property          | Description                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `display: flex;`  | Activates Flexbox for the container.                                                                                                                  |
| `flex-direction`  | Main Axis: <br>• `row` (default)<br>• `row-reverse`<br>• `column`<br>• `column-reverse`                                  |
| `justify-content` | Main Axis alignment: <br>• `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items`     | Cross Axis alignment: <br>• `flex-start`, `center`, `flex-end`, `stretch`, `baseline`                            |
| `flex-wrap`       | Wrap Items on multiple lines: <br>• `nowrap` (default)<br>• `wrap`<br>• `wrap-reverse`                                                    |
| `align-content`   | Aligns **multiple lines** (only works when wrapping): <br>• `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `stretch`            |


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

# Does "display: flex" Have An Effect On Non-Direct Elements?

No.

-------------------------------------------------------

# "justify" keyword always targets which axis ?

The main axis.

The `justify-*` properties (like `justify-content`, `justify-items`, and `justify-self`) always target the main axis.

This whether a `flex` or `grid` container.

-------------------------------------------------------

# "align" keyword always targets which axis ?

The cross axis.

The `align-*` properties (like `align-content`, `align-items`, and `align-self`) always target the cross axis.

This whether a `flex` or `grid` container.



-------------------------------------------------------

# Why Nest Elements With "display: flex" ?

Common practice giving more control over layout at multiple levels, whenever different groups need different flex behaviors.

Example:

A top level element stacks its direct children vertically, and for its direct children: one arranges its own direct children horizontally

```html
<div class="card">
  <div class="card-header">
    <h2>Title</h2>
    <button>Action</button>
  </div>
  <div class="card-body">
    <p>Some text here.</p>
    <div class="buttons">
      <button>Yes</button>
      <button>No</button>
    </div>
  </div>
</div>
```

```css
.card {
  display: flex;
  flex-direction: column; /* stack header and body vertically */
  gap: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between; /* title left, button right */
  align-items: center;
}

.buttons {
  display: flex;
  gap: 0.5rem; /* spacing between Yes and No buttons */
}
```

-------------------------------------------------------

# Flexbox Challenge: Two Elements On Each Side Of The Screen

Put one Image on the left side and the text on the right side, positioned in the vertically in the middle.


## Solution

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

# Flexbox Challenge: Center Vertically and Horizontally

Create a layout where a small box is perfectly centered both horizontally and vertically inside the browser window.
- Use only Flexbox (no absolute positioning).
- The box should stay centered even if the window is resized.

HTML below. Create the CSS.

```html
<div class="container">
  <div class="box">Centered</div>
</div>
```
    
## Solution

```css
.container {
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}
.box {
  width: 150px;
  height: 80px;
  background-color: aqua;
}
```

-------------------------------------------------------

# Flexbox Challenge: Navigation Bar Layout

Build a navigation bar that includes:
- A logo on the left
- Navigation links on the right
- Links spaced evenly with a small gap
- Bonus: On smaller screens, stack the logo and links vertically.

HTML below. Create the CSS.

```html
<nav class="navbar">
  <div class="logo">MySite</div>
  <ul class="nav-links">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

## Solution

todo

-------------------------------------------------------

# Flexbox Challenge: Equal-Height Cards

Create a section with three cards in a row.
- Each card should have a different amount of text.
- All cards should have equal height, aligned neatly in one row.
- When the screen gets small, the cards should stack vertically.

## Solution

todo

-------------------------------------------------------

**TODO**

- The calc() function
- The difference between flex-grow, flex-shrink, flex-basis
- CSS Grid basics (grid-template-columns, grid-template-rows)
- Grid alignment (justify-items, align-content)
- The difference between auto-fit and auto-fill in grid
- Orientation queries (@media (orientation: portrait))
