const getHeight = document.getElementById("input-Height");
const getWeigth = document.getElementById("input-Weigth");
const btnGetbahesab = document.getElementById("btn-calculation");
const result = document.getElementById("result")

  function calculateBMI(weight , height) {
     let bmi = weight / ((height /100) **2);
     return bmi ;
  } 

btnGetbahesab.addEventListener("click", function (event) {
    event.preventDefault();
  const height = Number(getHeight.value);
  const weight = Number(getWeigth.value);
  let bmi = calculateBMI(weight , height);
   
    result.textContent = "   your BMI  = " + bmi . toFixed(2);
  });

