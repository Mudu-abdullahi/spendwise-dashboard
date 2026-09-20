
# SpendWise Dashboard

## 📊 Project Overview

SpendWise is a personal finance dashboard built using HTML, CSS, and JavaScript.

The project helps users understand their monthly budget by collecting information about their budget and expenses, calculating total spending, and determining the remaining balance.

The project was developed in stages. The initial version focused on the visual dashboard using HTML and CSS. JavaScript was then added to transform the dashboard into a basic interactive budgeting application.

---

## 🚀 Features

- Responsive dashboard layout
- Sidebar navigation
- Dashboard header
- Six financial categories
- CSS Grid layout
- Flexbox layout
- CSS custom properties
- Responsive design
- Hover and keyboard focus effects
- Dark theme
- JavaScript user input
- Budget calculations
- Reusable JavaScript functions
- Budget status checking
- Console-based financial report

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- CSS Custom Properties
- CSS Media Queries

---

## 📁 Project Structure

```text
spendwise-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
````

---

# JavaScript Foundation

The JavaScript part of SpendWise demonstrates basic programming concepts including variables, data types, user input, calculations, functions, conditional statements, and console output.

---

## 1. JavaScript Setup

The JavaScript file is called:

```text
script.js
```

It is linked to the HTML file using:

```html
<script src="script.js"></script>
```

This allows the browser to load and execute the JavaScript code when the webpage runs.

---

## 2. Variables

Variables are used to store important budgeting and expense information.

For example:

```javascript
let monthlyBudget = Number(
    prompt("Enter your monthly budget:")
);

let foodExpense = Number(
    prompt("Enter your food expense:")
);
```

The variables store values that are entered by the user.

The project uses variables for:

* Monthly budget
* Food expenses
* Transport expenses
* Rent
* Entertainment expenses
* Utilities expenses
* Total expenses
* Remaining balance

---

## 3. Data Types

The main data type used for calculations in this project is the **number**.

User input is initially received as text when using `prompt()`.

For example:

```javascript
prompt("Enter your monthly budget:");
```

The input is converted into a number using:

```javascript
Number()
```

For example:

```javascript
let monthlyBudget = Number(
    prompt("Enter your monthly budget:")
);
```

This allows the application to perform mathematical calculations using the user's input.

---

## 4. User Input

SpendWise collects budgeting information using JavaScript's `prompt()` function.

The user is asked to enter:

1. Monthly budget
2. Food expense
3. Transport expense
4. Rent expense
5. Entertainment expense
6. Utilities expense

For example:

```javascript
let monthlyBudget = Number(
    prompt("Enter your monthly budget:")
);
```

This makes the application interactive because the user provides the information that will be processed.

---

## 5. Budget Calculations

SpendWise calculates the user's total expenses.

The total is calculated by adding:

* Food
* Transport
* Rent
* Entertainment
* Utilities

The application then subtracts the total expenses from the monthly budget.

The basic calculation is:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

---

## 6. Reusable Functions

Functions are used to organize the budgeting calculations.

### Calculate Total Expenses

```javascript
function calculateTotalExpenses(
    food,
    transport,
    rent,
    entertainment,
    utilities
) {
    return food + transport + rent + entertainment + utilities;
}
```

The `calculateTotalExpenses()` function receives the different expense values and returns their total.

### Calculate Remaining Balance

```javascript
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
```

The `calculateRemainingBalance()` function receives the budget and total expenses and returns the amount remaining.

Using functions makes the code easier to read, organize, maintain, and reuse.

---

## 7. Conditional Statements

The application also checks the user's remaining balance using `if`, `else if`, and `else`.

```javascript
if (remainingBalance > 0) {
    console.log("Status: You are within your budget.");
} else if (remainingBalance === 0) {
    console.log("Status: You have used your entire budget.");
} else {
    console.log("Status: You have exceeded your budget.");
}
```

This allows SpendWise to provide a different message depending on the user's financial result.

---

## 8. Displaying Results

The calculated information is displayed in the browser console.

The application uses `console.log()` to display the results.

Example:

```text
===== SpendWise Budget Report =====
Monthly Budget: KSh 50000
Total Expenses: KSh 47000
Remaining Balance: KSh 3000
Status: You are within your budget.
===================================
```

The console output makes it easy to verify that the calculations are working correctly.

---

# CSS Foundation

The original SpendWise dashboard was created using HTML and CSS.

---

## CSS Grid

CSS Grid is used for the main dashboard layout.

```css
.dashboard {
    display: grid;
    grid-template-columns: 240px 1fr;
}
```

CSS Grid is also used to arrange the financial cards.

```css
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

---

## Flexbox

Flexbox is used inside different components.

For example, the header uses:

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
* Financial cards
* Card content

---

## CSS Custom Properties

The project uses CSS variables to manage colors.

Example:

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

CSS custom properties make the design easier to maintain and allow the theme colors to be changed from one location.

---

## Responsive Design

The dashboard becomes a single-column layout on smaller screens.

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

The responsive layout was tested using browser Developer Tools and the Device Toolbar.

---

## Card Micro-interactions

The financial cards include hover and keyboard focus effects.

The transition uses a duration of 200 milliseconds.

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

Cards also support keyboard focus using:

```html
tabindex="0"
```

---

## 🌙 Dark Theme

The project includes a dark theme using the user's system preference.

```css
@media (prefers-color-scheme: dark) {
    :root {
        /* dark theme variables */
    }
}
```

The dark theme changes the CSS custom properties without requiring a separate stylesheet.

---

# 💰 Financial Categories

The dashboard contains six financial categories.

| Category      | Example Monthly Amount |
| ------------- | ---------------------: |
| Food          |              KSh 8,500 |
| Transport     |              KSh 5,200 |
| Rent          |             KSh 25,000 |
| Entertainment |              KSh 3,500 |
| Savings       |             KSh 12,000 |
| Utilities     |              KSh 4,800 |

The amounts displayed in the visual dashboard are static examples.

The JavaScript budgeting calculations collect expense values from the user through `prompt()`.

---

# 🧪 How to Test the Application

1. Open `index.html` in a web browser.
2. JavaScript prompts will appear.
3. Enter your monthly budget.
4. Enter your food expense.
5. Enter your transport expense.
6. Enter your rent.
7. Enter your entertainment expense.
8. Enter your utilities expense.
9. Open browser Developer Tools.
10. Select the **Console** tab.
11. Check the SpendWise budget report.

Example input:

```text
Monthly Budget: 50000
Food: 8500
Transport: 5200
Rent: 25000
Entertainment: 3500
Utilities: 4800
```

Expected result:

```text
Total Expenses: KSh 47000
Remaining Balance: KSh 3000
Status: You are within your budget.
```

---

# 🎯 Project Goal

The goal of SpendWise is to build a foundation for a personal finance application while practicing HTML, CSS, and JavaScript concepts.

The current JavaScript version focuses on:

* Storing data
* Collecting user input
* Performing calculations
* Creating reusable functions
* Making decisions with conditional statements
* Displaying results in the browser console

---

# 🔮 Future Improvements

Future versions of SpendWise could include:

* Adding transactions
* Saving budget information
* Tracking monthly spending
* Setting savings goals
* Creating financial charts
* Displaying calculations directly on the dashboard
* Adding form inputs instead of browser prompts
* Connecting the application to a backend
* Adding user authentication
* Storing financial data in a database

---

# 👨‍💻 Author

**Mohamud Abdullahi**


