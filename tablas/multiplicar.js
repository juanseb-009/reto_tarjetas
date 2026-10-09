
function generarTablas(numero) {
    let contenedor = document.getElementById("contenedor");
    let titulo = document.getElementById("tituloTabla");

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
}

generarTablas(3);
