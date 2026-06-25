Yes, there are major clashes here that will break your website. Right now, you have CSS styling rules pasted directly into the middle of your JavaScript code, which will cause syntax errors and stop all scripts from running.
Additionally, because your 8 pages share a single JavaScript.js file, code targeting specific elements (like amountInput or the analytics DOM elements) will crash with a "Cannot read properties of null" error whenever a user navigates to a page where those inputs don't exist.
Here is the clean, optimized, and fully separated code to ensure nothing clashes.
## 1. The Clashing CSS (Move this out of JavaScript)
Cut the CSS code from the bottom of your JavaScript file and paste it into styles.css. It belongs exclusively in your style sheet.
## 2. The Optimized JavaScript.js File
Replace your entire JavaScript.js file with this clean, safe structure. It uses safe conditional checks (if (element)) so that your code loads perfectly across all 8 pages without crashing.

// ==========================================// 1. ADMIN PROFILE LOGIC (admin.html)// ==========================================function loadAdmin() {
    const adminName = document.getElementById("adminName");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const address = document.getElementById("address");

    if (adminName) adminName.textContent = "Buyisiwe Vilakazi";
    if (phone) phone.textContent = "076 XXX XXXX";
    if (email) email.textContent = "vilakazibuyisiwe2@gmail.com";
    if (address) address.textContent = "Johannesburg, South Africa";
}
// ==========================================// 2. AUTHENTICATION LOGIC (index.html / login)// ==========================================function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");

    if (!usernameInput || !passwordInput) return;

    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username === "admin" && password === "12345") {
        window.location.href = "admin.html";
    } else if (message) {
        message.innerText = "Invalid username or password";
    }
}
// ==========================================// 3. LOAN CALCULATOR SYSTEM (loans.html)// ==========================================const amountInput = document.getElementById('amount');const monthsInput = document.getElementById('months');const summary = document.getElementById('summary');
function calculateLoan() {
    if (!amountInput || !monthsInput || !summary) return;

    const amount = parseFloat(amountInput.value) || 0;
    const months = parseInt(monthsInput.value) || 1;
  
    let interestRate = 0;
    if (months <= 3) interestRate = 0.10;       // 10%
    else if (months <= 6) interestRate = 0.15;  // 15% 
    else if (months <= 12) interestRate = 0.20; // 20%
    else interestRate = 0.30;                   // 30%

    const total = amount + (amount * interestRate);
    const monthly = total / months;

    summary.innerHTML = `
        <p><b>Total to repay:</b> R${total.toFixed(2)}</p>
        <p><b>Monthly payment:</b> R${monthly.toFixed(2)}</p>
        <p><b>Interest rate:</b> ${interestRate * 100}%</p>
    `;
}
// Only append event listeners if the element elements exist on the screenif (amountInput) amountInput.addEventListener('input', calculateLoan);if (monthsInput) monthsInput.addEventListener('change', calculateLoan);
// ==========================================// 4. REPAYMENT PROCESSING SYSTEM (repayments.html)// ==========================================function processPayment() {
    const customerInput = document.getElementById("customerName");
    const loanInput = document.getElementById("loanNumber");
    const balanceInput = document.getElementById("balance");
    const paymentInput = document.getElementById("payment");
    const receipt = document.getElementById("receipt");

    if (!customerInput || !loanInput || !balanceInput || !paymentInput || !receipt) return;

    let customer = customerInput.value;
    let loan = loanInput.value;
    let balance = parseFloat(balanceInput.value) || 0;
    let payment = parseFloat(paymentInput.value) || 0;
    let newBalance = balance - payment;

    receipt.innerHTML = `
        <h3>Payment Successful</h3>
        <p><strong>Customer:</strong> ${customer}</p>
        <p><strong>Loan Number:</strong> ${loan}</p>
        <p><strong>Payment:</strong> R${payment.toFixed(2)}</p>
        <p><strong>Remaining Balance:</strong> R${newBalance.toFixed(2)}</p>
    `;
}
// ==========================================// 5. METRICS & ANALYTICS DASHBOARD (analytics.html)// ==========================================// Wait for DOM to finish loading to safely push stats values onto the interface
document.addEventListener("DOMContentLoaded", () => {
    const customersText = document.getElementById("customers");
    const activeLoansText = document.getElementById("activeLoans");
    const repaidLoansText = document.getElementById("repaidLoans");
    const defaultRateText = document.getElementById("defaultRate");

    if (customersText) customersText.innerText = "125";
    if (activeLoansText) activeLoansText.innerText = "87";
    if (repaidLoansText) repaidLoansText.innerText = "28";
    if (defaultRateText) defaultRateText.innerText = "5%";
});
function generateReport() {
    alert("Monthly report generated successfully!");
}
// ==========================================// 6. LOAN APPROVAL MANAGEMENT (approvals.html)// ==========================================function approveLoan(button) {
    const row = button.closest('tr');
    const statusBadge = row.querySelector('.status');
    
    statusBadge.textContent = "Approved";
    statusBadge.style.background = "rgba(46, 213, 115, 0.15)";
    statusBadge.style.color = "#2ed573";
    statusBadge.style.border = "1px solid rgba(46, 213, 115, 0.2)";
    
    disableActionButtons(row);
    animateRowRemoval(row);
}
function rejectLoan(button) {
    const row = button.closest('tr');
    const statusBadge = row.querySelector('.status');
    
    statusBadge.textContent = "Rejected";
    statusBadge.style.background = "rgba(255, 71, 87, 0.15)";
    statusBadge.style.color = "#ff4757";
    statusBadge.style.border = "1px solid rgba(255, 71, 87, 0.2)";
    
    disableActionButtons(row);
    animateRowRemoval(row);
}
function disableActionButtons(row) {
    const buttons = row.querySelectorAll('.btn-action, button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.4";
        btn.style.cursor = "not-allowed";
    });
}
function animateRowRemoval(row) {
    setTimeout(() => {
        row.style.transition = "all 0.6s ease";
        row.style.opacity = "0";
        row.style.transform = "translateX(30px)";
        setTimeout(() => row.remove(), 600);
    }, 800);
}

------------------------------
To move forward with refining your user interface, let me know:

* Which website page file among your remaining un-styled sections (customers.html, loans.html, repayments.html) should we jump into next?
* Do you need me to format the login display HTML screen to seamlessly match this newly fixed framework layout style?


