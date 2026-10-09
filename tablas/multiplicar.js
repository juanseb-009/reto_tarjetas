function generarTablas() {
    let contenedor = document.getElementById("contenedor");
    let titulo = document.getElementById("tituloTabla");
    let campoNumero = document.getElementById("numeroTabla");
    let mensaje = document.getElementById("mensaje");
    let bienvenida = document.getElementById("bienvenida");
    let panelTabla = document.getElementById("panelTabla");

    let numero = campoNumero.value;

    if (numero === "") {
        mensaje.textContent = "¡Entrenador, escribe un número para comenzar!";
        mensaje.className = "mensaje error";
        campoNumero.focus();
        return;
    }

    numero = Number(numero);

    if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
        mensaje.textContent = "Elige un número entero entre 1 y 100.";
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

    titulo.textContent = "¡La tabla del " + numero + "!";
    bienvenida.hidden = true;
    panelTabla.hidden = false;

    mensaje.textContent = "¡Excelente! Ya puedes practicar la tabla del " + numero + ".";
    mensaje.className = "mensaje exito";
}