function calcular(){

    var valorAutomovil = formulario.valor.value
    var cuotaI = formulario.cuotaI.value
    var periodo = formulario.periodo.value;
    const interes = 3.96;

    let tabla = "<table><tr><td>Precio del automóvil</td><td>Cuota inicial</td><td>Plazo</td><td>Interés</td><td>Cuota mensual</td><td>Precio final</td></tr>";

    tabla += "<tr><td>$"+valorAutomovil+"</td>"
    tabla += "<td>$"+cuotaI+"</td>"
    tabla += "<td>"+periodo+" meses</td>"
    tabla += "<td>"+interes+"%</td>"
    tabla += "<td>$"+((((valorAutomovil-cuotaI)/periodo)*interes) + ((valorAutomovil-cuotaI)/periodo))+"</td>"
    tabla += "<td>$"+(((((valorAutomovil-cuotaI)/periodo)*interes) + ((valorAutomovil-cuotaI)/periodo))*periodo)+"</td><tr>"

    tabla += "</table>";
    tabla
    document.getElementById('tablaResultados').innerHTML = tabla;
}

function validar(formulario){

    var valorAutomovil = formulario.valor.value
    var cuotaI = formulario.cuotaI.value

    if(valorAutomovil < 100000 && valorAutomovil > 1000000){
        alert("El costo del coche debe estar entre $100,000 y $1,000,000")
        formulario.valor.focus();
        
        return false;
    }
    if(cuotaI < (valorAutomovil*.10) && cuotaI > valorAutomovil){
        alert("La cuota inicial debe ser mayor al 10% del costo total del automóvil y menor al costo del coche.")
        formulario.cuotaI.focus();
        return false;
    }

    var checkOk = "1234567890";
    var checkStr = valorAutomovil;
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
        alert("Escriba unicamente números en el campo Precio");
        formulario.valor.focus();
        return false;
    }
    var checkOk = "1234567890";
    var checkStr = formulario.cuotaI.value;
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
        alert("Escriba unicamente números en el campo Cuota Inicial");
        formulario.cuotaI.focus();
        return false;
    }

   

}