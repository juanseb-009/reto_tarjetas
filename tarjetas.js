
function crearTarjetas(){
    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");

    let desde = Number(document.getElementById("txtDesde").value);
    let hasta = Number(document.getElementById("txtHasta").value);
    let salto = Number(document.getElementById("txtAumento").value);

    for(let i = desde; i <= hasta; i = i + salto){
        contenido = contenido + "<div class= 'item'>" + i + "</div>";
        divTarjetas.innerHTML = contenido;
    }
}
