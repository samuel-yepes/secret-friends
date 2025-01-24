let nombres = []


function agregarAmigo() {
    let txtnombres = document.getElementById("amigo").value;
    let valores = document.getElementById("datos");

    if (txtnombres.trim() === "") {
        alert("No haz ingresado ningun dato")
    } else {
        nombres.push(txtnombres);
        limpiarCaja();
        valores.innerHTML = nombres.join('<br>');
        console.log(nombres);
    }

}

function sortearAmigo() {

    let nombreGenerado = Math.floor(Math.random() * nombres.length)

    if (nombres.length === 0) {
        generarTextos('p', 'No se puede sortear un amigo porque no hay.');
    } else {
        generarTextos('p', "El nombre del amigo sorteado fue: " + nombres[nombreGenerado]);
        console.log(nombreGenerado);
    }

}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

function generarTextos(Elemento, Texto) {
    let parrafo = document.querySelector(Elemento);
    parrafo.innerHTML = Texto;

}