let = valorCompra = Number(prompt("Digite o valor de sua compra:"));
let = valorCashback = valorCompra * 0.02;
let = valorDesconto = valorCompra - valorCashback
let = valorFinal = valorCompra - valorCashback

if (isNaN(valorCompra)) {
    alert('Você não digitou um número!');
}
else {

    if (valorCompra>= 150) {
        alert("Parabéns, você acabou de ganhar um desconto de 2%. O Valor de sua compra é de: R$" + valorFinal + ".");
    }
    else {
        alert("Este é o valor da sua compra: R$"+ valorCompra + ",00. Há um cahsback de 2% do valor de sua compra atual, resultando em: R$"+ valorCashback.toFixed(2) +".");
    }
}