# Assignment: Using Bootstrap and Tailwind CSS Components in Your Project

## 1. Using a Bootstrap Component

### Step 1: Include Bootstrap

Add the Bootstrap CDN link in your HTML `<head>`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

### Step 2: Add a Bootstrap Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">MySite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
        </ul>
    </div>
</nav>
```

---

## 2. Using a Tailwind CSS Component

### Step 1: Include Tailwind CSS

Add the Tailwind CDN link in your HTML `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Step 2: Add a Tailwind Button

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Tailwind Button
</button>
```

---

## 3. Tips

- Use Bootstrap and Tailwind components separately to avoid style conflicts.
- Refer to the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/components/) and [Tailwind documentation](https://tailwindcss.com/docs/components) for more components.

---

**Task:**  
Add both the Bootstrap navbar and the Tailwind button to your project and observe the differences in styling and usage.