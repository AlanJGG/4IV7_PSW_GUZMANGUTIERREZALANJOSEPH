function problema1(){
    var monto = parseFloat(document.getElementById("monto-input").value);
    var meses = parseFloat(document.getElementById("meses-input").value);

    validarNumeros(document.getElementById("monto-input").value, "monto");
    if(monto <= 0){
        alert("El monto debe ser mayor a 0.");
    } else if(document.getElementById("monto-input").value == ""){
        alert("Ingrese el monto a invertir.");
    } 

    validarNumeros(document.getElementById("meses-input").value, "plazo");

    if(document.getElementById("meses-input").value == ""){
        alert("Ingrese el plazo en meses.");
    } else if(monto > 0 && meses >= 1 && meses <= 48){

        var aumento = monto * .02;
        var montoF = monto + (meses * aumento);
        document.getElementById("output").textContent = "El monto final es de $" + montoF;
    } else{
        alert("El plazo debe estar entre 1 y 48 meses.");
        document.getElementById("output").textContent = "";
    } 
}

function validarNumeros(campo, nombreCampo){
    var checkOk = "1234567890";
    var checkStr = campo
    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOk.length; j++){
            if(ch == checkOk.charAt(j)){
                break;
            }
        }

        if(j == checkOk.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente números en el " + nombreCampo);
        return false;
    }
}