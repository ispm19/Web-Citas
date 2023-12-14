function register() {
    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var sexo = document.getElementById('sexo').value;
    var edad = document.getElementById('edad').value;

    if (!nombre || !apellido || !email || !password || !sexo || !edad) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor completa todos los campos"
          });
        return;
    }

    var user = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        sexo: sexo,
        edad: edad
        
    };

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var emailExists = users.some(function(user) {
        return user.email === email;
    });

    if (emailExists) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Este correo ya esta registrado"
          });
          
        return;
    }
    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('registrationForm').reset();

    Swal.fire({
        title: "Cuenta creada!",
        text: "Ya puedes iniciar sesion!",
        icon: "success"
      });
}

