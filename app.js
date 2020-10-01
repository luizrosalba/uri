const { count } = require('console');

/// funcoes auxiliares 
function formataEntrada(lines) {
    let wsRegex;
    for (let i = 0; i < lines.length; i++) {
        wsRegex = /^\s+|\s+$/; // remove espaços em branco no inico e fim 
        lines[i] = lines[i].replace(wsRegex, "");
        wsRegex = /\r/g; // remove enter
        lines[i] = lines[i].replace(wsRegex, "");
        wsRegex = /  +/g; /// multiple spaces for 1 
        lines[i] = lines[i].replace(wsRegex, " ");
    }
    return lines;
}
/// remove entradas vazias e nan, undefined de um vetor 
function Valida(vec) {
    let filtrado = [];
    for (let i = 0; i < vec.length; i++) {
        let val = vec[i];
        if (!isNaN(val) && val !== "") filtrado.push(vec[i]); /// REMOVE NAN e espaço vazio 
    }
    return filtrado;
}


function Imprime(vec) {
    saida = "";
    for (let i = 0; i < vec.length; i++) {
        saida += (i === vec.length - 1 ? vec[i] : vec[i] + " ");
    }
    console.log(saida);
}

function iniciaSomatório(vec, R) {
    console.log(vec);
    console.log(vec.length);
    let somat = 0, somat_saida = 1;
    i = 0;
    do {
        if ( i === (vec.length - 1) ) 
        {
            i = 0;
            somat_saida++;
        }
        somat += vec[i];
        i++;
        //console.log("somat " + somat);
        //console.log("somat saida " + somat_saida);
    } while (somat < R)
    //console.log("fim");
    return somat_saida;
}



//// funcao que deve ser executada no teste 
//module.exports = function programa() {
function programa() {

    var input = require('fs').readFileSync('./ent.txt', 'utf-8');
    var lines = input.split('\n');
    //console.log(lines[0].split(" ")); // entrada do uri 
    let ent = formataEntrada(lines);
    lines = ent.slice(); /// string de vetores 
    //console.log(lines);
    /// Programa 
    let vec = [];
    let V = [];
    let flag = true;
    let R = parseInt(lines[0]);
    vec.push(R);
    //console.log(R);
    let i = 0;
    do {
        i++;
        vec.push(parseInt(lines[i]));
        //console.log("linha " + V);
        if (vec[i] > R) {
            console.log(iniciaSomatório(vec, vec[i])); /// imprime quantas vezes eu preciso somar vec para ultrapassar R
            flag = false;
        }
    }while (flag === true);
}
programa();
