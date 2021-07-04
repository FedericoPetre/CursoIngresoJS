/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre; // aquí guardo un espacio en memoria para el texto "nombre" que ingrese el usuario
	let edad; // aquí guardo un espacio en memoria para el numero "edad" que ingrese el usuario

	nombre = document.getElementById("txtIdNombre").value; // aquí guardo en la variable nombre, el texto que ingresó el usuario en el cuadro enbebido de la página
	edad = document.getElementById("txtIdEdad").value; // aquí guardo en la variable edad, el numero que representa la edad que el usuario ingreso en el cuadro embebido de la página

	alert("Usted se llama " + nombre + " y tiene " + edad + " años"); // aquí devuelvo la oración con los datos concatenados que ingreso el usuario en cada cuadro embebido de la página
}

