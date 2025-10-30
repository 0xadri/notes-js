
-------------------------------------------------------

# TODO

The calc() function
The difference between flex-grow, flex-shrink, flex-basis
CSS Grid basics (grid-template-columns, grid-template-rows)
Grid alignment (justify-items, align-content)
The difference between auto-fit and auto-fill in grid
Orientation queries (@media (orientation: portrait))

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
 - Relative to the root element font-size (font-size in <html>) - not the parent.
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

# 



-------------------------------------------------------

# 



-------------------------------------------------------

# 



-------------------------------------------------------

# 

