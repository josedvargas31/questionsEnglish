function storeData() {
    // Obtener los valores de los inputs
    const fullName = document.getElementById("full_name").value.trim();
    const role = document.getElementById("role").value;
    const testDate = document.getElementById("test_date").value;

    // Validar que todos los campos estén llenos
    if (!fullName || !role || !testDate) {
        alert("Por favor llenar todos los campos requeridos");
        return;
    }

    // Guardar el nombre completo y rol en el local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ fullName, role });
    localStorage.setItem("users", JSON.stringify(users));

    // Guardar los demás datos en el local storage
    const userData = {
        fullName,
        role,
        testDate,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Mostrar los datos almacenados por consola
    console.log("Datos almacenados:");
    console.log("Usuarios:", users);
    console.log("Información del usuario:", userData);

    // Redirigir según el rol seleccionado
    if (role === "administrador") {
        // Redirigir a la página del administrador
        window.location.href = "./admin.html";
    } else {
        // Redirigir a la página de preguntas para aprendiz
        window.location.href = "./preguntas.html";
    }
}

// Función para resetear nombres si han pasado dos horas
function resetNamesIfNeeded() {
    const lastUpdated = localStorage.getItem("lastUpdated");
    const now = new Date().getTime();
    const twoHours = 2 * 60 * 60 * 1000;

    if (lastUpdated && now - lastUpdated > twoHours) {
        localStorage.removeItem("users");
        localStorage.removeItem("lastUpdated");
    }
}

// Llamar a la función de reseteo al cargar la página
window.onload = function() {
    resetNamesIfNeeded();
};
