class footer1 extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<div id="footer">
        <p>Desarrollado por Isaias Perez Moya</p>
        <p>© Copyright - Todos los derechos reservados
        
        </p>
        </div>`;
    }
}

window.customElements.define("pie-n", footer1);