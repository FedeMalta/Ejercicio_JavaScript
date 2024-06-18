"use strict";

function hacerID(longitud) {
    let resultado = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const caracteresLength = caracteres.length;
    let contador = 0;
    while (contador < longitud) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
        contador += 1;
    }
    return resultado;
}

function generarNumeroRandomRango(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generarMensajes(userID, userAltura, userEdad, userNacimiento) {
    let mensajeBienvenida = document.getElementById("mensajeBienvenida");
    let datosPersonales = document.getElementById("datosPersonales");

    console.log(userNacimiento);

    let hoy = new Date();
    let nacimiento = new Date(userNacimiento);
    let nacimientoSinTimeZone =  new Date( nacimiento.getTime() + Math.abs(nacimiento.getTimezoneOffset()*60000) );

    let diferenciaTiempo = hoy.getTime() - nacimientoSinTimeZone.getTime();


    let diferenciaDias = Math.round(diferenciaTiempo / (1000 * 3600 * 24));

    
    let diaNacimiento = nacimientoSinTimeZone.getDate();
    let mesNacimiento = nacimientoSinTimeZone.getMonth() + 1;
        
    mensajeBienvenida.innerHTML = "Bienvenido usuario " + userID;
    datosPersonales.innerHTML = "Sus datos personales son su altura (" + userAltura + "cm) y su edad (" + userEdad + "). Su fecha de nacimiento es " + diaNacimiento + "/" +  mesNacimiento + "/" + nacimientoSinTimeZone.getFullYear() +", pasaron " + diferenciaDias + " días.";
}

let userID = hacerID(5);
let userEdad = generarNumeroRandomRango(10, 100);
let userAltura = generarNumeroRandomRango(150, 200);
let userNacimiento = new Date(generarNumeroRandomRango(1990, 2010),
                            generarNumeroRandomRango(0, 11),
                            generarNumeroRandomRango(1, 30));

generarMensajes(userID, userAltura, userEdad, userNacimiento);

document.getElementById("formBoton").addEventListener('click', () => {
  
    let formID = document.getElementById("formID").value;
    let formEdad = document.getElementById("formEdad").value;
    let formAltura = document.getElementById("formAltura").value;
    let mensajeError = document.getElementById("mensajeError");

    let formNacimiento = document.getElementById("formNacimiento").value;
    

    if ((formID != '')&&(formEdad != '')&&(formAltura != '')) {
        generarMensajes(formID, formAltura, formEdad, formNacimiento);
        mensajeError.innerHTML = "";
    } else {
        mensajeError.innerHTML = "Debe completar todos los campos.";
    }
});

