
// ========================================
// SpendWise - JavaScript Foundation
// ========================================


// ========================================
// 1. COLLECT USER INPUT
// ========================================

// Ask the user for their monthly budget
let monthlyBudget = Number(
    prompt("Enter your monthly budget:")
);

// Ask the user for their expenses
let foodExpense = Number(
    prompt("Enter your food expense:")
);

let transportExpense = Number(
    prompt("Enter your transport expense:")
);

let rentExpense = Number(
    prompt("Enter your rent expense:")
);

let entertainmentExpense = Number(
    prompt("Enter your entertainment expense:")
);

let utilitiesExpense = Number(
    prompt("Enter your utilities expense:")
);


// ========================================
// 2. FUNCTIONS
// ========================================

// Calculate total expenses
function calculateTotalExpenses(
    food,
    transport,
    rent,
    entertainment,
    utilities
) {
    return food + transport + rent + entertainment + utilities;
}


// Calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


// ========================================
// 3. PERFORM CALCULATIONS
// ========================================

let totalExpenses = calculateTotalExpenses(
    foodExpense,
    transportExpense,
    rentExpense,
    entertainmentExpense,
    utilitiesExpense
);

let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);


// ========================================
// 4. DISPLAY RESULTS
// ========================================

console.log("===== SpendWise Budget Report =====");

console.log(`Monthly Budget: KSh ${monthlyBudget}`);

console.log(`Total Expenses: KSh ${totalExpenses}`);

console.log(`Remaining Balance: KSh ${remainingBalance}`);


// ========================================
// 5. CHECK BUDGET STATUS
// ========================================

if (remainingBalance > 0) {
    console.log("Status: You are within your budget.");
} else if (remainingBalance === 0) {
    console.log("Status: You have used your entire budget.");
} else {
    console.log("Status: You have exceeded your budget.");
}

console.log("===================================");

