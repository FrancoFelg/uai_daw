/*
! a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
! "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
! consola los meses 5 y 11 (utilizar console.log).
*/
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[4], array[10]);
/*
! b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/
array.sort();
console.log(array)
/*
! c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
array.push("MesNuevo")
array.unshift("OtroMas")
console.log(array)
/*
! d. Quitar un elemento del principio y del final del array (utilizar shift y pop). 
*/
array.shift()
array.pop()
console.log(array)
/*
! e. Invertir el orden del array (utilizar reverse).
*/
array.reverse();
console.log(array)
/*
!  f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/
var newArray = array.join(", ")
console.log(newArray)
/*
! g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). 
*/
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newArray2 = array.slice(4, 11);
console.log(newArray2)