// Funções em JS

// Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica

// function nomeDaFuncao (parametro1, parametro2) {
    // Código que será executado
// return resultado;
// }

// Exemplo 01 - Somar dois números

function somar (a, b) {
    return a + b;
}
somar (2, b);
console.log(somar(2,3)); // S

function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao
}
console.log(realParaDolar(20,5.17).toFixed(2))

// Calcular aumento de salario
function calcularAumento(salario){
    return salario + (salario * 0.25)
}
console.log (calcularAumento(10000))