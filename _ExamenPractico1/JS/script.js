function calcular(){

    var valorAutomovil = formulario.valor.value
    var cuotaI = formulario.cuotaI.value
    var periodo = formulario.periodo.value;
    const interes = .0396;

    let tabla = "<table><tr><td>Precio del automóvil</td><td>Cuota inicial</td><td>Plazo</td><td>Interés</td><td>Cuota mensual</td><td>Precio final</td></tr>";

    tabla += "<tr><td>$"+valorAutomovil+"</td>"
    tabla += "<td>$"+cuotaI+"</td>"
    tabla += "<td>"+periodo+" meses</td>"
    tabla += "<td>"+interes+"%</td>"
    tabla += "<td>$"+((((valorAutomovil-cuotaI)/periodo)*interes) + ((valorAutomovil-cuotaI)/periodo))+"</td>"
    tabla += "<td>$"+(((((valorAutomovil-cuotaI)/periodo)*interes) + ((valorAutomovil-cuotaI)/periodo))*periodo)+"</td><tr>"

    tabla += "</table>";
    
    return document.getElementById('espacioTabla').innerHTML = tabla;
}

function validar(formulario){

    if(formulario.valor.value < 100000 && formulario.valor.value > 1000000){
        alert("El costo del coche debe estar entre $100,000 y $1,000,000")
        formulario.valor.focus();
        
        return false;
    }
    if(formulario.cuotaI.value < (formulario.valor.value*.10) && formulario.cuotaI.value > formulario.valor.value){
        alert("La cuota inicial debe ser mayor al 10% del costo total del automóvil y menor al costo del coche.")
        formulario.cuotaI.focus();
        return false;
    }
}