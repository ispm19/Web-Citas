
class header1 extends HTMLElement{
    constructor(){
        
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <header>
        <head>
            <nav class="navbar navbar-expand-sm fixed-top navbar-light" id="nav">
                <div class="container-fluid">
                  <img class="mx-5" src="img/icon1.svg" alt="" width="35" height="35">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                    <div class="mx-3 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="http://127.0.0.1:5500/index.html">Inicio</a>
                        </li>
                        <li class="nav-item" style="display:none" id="agendarCita">
                            <a class="nav-link" href="#agendarCita1" tabindex="-1"  >Tus citas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="servicios1" href="#servicios" tabindex="-1">Servicios</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#nosotros" id="nosotros1" tabindex="-1" aria-disabled="true">Nosotros</a>
                        </li>
                        <li class="nav-item" id="contactanos1">
                            <a class="nav-link session" href="#contactanos" tabindex="-1" aria-disabled="true">Contactanos</a>
                        </li>
                        <li class="nav-item" style="display: none;" id="mensajesAdmin">
                            <a class="nav-link session" href="admin.html" tabindex="-1" aria-disabled="true">Mensajes</a>
                        </li>
                        <li class="nav-item" style="display: none;">
                            <a class="nav-link session" href="" tabindex="-1" aria-disabled="true">Agendar cita</a>
                        </li>
                        </ul>
                        <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end" id="navbar-login">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                </a>
                            <li class="nav-item dropdown">
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a href="#" class="dropdown-item" id="collapseExample" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Registrarse
                                </a></li>
                                <li><a href="#" class="dropdown-item" id="collapseExample1" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                    Iniciar Sesion
                                </a>
                            </li>
                            </li>
                        </ul>
                    </div>
                    <div class="ms-auto order-last">
                    <button type="button" id="cerrarSesion" onclick="logout()" class="btn btn-danger nav-item" style="display: none">Cerrar Sesion</button>
                    </div>
                </div>
                
              </nav>
        </head>  
        <!--Modal inicio sesion-->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Crea tu usuario</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form id="loginForm">
                <div class="container mt-4"  >
                    <div class="row justify-content-center">
                        <img src="https://static.thenounproject.com/png/70749-200.png" style="width: 25%;" alt="">
                        <div class="col-lg-12 justify-content-center bg-white">
                                <div class="row justify-content-center">                        
                                        <div class="col-md-12 mt-3 mb-3">    
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="loginEmail" placeholder="name@example.com">
                                                <label>Email address</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="loginPassword" placeholder="Password">
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                <label class="form-check-label" for="flexCheckDefault">
                                                  Recordarme
                                                </label>
                                            </div>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="login()">Iniciar Sesion</button>
        </div>
    </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Crea tu usuario</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form id="registrationForm">
                <div class="container mt-4">
                    <div class="row justify-content-center">
                        <img src="https://static.thenounproject.com/png/70749-200.png" style="width: 25%;" alt="">
                        <div class="col-lg-12 justify-content-center bg-white">
                                <div class="row justify-content-center mt-4">
                                    <div class="col-md-6 mb-3">    
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="nombre" placeholder="nombre" required>
                                            <label>Nombre</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="apellido" placeholder="Apellido" required>
                                            <label>Apellido</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">                        
                                        <div class="col-md-6 mb-3">    
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                                                <label>Email address</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="password" placeholder="Password" required>
                                                <label>Password</label>
                                            </div>
                                        </div>
                                </div>
                                <div class="row justify-content-center">                        
                                    <div class="col-md-6 mb-3">
                                        <div class="input-group">
                                            <div class="form-floating">
                                                <select class="form-select" id="sexo" aria-placeholder="" required>
                                                    
                                                    <option value="Masculino">Masculino</option>
                                                    <option value="Femenino">Femenino</option>
                                                </select>
                                                <label>Sexo</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="edad" placeholder="" required>
                                            <label>Edad</label>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" onclick="register()" class="btn btn-primary">Crear usuario</button>
        </div>
    </div>
    </div>
</div> 
</header><script src="scripts.js"></script>`;
    }
}

window.customElements.define("encabezado-n", header1);


