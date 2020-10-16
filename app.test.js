var expect = require("chai").expect;
var exportado = require("./app.js");

describe("teste da funcao", function() {
    it("Compara a saida do programa com um arquivo de saida", function() {
        let esperado = [
            'no changes',
            '',
            '<b><i>ch-ch-ch-chaaaaaanges</i></b>',
            '<i><b>testo</i></b>',
            '<b></b><b></b><b></b><b></b><b></b><i></i><i></i><i></i><i></i><i></i><b></b><b></b><b></b><b></b><b></b><i></i><i></i><i></i><i></i><i></i><b><i></b></i><b><i></b></i><i></i>',
        ];
        let saida = exportado();
        console.log(saida);
        expect(saida).deep.to.equal(esperado); // passes
    });
});