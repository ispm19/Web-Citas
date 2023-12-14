
function login() {
  var users = JSON.parse(localStorage.getItem('users')) || [];
  
  var email = document.getElementById('loginEmail').value;
  var pwd = document.getElementById('loginPassword').value;

  
  var user = users.find(function (user) {
      return user.email === email;
  });


  if (user && user.password === pwd) {
      Swal.fire({
          title: "Inicio de sesion exitoso!",
          text: "",
          icon: "success"
      });
      
      
      window.location.href = 'index.html';

      if (user.email === "admin@hotmail.com" || user.password === "admin") {
        localStorage.setItem('userToken', 'tokenGeneradoOIdentificadorUnico');
        document.getElementById('mensajesAdmin').style.display = 'block';
        document.getElementById('contactanos1').style.display = 'none';
        document.getElementById('servicios1').style.display = 'none';
        document.getElementById('agendarCita').style.display = 'none';
        document.getElementById('nosotros1').style.display = 'none';
        document.getElementById('cerrarSesion').style.display='block';
        document.getElementById('navbar-login').classList.add('hide-element');
        document.getElementById('navbar-login').classList.remove('show-element');
        window.location.href = 'admin.html';
    }
        localStorage.setItem('userToken', 'tokenGeneradoOIdentificadorUnico');

        
      

  } else {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tu correo y/o contraseña está incorrecto"
      });

      document.getElementById('navbar-login').classList.remove('hide-element');
        document.getElementById('navbar-login').classList.add('show-element');
        document.getElementById('cerrarSesion').style.display='none';
  }

  

  document.getElementById('loginForm').reset();
}

function logout() {

  localStorage.removeItem('userToken');

  document.getElementById('navbar-login').classList.remove('hide-element');
  document.getElementById('navbar-login').classList.add('show-element');
  
  window.location.href = 'index.html';

}

document.addEventListener('DOMContentLoaded', function() {
  verificarAutenticacion();
});

function verificarAutenticacion() {
var userToken = localStorage.getItem('userToken');

if (!userToken) {
  if (!userToken && window.location.pathname !== '/index.html') {
    
    window.location.href = 'index.html';
    
  }
} else {
        document.getElementById('agendarCita1').style.display='block';
        document.getElementById('agendarCita').style.display='block';
        document.getElementById('cerrarSesion').style.display='block';
        document.getElementById('navbar-login').classList.add('hide-element');
        document.getElementById('navbar-login').classList.remove('show-element');
    
}
}

