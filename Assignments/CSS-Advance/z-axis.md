# CSS Z-Axis Practice Assignments

## Assignment 1: Layered Cards

**Objective:**  
Create a set of 5 overlapping cards using absolute positioning. Use `z-index` to control which card appears on top.  
- Each card should have a different color and a label (Card 1, Card 2, ...).
- On hover, bring the hovered card to the front.

---

## Assignment 2: Modal vs. Overlay

**Objective:**  
Build a modal popup with a semi-transparent overlay.  
- The overlay should cover the entire page (`z-index: 10`).
- The modal should appear above the overlay (`z-index: 20`).
- Add a fixed header (`z-index: 30`) that always stays above both.

---

## Assignment 3: Dropdown Navigation

**Objective:**  
Create a navigation bar with dropdown menus.  
- The dropdown should appear above other content using `z-index`.
- Add a sidebar that can slide in and overlaps the dropdown (test z-index stacking).
- Make sure the dropdown is always visible above the sidebar.

---

## Assignment 4: Image Gallery with Tooltips

**Objective:**  
Design an image gallery grid.  
- Each image shows a tooltip on hover.
- Tooltips must appear above all images and other elements using `z-index`.
- Add a floating button that should always be on top, even above tooltips.

---

## Assignment 5: Complex Stacking Context

**Objective:**  
Create a layout with nested stacking contexts:  
- Use positioned elements inside containers with their own `z-index`.
- Demonstrate how stacking contexts affect child elements.
- Add a notification banner that should always be on top, regardless of nesting.

---

**Tips:**  
- Use `position: relative`, `absolute`, and `fixed` as needed.
- Experiment with different `z-index` values.
- Test your layouts by adding/removing elements and changing their stacking order.
