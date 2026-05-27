/*
! a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
! bucle for de JavaScript para mostrar una alerta utilizando cada una de las
! palabras.
*/
var array = ["Palabra1", "Palabra2", "Palabra3", "Palabra4", "Palabra5"];
for(var i = 0; i < array.length; i++){
    alert(array[i])
}
/*
! b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
! mostrar una alerta por cada palabra modificada.
*/
for(var i = 0; i < array.length; i++){
    var palabraAct = array[i];
    var primeraLetra = palabraAct.substring(0,1);
    var resto = palabraAct.substring(1, palabraAct.length)
    alert(primeraLetra.toUpperCase() + resto.toLowerCase());
}

/*
! c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
! del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
! la variable sentence. Al final mostrar una única alerta con la cadena completa.
*/
var sentence = "";
for(var i = 0; i < array.length; i++){
    sentence = sentence+array[i]
}
alert(sentence)
/*
! d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
! el número de la repetición, es decir que al final de la ejecución del bucle for
! debería haber 10 elementos dentro del array, desde el número 0 hasta al número
! 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/
var emptyArr = [];
var elementsLength = 10;
for(var i = 0; i < elementsLength; i++){
    emptyArr.push(i)
}
alert(emptyArr);