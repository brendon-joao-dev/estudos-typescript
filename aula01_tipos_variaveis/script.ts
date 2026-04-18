// Situações pra declaração de um tipo:
// - Declaração de variáveis
// - Parâmetros de uma função
// - Retornos de uma função

// Variável:
let num1: number = 10;
// let num2: number = "10"; // Dá erro de compilação pois number não pode receber string

console.log(num1);

let str: string = "10";

// Aqui o número num1 é convertido para string para permitir a operação
let resultado1 = num1 + str;
// let resultado2: number = num1 + str // Erro: String não pode ser atribuida a number

console.log(resultado1);

// Outros tipos (vale para todos os tipos do JS):

let isTrue: boolean = false;
let decimal: number = 1.5;
let naoDefinido: undefined = undefined;
let valorNulo: null = null;