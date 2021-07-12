const validator = {
  isValid : (cardNumber) => {
    let totalPares = 0;
    let totalSuma = 0;
    
  
    //completar cadena a 16 digitos
  
    if(cardNumber.length < 16){
      cardNumber = "0".repeat(16-cardNumber.length) + cardNumber;
    }
    
    for (let i = 0; i<cardNumber.length; i++) {
      
      let valor = parseInt(cardNumber[i], 10);
      
      if (i % 2 === 0) {
        totalPares = valor * 2;
        
        if (totalPares >= 10){
          totalPares -= 9;
        }
        totalSuma += totalPares;
        
      } else{
        totalSuma += valor;
        
      } 
      
    }
    
    if(totalSuma % 10 === 0){
      return true;
    }
    
    return false;
  },

  maskify : (cadena) => {
    if(cadena.length > 4){
      cadena = "#".repeat(cadena.length-4) + cadena.slice(-4);
    
    }
    
    return cadena;
  },
  
  getIssuer:(tarjeta)=>{
    if (tarjeta.substring(0,1)==="4"){
      return "visa"
      
    } else if(tarjeta.substring(0,2)==="51" || tarjeta.substring(0,2)==="52"||tarjeta.substring(0,2)==="53"||tarjeta.substring(0,2)==="54"||tarjeta.substring(0,2)==="55"){
      return "mastercard"
    } else if(tarjeta.substring(0,2)==="34"||tarjeta.substring(0,2)==="37"){
      return "amex";
    }
    return "";
  }
};

export default validator;