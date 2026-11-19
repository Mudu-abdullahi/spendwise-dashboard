
// ========================================
// SPENDWISE INTERACTIVE DASHBOARD
// ========================================

// 1. SELECT HTML ELEMENTS

const budgetForm = document.querySelector("#budgetForm");
const budgetInput = document.querySelector("#budgetInput");
const budgetDisplay = document.querySelector("#budgetDisplay");

const expenseForm = document.querySelector("#expenseForm");
const categoryInput = document.querySelector("#categoryInput");
const amountInput = document.querySelector("#amountInput");

const expenseDisplay = document.querySelector("#expenseDisplay");
const balanceDisplay = document.querySelector("#balanceDisplay");
const statusMessage = document.querySelector("#statusMessage");
const expenseList = document.querySelector("#expenseList");


// 2. APPLICATION DATA

let monthlyBudget = 0;

let expenses = [];


// 3. FORMAT CURRENCY

function formatCurrency(amount) {
    return `KSh ${amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}


// 4. BUDGET FORM EVENT

budgetForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const budget = Number(budgetInput.value);

    // Validate budget

    if (!Number.isFinite(budget) || budget <= 0) {
        statusMessage.textContent =
            "Please enter a valid budget greater than zero.";
        return;
    }

    monthlyBudget = budget;

    budgetDisplay.textContent = formatCurrency(monthlyBudget);

    budgetInput.value = "";

    updateDashboard();
});


// 5. EXPENSE FORM EVENT

expenseForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const category = categoryInput.value.trim();

    const amount = Number(amountInput.value);

    // Validate expense

    if (!category || !Number.isFinite(amount) || amount <= 0) {
        statusMessage.textContent =
            "Please enter a valid category and expense amount.";
        return;
    }

    // Create expense object

    const expense = {
        id: Date.now() + Math.random(),
        category: category,
        amount: amount
    };

    // Store expense in array

    expenses.push(expense);

    // Clear form

    categoryInput.value = "";
    amountInput.value = "";

    updateDashboard();
});


// 6. CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {

    let total = 0;

    // Process all expense records

    for (let expense of expenses) {

        total += expense.amount;

    }

    return total;
}


// 7. UPDATE DASHBOARD

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance = monthlyBudget - totalExpenses;

    // Update dashboard figures

    expenseDisplay.textContent =
        formatCurrency(totalExpenses);

    balanceDisplay.textContent =
        formatCurrency(remainingBalance);


    // Budget decision making

    if (monthlyBudget === 0) {

        statusMessage.textContent =
            "Please set your monthly budget.";

    } else if (remainingBalance < 0) {

        statusMessage.textContent =
            "You have exceeded your budget!";

    } else if (remainingBalance === 0) {

        statusMessage.textContent =
            "You have used your entire budget.";

    } else if (totalExpenses >= monthlyBudget * 0.8) {

        statusMessage.textContent =
            "Warning! You have used 80% or more of your budget.";

    } else {

        statusMessage.textContent =
            "You are within your budget. Keep saving!";
    }

    // Refresh expense records

    displayExpenses();
}


// 8. DISPLAY EXPENSE RECORDS

function displayExpenses() {

    // Clear previous records

    expenseList.innerHTML = "";

    // Check if array is empty

    if (expenses.length === 0) {

        const message = document.createElement("p");

        message.textContent = "No expenses added yet.";

        expenseList.appendChild(message);

        return;
    }

    // Loop through expenses

    for (let expense of expenses) {

        const expenseItem = document.createElement("div");

        expenseItem.classList.add("expense-item");

        // Expense category

        const category = document.createElement("span");

        category.textContent = expense.category;

        // Expense amount

        const amount = document.createElement("strong");

        amount.textContent = formatCurrency(expense.amount);

        // Delete button

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.type = "button";

        deleteButton.classList.add("delete-expense");

        deleteButton.dataset.id = expense.id;

        // Add elements to expense item

        expenseItem.appendChild(category);

        expenseItem.appendChild(amount);

        expenseItem.appendChild(deleteButton);

        // Add item to webpage

        expenseList.appendChild(expenseItem);
    }
}


// 9. DELETE EXPENSE EVENT

expenseList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-expense")) {

        const expenseId = Number(event.target.dataset.id);

        // Remove selected expense from array

        expenses = expenses.filter(function (expense) {

            return expense.id !== expenseId;

        });

        // Refresh dashboard

        updateDashboard();
    }
});


// 10. INITIAL DASHBOARD DISPLAY

updateDashboard();
