function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let candado = document.getElementById("candado");

    if (!validar(texto)) return;

    let textoCifrado = texto
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat");
              
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        candado.src = "./imagenes/candado3.png";
    } else {
        candado.src = "./imagenes/candado4.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }               
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let candado = document.getElementById("candado");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        candado.src = "./imagenes/candado2.png";
    } else {
        candado.src = "./imagenes/candado4.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let candado = document.getElementById("candado");

    if (!validar(texto)) return;

    let textoCifrado = texto
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat");
              
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        candado.src = "./imagenes/candado3.png";
    } else {
        candado.src = "./imagenes/candado4.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }               
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let candado = document.getElementById("candado");

    if (!validar(texto)) return;

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        candado.src = "./imagenes/candado2.png";
    } else {
        candado.src = "./imagenes/candado4.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

/*Caracteres invalidos*/
function validar(inputText) {
    //expresion regular para minusculas y espacios
    const validos = /^[a-z\sñ]*$/;
    if (!validos.test(inputText)) {
        mostrarNotificacion("Solo se permiten letras minusculas y espacios");
        return false;
    }
    return true;
}

function mostrarNotificacion(mensaje) {
    alert(mensaje);
}
