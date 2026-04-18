// Com base na função da aula anterior:
// function somar(num1: number, num2: number) {
//     return num1 + num2;
// }

// Para adicionar tipo ao retorno colocamos ele depois dos parênteses dos paraâmetros
function somar(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(somar(5, 4));
console.log(typeof(somar(5, 4)));

// O TS aparentemente não quebra o código por incosistencia nos tipos
// Parece ser mais para avisar o dev do q impedir a operação
// console.log(somar(5, "2"));
// console.log(typeof(somar(5, "2")));