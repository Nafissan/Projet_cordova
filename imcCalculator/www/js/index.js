function calculerIMC(){
    const poids = Number(document.getElementById('poids').value);
    const taille = Number(document.getElementById('taille').value);

    const imc = poids / Math.pow(taille, 2);
    console.log('IMC :', imc);

    let message = " Vous etes en etat ";
    if (imc < 16.5) {
        message += "de denutrition";
    } else if (imc >= 16.5 && imc < 18.5) {
        message += "de maigreur";
    } else if (imc >= 18.5 && imc < 25) {
        message = "Vous avez un poids normal";
    } else if (imc >= 25 && imc < 30) {
        message += "de surpoids"
    } else if (imc >= 30 && imc < 35) {
        message += "d'obesite modere";
    } else if (imc >= 35 && imc < 40) {
        message += "d'obesite severe";
    } else {
        message += "d'obesite morbide ou massive";
    }
const interpretation =document.getElementById('interpretation');
interpretation.innerHTML= `Votre IMC est : ${imc.toFixed(2)}<hr>${message}`;
interpretation.parentNode.hidden= false;
}
