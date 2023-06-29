    var palabrasProhibidas = ['puto', 'puta', 'verga', 'rarito', 'mierda', 'pelotudo', 'boludo'];

    function publicarComentario() {
      var commentInput = document.getElementById("commentInput");
      var commentText = commentInput.value.trim();

      if (commentText === "") {
        return;
      }

      var comentarioInvalido = palabrasProhibidas.some(function(palabraProhibida) {
        var regex = new RegExp("\\b" + palabraProhibida + "\\b", "i");
        return regex.test(commentText);
      });

      if (comentarioInvalido) {
        var errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "No puedes ingresar malas palabras";
        return;
      }

      var commentItem = document.createElement("li");
      commentItem.textContent = commentText;

      var commentMeta = document.createElement("div");
      commentMeta.classList.add("comment-meta");
      commentMeta.textContent = "Por: Nombre de Usuario - " + obtenerFechaActual();

      commentItem.appendChild(commentMeta);

      var commentList = document.getElementById("commentList");
      commentList.insertBefore(commentItem, commentList.firstChild);

      commentInput.value = "";

      var errorMessage = document.getElementById("errorMessage");
      errorMessage.textContent = "";
    }
    
    function obtenerFechaActual() {
      var fecha = new Date();
      var dia = fecha.getDate();
      var mes = fecha.getMonth() + 1;
      var anio = fecha.getFullYear();
      var hora = fecha.getHours();
      var minutos = fecha.getMinutes();

      return dia + "/" + mes + "/" + anio + " " + hora + ":" + minutos;
    }