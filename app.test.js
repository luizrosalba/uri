var expect = require("chai").expect;
var exportado = require("./app.js");

describe("teste da funcao", function() {
    it("Compara a saida do programa com um arquivo de saida", function() {
        let esperado = [
            'sanduicheiche',
            'testetete',
            'testando',
            'puxapuxa',
            'puxaquepuxa',
            'agorasimassim',
            'agorassim',
            'masoquemasoqu',
            'abcdefghijklmnopqrstuvwxyzabcd',
            'abcdefghijklmnopqrstuvwxyz',
            'a',
            'b',
            'bb',
            'bab',
            'ba',
        ];
        let saida = exportado();
        console.log(saida);
        expect(saida).deep.to.equal(esperado); // passes
    });
});