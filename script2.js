document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    // Відновлюємо збережені значення
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";

    // Зберігаємо в localStorage при вводі
    form.addEventListener("input", function () {
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("email", document.getElementById("email").value);
    });

    // При сабміті перенаправляємо
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Зупиняємо стандартну відправку
        // Тут можна додати додаткову перевірку пароля, якщо потрібно
        window.location.href = "index-main.html";
    });
});