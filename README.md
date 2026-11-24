
# SpendWise - Interactive Budget Tracker

## 1. Project Description

SpendWise is an interactive personal budget tracking application developed using HTML, CSS, and JavaScript.

The application helps users manage their finances by setting a budget, recording expenses, monitoring spending, and calculating their remaining balance.

Users can add multiple expenses, delete individual records, and clear all expenses.

The dashboard updates automatically whenever users interact with the application.

## 2. Improvements Made This Week

The following features were added to the original SpendWise project:

- Interactive budget input form.
- Expense recording functionality.
- Multiple expense records.
- Automatic expense calculations.
- Dynamic dashboard updates.
- Budget status notifications.
- Delete individual expenses.
- Clear all expense records.
- Form validation.
- Event listeners for user interactions.

## 3. JavaScript Concepts Implemented

### A. Conditional Statements

Conditional statements help SpendWise make decisions based on the user's financial information.

The application uses `if`, `else if`, and `else` statements to check whether:

- The user is within budget.
- The user has used the entire budget.
- The user has exceeded the budget.

Example:

```javascript
if (remainingBalance < 0) {
    console.log("You have exceeded your budget.");
} else if (remainingBalance === 0) {
    console.log("You have used your entire budget.");
} else {
    console.log("You are within your budget.");
}
```

### B. Arrays

Arrays are used to store multiple expense records.

Example:

```javascript
let expenses = [
    { name: "Lunch", amount: 300 },
    { name: "Transport", amount: 500 },
    { name: "Shopping", amount: 1000 }
];
```

The `push()` method adds new expenses, while `splice()` removes expenses.

### C. Loops

The `forEach()` method processes all expense records in the array.

It helps calculate total expenses and display every expense on the webpage.

Example:

```javascript
expenses.forEach(function(expense) {
    console.log(expense.name, expense.amount);
});
```

### D. DOM Manipulation

DOM manipulation allows JavaScript to update webpage content dynamically.

SpendWise uses:

- `getElementById()` to select HTML elements.
- `textContent` to update dashboard information.
- `createElement()` to create expense records.
- `appendChild()` to add records to the webpage.
- `innerHTML` to clear the previous expense list.

### E. Event Handling

The application uses `addEventListener()` to respond to user actions.

Events include:

- Form submission.
- Adding new expenses.
- Deleting expenses.
- Clearing all expense records.

The `preventDefault()` method prevents forms from automatically refreshing the webpage.

### F. Functions

Functions organize the application logic into reusable sections.

The main functions include:

- `calculateTotalExpenses()` - Calculates all expenses.
- `calculateBalance()` - Calculates the remaining balance.
- `updateDashboard()` - Updates dashboard information.
- `displayExpenses()` - Displays expense records.
- `addExpense()` - Adds new expenses.
- `deleteExpense()` - Removes an expense.

## 4. How User Interactions Work

1. The user enters a budget.
2. The application validates and saves the budget.
3. The user enters an expense name and amount.
4. JavaScript stores the expense in an array.
5. Functions calculate the total expenses and remaining balance.
6. The DOM updates the dashboard and expense history.
7. The user can delete individual expenses or clear all records.

## 5. Budget Calculation

The application uses the following formula:

Remaining Balance = Total Budget - Total Expenses

Example:

- Total Budget: KES 20,000
- Lunch: KES 300
- Transport: KES 500
- Shopping: KES 1,000
- Total Expenses: KES 1,800
- Remaining Balance: KES 18,200

## 6. Challenges Encountered and Solutions

### Challenge 1: Calculating Multiple Expenses

Initially, managing individual expense variables made calculations difficult.

Solution: Used arrays to store multiple expense records and loops to calculate the total.

### Challenge 2: Updating the Dashboard

The dashboard needed to display updated figures whenever expenses changed.

Solution: Created an `updateDashboard()` function that recalculates and updates the webpage.

### Challenge 3: Handling User Input

Invalid values could affect budget calculations.

Solution: Added input validation using conditional statements and JavaScript number checking.

### Challenge 4: Responding to User Actions

The application needed to respond without refreshing the webpage.

Solution: Used `addEventListener()` and `preventDefault()` to handle form submissions and button clicks.

## 7. Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## 8. Project Structure

SpendWise/

- index.html
- style.css
- script.js
- README.md

## 9. How to Run the Application

1. Clone or download the repository.
2. Open the SpendWise folder.
3. Open index.html in a web browser.
4. Enter your budget.
5. Add your expenses.
6. View your updated dashboard.
7. Delete expenses or clear all records when needed.

## 10. Conclusion

SpendWise demonstrates how JavaScript makes websites interactive and functional.

The project applies conditional statements, arrays, loops, DOM manipulation, functions, and event listeners to build a practical budget tracking application.

It demonstrates how user interactions can trigger JavaScript operations, process information, and update webpage content dynamically.

## Author

SpendWise JavaScript Interactive Project.
