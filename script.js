function loadAdmin() {
    document.getElementById("adminName").textContent =
        "Buyisiwe Vilakazi";

    document.getElementById("phone").textContent =
        "076 XXX XXXX";

    document.getElementById("email").textContent =
        "vilakazibuyisiwe2@gmail.com";

    document.getElementById("address").textContent =
        "Johannesburg, South Africa";
}
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (
        username === "admin" &&
        password === "12345"
    ) {
        window.location.href = "admin.html";
    } else {
        document.getElementById("message").innerText =
            "Invalid username or password";
    }
}
const amountInput = document.getElementById('amount');
const monthsInput = document.getElementById('months');
const summary = document.getElementById('summary');

function calculateLoan() {
  const amount = parseFloat(amountInput.value);
  const months = parseInt(monthsInput.value);
  
  let interestRate = 0;
  if (months <= 3) interestRate = 0.10;      // 10%
  else if (months <= 6) interestRate = 0.15; // 15% 
  else if (months <= 12) interestRate = 0.20; // 20%
  else interestRate = 0.30;                   // 30% for 24 months

  const total = amount + (amount * interestRate);
  const monthly = total / months;

  summary.innerHTML = `
    <p><b>Total to repay:</b> R${total.toFixed(2)}</p>
    <p><b>Monthly payment:</b> R${monthly.toFixed(2)}</p>
    <p><b>Interest rate:</b> ${interestRate * 100}%</p>
  `;
}

amountInput.addEventListener('input', calculateLoan);
monthsInput.addEventListener('change', calculateLoan);
function processPayment() {

    let customer =
        document.getElementById("customerName").value;

    let loan =
        document.getElementById("loanNumber").value;

    let balance =
        parseFloat(document.getElementById("balance").value);

    let payment =
        parseFloat(document.getElementById("payment").value);

    let newBalance = balance - payment;

    document.getElementById("receipt").innerHTML = `
        <h3>Payment Successful</h3>
        <p><strong>Customer:</strong> ${customer}</p>
        <p><strong>Loan Number:</strong> ${loan}</p>
        <p><strong>Payment:</strong> R${payment}</p>
        <p><strong>Remaining Balance:</strong> R${newBalance}</p>
    `;
}
