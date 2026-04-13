let = numero = Number(prompt("Digite um número e eu direi se é par ou impar:"));

if (isNaN(numero)) {
    alert('Você não digitou um número!');
}
else {

    if (numero % 2 == 0) {
        alert("Seu número é par.")
    }
    else {
        alert("Seu número é impar.");
    }
}