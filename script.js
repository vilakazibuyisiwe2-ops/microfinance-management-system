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
const customers = 125;
const activeLoans = 87;
const repaidLoans = 28;
const defaultRate = "5%";

document.getElementById("customers").innerText = customers;
document.getElementById("activeLoans").innerText = activeLoans;
document.getElementById("repaidLoans").innerText = repaidLoans;
document.getElementById("defaultRate").innerText = defaultRate;

console.log("Analytics Dashboard Loaded");
function generateReport() {
    alert("Monthly report generated successfully!");
}
/* --- Analytics Main Container Settings --- */
.page-wrapper {
    flex: 1;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 60px 20px;
}

.card {
    width: 100%;
    max-width: 850px; /* Wider card to perfectly fit dashboard metrics */
    border-radius: 16px;
    padding: 40px 35px;
    text-align: center;
}

.card h2 {
    font-size: 1.4rem;
    color: #ffffff;
    margin: 35px 0 15px 0;
    text-align: left;
    border-left: 4px solid #00d4ff;
    padding-left: 12px;
}

/* --- Responsive Stats Grid --- */
.analytics-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.stat-box {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 20px 15px;
    transition: transform 0.3s ease;
}

.stat-box:hover {
    transform: translateY(-3px);
    background: rgba(0, 0, 0, 0.3);
}

.stat-box h3 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #cbd5e1;
    margin-bottom: 10px;
}

.stat-box p {
    font-size: 1.8rem;
    font-weight: 700;
    color: #00d4ff; /* Highly vibrant accent for analytics metrics */
}

/* --- CSS Flexbox Bar Chart Layout --- */
.chart-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 300px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 30px 40px 10px 40px;
    gap: 15px;
}

.bar {
    width: 100%;
    max-width: 50px;
    background: linear-gradient(to top, #0072ff, #00d4ff);
    border-radius: 6px 6px 0 0;
    position: relative;
    transition: filter 0.3s ease;
}

.bar:hover {
    filter: brightness(1.2);
}

.bar span {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: #b0c4de;
}

/* --- Performance Box Layout --- */
.performance-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.15);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    gap: 15px;
    text-align: left;
}

.performance-box p {
    font-size: 1rem;
    color: #ffffff;
}

/* --- Clean Unordered List Portfolio Insights --- */
.insights {
    list-style: none;
    text-align: left;
    background: rgba(0, 0, 0, 0.15);
    padding: 20px 25px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
}

.insights li {
    font-size: 1rem;
    margin-bottom: 12px;
    color: #cbd5e1;
}

.insights li:last-child {
    margin-bottom: 0;
}

/* --- Styled Business-Class Data Table --- */
.analytics-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.04);
}

.analytics-table th, 
.analytics-table td {
    padding: 14px 20px;
    text-align: left;
}

.analytics-table th {
    background: rgba(255, 255, 255, 0.04);
    color: #ffffff;
    font-weight: 600;
    font-size: 0.95rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.analytics-table td {
    color: #e0e6ed;
    font-size: 0.95rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.analytics-table tr:last-child td {
    border-bottom: none;
}

/* --- Vibrancy Status Risk Badges --- */
.risk-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
}

.risk-badge.low {
    background: rgba(46, 213, 115, 0.15);
    color: #2ed573;
}

.risk-badge.med {
    background: rgba(255, 165, 2, 0.15);
    color: #ffa502;
}

.risk-badge.high {
    background: rgba(255, 71, 87, 0.15);
    color: #ff4757;
}

/* --- Center Download Report Button --- */
.button-group {
    margin-top: 40px;
    display: flex;
    justify-content: center;
}

/* --- Responsive Layout Tweaks --- */
@media (max-width: 600px) {
    .chart-container {
        padding: 30px 15px 10px 15px;
        height: 220px;
    }
    
    .bar span {
        font-size: 0.7rem;
        bottom: -22px;
    }
    
    .performance-box {
        flex-direction: column;
        gap: 10px;
    }
}
