"use strict";

var cont = 0;
var ventana = [];
function abrirVentana(){
    cont++;
	var pagina= "NuevaPestaña.html";	
	ventana[cont]=window.open(pagina);
}

function cerrarVentanas(){
	for(var i = 1; i <= cont; i++){
		ventana[i].close();
	}
	cont=0;
}

