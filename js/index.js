alert("Bem vindo a calculador IMC.");

var personName = prompt("Digite o seu nome: ")
var personHeight = parseFloat(prompt("Digitite sua altura em cm: "));
var personWeight = parseFloat(prompt("Digite seu peso(kg)"));

personHeight = personHeight / 100;

var imc = personWeight / (personWeight * personHeight)

var classification = ""

if (imc < 16) {
    classification = "Baixo peso, muito grave.";
} else if (imc >= 16 && imc < 17) {
    classification = "Baixo peso, grave";
} else if (imc >= 17 && imc < 18.50) {
    classification = "Baixo peso";
} else if (imc >= 18.50 && imc < 25) {
    classification = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    classification = "Sobrepeso";
} else if (imc >= 30 && imc < 35) {
    classification = "Obesidade grau 1";
} else if (imc >= 35 && imc < 40) {
    classification = "Obesidade grau 2";
} else if (imc >= 40) {
    classification = "Obesidade grau 3";
}

try {
    $("#result").html(
        personName + " possui índice de massa corporal igual a " +
        personWeight + ".<br> Sendo classificado como: " + classification

    );
} catch {
    // document.write(
    //     personName + " possui índice de massa corporal igual a " +
    //     personWeight + ".<br> Sendo classificado como: " + classification
    // );

    var span = document.getElementById('result');

    span.innerHTML += personName + " possui índice de massa corporal igual a ";
    span.innerHTML += personWeight + ".<br> Sendo classificado como: " + classification;

}