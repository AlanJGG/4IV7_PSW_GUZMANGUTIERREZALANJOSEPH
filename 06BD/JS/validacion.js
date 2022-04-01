function validar1(formulario){
    nombre = formulario.nombre.value;
    appat = formulario.appat.value;
    apmat = formulario.apmat.value;
    tel = formulario.tel.value;
    boleta = parseInt(formulario.boleta.value);

    validarNumeros(formulario.boleta.value, "la boleta")
    if(formulario.boleta.value == "" || boleta > 0 || formulario.boleta.value.length > 10 ){
        alert("Ingrese la boleta y asegurese de que esta no sea negativa y tenga entre 1 y 10 carácteres.");
    } else if(nombre == "" || appat == "" || apmat == ""){
        alert("El nombre, apellido paterno y materno son obligatorios");
    }
    validarLetras(nombre,"nombre");
    validarLetras(appat,"el apellido paterno");
    validarLetras(appat,"el apellido materno");
    validarNumeros(tel, "el telefono");
}

function validar2(formulario){
    nombre = formulario.nombre.value;
    appat = formulario.appat.value;
    apmat = formulario.apmat.value;
    tel = formulario.tel.value;
    boleta = parseInt(formulario.boleta.value);

    validarNumeros(formulario.boleta.value, "la boleta")
    if(formulario.boleta.value == "" || boleta > 0 || formulario.boleta.value.length > 10 ){
        alert("Ingrese la boleta y asegurese de que esta no sea negativa y tenga entre 1 y 10 carácteres.");
    } 
    validarLetras(nombre,"nombre");
    validarLetras(appat,"el apellido paterno");
    validarLetras(appat,"el apellido materno");
    validarNumeros(tel, "el telefono");
}

function validar3(formulario){
    boleta = parseInt(formulario.boleta.value);

    validarNumeros(formulario.boleta.value, "la boleta")
    if(formulario.boleta.value == "" || boleta > 0 || formulario.boleta.value.length > 10 ){
        alert("Ingrese la boleta y asegurese de que esta no sea negativa y tenga entre 1 y 10 carácteres.");
    }
}













function validarLetras(campo, nombreCampo){
    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm ";
    var checkStr = campo;
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
        alert("Escriba unicamente letras en " + nombreCampo);
        return false;
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