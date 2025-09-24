# Website Mini Project Assignment

## Objective

Create a simple product dashboard website using **HTML** and **CSS**. You must organize your code into reusable components: **header**, **dashboard (body)**, and **footer**. Each component should be in its own file and linked properly in `index.html`. The dashboard will display product cards, and the header will have Login/Signup options for navigation.

---

## Folder Structure

```
website_mini_project/
│
├── public/
│   ├── logo/
│   │   ├── logo.png
│   │   └── favicon.ico
│   └── images/
│       └── products/
│           └── apple.png
│
├── index.html
│
├── styles/
│   └── style.css
│
├── header/
│   ├── header.html
│   └── styles/
│       └── header.css
│
├── dashboard/
│   ├── dashboard.html
│   └── styles/
│       └── dashboard.css
│
└── footer/
    ├── footer.html
    └── styles/
        └── footer.css
```

---

## Assignment Tasks

### 1. **Header Component**
- Create `header/header.html` with a logo and navigation links: **Login** and **Signup**.
- Style the header in `header/styles/header.css`.
- Clicking Login/Signup should show a simple alert or navigate to a placeholder page.

### 2. **Dashboard Component**
- Create `dashboard/dashboard.html` to show product cards (e.g., Apple, Banana, etc.).
- Each card should display an image, product name, and a "View Details" button.
- Style the dashboard in `dashboard/styles/dashboard.css`.

### 3. **Footer Component**
- Create `footer/footer.html` with copyright info.
- Style the footer in `footer/styles/footer.css`.

### 4. **Main Page Integration**
- In `index.html`, use HTML `<iframe>` or `<object>` tags to include header, dashboard, and footer.
- Link all CSS files properly in `index.html`.

### 5. **Styling**
- Use CSS to make the website visually appealing:
  - Add hover effects to buttons.
  - Use box-shadow for cards.
  - Make the layout responsive (hint: use Flexbox or Grid).

---

## Hints

- **Linking Components:**  
  Use `<iframe src="header/header.html"></iframe>` in `index.html` to include the header. Do the same for dashboard and footer.
- **CSS Linking:**  
  In each HTML file, link its own CSS file using `<link rel="stylesheet" href="styles/header.css">`.
- **Navigation:**  
  For navigation, use simple JavaScript `alert()` or link to another HTML file.
- **Product Cards:**  
  Use images from `public/images/products/` for your cards.
- **Responsiveness:**  
  Try using `display: flex;` or `display: grid;` for card layouts.

---

## Example: How to Link Components in `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Product Dashboard</title>
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <iframe src="header/header.html" style="width:100%;height:80px;border:none;"></iframe>
  <iframe src="dashboard/dashboard.html" style="width:100%;height:600px;border:none;"></iframe>
  <iframe src="footer/footer.html" style="width:100%;height:60px;border:none;"></iframe>
</body>
</html>
```

---

## Submission

- Submit your complete folder structure.
- Ensure all components are styled and linked correctly.
- Make sure navigation works as described.

---

**Good luck! Make your dashboard look awesome with creative CSS!**