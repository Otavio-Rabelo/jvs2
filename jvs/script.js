let op = Number(prompt("Escolha a operação: \n1. Soma \n2. Subtração \n3. Multiplicação \n4. Divisão"));

let n1 = Number(prompt("Digite o primeiro número"));
let n2 = Number(prompt("Digite o segundo número"));

let resultado;

if (op == 1) {
    resultado = n1 + n2;
    console.log("A soma dos números é: " + resultado);
} else if (op == 2) {
    resultado = n1 - n2;
    console.log("A subtração dos números é: " + resultado);
} else if (op == 3) {
    resultado = n1 * n2;
    console.log("A multiplicação dos números é: " + resultado);
} else if (op == 4) {
    resultado = n1 / n2;
    console.log("A divisão dos números é: " + resultado);
} else {
    console.log("Operação inexistente");
}
