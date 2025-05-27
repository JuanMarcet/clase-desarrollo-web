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



// ************************* semana 4 **************** Lista de nombres ************************************************** 

// Obtener elementos del DOM
    const agregarBtn = document.getElementById("agregarBtn");
    const nombreInput = document.getElementById("nombreInput");
    const listaNombres = document.getElementById("listaNombres");
    const mensaje = document.getElementById("mensaje");

    // Agregar evento al botón al dar enter
nombreInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            agregar();
        }
    });


    function agregar() {
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        mensaje.textContent = "⚠️ Por favor, escribe un nombre.";
        return;
    }
    mensaje.textContent = "";

    // Crear elemento <li>
    const li = document.createElement("li");
    li.textContent = nombre;

    // Crear un <div> para contener los botones
    const div = document.createElement("div");
    div.classList.add("contenedorBotones");

    // Crear botón de eliminar
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add("botonlista" , "eliminar");

        // Crear botón de editar
    const editarBtn = document.createElement("button");
    editarBtn.textContent = "Editar";
    editarBtn.classList.add("botonlista" , "editar");
    
    // Agregar funcionalidad para eliminar
    eliminarBtn.addEventListener("click", () => {
        eliminar(li);
    });

    // Agregar funcionalidad para editar
    editarBtn.addEventListener("click", () => {
        editar(li);
    });

    // agregar los botones al <div>
    div.appendChild(eliminarBtn);
    div.appendChild(editarBtn);

    // agregar el <div> al <li>
    li.appendChild(div);

    // Agregar <li> a la lista
    listaNombres.appendChild(li);

    // Limpiar el input
    nombreInput.value = "";
    nombreInput.focus();
}

function eliminar(li) {
    if (confirm("¿Estás seguro de que deseas eliminar este nombre?")) {
        li.remove();
    } else {
        alert("Operación cancelada");
    }
}

function editar(li) {
    const nuevoNombre = prompt("Introduce el nuevo nombre:", li.firstChild.textContent);
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
        li.firstChild.textContent = nuevoNombre;
    } else {
        alert("Operación cancelada");
    }
}

//*************************semana 5****************cambiar color************************************************** */

let boton=document.getElementById("btnCambiarColor");
boton.addEventListener("click", ()=>
    {
        let aleatorio1= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio2= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio3= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio4= Math.floor(Math.random() * (255+1-0) + 0);
        document.body.style.backgroundColor=`rgba(${aleatorio1}, ${aleatorio2}, ${aleatorio3}, ${aleatorio4})`;
    });

    