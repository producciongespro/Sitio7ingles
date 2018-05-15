
// ************Es el modo estricto de las variables, evita escribir con errores las variables**********
"use strict"

// ****************************
$(document).ready(function () {

	// EVENTO CLIC, al hacer clic a la imagen .card-img-top va a hacer el evento cargarMedio
	$(".card-img-top").click(function () {
		// Cargar el video en el MODAL
		// EVENTO QUELO LLAMA AL METODO

			cargarMedio(this);
	});
	//Evento clic a toda la clase nav link
<<<<<<< HEAD
	$(".nav-link").click(function () {
		ReproducirEfecto()
=======
	$(".nav-link").click(function (event) {
		event.preventDefault();
		ReproducirEfecto(this)
>>>>>>> 59b2cfd449d7c926be444a76463fb517018957d5
	})
})

// METODO QUE CARGA si es MP3, SI ES VIDEO DE YOUTUBE O SI ES UN PDF
function cargarMedio(Objeto) {
	var ruta = $(Objeto).attr("ruta"), opcion = $(Objeto).attr("tipo") , controlMedio;
console.log(opcion);
	switch (opcion) {
		case "mp3":
		controlMedio = $("<audio controls='true' preload='true'> </audio>");
 	$(controlMedio).attr("src" ,ruta);
			break;
			case "youtube":
			controlMedio = $("<iframe width='600px' height='400px' src='"+ ruta +"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");

				break;
				case "pdf":
				controlMedio = $("<embed id='currentMedio' src='"+ ruta +"' type='application/pdf' width='100%' height='100%'></embed>");
				$(controlMedio).css("height", "420px");
					break;
		default:
		console.log("extension no encontrada");
	}
	$("#contenedorPlayer").html(controlMedio);
	$("#modalMedios").modal();
}

// ****************************************

<<<<<<< HEAD
// function ReproducirEfecto() {
// 	 document.getElementById("audioEfecto").play();
// 	 document.getElementById("audioEfecto").pause();
// 	 document.getElementById("audioEfecto").currentTime = 0;
// 	 console.log( document.getElementById("audioEfecto"));
// }
=======
function ReproducirEfecto(item) {
var objAudio = document.getElementById("audioEfecto"), pagina = $(item).attr("pagina");
console.log(pagina);
	objAudio.currentTime = 0;
	objAudio.play();
	// console.log(objAudio);
	setTimeout(function () {
		window.location=pagina;
	}, 1000);

}
>>>>>>> 59b2cfd449d7c926be444a76463fb517018957d5
