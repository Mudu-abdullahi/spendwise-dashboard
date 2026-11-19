# SpendWise – Interactive Budget Dashboard

## Project Overview

SpendWise is a personal budgeting application designed to help users manage monthly budgets, record expenses, monitor spending and track their remaining balance.

## Improvements Made This Week

- Added JavaScript functionality to the budgeting application.
- Implemented monthly budget management.
- Added expense recording using JavaScript arrays.
- Implemented automatic expense calculations.
- Added budget warnings using conditional statements.
- Implemented dynamic dashboard updates using DOM manipulation.
- Added event listeners for budget and expense forms.
- Added expense deletion functionality.
- Added input validation to prevent invalid financial records.

## JavaScript Concepts Used

### 1. Conditional Statements

The application uses `if`, `else if` and `else` to evaluate budgeting situations.

Examples include:
- Checking whether a budget has been entered.
- Detecting when expenses exceed the budget.
- Warning users when they have used at least 80% of their budget.
- Informing users when they have used their entire budget.

### 2. Arrays

The application uses an array called `expenses` to store multiple expense records.

Each expense contains:
- ID
- Category
- Amount

The `push()` method adds new expenses, while `filter()` removes selected records.

### 3. Loops

A `for...of` loop processes expense records to calculate total spending and display individual expenses.

### 4. DOM Manipulation

The application uses JavaScript DOM methods to update webpage content dynamically.

Examples:
- `textContent`
- `document.createElement()`
- `appendChild()`
- `innerHTML`

### 5. Event Handling

The application uses event listeners to respond to user interactions.

Examples:
- Submitting the budget form.
- Adding new expenses.
- Deleting existing expenses.

The `preventDefault()` method prevents forms from refreshing the page.

## Challenges Encountered and Solutions

**Challenge 1: Calculating multiple expenses**

Solution: Used arrays and loops to store and calculate expense records.

**Challenge 2: Updating dashboard information**

Solution: Created an `updateDashboard()` function to refresh financial figures whenever the data changes.

**Challenge 3: Preventing invalid entries**

Solution: Added input validation using conditional statements.

**Challenge 4: Managing expense records**

Solution: Used the array `filter()` method to remove selected expenses and recalculate totals.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Author

Mudu Abdullahi

## Project Repository

GitHub: https://github.com/Mudu-abdullahi/spendwise-dashboard