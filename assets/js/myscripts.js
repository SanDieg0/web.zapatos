// alert("Hola a todos. JS Funciona");

function cambiarFooter(){
	alert("Hizo click en el boton que cambia el footer");
	document.getElementById("elfooter").style.backgroundColor = "red";
	document.getElementById("elfooter").style.color = "yellow";
}// fin cambiarFooter

let elparrafo = document.getElementById("parraforaro");


function cambiarTexto1(){
	
	elparrafo.innerHTML= "Hola Mundo";
	elparrafo.style.color = "blue";
	elparrafo.style.fontSize = "36px";
	elparrafo.style.backgroundColor = "orange";
}// fin cambiarTexto1

function cambiarTexto2(){
	elparrafo.innerHTML= "Hey de nuevo";
	elparrafo.style.color = "green";
	elparrafo.style.fontSize = "24px";
	elparrafo.style.backgroundColor = "pink";
}// fin cambiarTexto2

function cambiarfondo(){
	alert("se cargo la pagina");
	document.getElementById("elbody").style.backgroundColor = "Wheat";
}

function mostrarsaludo(){
	alert("funciona el click en el div");
}

function botonbootstrap(){
	alert("funciona el boton de bootstrap");
	document.getElementById("espacioraro").style.backgroundColor ="orange";
}


function validarForm(){
	alert("funciona el boton enviar");
	let elnombre = document.getElementById("nombre").value;
	let elapellido = document.forms["datosprueba"]["apellido"].value;
	let elresultado = document.getElementById("resultado");

	if(elnombre=="" || elapellido==""){
		alert("LOS DATOS NO PUEDEN ESTAR VACIOS");
		elresultado.style.color="red";
		elresultado.style.fontSize = "18px";
		elresultado.innerHTML = "LOS DATOS NO PUEDEN ESTAR VACIOS"
	}
	else{
		alert("El nombre digitado fue: "+elnombre);
		alert("El apellido digitado fue: "+elapellido);
		elresultado.style.color="Chartreuse";
		elresultado.style.fontSize = "20px";
		let mensaje = "El nombre digitado fue: "+elnombre;
		mensaje = mensaje + ", El apellido digitado fue: "+elapellido;
		elresultado.innerHTML = mensaje;
	}	


}