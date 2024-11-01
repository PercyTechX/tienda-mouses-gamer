
function changeBackgroundColor(){
const backgroundColor = prompt("Ingrese un color de fondo para la web");
document.body.style.backgroundColor   = backgroundColor;
}
//changeBackgroundColor();

function registerBrothers (){
    //PASO 01 DEBEMOS SABER LA CANTIDAD DE HERMANOS
    const brotherQuantity = Number(prompt("Ingrese la cantidad de Hermanos"));
    const brothers =[];
    let counter=0;
    while(counter < brotherQuantity){
        const brotherName = prompt("Ingrese el nonbre de tu hermano "+ counter);
        brothers.push(brotherName);
        counter++
    }
    console.log(brotherQuantity);
}


function generateBlocks() {
    const blocksNumber = Number(prompt("Ingrese la cantidad de bloques que desea dibujar:"));
    const blockContainer = document.getElementById('blockContainer');
    
    // Limpiamos el contenedor para evitar acumulación de bloques
    blockContainer.innerHTML = '';

    for (let i = 0; i < blocksNumber; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        block.style.width = '100px';
        block.style.height = '100px';
        block.style.display = 'inline-block';
        block.style.margin = '5px';
        block.style.backgroundColor = getRandomColor();
        blockContainer.appendChild(block);
    }

    // Función para generar un color aleatorio en formato hexadecimal
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}


function playGame() {
    const choices = ['piedra', 'papel', 'tijera'];
    const userChoice = prompt("Escribe tu elección: piedra, papel o tijera").toLowerCase();
    
    // Verificamos que la elección del usuario sea válida
    if (!choices.includes(userChoice)) {
        document.getElementById("result").innerText = "Opción inválida. Por favor, elige piedra, papel o tijera.";
        return;
    }
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;
    if (userChoice === computerChoice) {
        result = "¡Empate! Ambos eligieron " + userChoice;
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = "¡Ganaste! " + userChoice + " vence a " + computerChoice;
    } else {
        result = "¡Perdiste! " + computerChoice + " vence a " + userChoice;
    }
    
    document.getElementById("result").innerText = result;
}