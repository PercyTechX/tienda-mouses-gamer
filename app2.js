// Cambiar color de fondo
document.getElementById("btn-change-color").addEventListener("click", function () {
    const color = document.getElementById("input-color").value;
    if (isValidColor(color)) {
        document.body.style.backgroundColor = color;
    } else {
        alert("El color ingresado no es válido.");
    }
});

function isValidColor(color) {
    const tempElement = document.createElement("div");
    tempElement.style.color = color;
    return tempElement.style.color !== "";
}


// Registrar hermanos
document.getElementById("btn-register-broters").addEventListener("click", function () {
    const brotherCount = parseInt(document.getElementById("input-register-brothers").value);
    const gameArea = document.getElementById("game-area");
    gameArea.innerHTML = ''; // Limpiamos el área antes de registrar hermanos

    // Crear campos de entrada para los nombres
    for (let i = 1; i <= brotherCount; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Nombre del hermano ${i}`;
        input.classList.add("brother-input"); // Agregamos una clase para identificar estos inputs
        gameArea.appendChild(input);
    }

    // Botón para imprimir nombres
    const printButton = document.createElement("button");
    printButton.textContent = "Imprimir nombres";
    printButton.addEventListener("click", function () {
        const resultArea = document.createElement("div"); // Contenedor para los nombres
        resultArea.innerHTML = ''; // Limpiar el área de resultados

        // Capturar y mostrar los nombres ingresados
        document.querySelectorAll(".brother-input").forEach((input) => {
            const nameParagraph = document.createElement("p");
            nameParagraph.textContent = input.value;
            resultArea.appendChild(nameParagraph);
        });

        gameArea.appendChild(resultArea); // Añadir resultados al área de juego
    });
    gameArea.appendChild(printButton);

    // Botón para limpiar el área de entrada
    const clearButton = document.createElement("button");
    clearButton.textContent = "Limpiar bloques";
    clearButton.addEventListener("click", function () {
        gameArea.innerHTML = ''; // Limpiar todo el área de entrada y botones
    });
    gameArea.appendChild(clearButton);
});



























// Dibujar bloques
document.getElementById("btn-create-bloques").addEventListener("click", function () {
    const blockCount = parseInt(document.getElementById("create-bloques").value);
    const gameArea = document.getElementById("game-area");
    gameArea.innerHTML = ''; // Limpiamos el área antes de dibujar bloques

    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement("div");
        block.style.width = "50px";
        block.style.height = "50px";
        block.style.margin = "5px";
        block.style.backgroundColor = "lightblue";
        block.style.display = "inline-block";
        gameArea.appendChild(block);
    }

    const clearButton = document.createElement("button");
    clearButton.textContent = "Limpiar bloques";
    clearButton.addEventListener("click", function () {
        gameArea.innerHTML = '';
    });
    gameArea.appendChild(clearButton);
});

// Juego de Piedra, Papel o Tijera (Yan Quen Po)
document.getElementById("btn-yanquempo").addEventListener("click", function () {
    const userChoice = document.getElementById("yanquempo").value.toLowerCase();
    const choices = ["piedra", "papel", "tijera"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameArea = document.getElementById("game-area");

    let resultMessage;
    if (userChoice === computerChoice) {
        resultMessage = "Empate";
    } else if (
        (userChoice === "piedra" && computerChoice === "tijera") ||
        (userChoice === "papel" && computerChoice === "piedra") ||
        (userChoice === "tijera" && computerChoice === "papel")
    ) {
        resultMessage = "Ganaste";
    } else {
        resultMessage = "Perdiste";
    }

    gameArea.innerHTML = ''; // Limpiamos el área antes de mostrar el resultado
    const resultElement = document.createElement("p");
    resultElement.textContent = `Tu elección: ${userChoice} | Elección del computador: ${computerChoice} | Resultado: ${resultMessage}`;
    resultElement.style.color = resultMessage === "Ganaste" ? "green" : resultMessage === "Perdiste" ? "red" : "gray";
    gameArea.appendChild(resultElement);







    const clearButton = document.createElement("button");
    clearButton.textContent = "Limpiar bloques";
    clearButton.addEventListener("click", function () {
        gameArea.innerHTML = '';
    });
    gameArea.appendChild(clearButton);
});
