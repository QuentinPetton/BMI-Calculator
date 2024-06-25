//function calcul BMI

function bmiCalculator(weight, height){
    const bmi = weight / (height * height);
    return Math.round(bmi);
}


const bmi = bmiCalculator(65,1.8);
console.log(bmi);