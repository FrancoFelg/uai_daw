/*
Capturar el evento blur de cada campo para ejecutar su validación.
Capturar el evento focus de cada campo para ocultar el mensaje de error correspondiente.
Capturar el evento submit del formulario o el evento click del botón Enviar para validar todos los campos antes de mostrar el resultado final.
Mostrar los mensajes de error debajo de cada campo cuando corresponda.
Mostrar un cartel emergente final con los datos cargados o con los errores encontrados.
Implementar, de manera opcional, la funcionalidad bonus del título dinámico.
*/


var formulario = document.getElementById("subscription-form");
var botonEnviar = document.getElementById("btn-enviar");
//Inputs:
var inputNombre = document.getElementById("nombre");
var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");
var inputConfirmPassword = document.getElementById("confirmPassword");
var inputEdad = document.getElementById("edad");
var inputTelefono = document.getElementById("telefono");
var inputDireccion = document.getElementById("direccion");
var inputCiudad = document.getElementById("ciudad");
var inputCodigoPostal = document.getElementById("codigoPostal");
var inputDni = document.getElementById("dni");

//ErrorLabels:
var errorNombre = document.getElementById("error-nombre");
var errorEmail = document.getElementById("error-email");
var errorPassword = document.getElementById("error-password");
var errorConfirmPassword = document.getElementById("error-confirmPassword");
var errorEdad = document.getElementById("error-edad");
var errorTelefono = document.getElementById("error-telefono");
var errorDireccion = document.getElementById("error-direccion");
var errorCiudad = document.getElementById("error-ciudad");
var errorCodigoPostal = document.getElementById("error-codigoPostal");
var errorDni = document.getElementById("error-dni");

function validarNombre() {
    var val = inputNombre.value.trim();
    if (val.length <= 6) {
        errorNombre.textContent = "Debe tener más de 6 letras.";
        return false;
    }
    if (!val.includes(" ")) {
        errorNombre.textContent = "Debe contener al menos un espacio.";
        return false;
    }
    errorNombre.textContent = "";
    return true;
}

function validarEmail() {
    var val = inputEmail.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
        errorEmail.textContent = "Formato de email inválido.";
        return false;
    }
    errorEmail.textContent = "";
    return true;
}

function validarPassword() {
    var val = inputPassword.value;
    var tieneLetras = /[a-zA-Z]/.test(val);
    var tieneNumeros = /[0-9]/.test(val);
    if (val.length < 8 || !tieneLetras || !tieneNumeros) {
        errorPassword.textContent = "Al menos 8 caracteres, con letras y números.";
        return false;
    }
    errorPassword.textContent = "";
    return true;
}

function validarConfirmPassword() {
    var val = inputConfirmPassword.value;
    if (val !== inputPassword.value || val === "") {
        errorConfirmPassword.textContent = "Las contraseñas no coinciden.";
        return false;
    }
    errorConfirmPassword.textContent = "";
    return true;
}

function validarEdad() {
    var val = inputEdad.value;
    var num = parseInt(val, 10);
    if (isNaN(num) || num < 18 || !Number.isInteger(Number(val))) {
        errorEdad.textContent = "Debe ser un número entero mayor o igual a 18.";
        return false;
    }
    errorEdad.textContent = "";
    return true;
}

function validarTelefono() {
    var val = inputTelefono.value;
    if (/[^0-9]/.test(val) || val.length < 7) {
        errorTelefono.textContent = "Mínimo 7 dígitos, sin espacios, guiones ni paréntesis.";
        return false;
    }
    errorTelefono.textContent = "";
    return true;
}

function validarDireccion() {
    var val = inputDireccion.value;
    var tieneLetras = /[a-zA-Z]/.test(val);
    var tieneNumeros = /[0-9]/.test(val);
    var tieneEspacio = val.includes(" ");
    if (val.length < 5 || !tieneLetras || !tieneNumeros || !tieneEspacio) {
        errorDireccion.textContent = "Al menos 5 caracteres, con letras, números y un espacio.";
        return false;
    }
    errorDireccion.textContent = "";
    return true;
}

function validarCiudad() {
    if (inputCiudad.value.trim().length < 3) {
        errorCiudad.textContent = "Debe tener al menos 3 caracteres.";
        return false;
    }
    errorCiudad.textContent = "";
    return true;
}

function validarCodigoPostal() {
    if (inputCodigoPostal.value.trim().length < 3) {
        errorCodigoPostal.textContent = "Debe tener al menos 3 caracteres.";
        return false;
    }
    errorCodigoPostal.textContent = "";
    return true;
}

function validarDni() {
    var val = inputDni.value;
    if (/[^0-9]/.test(val) || (val.length !== 7 && val.length !== 8)) {
        errorDni.textContent = "Número de 7 u 8 dígitos.";
        return false;
    }
    errorDni.textContent = "";
    return true;
}


//Asignación de Eventos
// Nombre
inputNombre.addEventListener("blur", validarNombre);
inputNombre.addEventListener("focus", function() { errorNombre.textContent = ""; });
inputNombre.addEventListener("change", () => {
    if(!validarNombre()) return;
    var nombreText = document.getElementById("dynamic-title");
    nombreText.innerText = inputNombre.value;
});

// Email
inputEmail.addEventListener("blur", validarEmail);
inputEmail.addEventListener("focus", function() { errorEmail.textContent = ""; });

// Contraseña
inputPassword.addEventListener("blur", validarPassword);
inputPassword.addEventListener("focus", function() { errorPassword.textContent = ""; });

// Repetir Contraseña
inputConfirmPassword.addEventListener("blur", validarConfirmPassword);
inputConfirmPassword.addEventListener("focus", function() { errorConfirmPassword.textContent = ""; });

// Edad
inputEdad.addEventListener("blur", validarEdad);
inputEdad.addEventListener("focus", function() { errorEdad.textContent = ""; });

// Teléfono
inputTelefono.addEventListener("blur", validarTelefono);
inputTelefono.addEventListener("focus", function() { errorTelefono.textContent = ""; });

// Dirección
inputDireccion.addEventListener("blur", validarDireccion);
inputDireccion.addEventListener("focus", function() { errorDireccion.textContent = ""; });

// Ciudad
inputCiudad.addEventListener("blur", validarCiudad);
inputCiudad.addEventListener("focus", function() { errorCiudad.textContent = ""; });

// Código Postal
inputCodigoPostal.addEventListener("blur", validarCodigoPostal);
inputCodigoPostal.addEventListener("focus", function() { errorCodigoPostal.textContent = ""; });

// DNI
inputDni.addEventListener("blur", validarDni);
inputDni.addEventListener("focus", function() { errorDni.textContent = ""; });

//Evento en caso de enviar:
formulario.addEventListener("submit", function(elementoEvento) {
    elementoEvento.preventDefault();

    var esNombreValido = validarNombre();
    var esEmailValido = validarEmail();
    var esPasswordValido = validarPassword();
    var esConfirmValido = validarConfirmPassword();
    var esEdadValido = validarEdad();
    var esTelefonoValido = validarTelefono();
    var esDireccionValido = validarDireccion();
    var esCiudadValido = validarCiudad();
    var esCpValido = validarCodigoPostal();
    var esDniValido = validarDni();

    var todoElFormularioEsValido = esNombreValido && esEmailValido && esPasswordValido && 
                                   esConfirmValido && esEdadValido && esTelefonoValido && 
                                   esDireccionValido && esCiudadValido && esCpValido && esDniValido;

    if (todoElFormularioEsValido) {
        var mensajeExito = "¡Suscripción Exitosa!\n\n" +
            "Nombre: " + inputNombre.value + "\n" +
            "Email: " + inputEmail.value + "\n" +
            "Contraseña: " + inputPassword.value + "\n" +
            "Edad: " + inputEdad.value + "\n" +
            "Teléfono: " + inputTelefono.value + "\n" +
            "Dirección: " + inputDireccion.value + "\n" +
            "Ciudad: " + inputCiudad.value + "\n" +
            "Código Postal: " + inputCodigoPostal.value + "\n" +
            "DNI: " + inputDni.value;
        
        alert(mensajeExito);
    } else {
        var mensajeError = "El formulario contiene errores que deben ser corregidos:\n\n";

        if (!esNombreValido) mensajeError += "- Nombre Completo: " + errorNombre.textContent + "\n";
        if (!esEmailValido) mensajeError += "- Email: " + errorEmail.textContent + "\n";
        if (!esPasswordValido) mensajeError += "- Contraseña: " + errorPassword.textContent + "\n";
        if (!esConfirmValido) mensajeError += "- Repetir Contraseña: " + errorConfirmPassword.textContent + "\n";
        if (!esEdadValido) mensajeError += "- Edad: " + errorEdad.textContent + "\n";
        if (!esTelefonoValido) mensajeError += "- Teléfono: " + errorTelefono.textContent + "\n";
        if (!esDireccionValido) mensajeError += "- Dirección: " + errorDireccion.textContent + "\n";
        if (!esCiudadValido) mensajeError += "- Ciudad: " + errorCiudad.textContent + "\n";
        if (!esCpValido) mensajeError += "- Código Postal: " + errorCodigoPostal.textContent + "\n";
        if (!esDniValido) mensajeError += "- DNI: " + errorDni.textContent + "\n";

        alert(mensajeError);
    }
});