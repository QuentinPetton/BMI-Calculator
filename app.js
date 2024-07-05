
 // TODO récupérer la valeur input height
       const inputHeightElement = document.querySelector("#Height");
       // TODO récupérer la valeur input weight
       const inputWeightElement = document.querySelector("#Weight");

const app = {
    init: function(){
       //ajout écouteurs d'événements sur les input
       inputHeightElement.addEventListener('input', app.bmiCalculator);
       inputWeightElement.addEventListener('input', app.bmiCalculator);
    },

bmiCalculator: function() {
   //On récupère la valeur de Height et Weight
    const userHeight = parseFloat(inputHeightElement.value);
    const userWeight = parseFloat(inputWeightElement.value);
    //condition que les deux inputs soient bien saisis avant de mofifier le texte du score
    if (userHeight > 0 & userWeight >0) {
    //convertir height en mètre depuis cm
    const bmiResult = userWeight / ((userHeight/100) * (userHeight/100));

//TODO suivant résultat, envoyer message suivant résultat dans span score + P
const scoreBmiElement = document.querySelector(".scoreBMI");
scoreBmiElement.innerHTML =("Your BMIS is ... <br/> " + bmiResult );
    }

},
}

document.addEventListener('DOMContentLoaded', app.init);

