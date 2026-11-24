
// ==========================================
// SPENDWISE - INTERACTIVE BUDGET TRACKER
// ==========================================


// 1. STORE APPLICATION DATA

let totalBudget = 0;

// Array for storing multiple expense records
let expenses = [];

const currency = "KES";


// 2. SELECT HTML ELEMENTS USING THE DOM

const budgetForm = document.getElementById("budgetForm");
const expenseForm = document.getElementById("expenseForm");

const budgetInput = document.getElementById("budgetInput");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");

const budgetDisplay = document.getElementById("budget");
const expensesDisplay = document.getElementById("expenses");
const balanceDisplay = document.getElementById("balance");

const budgetStatus = document.getElementById("budgetStatus");
const expenseList = document.getElementById("expenseList");

const clearExpensesButton = document.getElementById("clearExpenses");


// 3. FUNCTION TO CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {

    let total = 0;

    // Loop through the expense array
    expenses.forEach(function(expense) {
        total += expense.amount;
    });

    return total;
}


// 4. FUNCTION TO CALCULATE REMAINING BALANCE

function calculateBalance() {

    let totalExpenses = calculateTotalExpenses();

    return totalBudget - totalExpenses;
}


// 5. FUNCTION TO UPDATE THE DASHBOARD

function updateDashboard() {

    let totalExpenses = calculateTotalExpenses();
    let remainingBalance = calculateBalance();

    // Update dashboard using DOM manipulation
    budgetDisplay.textContent =
        currency + " " + totalBudget.toFixed(2);

    expensesDisplay.textContent =
        currency + " " + totalExpenses.toFixed(2);

    balanceDisplay.textContent =
        currency + " " + remainingBalance.toFixed(2);


    // 6. CONDITIONAL STATEMENTS FOR BUDGET STATUS

    if (totalBudget <= 0) {

        budgetStatus.textContent =
            "Please set your budget to get started.";

        budgetStatus.className = "";

    } else if (remainingBalance < 0) {

        budgetStatus.textContent =
            "Warning! You have exceeded your budget.";

        budgetStatus.className = "danger";

    } else if (remainingBalance === 0) {

        budgetStatus.textContent =
            "You have used your entire budget.";

        budgetStatus.className = "warning";

    } else {

        budgetStatus.textContent =
            "Great! You are within your budget.";

        budgetStatus.className = "";

    }

    console.log("===== SPENDWISE BUDGET REPORT =====");

    console.log("Total Budget:", totalBudget);

    console.log("Total Expenses:", totalExpenses);

    console.log("Remaining Balance:", remainingBalance);

    console.log("Number of Expenses:", expenses.length);

}


// 7. FUNCTION TO DISPLAY EXPENSE RECORDS

function displayExpenses() {

    // Clear previous records
    expenseList.innerHTML = "";

    // Check whether there are expenses
    if (expenses.length === 0) {

        const message = document.createElement("li");

        message.textContent = "No expenses recorded yet.";

        expenseList.appendChild(message);

        return;
    }

    // Loop through all expense records
    expenses.forEach(function(expense, index) {

        const listItem = document.createElement("li");

        const details = document.createElement("span");

        details.className = "expense-details";

        details.textContent =
            expense.name + " - " +
            currency + " " + expense.amount.toFixed(2);

        // Create a delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-button";

        deleteButton.type = "button";

        // Store the expense position
        deleteButton.dataset.index = index;

        // Listen for delete button clicks
        deleteButton.addEventListener("click", function() {

            deleteExpense(Number(this.dataset.index));

        });

        listItem.appendChild(details);

        listItem.appendChild(deleteButton);

        expenseList.appendChild(listItem);

    });

}


// 8. FUNCTION TO ADD AN EXPENSE

function addExpense(name, amount) {

    // Store expense as an object inside the array
    const newExpense = {
        name: name,
        amount: amount
    };

    expenses.push(newExpense);

    // Refresh the application
    displayExpenses();

    updateDashboard();

}


// 9. FUNCTION TO DELETE AN EXPENSE

function deleteExpense(index) {

    // Remove one expense from the array
    expenses.splice(index, 1);

    // Update the webpage
    displayExpenses();

    updateDashboard();

}


// 10. HANDLE BUDGET FORM SUBMISSION

budgetForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const enteredBudget = Number(budgetInput.value);

    if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {

        alert("Please enter a valid budget greater than zero.");

        return;
    }

    totalBudget = enteredBudget;

    updateDashboard();

    alert("Your budget has been saved successfully!");

    budgetForm.reset();

});


// 11. HANDLE EXPENSE FORM SUBMISSION

expenseForm.addEventListener("submit", function(event) {

    // Prevent default form submission
    event.preventDefault();

    const name = expenseName.value.trim();

    const amount = Number(expenseAmount.value);

    // Validate user input
    if (name === "") {

        alert("Please enter an expense name.");

        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {

        alert("Please enter a valid expense amount.");

        return;
    }

    // Add expense to the array
    addExpense(name, amount);

    // Clear form fields
    expenseForm.reset();

    alert("Expense added successfully!");

});


// 12. HANDLE CLEAR ALL EXPENSES BUTTON

clearExpensesButton.addEventListener("click", function() {

    if (expenses.length === 0) {

        alert("There are no expenses to clear.");

        return;
    }

    const confirmation = confirm(
        "Are you sure you want to delete all expenses?"
    );

    if (confirmation) {

        expenses = [];

        displayExpenses();

        updateDashboard();

        alert("All expenses have been cleared!");

    }

});


// 13. INITIALIZE THE APPLICATION

displayExpenses();

updateDashboard();

console.log("SpendWise application loaded successfully.");
