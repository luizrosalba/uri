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
        if (i === (vec.length - 1)) {
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

function classificacao(nivel) {
    let saida = 0;
    if (nivel >= 20) saida = 3;
    if (nivel < 20) saida = 2;
    if (nivel < 10) saida = 1;
    return saida;
}


function Valida(vec) {
    console.log(vec);
    let filtrado = [];
    for (let i = 0; i < vec.length; i++) {
        let val = vec[i];
        if (!isNaN(val) && val !== "" && val !== "EOF" && val !== " ")
            filtrado.push(vec[i]); /// REMOVE NAN e espaço vazio 
    }

    return filtrado;
}

function formataVecString(ent) {

    
    let underscore = /_/;
    let estrela = /\*/;
    let saida = (ent.normalize()) ;  /// pure function 
    while (saida.includes("*") || saida.includes("_")) 
    {
        saida = saida.replace(underscore, "<i>");
        saida = saida.replace(underscore, "</i>");
        saida = saida.replace(estrela, "<b>");
        saida = saida.replace(estrela, "</b>");
        
    }
    console.log(saida);
}

//// funcao que deve ser executada no teste 
//module.exports = function programa() {
function programa() {

    var input = require('fs').readFileSync('./ent.txt', 'utf-8');
    var lines = input.split('\n');
    //console.log(lines[0].split(" ")); // entrada do uri 
    let ent = formataEntrada(lines);
    //lines = ent.slice(); /// string de vetores 
    //console.log(lines);
    /// Programa 

    lines.forEach(val => {
        formataVecString(val);
    });


}
programa();
