/*
! a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
! texto en mayúscula (utilizar toUpperCase).
*/
var textoMinusculas = "Esta es una variable de al menos 10 caracteres";
textoMinusculas = textoMinusculas.toUpperCase();
console.log(textoMinusculas)
/*
! b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
! string con los primeros 5 caracteres guardando el resultado en una nueva
! variable (utilizar substring).
*/
var texto2 = "Variable de al menos 10 caracteres";
var texto3 = texto2.substring(0,5);
console.log(texto3)
/*
! c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
! string con los últimos 3 caracteres guardando el resultado en una nueva variable
! (utilizar substring).
*/
var texto4 = "Variable de al menos 10 caracteres";
var longitud = texto4.length;
var texto5 = texto4.substring(longitud-3, longitud)
console.log(texto5)
/*
! d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
! string con la primera letra en mayúscula y las demás en minúscula. Guardar el
! resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
! el operador +).
*/
var texto6 = "varIABlE dE Al mEnoS 10 caraCterEs";
var primeraLetra = texto6.substring(0,1);
var restoTexto = texto6.substring(1, texto6.length);
var texto7 = primeraLetra.toUpperCase() + restoTexto.toLowerCase();
console.log(texto7)
/*
! e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
! blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
! variable (utilizar indexOf).
*/
var texto8 = "Variable de al menos 10 caracteres";
var spaceIndex = texto8.indexOf(" ");
console.log(spaceIndex);
/*
! f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
! algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
! generar un nuevo string que tenga la primera letra de ambas palabras en
! mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
! toUpperCase, toLowerCase y el operador +).
*/
var texto10 = "TextoReQuete LargoBienGrande";
var spaceIndex2 = texto10.indexOf(" ");
var texto10FirstWord = texto10.substring(0, spaceIndex2);
var texto10SecondWord = texto10.substring(spaceIndex2+1, texto10.length);

var firstWordFirstLetter = texto10FirstWord.substring(0,1);
var secondWordFirstLetter = texto10SecondWord.substring(0,1);

var firstWordOtherLetters = texto10FirstWord.substring(1,texto10FirstWord.length);
var secondWordOtherLetters = texto10SecondWord.substring(1,texto10SecondWord.length);

var texto11 = 
firstWordFirstLetter.toUpperCase() +
firstWordOtherLetters.toLowerCase() +
secondWordFirstLetter.toUpperCase() +
secondWordOtherLetters.toLowerCase()
console.log(texto11)