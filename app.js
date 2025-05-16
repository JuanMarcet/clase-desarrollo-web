    const agregarBtn = document.getElementById("agregarBtn");
    const nombreInput = document.getElementById("nombreInput");
    const listaNombres = document.getElementById("listaNombres");
    const mensaje = document.getElementById("mensaje");


    
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

    // Agregar botón al <li>
    li.appendChild(eliminarBtn);
    li.appendChild(editarBtn);

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


