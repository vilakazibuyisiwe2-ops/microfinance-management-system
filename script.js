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
// ==========================================
// 3. LOAN CALCULATOR SYSTEM (loans.html)
// ==========================================
const amountInput = document.getElementById('amount');
const monthsInput = document.getElementById('months');

function calculateLoan() {
    const interestText = document.getElementById('interest');
    const totalRepayText = document.getElementById('totalRepay');
    const monthlyRepayText = document.getElementById('monthlyRepay');
    const interestRateText = document.getElementById('interestRateText');

    // Safe exit clause if calculator targets are missing from current view
    if (!amountInput || !monthsInput || !interestText || !totalRepayText || !monthlyRepayText) return;

    const amount = parseFloat(amountInput.value) || 0;
    const months = parseInt(monthsInput.value) || 1;
  
    // Flat rate configuration matching product rules (10% flat rate)
    let interestRate = 0.10; 

    const totalInterest = amount * interestRate * months;
    const totalRepay = amount + totalInterest;
    const monthlyRepay = totalRepay / months;

    // Direct text layout assignment safely mapping integers
    if (interestRateText) interestRateText.textContent = `${(interestRate * 100)}% per month`;
    interestText.textContent = `R${totalInterest.toFixed(2)}`;
    totalRepayText.textContent = `R${totalRepay.toFixed(2)}`;
    monthlyRepayText.textContent = `R${monthlyRepay.toFixed(2)}`;
}

// Attach listeners safely
if (amountInput) amountInput.addEventListener('input', calculateLoan);
if (monthsInput) monthsInput.addEventListener('input', calculateLoan);

// Trigger initial baseline calculations safely upon DOM load
document.addEventListener("DOMContentLoaded", () => {
    calculateLoan();
});
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
// ==========================================
// 7. CUSTOMER LOAN APPLICATION (customers.html)
// ==========================================
function submitLoanApplication() {
    const name = document.getElementById("custName")?.value;
    const amount = document.getElementById("custAmount")?.value;
    
    if (!name || !amount) return;

    // Direct interface validation feedback pop-up
    alert(`Success! Loan application for R${parseFloat(amount).toLocaleString()} submitted for customer: ${name}.`);
    
    // Clear the form fields seamlessly after validation processes 
    document.querySelector(".loan-form")?.reset();
}
// ==========================================
// 4. REPAYMENT PROCESSING SYSTEM (repayments.html)
// ==========================================
function processPayment() {
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

    // Strip default fallback styling configuration properties
    receipt.classList.remove("empty-state");

    receipt.innerHTML = `
        <h3>Payment Receipt</h3>
        <p><strong>Customer:</strong> <span>${customer}</span></p>
        <p><strong>Loan Number:</strong> <span>${loan}</span></p>
        <p><strong>Opening Balance:</strong> <span>R${balance.toFixed(2)}</span></p>
        <p><strong>Payment Posted:</strong> <span>R${payment.toFixed(2)}</span></p>
        <p class="receipt-highlight-total"><strong>Remaining Balance:</strong> <span>R${newBalance.toFixed(2)}</span></p>
    `;
}


