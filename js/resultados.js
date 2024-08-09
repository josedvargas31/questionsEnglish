document.addEventListener("DOMContentLoaded", function () {
    const score = localStorage.getItem("score");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.fullName) {
        document.getElementById("userName").textContent = userData.fullName;
    } else {
        document.getElementById("userName").textContent = "Guest";
    }

    document.getElementById("score").textContent = score || 0;
    const scoreInput = document.getElementById("scoreInput");

    scoreInput.value = score || 0;
});
