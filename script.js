function encender() {
    document.getElementById("bombilla").src = "/assets/bombilla_encendida.png";
    document.getElementById("btnEncender").disabled = true;
    document.getElementById("btnApagar").disabled = false;
}

function apagar() {
    document.getElementById("bombilla").src = "/assets/bombilla_apagada.png";
    document.getElementById("btnEncender").disabled = false;
    document.getElementById("btnApagar").disabled = true;
}

function sumarValores() {
    let valor1 = document.getElementById("numero1").value.trim();
    let valor2 = document.getElementById("numero2").value.trim();
    let resultado = parseFloat(valor1) + parseFloat(valor2);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function calcularPromedio() {
    let calificacion1 = document.getElementById("calificacion1").value.trim();
    let calificacion2 = document.getElementById("calificacion2").value.trim();
    let calificacion3 = document.getElementById("calificacion3").value.trim();

    let promedio = (parseFloat(calificacion1) + parseFloat(calificacion2) + parseFloat(calificacion3)) / 3;
    if (promedio >= 7){
        document.getElementById("promedio").innerHTML = "Aprobado: " + promedio;
    }else if (promedio < 7 && promedio >= 4){
        document.getElementById("promedio").innerHTML = "entra a recuperacion: " + promedio;
    }else{
        document.getElementById("promedio").innerHTML = "Reprobado: " + promedio;
    }
}