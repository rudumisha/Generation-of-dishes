document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";

    document.getElementById("registrationForm").addEventListener("input", function() {
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("email", document.getElementById("email").value);
    });
});