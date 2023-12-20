function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num3, num4) {
    return num3 - num4;
}

function multiplicar(num5, num6) {
    return num5 * num6;
}

function dividir(num7, num8) {
    if (num2 === 0) {
        return "No se puede dividir por cero";
    } else {
        return num7 / num8;
    }
}

function elevarPotencia(base, exponente) {
    return Math.pow(base, exponente);
}

function mostrarSuma() {
    const num1 = parseFloat(document.getElementById("sumNum1").value);
    const num2 = parseFloat(document.getElementById("sumNum2").value);
    const resultado = sumar(num1, num2);
    document.getElementById("resultadoSuma").innerText = "La suma es: " + resultado;
    
}


document.addEventListener("click",mostrarSuma())

function mostrarResta() {
    const num3 = parseFloat(document.getElementById("restaNum3").value);
    const num4 = parseFloat(document.getElementById("restaNum4").value);
    const resultado = restar(num1, num2);
    document.getElementById("resultadoResta").innerText = "La resta es: " + resultado;
}

function mostrarProducto() {
    const num5 = parseFloat(document.getElementById("prodNum5").value);
    const num6 = parseFloat(document.getElementById("prodNum6").value);
    const resultado = multiplicar(num1, num2);
    document.getElementById("resultadoProducto").innerText = "El producto es: " + resultado;
}

function mostrarDivision() {
    const num7 = parseFloat(document.getElementById("divNum7").value);
    const num8 = parseFloat(document.getElementById("divNum8").value);
    const resultado = dividir(num1, num2);
    document.getElementById("resultadoDivision").innerText = "La división es: " + resultado;
}

function mostrarPotencia() {
    const base = parseFloat(document.getElementById("baseNum").value);
    const exponente = parseFloat(document.getElementById("expNum").value);
    const resultado = elevarPotencia(base, exponente);
    document.getElementById("resultadoPotencia").innerText = "El resultado de la potencia es: " + resultado;
}
document.getElementById("resultadoSumo").addEventListener("click", mostrarSuma)