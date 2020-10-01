```Javascript
//Você deve alterar o conteudo desta funcao para processar as entradas de acordo.
function processarLinha(linha) {
  return linha;
}

//Este e um exemplo de processamento de entradas (inputs), sinta-se a vontade para altera-lo conforme necessidade da questao.
function main(entradas) {
  const linhas = entradas.trim().split("\n"); //separa as entradas por linha e converte em um ARRAY de STRINGS.
  let Vsize = 0, V = [], Csize = 0, C = [];
  let rproc = [];
  for (let i = 0; i < linhas.length; i++) {
    let linha_entrada;
    try {
      linha_entrada = eval(linhas[i]); //tenta converter a string pra inteiro ou array se falhar, cai no catch.
    } catch {
      linha_entrada = linhas[i]; //mantem como string porque o eval falhou em converter pra inteiro ou array.
    }
    if (!linha_entrada || linha_entrada !== "") {
      const resultado_processado = processarLinha(linha_entrada);
      if (resultado_processado) {
        rproc.push(resultado_processado);
      }
    }
  }

  
  Vsize = (rproc[0]);
  V = rproc[1].split(" ");
  Csize = (rproc[2]);
  C = rproc[3].split(" ");
  let Vi = [], Ci = [];
  for (let i = 0; i < V.length; i++) /// c 3
  {
    Vi.push((V[i]));
  }
  for (let i = 0; i < C.length; i++) /// c 3
  {
    Ci.push((C[i]));
  }
  //console.log(Vsize + " " + V + Csize+ C);

  //console.log(Ci);
  let nvS = Vi.sort(function (a, b) { return b - a });
  //console.log("nv=" +nvS);
  let nV = [...new Set(nvS)];
  //console.log("nv=" +V);
  let contador = 0, valorC = 0, valorV = 0;

  for (let i = 0; i < Ci.length; i++) /// c 3
  {
    contador = 1;
    valorC = Ci[i];
    //console.log("C " +valorC);
    for (let j = 0; j < nV.length; j++) { /// nV 3 
      valorV = nV[j];
      if (valorV > valorC) {
        contador++;
      }
    }
    console.log(contador);
  }
}

let ent = "10\n30 0 15 20 30 10 10 15 20 0\n2\n1 40";
main(ent);
```


PROBLEM:
1837 - Preface
ANSWER:
Accepted
LANGUAGE:
JavaScript (nodejs 8.4.0) [+2s] {beta}
RUNTIME:
0.357s
FILE SIZE:
535 Bytes
SUBMISSION:
9/30/20, 9:09:37 AM

```Javascript
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let sep = lines[0].split(" ");
let a = parseInt(sep[0]);
let b = parseInt(sep[1]);
let q,r;
q = parseInt(a / b); 
let rTemp= a%b; 
//console.log( "rtemp " + rTemp); 
if ( rTemp < 0)
{
  if (a>0 && b<0)  q++; // 
  if (a<0 && b<0)  q++; // ok
  if (a<0 && b>0)  q--; // ok 
}
r = a - (b * q); 
console.log(q + " " +  r );
```


SUBMISSION # 19897509
PROBLEM:
3076 - History Exercise
ANSWER:
Accepted
LANGUAGE:
JavaScript (nodejs 8.4.0) [+2s] {beta}
RUNTIME:
0.368s
FILE SIZE:
785 Bytes
SUBMISSION:
9/30/20, 2:13:28 PM
SOURCE CODE


```Javascript
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let anosInt=[];
lines.map (value => anosInt.push(parseInt(value))); // retorna um novo array [2,4,6,8,10]
anosInt=Valida(anosInt);
anosInt.forEach((val) => console.log(retornaCenturio(val)));



function retornaCenturio(ent)
{
    let div= parseInt(ent/100); 
    if ((ent%100!==0)) div++;
    return div;
}

function Valida(vec)
{
    let filtrado=[];
   for(let i=0;i<vec.length;i++){
       let val = vec[i];
       if( !isNaN(val) && val!=="" && val!=="EOF" && val!==" " ) filtrado.push(vec[i]); /// REMOVE NAN e espaço vazio 
    }
    return filtrado;
}


```