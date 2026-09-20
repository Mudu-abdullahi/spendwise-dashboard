
// ========================================
// SPENDWISE INTERACTIVE DASHBOARD
// ========================================


// ========================================
// 1. SELECT HTML ELEMENTS
// ========================================

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


// ========================================
// 2. APPLICATION DATA
// ========================================

// Store the user's monthly budget
let monthlyBudget = 0;

// Store expense records in an array
let expenses = [];


// ========================================
// 3. BUDGET FORM EVENT
// ========================================

budgetForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the budget entered by the user
    monthlyBudget = Number(budgetInput.value);

    // Display the budget on the dashboard
    budgetDisplay.textContent = `KSh ${monthlyBudget}`;

    // Update all dashboard information
    updateDashboard();

    // Clear the input field
    budgetInput.value = "";
});


// ========================================
// 4. EXPENSE FORM EVENT
// ========================================

expenseForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get values from the form
    const category = categoryInput.value;
    const amount = Number(amountInput.value);


    // Create an expense record
    const expense = {
        category: category,
        amount: amount
    };


    // Add the expense to the array
    expenses.push(expense);


    // Clear the form
    categoryInput.value = "";
    amountInput.value = "";


    // Update the dashboard
    updateDashboard();
});


// ========================================
// 5. CALCULATE TOTAL EXPENSES
// ========================================

function calculateTotalExpenses() {

    // Start total at zero
    let total = 0;


    // Loop through every expense
    for (let expense of expenses) {

        // Add each expense amount to total
        total += expense.amount;
    }


    // Return the final total
    return total;
}


// ========================================
// 6. UPDATE DASHBOARD
// ========================================

function updateDashboard() {

    // Calculate total expenses
    const totalExpenses = calculateTotalExpenses();

    // Calculate remaining balance
    const remainingBalance = monthlyBudget - totalExpenses;


    // Update total expenses on the page
    expenseDisplay.textContent = `KSh ${totalExpenses}`;


    // Update remaining balance on the page
    balanceDisplay.textContent = `KSh ${remainingBalance}`;


    // ========================================
    // BUDGET CONDITIONS
    // ========================================

    if (monthlyBudget === 0) {

        statusMessage.textContent =
            "Please set your monthly budget.";

    } else if (remainingBalance > 0) {

        statusMessage.textContent =
            "✅ You are within your budget.";

    } else if (remainingBalance === 0) {

        statusMessage.textContent =
            "⚠️ You have used your entire budget.";

    } else {

        statusMessage.textContent =
            "❌ You have exceeded your budget.";
    }


    // Display expense records
    displayExpenses();
}


// ========================================
// 7. DISPLAY EXPENSE RECORDS
// ========================================

function displayExpenses() {

    // Clear the existing expense list
    expenseList.innerHTML = "";


    // Check if there are no expenses
    if (expenses.length === 0) {

        expenseList.innerHTML =
            "<p>No expenses added yet.</p>";

        return;
    }


    // Loop through the expense array
    for (let expense of expenses) {

        // Create a new div for the expense
        const expenseItem = document.createElement("div");

        // Add CSS class
        expenseItem.classList.add("expense-item");


        // Add expense information
        expenseItem.innerHTML = `
            <span>${expense.category}</span>
            <strong>KSh ${expense.amount}</strong>
        `;


        // Add the expense to the webpage
        expenseList.appendChild(expenseItem);
    }
}
