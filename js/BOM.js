"use strict";

var cont = 0;
var ventana = [];
function abrirVentana(production){
    cont++;
	var pagina= "NuevaPestaña.html";
	var main = document.getElementById("div-main");
	
	var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(production.title));
	main.appendChild(h2);
	
	ventana[cont]=window.open(pagina);
}

function cerrarVentanas(){
	for(var i = 1; i <= cont; i++){
		ventana[i].close();
	}
	cont=0;
}

