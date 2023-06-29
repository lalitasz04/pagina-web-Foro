var noticias = [];

function guardarNoticia(event) {
    event.preventDefault();

    var titulo = document.getElementById("titulo").value;
    var contenido = document.getElementById("contenido").value;
    var imagen = document.getElementById("imagen").files[0];

    var noticiasGuardadas = document.getElementById("noticiasGuardadas");
    noticiasGuardadas.style.display = "block";

    var noticia = {
        titulo: titulo,
        contenido: contenido,
        imagen: imagen ? URL.createObjectURL(imagen) : null,
        fecha: obtenerFechaHora()
    };

    noticias.push(noticia);

    mostrarNoticiasGuardadas();

    // Limpiar los campos del formulario
    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("imagenMostrada").style.display = "none";
}

function mostrarNoticiasGuardadas() {
    var noticiasGuardadas = document.getElementById("noticiasGuardadas");
    noticiasGuardadas.innerHTML = "<h2>Noticias guardadas:</h2>";

    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];

        var noticiaElement = document.createElement("div");
        noticiaElement.className = "noticia";

        var tituloElement = document.createElement("h3");
        tituloElement.textContent = noticia.titulo;
        noticiaElement.appendChild(tituloElement);

        var contenidoElement = document.createElement("p");
        contenidoElement.textContent = noticia.contenido;
        noticiaElement.appendChild(contenidoElement);

        var imagenElement = document.createElement("img");
        imagenElement.src = noticia.imagen;
        imagenElement.alt = "Imagen de la noticia";
        imagenElement.style.maxWidth = "25%";
        imagenElement.style.height = "auto";
        imagenElement.style.textAlign = "center";
        noticiaElement.appendChild(imagenElement);

        var fechaElement = document.createElement("p");
        fechaElement.className = "fecha";
        fechaElement.textContent = noticia.fecha;
        noticiaElement.appendChild(fechaElement);

        var editarElement = document.createElement("span");
        editarElement.className = "editar";
        editarElement.textContent = "Editar";
        editarElement.setAttribute("onclick", "editarNoticia(" + i + ")");
        noticiaElement.appendChild(editarElement);

        var eliminarElement = document.createElement("span");
        eliminarElement.className = "eliminar";
        eliminarElement.textContent = "Eliminar";
        eliminarElement.setAttribute("onclick", "eliminarNoticia(" + i + ")");
        noticiaElement.appendChild(eliminarElement);

        noticiasGuardadas.appendChild(noticiaElement);
    }
}

function obtenerFechaHora() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();

    var fechaHora = dia + "/" + mes + "/" + anio + " " + hora + ":" + minutos;

    return fechaHora;
}

function mostrarImagen(event) {
    var imagenMostrada = document.getElementById("imagenMostrada");
    var imagen = event.target.files[0];

    if (imagen) {
        imagenMostrada.style.display = "inline";
        imagenMostrada.style.marginLeft = "auto";
        imagenMostrada.style.marginRight = "auto";
        imagenMostrada.src = URL.createObjectURL(imagen);
    } else {
        imagenMostrada.style.display = "none";
    }
}

function editarNoticia(index) {
    var noticia = noticias[index];

    document.getElementById("titulo").value = noticia.titulo;
    document.getElementById("contenido").value = noticia.contenido;
    document.getElementById("imagen").value = "";
    document.getElementById("imagenMostrada").style.display = "none";

    noticias.splice(index, 1);
    mostrarNoticiasGuardadas();
}

function eliminarNoticia(index) {
    noticias.splice(index, 1);
    mostrarNoticiasGuardadas();
}