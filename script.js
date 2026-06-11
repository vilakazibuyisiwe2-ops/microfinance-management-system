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
