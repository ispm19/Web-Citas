function crearCitas(){
    var nombre = document.getElementById('nombreCita').value;
    var email = document.getElementById('emailCita').value;
    var telefono = document.getElementById('telefonoCita').value;
    var fecha = document.getElementById('fechaCita').value;

    if (!nombre || !apellido || !email || !telefono || !fecha) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor completa todos los campos"
          });
        return;
    }

    var cita = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        fecha: fecha
    }

    var citas = JSON.parse(localStorage.getItem('citas')) || [];

    citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citas));

    document.getElementById('crearCitaForm').reset();

    Swal.fire({
        title: "Cita creada!",
        text: "Ya puedes revisar la cita!",
        icon: "success"
      });

}


function mostrarCitas() {
    
    var citas = JSON.parse(localStorage.getItem('citas')) || [];
    var tabla = $('#example2').DataTable();    
    tabla.clear().draw();
    citas.forEach(function (cita) {
        tabla.row.add([
            cita.nombre,
            cita.email,
            cita.telefono,
            cita.fecha,
            '<button onclick="confirmarEliminar1(' + cita.id + ')" class="btn btn-danger">Eliminar</button>'
        ]).draw();
    });
}

function confirmarEliminar1(index) {
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
            
            eliminarCita1(index);
        }
    });
}

function eliminarCita1(index) {
    var citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas.splice(index, 1);
    localStorage.setItem('citas', JSON.stringify(citas));
    mostrarCitas();
}

mostrarCitas();