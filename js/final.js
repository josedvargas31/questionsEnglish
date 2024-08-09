document.addEventListener("DOMContentLoaded", () => {
    const correctAnswers = {
        1: "are",
        2: "can",
        3: "where",
        4: "your",
        5: "has",
    };

    const submitButton = document.querySelector("button");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        let score = 0;
        let userAnswers = {};

        Object.keys(correctAnswers).forEach((questionNumber) => {
            const selectElement = document.querySelector(`#question${questionNumber}`);
            if (selectElement) {
                const answer = selectElement.value.trim();
                userAnswers[questionNumber] = answer;
                if (answer === correctAnswers[questionNumber]) {
                    score++;
                }
            }
        });

        const totalQuestions = Object.keys(correctAnswers).length;
        const percentageScore = (score / totalQuestions) * 100;

        const userId = 'user1'; // Cambia esto según la forma en que identificas al usuario
        localStorage.setItem(`${userId}_score`, percentageScore);
        localStorage.setItem(`${userId}_userAnswers`, JSON.stringify(userAnswers));

        window.location.href = "./final.html";
    });
});