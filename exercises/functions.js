/*
! a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
! Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
! dicha variable en la consola del navegador.
*/
function suma(nro1, nro2){
    return nro1+nro2;
}
var resultSuma = suma(2,3);
console.log(resultSuma);
/*
! b. A la función suma anterior, agregarle una validación para controlar si alguno de
! los parámetros no es un número, mostrar una alerta aclarando que uno de los
! parámetros tiene error y retornar el valor NaN como resultado.
*/
function suma2(nro1, nro2){
    var isValidNro1 = typeof(nro1) != "number";
    var isValidNro2 = typeof(nro2) != "number";
    if(!isValidNro1 || !isValidNro2) return NaN;
    
    return nro1+nro2;
}
/*
! c. Crear una función validate integer que reciba un número como parámetro y
! devuelva verdadero si es un número entero.
*/
function validateInteger(nro){
    return Number.isInteger(nro);
}
/*
! d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
! números sean enteros. En caso que haya decimales mostrar un alerta con el
! error y retorna el número convertido a entero (redondeado).
*/
function suma3(nro1, nro2){
    var isValidNro1 = typeof(nro1) != "number";
    var isValidNro2 = typeof(nro2) != "number";
    if(!isValidNro1 || !isValidNro2) return NaN;
    
    var isIntegerNro1 = validateInteger(nro1);
    var isIntegerNro2 = validateInteger(nro2);
    if(!isIntegerNro1) {
        alert("Se han encontrado decimales en la suma: "+nro1);
        return Math.round(nro1);
    }
    if(!isIntegerNro2){
        alert("Se han encontrado decimales en la suma: "+ nro2);
        return Math.round(nro2);
    }

    return nro1+nro2;
}
/*
! e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
! dentro de la función suma probando que todo siga funcionando igual.
*/
function validateNumber(nro){
    var isValidNro = typeof(nro) != "number";
    if(!isValidNro) return NaN;

    var isIntegerNro = validateInteger(nro);
    if(!isIntegerNro) {
        alert("Se han encontrado decimales en la suma: "+nro);
        return Math.round(nro);
    }
}

function suma4(nro1, nro2){
    validateNumber()

    return nro1+nro2;
}
