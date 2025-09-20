Create a responsive web layout using Tailwind CSS, starting from a basic structure and advancing to include a navigation bar and reusable components.

---

## Instructions

### 1. **Setup**

- Initialize a new HTML project.
- Install [Tailwind CSS](https://tailwindcss.com/docs/installation) via CDN.

### 2. **Basic Layout**

- Create a basic HTML structure with a `<header>`, `<main>`, and `<footer>`.
- Use Tailwind classes to add margin and padding for spacing.

### 3. **Tailwind Navbar**

- Add a responsive navigation bar at the top.
- Include a logo/title and navigation links (e.g., Home, About, Contact).
- Use Tailwind utilities for layout, spacing, and hover effects.
- Make the navbar mobile-friendly (hamburger menu optional).

### 4. **Tailwind Components**

- Create at least two reusable components (e.g., Card, Button, Alert).
- Use Tailwind classes for styling.
- Demonstrate component usage in the main content area.

### 5. **Advanced Layout**

- Arrange your components in a grid or flex layout.
- Add responsive breakpoints for different screen sizes.
- Use Tailwind’s utility classes for advanced spacing, alignment, and typography.

### 6. **Submission**

- Save your code in `layout.md` with code blocks for HTML and Tailwind snippets.
- Include screenshots or a live link if possible.

---

## Example Structure

```html
<!-- Navbar -->
<nav class="bg-blue-600 p-4 flex justify-between items-center">
    <div class="text-white font-bold text-xl">MySite</div>
    <div class="space-x-4">
        <a href="#" class="text-white hover:underline">Home</a>
        <a href="#" class="text-white hover:underline">About</a>
        <a href="#" class="text-white hover:underline">Contact</a>
    </div>
</nav>

<!-- Main Content -->
<main class="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Card Component Example -->
    <div class="bg-white rounded shadow p-6">
        <h2 class="text-lg font-semibold mb-2">Card Title</h2>
        <p class="text-gray-600">Card content goes here.</p>
        <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Action</button>
    </div>
</main>
```

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Components](https://tailwindcomponents.com/)

---

**Challenge:**  
Add dark mode support using Tailwind’s dark mode utilities.
