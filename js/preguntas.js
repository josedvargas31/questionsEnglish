// // Logica apra manejrar el tiempo del aprendiz
// let segundos = 0;
// let minutos = 0;
// let horas = 0;
// let tiempoInicio;

// function iniciarContador() {
// 	tiempoInicio = setInterval(function () {
// 		segundos++;
// 		if (segundos === 60) {
// 			minutos++;
// 			segundos = 0;
// 		}
// 		if (minutos === 60) {
// 			horas++;
// 			minutos = 0;
// 		}
// 		document.getElementById("contador").textContent =
// 			(horas > 9 ? horas : "0" + horas) +
// 			":" +
// 			(minutos > 9 ? minutos : "0" + minutos) +
// 			":" +
// 			(segundos > 9 ? segundos : "0" + segundos);
// 		localStorage.setItem("contadorState", `${horas}:${minutos}:${segundos}`);
// 		if (minutos === 105) {
// 			clearInterval(tiempoInicio);
// 			alert("Tiempo agotado!");
// 		}
// 	}, 1000);
// }

// document.addEventListener("DOMContentLoaded", function () {
// 	const savedState = localStorage.getItem("contadorState");
// 	if (savedState) {
// 		const [savedHoras, savedMinutos, savedSegundos] = savedState
// 			.split(":")
// 			.map(Number);
// 		horas = savedHoras;
// 		minutos = savedMinutos;
// 		segundos = savedSegundos;
// 		document.getElementById("contador").textContent =
// 			(horas > 9 ? horas : "0" + horas) +
// 			":" +
// 			(minutos > 9 ? minutos : "0" + minutos) +
// 			":" +
// 			(segundos > 9 ? segundos : "0" + segundos);
// 	}
// 	iniciarContador();
// });


// // Muesta el nombre en el contador
// document.addEventListener("DOMContentLoaded", function () {
// 	// Obtener el nombre completo del localStorage
// 	const userData = JSON.parse(localStorage.getItem("userData"));

// 	if (userData && userData.fullName) {
// 		// Mostrar el nombre completo en el elemento con id "userName"
// 		document.getElementById("userName").textContent = userData.fullName;
// 	} else {
// 		// Si no hay datos, puedes manejar el caso de error o mostrar un mensaje por defecto
// 		document.getElementById("userName").textContent = "Guest";
// 	}
//       // Redirigir a la página de resultados
// });
// function NavigationResult() {
//     window.location.href = "./resultados.html";   
// }
// Lógica para el manejo del tiempo del aprendiz
let segundos = 0;
let minutos = 0;
let horas = 0;
let tiempoInicio;

function iniciarContador() {
    tiempoInicio = setInterval(function () {
        segundos++;
        if (segundos === 60) {
            minutos++;
            segundos = 0;
        }
        if (minutos === 60) {
            horas++;
            minutos = 0;
        }
        document.getElementById("contador").textContent =
            (horas > 9 ? horas : "0" + horas) +
            ":" +
            (minutos > 9 ? minutos : "0" + minutos) +
            ":" +
            (segundos > 9 ? segundos : "0" + segundos);
        localStorage.setItem("contadorState", `${horas}:${minutos}:${segundos}`);
        if (minutos === 105) {
            clearInterval(tiempoInicio);
            alert("Tiempo agotado!");
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const savedState = localStorage.getItem("contadorState");
    if (savedState) {
        const [savedHoras, savedMinutos, savedSegundos] = savedState.split(":").map(Number);
        horas = savedHoras;
        minutos = savedMinutos;
        segundos = savedSegundos;
        document.getElementById("contador").textContent =
            (horas > 9 ? horas : "0" + horas) +
            ":" +
            (minutos > 9 ? minutos : "0" + minutos) +
            ":" +
            (segundos > 9 ? segundos : "0" + segundos);
    }
    iniciarContador();
});

// Mostrar el nombre en el contador
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el nombre completo del localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.fullName) {
        // Mostrar el nombre completo en el elemento con id "userName"
        document.getElementById("userName").textContent = userData.fullName;
    } else {
        // Si no hay datos, puedes manejar el caso de error o mostrar un mensaje por defecto
        document.getElementById("userName").textContent = "Guest";
    }
});

// Función para redirigir a la página de resultados
function NavigationResult() {
    window.location.href = "./resultados.html";
}

// Código para el envío del formulario y almacenamiento de datos
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector("button");
    if (submitButton) {
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();

            const correctAnswers = {
                1: "are",
                2: "can",
                3: "where",
                4: "your",
                5: "has",
            };

            let score = 0;
            let userAnswers = {};

            Object.keys(correctAnswers).forEach((questionNumber) => {
                const selectElement = document.getElementById(`question${questionNumber}`);
                const selectedAnswer = selectElement.value;
                userAnswers[questionNumber] = selectedAnswer;
                if (selectedAnswer === correctAnswers[questionNumber]) {
                    score += 20;
                }
            });

            localStorage.setItem("score", score);
            localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

            window.location.href = "./resultados.html";
        });
    }
});
