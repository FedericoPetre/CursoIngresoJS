/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// aquí defino la variable nombre, en la cual se guardará el valor nombre que ingrese el usuario
	var nombre;

	// guardo en la variable nombre, el texto que ingreso el usuario dentro de la variable prompt	
	nombre = prompt("Ingrese su nombre aquí");

	// copio el nombre que tengo guardado dentro de la variable nombre en la caja de texto embebida en la página
	document.getElementById("txtIdNombre").value = nombre;
}

