function cambiarTema(){
	document.getElementById("header").style.background = "none";
	document.getElementById("header").style.backgroundColor = "#333233";
	document.getElementById("productos").style.background = "none";
	document.getElementById("main").style.backgroundColor = "black";
	document.getElementById("footer").style.backgroundColor = "#333233";
	document.getElementById("menuNavbarProductos").style.color = "#cccccc99";
	document.getElementById("menuNavbarContactenos").style.color = "#cccccc99";

}

function overIt(){
	/*document.getElementById("tituloProducto1").style.color = "#cccccc99";
	document.getElementById("precioProducto1").style.color = "#cccccc99";
	document.getElementById("descripcionProducto1").style.color = "#cccccc99";*/

	document.getElementsByClassName("tituloProducto")[0].style.color = "#cccccc99";
	document.getElementsByClassName("precioProducto")[0].style.color = "#cccccc99";
	document.getElementsByClassName("descripcionProducto")[0].style.color = "#cccccc99";	
}
/*function notOverIt(){
	document.getElementById("tituloProducto1").style.color = "black";
	document.getElementById("precioProducto1").style.color = "black";
	document.getElementById("descripcionProducto1").style.color = "black";
}*/


					/*  ESTA PARTE ES DE INDEX    */


function login(){
	let usuarioUser = document.getElementById("usuarioInputLogin").value;
	let contraseñaUser = document.getElementById("contraseñaInputLogin").value;

	if(usuarioUser == "" || contraseñaUser == ""){
		document.getElementById("textx").innerHTML = "Su usuario o contraseña es incorrecto";
	}else{
		document.getElementById("textx").innerHTML = "Su usuario y contraseña son correctos";
	}
}