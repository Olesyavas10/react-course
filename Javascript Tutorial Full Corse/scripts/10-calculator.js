let calculation = JSON.parse(localStorage.getItem("calc")) || "";
    function updateCalculation(value) {
      calculation += value;
      document.querySelector(".displayResult").innerHTML = calculation;
      localStorage.setItem("calc", JSON.stringify(calculation));
    }