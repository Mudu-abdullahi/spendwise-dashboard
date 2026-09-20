# SpendWise Dashboard

SpendWise is a simple personal budgeting dashboard designed to help users set a monthly budget, record expenses, and monitor their remaining balance.

This project started as a static dashboard and was improved during Week 6 by adding JavaScript functionality, user interactions, arrays, loops, conditional statements, and DOM manipulation.

---

## 🚀 Features

* Set a monthly budget
* Add expense records
* Select expense categories
* Calculate total expenses automatically
* Calculate remaining balance
* Display budget status
* Show expense records directly on the webpage
* Update the dashboard without refreshing the page
* Responsive dashboard layout
* Dark mode support based on system preference

---

## 🆕 Week 6 Improvements

This week, SpendWise was changed from a mostly static dashboard into an interactive web application.

The main improvements were:

1. Added JavaScript functionality
2. Added conditional statements
3. Added arrays for storing expenses
4. Added loops for processing expense records
5. Added DOM manipulation
6. Added event listeners
7. Added forms for user input
8. Added automatic calculations
9. Added dynamic expense records
10. Connected user actions to webpage updates

---

# 🧠 JavaScript Concepts Used

## 1. Variables

Variables are used to store information that the application needs.

For example:

```javascript
let monthlyBudget = 0;

let expenses = [];
```

`monthlyBudget` stores the user's budget.

`expenses` stores all expense records.

The project also uses `const` for values that do not need to be reassigned.

---

## 2. Arrays

An array is used to store multiple expense records.

```javascript
let expenses = [];
```

When the user adds an expense, the expense is added to the array:

```javascript
expenses.push(expense);
```

Each expense is stored as an object:

```javascript
const expense = {
    category: category,
    amount: amount
};
```

For example, the array can contain:

```javascript
[
    {
        category: "Food",
        amount: 5000
    },
    {
        category: "Transport",
        amount: 3000
    }
]
```

This makes it possible for SpendWise to manage multiple expense records.

---

## 3. Conditional Statements

Conditional statements are used to determine the user's budgeting situation.

```javascript
if (monthlyBudget === 0) {

    statusMessage.textContent =
        "Please set your monthly budget.";

} else if (remainingBalance > 0) {

    statusMessage.textContent =
        "You are within your budget.";

} else if (remainingBalance === 0) {

    statusMessage.textContent =
        "You have used your entire budget.";

} else {

    statusMessage.textContent =
        "You have exceeded your budget.";
}
```

The program checks different conditions and displays an appropriate message.

This allows SpendWise to respond differently depending on the user's financial situation.

---

## 4. Loops

A `for...of` loop is used to process all expense records.

```javascript
for (let expense of expenses) {

    total += expense.amount;

}
```

The loop goes through every expense in the array and adds its amount to the total.

Loops make it possible to process many expense records without writing separate code for every expense.

---

## 5. Functions

Functions are used to organize the JavaScript code into reusable sections.

### Calculate Total Expenses

```javascript
function calculateTotalExpenses() {

    let total = 0;

    for (let expense of expenses) {

        total += expense.amount;

    }

    return total;
}
```

This function calculates the total amount spent.

### Update Dashboard

```javascript
function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance =
        monthlyBudget - totalExpenses;

}
```

This function updates the dashboard whenever the data changes.

### Display Expenses

```javascript
function displayExpenses() {

    // Display expense records on the webpage

}
```

This function displays the user's expense records.

Using functions keeps the code organized and reusable.

---

# 🌐 DOM Manipulation

DOM manipulation allows JavaScript to change the webpage.

SpendWise selects HTML elements using:

```javascript
document.querySelector()
```

For example:

```javascript
const budgetDisplay =
    document.querySelector("#budgetDisplay");
```

JavaScript then changes the content displayed on the webpage:

```javascript
budgetDisplay.textContent =
    `KSh ${monthlyBudget}`;
```

The project also creates new HTML elements:

```javascript
const expenseItem =
    document.createElement("div");
```

A CSS class is added:

```javascript
expenseItem.classList.add("expense-item");
```

Finally, the new element is added to the webpage:

```javascript
expenseList.appendChild(expenseItem);
```

This allows the expense list to be generated dynamically.

---

# 🖱️ Event Listeners

SpendWise uses event listeners to respond to user actions.

For the budget form:

```javascript
budgetForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

    }
);
```

For the expense form:

```javascript
expenseForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

    }
);
```

The event listener detects when the user submits a form.

The JavaScript then processes the information and updates the dashboard.

---

# 🔄 How SpendWise Works

The application follows this flow:

```text
User enters information
        ↓
Form is submitted
        ↓
JavaScript receives the data
        ↓
Expense is added to the array
        ↓
JavaScript calculates totals
        ↓
Conditional statements determine the status
        ↓
DOM is updated
        ↓
User sees the new information
```

This means the dashboard can update without the user manually refreshing the webpage.

---

# 💰 Example

Suppose the user sets:

```text
Monthly Budget = KSh 50,000
```

Then adds:

```text
Food       = KSh 5,000
Transport  = KSh 3,000
Rent       = KSh 20,000
```

SpendWise calculates:

```text
Total Expenses = KSh 28,000

Remaining Balance = KSh 22,000
```

The application then displays:

```text
You are within your budget.
```

If expenses become greater than the budget, the application displays an exceeded-budget message.

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* DOM Manipulation
* JavaScript Arrays
* JavaScript Objects
* JavaScript Functions
* Conditional Statements
* Loops
* Event Listeners

---

# 📁 Project Structure

```text
spendwise-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the SpendWise dashboard and forms.

### `style.css`

Contains the visual design, layout, responsive design, and dark mode.

### `script.js`

Contains the application logic, calculations, arrays, conditions, loops, DOM manipulation, and event handling.

### `README.md`

Contains documentation about the project and the JavaScript concepts used.

---

# 🎨 CSS Features

The dashboard uses several CSS techniques.

## CSS Grid

CSS Grid is used for the main dashboard layout and summary cards.

```css
.dashboard {
    display: grid;
    grid-template-columns: 240px 1fr;
}
```

The summary cards also use Grid:

```css
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

## Flexbox

Flexbox is used for navigation, headers, forms, and expense records.

## Responsive Design

Media queries allow the dashboard to work on smaller screens such as tablets and mobile devices.

## CSS Variables

Custom properties are used to make the design easier to maintain.

```css
:root {
    --brand-color: #2563eb;
    --surface-color: #ffffff;
    --background-color: #f4f7fb;
}
```

---

# 🧩 Challenges and Solutions

## Challenge 1: Updating the page automatically

At first, information entered by the user was not displayed dynamically.

### Solution

DOM manipulation was used to update HTML elements with JavaScript.

```javascript
element.textContent = value;
```

---

## Challenge 2: Managing multiple expenses

A single variable would not be enough to store many expenses.

### Solution

An array was created:

```javascript
let expenses = [];
```

Each expense is then added using:

```javascript
expenses.push(expense);
```

---

## Challenge 3: Calculating all expenses

The application needed to calculate the total of multiple expense records.

### Solution

A `for...of` loop was used to process every expense.

```javascript
for (let expense of expenses) {

    total += expense.amount;

}
```

---

## Challenge 4: Showing different budget messages

The dashboard needed to respond differently when the user was under, at, or over budget.

### Solution

Conditional statements were used:

```javascript
if
else if
else
```

This allows the application to display different messages based on the remaining balance.

---

# 📚 What I Learned

Through this project, I practiced:

* Creating and using JavaScript variables
* Working with arrays
* Working with objects
* Writing functions
* Using loops
* Using conditional statements
* Selecting HTML elements
* Changing webpage content
* Creating HTML elements with JavaScript
* Handling form events
* Preventing default form submission
* Connecting JavaScript logic with the DOM

The main lesson from this project is that JavaScript can make a webpage interactive by connecting **user actions, application data, logic, and the webpage interface**.

---

# 🔮 Future Improvements

Possible future improvements include:

* Delete expense records
* Edit expense records
* Save data using Local Storage
* Add expense dates
* Add monthly expense charts
* Add category-based spending analysis
* Add savings goals
* Add authentication
* Connect the application to a backend
* Store user data in a database

---

# 👨‍💻 Author

**Mohamud Abdullahi**

SpendWise Dashboard — Week 6 JavaScript Project


