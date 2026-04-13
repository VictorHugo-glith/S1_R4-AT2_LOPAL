let = altura = Number(prompt("Me diga sua altura em metros."));

if (isNaN(altura)) {
    alert ("Você não digitou um número!");
}
else{
    if (altura >= 1.40) {
        alert("Você tem altura suficiente, logo sua entrada no brinquedo é permitida.");
    }
    else {
        alert("Você não tem altura suficiente, logo sua entrada no brinquedo não é permitida.")
    }

}