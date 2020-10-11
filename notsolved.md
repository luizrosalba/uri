sanduicheiche 

```Javascript
/// funcoes auxiliares 
function reverseString(str) {
    return str.split("").reverse().join("");
}

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


//// funcao que deve ser executada no teste 
module.exports = function programa() {

    var input = require('fs').readFileSync('./ent.txt', 'utf-8');
    var lines = input.split('\n');
    //console.log(lines[0].split(" ")); // entrada do uri 
    let ent = formataEntrada(lines);
    // for(let i = 0 ; i < ent.length; i++) 
    // {
    //     console.log(ent[i]);
    // }
    lines = ent.slice(); /// copia 
    //console.log(lines);
    /// Programa 
    let saida = [];
    for (let i = 0; i < lines.length; i++) {
        str = String(lines[i]);
        let revStr = reverseString(str);
        //console.log(revStr);
        let pos = revStr.indexOf(revStr[0], 1);
        if (pos != -1) {
            //console.log( pos );
            let subRev = revStr.substring(0, pos);
            tamsubRev = subRev.length;
            let nextSubrev = revStr.substring(pos, pos + tamsubRev)
            //console.log( nextSubrev);
            let removerSub = revStr.slice(pos, revStr.length)
            //console.log(removerSub);
            let normalRemovida = reverseString(removerSub);
            //console.log(normalRemovida);
            saida.push(normalRemovida);
        }
        else {
            //console.log(str);
            saida.push(str);
        }
    }
    //console.log(saida);
    return saida;
}



```



```Javascript


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

function troca(vec, passos) {
    let saida = [];
    saida = Array(vec.length).fill(0);

    for (let i = 1; i <= passos; i++) {
        vec.forEach((val, ind) => {
            saida[ind] += parseInt(val)
        });
        let ult = vec.pop();
        vec.unshift(ult);

    }
    return saida;
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
    let nk = [];
    let S = [];
    nk = ent[0].split(" ");
    S = ent[1].split(" ");
    //console.log(nk); 
    //console.log(S); 
    a = (troca(S, parseInt(nk[1])));
    Imprime(a);
    //console.log(troca(S,3));
    //S.push(ent[2]);
    //console.log(S)  ; 
    //entInt=Valida(anosInt);
    ///anosInt.forEach((val,e) => console.log(anosInt[e] + " " + retornaCenturio(val)));
    //return saida;
}

programa();



```

