// Função sem os tipos roda pq código JS é aceito no TS
// Reclama da falta de tipos mas não quebra

// function somar(num1, num2) {
//     return num1 + num2;
// }

// Com tipos temos:
function somar(num1: number, num2: number) {
    return num1 + num2;
}

console.log(somar(5, 4));

// Se descomentar ele reclama da string porém faz conversão ao rodar
// console.log(somar(5, "4")); 