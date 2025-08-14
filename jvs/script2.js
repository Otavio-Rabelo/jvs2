let f1 = {
    nome: prompt("Digite o nome do primeiro filme"),
    lancamento: Number(prompt("Digite o ano de lançamento do primeiro filme")),
    duracao: prompt("Digite a duração do primeiro filme"),
    nota: Number(prompt("Digite a nota do primeiro filme"))
}

let f2 = {
    nome: prompt("Digite o nome do segundo filme"),
    lancamento: Number(prompt("Digite o ano de lançamento do segundo filme")),
    duracao: prompt("Digite a duração do segundo filme"),
    nota: Number(prompt("Digite a nota do segundo filme"))
}

console.log("Filme 1:", f1);
console.log("Filme 2:", f2);

if (f1.nota > f2.nota) {
    console.log(f1.nome);
} else if (f2.nota > f1.nota) {
    console.log(f2.nome);
} else {
    console.log("As notas são iguais");
}
