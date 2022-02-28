/*
Javascript es un lenguaje que posee un paradigma
orientado a objetos y a funciones, por tal motivo presenta una particularidad
la cual es:

NO TIPADO

no existe int, float, string, ni char, ni nada.

TODO ES VAR -> variable

De acuerdo al estándar ES6 se manejan tres tipos de variables

VAR
LET es una variable de tipo "protected"
CONST

*/

function validar(formulario){
    //Obtener los datos y discriminar a los que tienen 3 letras.
    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 caractéres en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }
    
    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm ";
    var checkStr = formulario.nombre.value;
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
        alert("Escriba unicamente letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOk = "1234567890";
    var checkStr = formulario.edad.value;
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
        alert("Escriba unicamente números en el campo Edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.email.value;

    //Expresión regular.
    var b = /^[^@\s] + [^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?" ":"no ")+"valido ");

    return b.test;
}