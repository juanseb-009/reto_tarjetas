function generarTablas() {
    let contenedor = document.getElementById("contenedor");
    let titulo = document.getElementById("tituloTabla");
    let campoNumero = document.getElementById("numeroTabla");
    let mensaje = document.getElementById("mensaje");

    let numero = campoNumero.value;

    if (numero === "") {
        mensaje.textContent = "Escribe un número para generar la tabla.";
        mensaje.className = "mensaje error";
        campoNumero.focus();
        return;
    }

    numero = Number(numero);

    if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
        mensaje.textContent = "Ingresa un número entero entre 1 y 100.";
        mensaje.className = "mensaje error";
        campoNumero.focus();
        return;
    }

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido += '<div class="fila">';
        contenido += '<span class="operacion">' + numero + ' × ' + i + '</span>';
        contenido += '<span class="igual">=</span>';
        contenido += '<span class="resultado">' + (numero * i) + '</span>';
        contenido += '</div>';
    }

    contenedor.innerHTML = contenido;
    titulo.textContent = numero;

    mensaje.textContent = "¡Excelente! Ya puedes practicar la tabla del " + numero + ".";
    mensaje.className = "mensaje exito";
}

function iniciarTabla() {
    let contenedor = document.getElementById("contenedor");
    let titulo = document.getElementById("tituloTabla");

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido += '<div class="fila">';
        contenido += '<span class="operacion">3 × ' + i + '</span>';
        contenido += '<span class="igual">=</span>';
        contenido += '<span class="resultado">' + (3 * i) + '</span>';
        contenido += '</div>';
    }

    contenedor.innerHTML = contenido;
    titulo.textContent = 3;
}

iniciarTabla();