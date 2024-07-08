
        // TODO récupérer la valeur input height
       const inputHeightElement = document.querySelector("#Height");
       // TODO récupérer la valeur input weight
       const inputWeightElement = document.querySelector("#Weight");
       // TODO récupérer paragraphe suggestion suivant résultat
       const suggestElement = document.querySelector("#Suggest");
       // TODO récupérer paragraphe meaning section
       const resultMeaning = document.querySelector("#resultMeaning");

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
    const convertedBmiResult = userWeight / ((userHeight/100) * (userHeight/100));
    //arrondir le BMI à un chiffre après la virgule
    const bmiResult = Math.round(convertedBmiResult * 10) / 10;

    //TODO déterminer la catégorie de BMI

    let bmiRange = "";

    if (bmiResult <18.5) {
        bmiRange = "underweight";
        resultMeaning.innerHTML = ("A BMI below 18.5 indicates being underweight. This may suggest a need to ensure adequate nutrition to support overall health and wellbeing. Consider consulting with a healthcare provider or nutritionist to address nutritional needs.");
    } else if  (bmiResult >= 18.5 && bmiResult <= 24.9) {
        bmiRange = "normal weight";
        resultMeaning.innerHTML = ("A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.");
    } else if  (bmiResult > 25 && bmiResult <= 24.9) {
        bmiRange = "overweight";
        resultMeaning.innerHTML = ("A BMI between 25 and 29.9 indicates being overweight. This may increase the risk of developing health problems such as heart disease, high blood pressure, and certain cancers. Managing weight through lifestyle changes, including diet modifications and increased physical activity, can help improve overall health.");
    } else if (bmiResult >= 25) {
        bmiRange = "obesity";
        resultMeaning.innerHTML = ("Obesity, indicated by a BMI of 30 or higher, is associated with significantly increased health risks. These risks include heart disease, type 2 diabetes, stroke, and joint problems. Effective management often involves comprehensive lifestyle changes, including dietary adjustments, regular physical activity, and potentially medical intervention under healthcare guidance.");
    }

    //TODO suivant résultat, envoyer message suivant résultat dans span score + P
    const scoreBmiElement = document.querySelector(".scoreBMI");
    scoreBmiElement.innerHTML =("Your BMIS is ... <br/> " + bmiResult );
    suggestElement.innerHTML = ("Your BMI suggests you're a " + bmiRange);

    }  else {
        // Si l'un des champs est vide ou non valide, réinitialiser le texte
        const scoreBmiElement = document.querySelector(".scoreBMI");
        scoreBmiElement.innerHTML = "Enter your Height and Weight";
        suggestElement.innerHTML = "Enter your height and weight and you'll see your BMI result here.";
    }
    }
};


document.addEventListener('DOMContentLoaded', app.init);



//todo calculer poids ideal (weight) suivant le bmi result (range en kg);