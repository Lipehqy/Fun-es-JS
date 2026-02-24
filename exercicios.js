// Ex 1
function dobro(numero){
    return numero * 2;
}
console.log(dobro(5));


// Ex 2
function triplo(numero) {
return numero * 3;
}
console.log(triplo(5));


// Ex 3
function soma(a, b) {
return a + b;
}
console.log(soma(6, 8));


// Ex 4
function multiplicar(a, b) {
return a * b;
}
console.log(multiplicar(2, 4));


// Ex 5
function realParaDolar(valorReal, cotacao) {
return valorReal / cotacao;
}
console.log(realParaDolar(10, 5.0));


// Ex 6
function dolarParaReal(valorDolar, cotacao) {
return valorDolar * cotacao;
}
console.log(dolarParaReal(20, 5.0));


// Ex 7
function calcularAumento(salario) {
return salario + (salario * 0.10);
}
console.log(calcularAumento(1000));


// Ex 8
function ehPar(numero) {
return numero % 2 === 0;
}
console.log(ehPar(4));


// Ex 9
function imprimirAte10() {
for (let i = 1; i <= 10; i++) {
console.log(i);
}
}
imprimirAte10();


// Ex 10
function imprimirLimite(limite) {
for (let i = 1; i <= limite; i++) {
    console.log(i);
}
}
imprimirLimite(5);


// Ex 11 
function somaTotal(){
    let soma = 0;
    for (let i=1; i<=10; i++){
        soma += i;
    }
    return soma;
}
console.log(somaTotal())