import validator from './validator.js';

console.log(validator);

const verificar = () => {
    
    if(datosTarjeta.length === 0 ){
        alert("Debes ingresar los digitos");
        return;
    }
    
    if (validator.isValid(datosTarjeta)) {
        console.log("es valida");
        document.getElementById("subtitulo").innerHTML = "Tarjeta valida";
        document.getElementById("cardMaskedTrue").innerHTML = validator.maskify(datosTarjeta)+document.getElementById("signoValido").innerHTML
        document.getElementById("cardMaskedTrue").hidden = false;
        document.getElementById("creditCardNumber").hidden = true;
        document.getElementById("validar").hidden = true;
        document.getElementById("actualizar").hidden= false;
        
        console.log("aqui enmascarado");
    } else {
        document.getElementById("subtitulo").innerHTML = "Tarjeta NO valida ";
        document.getElementById("cardMaskedFalse").innerHTML = datosTarjeta+document.getElementById("signoInvalido").innerHTML;
        document.getElementById("cardMaskedFalse").hidden = false;
        document.getElementById("creditCardNumber").hidden = true;
        document.getElementById("validar").hidden = true;
        document.getElementById("actualizar").hidden=false;
        //location.reload(true);
        
        console.log("no es valida");
        
    } 
    
    
    
}

const limpiar = ()=>{
    location.reload();
    console.log("limpiando");
}
document.getElementById("actualizar").addEventListener("click", limpiar);
document.getElementById("validar").addEventListener("click", verificar);
//Aceptar solo numeros y ocultarlos al momento de ingresar
const myFunction = (event) => {
    let numeroTarjeta = document.getElementById("creditCardNumber").value;
    let ultimoDigito = numeroTarjeta.charCodeAt(numeroTarjeta.length-1);
    

    console.log(ultimoDigito);
    if(ultimoDigito >=48 && ultimoDigito <= 57 && numeroTarjeta.length <= 19){
        
        console.log("es numero");
        numeroTarjeta = numeroTarjeta.replaceAll(" ", "");
        let numeroDigitos = numeroTarjeta.length;
       

        let sustituirDigito="X".repeat(numeroDigitos);
        document.getElementById("creditCardNumber").value = sustituirDigito.replaceAll("XXXX", "XXXX ");
        if (numeroTarjeta.length === 16){
            document.getElementById("creditCardNumber").value = "XXXX XXXX XXXX XXXX"
        }
        datosTarjeta += String.fromCharCode(ultimoDigito);
    }
    else {
        if(event.keyCode === 8){
            datosTarjeta = datosTarjeta.substring(0, datosTarjeta.length-1);
            console.log("toy restando");
        }
        

    }
    console.log("Comparacion es igual: " +datosTarjeta.substring(0,1)==="4");
    console.log("comparando: '"+datosTarjeta.substring(0,1)+"' con: '4'");
    
        if(validator.getIssuer(datosTarjeta) != ""){
            document.getElementById(validator.getIssuer(datosTarjeta)).hidden = false;
        }
    
        
    
    console.log("visa: "+ datosTarjeta.substring(0,1) );
    console.log("mastercard: "+datosTarjeta.substring(0,2) );

    
    
    console.log("Datos de tarjeta " +datosTarjeta);
}

let datosTarjeta = "";




//funciones que permitan el ingreso unicamente de 16 digitos 
//se hace global, permite la manipulacion de "verificar"
window.datosTarjeta = datosTarjeta;
window.verificar = verificar;
window.myFunction = myFunction;

