# SpendWise Dashboard

## 📊 Project Overview

SpendWise is a responsive personal finance dashboard built using HTML and CSS.

The project provides a visual dashboard for tracking spending across different financial categories such as Food, Transport, Rent, Entertainment, Savings, and Utilities.

This project focuses on creating a clean and responsive dashboard layout using modern CSS techniques, including CSS Grid, Flexbox, CSS custom properties, responsive design, and micro-interactions.

---

## 🚀 Features

* Responsive dashboard layout
* Sidebar navigation
* Dashboard header
* Six financial category cards
* CSS Grid for page and card layouts
* Flexbox for component layouts
* CSS custom properties for the color theme
* Responsive mobile layout below 768px
* Hover animations on cards
* Keyboard focus states
* Dark theme using `prefers-color-scheme`
* No JavaScript required

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Media Queries

---

## 📁 Project Structure

```text
spendwise-dashboard/
│
├── index.html
├── style.css
└── README.md
```

---

## 📄 `index.html`

The `index.html` file contains the structure of the SpendWise dashboard.

It includes:

* Sidebar navigation
* Dashboard header
* Main dashboard content
* Six financial category cards

---

## 🎨 `style.css`

The `style.css` file contains all the styling and layout rules.

It includes:

* CSS Grid
* Flexbox
* CSS custom properties
* Responsive design
* Hover effects
* Keyboard focus effects
* Dark theme

---

## 🧱 CSS Grid

CSS Grid is used for the overall dashboard layout.

```css
.dashboard {
    display: grid;
    grid-template-columns: 240px 1fr;
}
```

This creates a sidebar and a main content area.

CSS Grid is also used to arrange the six financial cards.

```css
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

---

## 📦 Flexbox

Flexbox is used inside different parts of the dashboard.

For example, the header uses Flexbox:

```css
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

Flexbox is also used for:

* Sidebar navigation
* Header content
* User information
* Card content
* Card footer

---

## 🎨 CSS Custom Properties

The color palette is defined using CSS variables:

```css
:root {
    --brand-color: #2563eb;
    --accent-color: #10b981;
    --surface-color: #ffffff;
    --background-color: #f4f7fb;
    --primary-text: #1f2937;
    --secondary-text: #6b7280;
}
```

Using CSS variables makes the design easier to maintain and allows the theme colors to be changed from one location.

---

## 📱 Responsive Design

The dashboard becomes a single-column layout on screens smaller than 768px.

```css
@media (max-width: 768px) {
    .dashboard {
        grid-template-columns: 1fr;
    }

    .cards {
        grid-template-columns: 1fr;
    }
}
```

The responsive design was tested using the browser's DevTools Device Toolbar.

---

## ✨ Card Micro-interactions

The financial cards have hover and keyboard focus effects.

The transition takes 200 milliseconds:

```css
.card {
    transition:
        transform 200ms ease,
        box-shadow 200ms ease;
}
```

The hover effect moves the card slightly upward:

```css
.card:hover {
    transform: translateY(-5px);
}
```

Keyboard users can focus on the cards because each card has:

```html
tabindex="0"
```

The focused card receives a visible outline.

---

## 🌙 Dark Theme

The project includes a dark theme using the user's system preference:

```css
@media (prefers-color-scheme: dark)
```

The dark theme changes the CSS custom properties without rewriting the entire stylesheet.

---

## 💰 Financial Categories

The dashboard contains six financial categories:

| Category      | Monthly Amount |
| ------------- | -------------: |
| Food          |      KSh 8,500 |
| Transport     |      KSh 5,200 |
| Rent          |     KSh 25,000 |
| Entertainment |      KSh 3,500 |
| Savings       |     KSh 12,000 |
| Utilities     |      KSh 4,800 |

The financial information is static and is used to demonstrate the dashboard's visual structure.

---

## 🎯 Project Goal

The goal of this project is to create the foundation of a personal finance dashboard while practicing modern CSS layout techniques.

Future versions could include:

* Adding transactions
* Tracking budgets
* Creating spending reports
* Setting savings goals
* Displaying financial charts
* Connecting to a backend
* User authentication

---

## 👨‍💻 Author

**Mohamud Abdullahi**
