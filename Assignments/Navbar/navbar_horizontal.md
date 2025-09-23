# Horizontal Navigation Bar Assignment

## Task

Create a **horizontal navigation bar** using HTML and CSS.

---

## Example

```html
<!-- HTML -->
<nav>
    <ul class="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```css
/* CSS */
.navbar {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    background: #333;
}

.navbar li {
    margin: 0;
}

.navbar a {
    display: block;
    color: #fff;
    padding: 14px 20px;
    text-decoration: none;
}

.navbar a:hover {
    background: #575757;
}
```

---

## Hints & Help

- Use the `<nav>` tag for navigation sections.
- Use an unordered list (`<ul>`) for menu items.
- Use CSS `display: flex;` on the list to make items horizontal.
- Remove default list styles with `list-style: none;`.
- Style links with padding and background color.
- Use `:hover` to add interactivity.
- Try adding more menu items or icons for practice.
- Experiment with colors and spacing to customize your navbar.

---

**Challenge:**  
Make the navigation bar responsive for mobile screens using media queries.
