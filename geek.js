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