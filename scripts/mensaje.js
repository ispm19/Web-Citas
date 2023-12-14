function mensaje1() {
    var nombreCompleto = document.getElementById('nombreCompleto').value;
    var email = document.getElementById('emailMensaje').value;
    var telefono = document.getElementById('telefonoMensaje').value;
    var mensajeTexto = document.getElementById('mensaje').value;

    if(!nombreCompleto || !email || !telefono || !mensajeTexto ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes llenar todos los campos"
          });
          return;
    }

    var nuevoMensaje = {
        nombreCompleto: nombreCompleto,
        email: email,
        telefono: telefono,
        mensaje: mensajeTexto
    };

    console.log(nuevoMensaje);

    var mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    mensajes.push(nuevoMensaje);
    localStorage.setItem('mensajes', JSON.stringify(mensajes));

    console.log("Mensajes en localStorage:", mensajes);

    
    document.getElementById('enviarMensaje').reset();

    
    Swal.fire({
        title: "Mensaje enviado",
        text: "Tu mensaje ha sido enviado correctamente.",
        icon: "success"
    });
}

function mostrarMensajes() {
    
    var mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    var tabla = $('#example').DataTable();    
    tabla.clear().draw();
    mensajes.forEach(function (mensaje) {
        tabla.row.add([
            mensaje.nombreCompleto,
            mensaje.email,
            mensaje.telefono,
            mensaje.mensaje,
            '<button onclick="confirmarEliminar(' + mensaje.id + ')" class="btn btn-danger">Eliminar</button>'
        ]).draw();
    });
}
function confirmarEliminar(index) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            
            eliminarMensaje(index);
        }
    });
}

function eliminarMensaje(index) {
    var mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    mensajes.splice(index, 1);
    localStorage.setItem('mensajes', JSON.stringify(mensajes));
    mostrarMensajes();
}

mostrarMensajes();