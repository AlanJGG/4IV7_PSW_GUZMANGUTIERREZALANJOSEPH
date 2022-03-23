function problema1(){
    var monto = parseFloat(document.getElementById("monto-input").value);
    var meses = parseFloat(document.getElementById("meses-input").value);

    validarNumeros(document.getElementById("monto-input").value, "monto");
    if(monto <= 0){
        alert("El monto debe ser mayor a 0.");
        document.getElementById("monto-input").focus()
    } else if(document.getElementById("monto-input").value == ""){
        alert("Ingrese el monto a invertir.");
        document.getElementById("monto-input").focus()
    } 

    validarNumeros(document.getElementById("meses-input").value, "plazo");

    if(document.getElementById("meses-input").value == ""){
        alert("Ingrese el plazo en meses.");
        document.getElementById("meses-input").focus()
    } else if(monto > 0 && meses >= 1 && meses <= 48){

        var aumento = monto * .02;
        var montoF = monto + (meses * aumento);
        document.getElementById("output").textContent = "El monto final es de $" + montoF;
    } else{
        alert("El plazo debe estar entre 1 y 48 meses.");
        document.getElementById("output").textContent = "";
        document.getElementById("meses-input").focus()
    } 
}

function problema2(){
    var sueldoB = parseFloat(document.getElementById("sueldobase-input").value);
    var venta1 = parseFloat(document.getElementById("v1-input").value);
    var venta2 = parseFloat(document.getElementById("v2-input").value);
    var venta3 = parseFloat(document.getElementById("v3-input").value);
    var v1 = document.getElementById("v1-input").value;
    var v2 = document.getElementById("v2-input").value;
    var v3 = document.getElementById("v3-input").value;
    var cVentas = (venta1 + venta2 + venta3)* 0.10;

    validarNumeros(document.getElementById("sueldobase-input").value, "sueldo base");
    if(document.getElementById("sueldobase-input").value == ""){
        alert("Ingrese el monto a invertir.");
    } else if(sueldoB <= 0){
        alert("El monto debe ser mayor a 0.");
    }

    validarNumeros(v1, "venta 1");
    validarNumeros(v2, "venta 2");
    validarNumeros(v3, "venta 3");
    if(v1 == "" || v2 == "" || v3 == "" || v1 < 0 || v2 < 0 || v3 < 0){
        alert("Ingrese el valor de las ventas en números positivos o cero");

    } else if(sueldoB > 0 && v1 >= 0 && v2 >= 0 && v3 >= 0 ){
        var sueldoF = sueldoB + cVentas;
        document.getElementById("output").textContent = "El sueldo final es de $" + sueldoF;
    
    } else {
        document.getElementById("output").textContent = "";
    }
}

function problema3(){
    var monto = parseFloat(document.getElementById("monto-input").value);
    var m1 = document.getElementById("monto-input").value;
    var descuento = monto * .15;

    validarNumeros(m1, "monto");
    if(m1 == ""){
        alert("Ingrese el monto");
        document.getElementById("monto-input").focus();
    } else if(monto <=0){
        alert("El monto debe ser mayor  0");
        document.getElementById("monto-input").focus();
    } else if(monto > 0){
        document.getElementById("output").textContent = "El precio final de su compra es de $" + (monto - descuento);
    } else{
        document.getElementById("output").textContent = "";
    }
}

function problema4(){
    var p1 = parseFloat(document.getElementById("p1-input").value);
    var p2 = parseFloat(document.getElementById("p2-input").value);
    var p3 = parseFloat(document.getElementById("p3-input").value);
    var eF = parseFloat(document.getElementById("eF-input").value);
    var tF = parseFloat(document.getElementById("tF-input").value);
    var pa1 = document.getElementById("p1-input").value;
    var pa2 = document.getElementById("p2-input").value;
    var pa3 = document.getElementById("p3-input").value;
    var exF = document.getElementById("eF-input").value;
    var trF = document.getElementById("tF-input").value;
    
    if(pa1 == "" || pa2 == "" || pa3 == "" || exF == "" || trF == "" ){
        alert("Ingrese sus calificaciones");
    } if(p1 >= 0 && p1 <= 10 && p2 >= 0 && p2 <= 10 && p3 >= 0 && p3 <= 10 && eF >= 0 && eF <= 10 && tF >= 0 && tF <= 10){
        var promedio = (p1 + p2 + p3)/3;
        var calF = (promedio * .55) + (eF * .3) + (tF * .15);
        document.getElementById("output").textContent = "La calificación final en algoritmos es de " + calF + ".";
    } else{
        document.getElementById("output").textContent = "";
        alert("Debe ingresar valores entre 0 y 10.");
    }
    validarNumeros(pa1, "parcial 1");
    validarNumeros(pa2, "parcial 2");
    validarNumeros(pa3, "parcial 3");
    validarNumeros(exF, "examen final");
    validarNumeros(trF, "trabajo final")
}

function problema5(){
    var hombres = parseInt(document.getElementById("hombres-input").value);
    var mujeres = parseInt(document.getElementById("mujeres-input").value);
    var h = document.getElementById("hombres-input").value;
    var m = document.getElementById("mujeres-input").value;
    var totalAl = hombres + mujeres;

    validarNumeros(h, "el campo hombres");
    validarNumeros(m, "el campo mujeres");
    if(h == "" || m == ""){
        alert("Llene los campos");
    } else if(h >= 0 && m >= 0){
        var porH = (h * 100)/totalAl;
        var porM = (m * 100)/totalAl;
        document.getElementById("output").textContent = "Los hombres representan el " + porH + "% y las mujeres el " + porM + "%";
    } else{
        document.getElementById("output").textContent = "";
        alert("No puede ingresar números negativos");
    }
}

function problema6(){
    var fechaActual = 2022;
    var fechaNac = parseInt(document.getElementById("ano-input").value);
    var fN = document.getElementById("ano-input").value;
    var edad = fechaActual - fechaNac;
    
    validarNumeros(fN, "el año de nacimiento");
    if(fN == ""){
        alert("Ingrese su año de nacimiento");
        document.getElementById("ano-input").focus();
    } else if(fechaNac < fechaActual){
        document.getElementById("output").textContent = "Usted tiene " + edad + " años.";
    } else{
        alert("El año no puede ser mayor al actual");
        document.getElementById("ano-input").focus();
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
        alert("Escriba unicamente números en " + nombreCampo);
        return false;
    }
}