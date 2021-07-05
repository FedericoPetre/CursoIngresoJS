/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// primero guardo tres espacios en memoria, los cuales son el primer numero a sumar, el segundo a sumar, y el resultado de la suma de ambos
	let num1; // primer numero que se va a sumar
	let num2; // segundo numero que se va a sumear
	let suma; // resultado de sumar num1 con num2

	num1 = document.getElementById("txtIdNumeroUno").value; // aquí se guardara el primer valor que ingrese el usuario en la casilla embebida de la página en formato texto
	num1 = parseInt(num1); // aquí convertimos el primer valor que ingreso el usuario en formato numérico

	num2 = document.getElementById("txtIdNumeroDos").value; // aquí se guardara el segundo valor que ingrese el usuario en la casilla embebida de la página en formato texto
	num2 = parseInt(num2); // aquí convertimos el segundo valor que ingreso el usuario en formato numérico

	suma = num1 + num2; // aquí realizamos la suma de ambos numeros que ingresó el usuario, y guardamos el resultado de esa suma en la variable suma

	alert("La suma es " + suma); // aquí mostramos por pantalla el resultado de la suma
}

