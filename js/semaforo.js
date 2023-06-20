let coloresSemaforo = ['ROJO', 'AMARILLO', 'VERDE'];
let color = 0;
let intervalo = null;

function semaforoAutomatico() {
    let semaforoImagen = document.getElementById('semaforoImagen');
    let colorSemaforo = coloresSemaforo[color];
    semaforoImagen.src = "./img/" + colorSemaforo + ".png";

    if (colorSemaforo === 'ROJO') {
        color = 2;
    } else if (colorSemaforo === 'AMARILLO') {
        color = 0;
    } else if (colorSemaforo === 'VERDE') {
        color = 1;
    }

}

function iniciarSemaforo() {
    if (intervalo === null) {
        semaforoAutomatico();
        intervalo = setInterval(semaforoAutomatico, 3000);
    }
}
function detenerSemaforo() {
    clearInterval(intervalo);
    intervalo = null;
}
iniciarSemaforo();

