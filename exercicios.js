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


// Ex 12
function contarParesAte10() {
let contador = 0;
for (let i = 1; i <= 10; i++) {
if (i % 2 === 0) {
contador++;
}
}
return contador;
}
console.log(contarParesAte10());



// Ex 13
function tabuada(numero) {
for (let i = 1; i <= 10; i++) {
console.log(numero + " x " + i + " = " + (numero * i));
}
}
tabuada(5);


//  Ex 14
function contagemRegressiva() {
for (let i = 10; i >= 1; i--) {
console.log(i);
}
}
contagemRegressiva();


// Ex 15
function encontrar27() {
for (let i = 1; i <= 50; i++) {
if (i === 27) {
return "Número 27 encontrado!";
}
}
}
console.log(encontrar27());


// Ex 16
function somarPares(limite) {
let soma = 0;
for (let i = 1; i <= limite; i++) {
if (i % 2 === 0) {
soma += i;
}
}
return soma;
}
console.log(somarPares(10));


// Ex 17
function contarImpares() {
let contador = 0;
for (let i = 1; i <= 10; i++) {
if (i % 2 !== 0) {
contador++;
}
}
return contador;
}
console.log(contarImpares());


// Ex 18
function media(a, b) {
return (a + b) / 2;
}
console.log(media(8, 6));


// Ex 19
function quadrado(numero) {
return numero * numero;
}
console.log(quadrado(4));