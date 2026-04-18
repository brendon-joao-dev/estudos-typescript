// Funçãozinha pq cansei de repetir for
function exibirIteravel(iteravel: any[]): void {
    for (let elemento of iteravel) {
        console.log(elemento);
    }
    console.log();
}

// Array de números
let numeros: number[] = [1, 2, 3];

console.log("Números:");
exibirIteravel(numeros);

let semTipo: [] = [];

// Reclama de todos pois não pode haver array sem tipo
// semTipo.push(1);
// semTipo.push("Teste");
// semTipo.push(true);

console.log("Sem tipo:");
exibirIteravel(semTipo);

// Para arrays com tipos misturados usamos união
let misturados: (string | number)[] = [1, "um", "dois", 2];

console.log("Misturados:");
exibirIteravel(misturados);

// Caso preciso dos tipos em posições específicas, usar tupla
let especificos: [number, string] = [1, "um"];

console.log("Específicos:")
exibirIteravel(especificos);