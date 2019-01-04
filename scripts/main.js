var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello world!';

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/javascript.jpg') {
      miImage.setAttribute('src','images/javascript2.png');
    } else {
      miImage.setAttribute('src', 'images/javascript.jpg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Curso de Javascript de ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Curso de Javascript de ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}