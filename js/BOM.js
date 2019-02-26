"use strict";
var ventana = [];
var cont = 0;
function Ventana(production){
	function escribir(){
		var main = ventana[cont].document.getElementById("div-main");
		var cap = document.createElement("div");
		cap.setAttribute("class", "caption");
		main.appendChild(cap);
		//Creo un div para meterlo en columnas más pequeñas y se quede a un lado
		var fotoPro = document.createElement("div");
		fotoPro.setAttribute("class", "col-sm-4 resource");
		cap.appendChild(fotoPro);

		//Creo el div donde va la miniatura de la foto
		var galeria = document.createElement("div");
		galeria.setAttribute("class", "thumbnail");
		fotoPro.appendChild(galeria);

		//Cojo la foto de la Producción
		var imgPro = document.createElement("img");
		imgPro.setAttribute("src", production.image);
		galeria.appendChild(imgPro);

		//Meto la descripción de la foto
		var desc = document.createElement("div");
		desc.setAttribute("class", "caption");
		galeria.appendChild(desc);

		//El nombre y el link para entrar a las producciones
		var h4 = document.createElement("h4");
		desc.setAttribute("class", "title");
		h4.appendChild(document.createTextNode(production.title));
		desc.appendChild(h4);

		//Creo un div para meter la info
        var info = document.createElement("div");
        info.setAttribute("class", "col-sm-4 resource");
        cap.appendChild(info);

        var name = document.createElement("h2");
        name.appendChild(document.createTextNode("Más datos"));
        info.appendChild(name);

        var p1= document.createElement("p");
        p1.appendChild(document.createTextNode("Duración: "+ production.resource.duration));
        info.appendChild(p1);

        var p2 = document.createElement("p");
        p2.appendChild(document.createTextNode("Link de acceso: "+ production.resource.link));
		info.appendChild(p2);
		
		var btn1 = document.createElement("button");
        btn1.setAttribute("type", "button");
        btn1.setAttribute("class", "btn btn-default btnInfo")
        btn1.appendChild(document.createTextNode("Cerrar"));
        btn1.setAttribute("onclick", "window.close()")
        info.appendChild(btn1);

		
	}
	return function(){
		cont++;
		var pagina= "NuevaPestaña.html";	
		ventana[cont]=window.open(pagina);
		ventana[cont].onload = escribir;
	}
}

function cerrarVentanas(){
	return function(){
		for(var i = 1; i <= cont; i++){
			ventana[i].close();
		}
		cont=0;
	}
}


