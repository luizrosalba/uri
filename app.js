var input = require('fs').readFileSync('./ent.txt','utf-8');
var lines = input.split('\n');
 for (let i=0; i<lines.length ; i++ ){
     
     lines[i]= lines[i].replace(/\r/g,"");
 }
 console.log(lines);
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

