

function problema1(){
    var p1_input = document.getElementById('p1-input').value;
    var p1_palabras = p1_input.split(' ');
    
    document.getElementById('p1-output').textContent = p1_palabras.reverse();
}

function problema2(){

    var p2_x1 = document.getElementById('p2-x1').value;
    var p2_x2 = document.getElementById('p2-x2').value;
    var p2_x3 = document.getElementById('p2-x3').value;
    var p2_x4 = document.getElementById('p2-x4').value;
    var p2_x5 = document.getElementById('p2-x5').value;
    var p2_y1 = document.getElementById('p2-y1').value;
    var p2_y2 = document.getElementById('p2-y2').value;
    var p2_y3 = document.getElementById('p2-y3').value;
    var p2_y4 = document.getElementById('p2-y4').value;
    var p2_y5 = document.getElementById('p2-y5').value;

    var resultado = (p2_x1 * p2_y1) + (p2_x2 * p2_y2) + (p2_x3 * p2_y3) + (p2_x4 * p2_y4) + (p2_x5 * p2_y5);


    document.querySelector('#p2-output').textContent = resultado; 

}

function problema3(){
    //definir un albeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
            'V', 'W', 'X', 'Y', 'Z'];

    //Obtener la cadena del input y separar por comas
    
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //eliminar el espacio que hay entre cada palabra
    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //calcular los caracteres unicos de cada palabra

    var p3_res = '';

    //iterar en cada palabra

    p3_palabras.forEach(function (palabra, i){
        //separar las palabras en un array para leer cada letra
        var letras_unicas = [];
        var palabra_array = palabra.split('');
        //iterar al alfabeto
        alfabeto.forEach(function (letra, j){
            //iterar por palabra
            palabra_array.forEach(function (letra_palabra, k){
                //comprobar que la letra esta dentro del alfabeto
                if(letra_palabra == letra){
                    //si la letra no la hemos contado, la agregamos a un array
                    //para contar las letras unicas
                    if(letras_unicas.indexOf(letra) < 0){
                        letras_unicas.push(letra);
                    }
                }
            });

        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });

    document.querySelector('#p3-output').textContent = p3_res;

}