//function changeText() {
//     document.getElementById("clickMe").style.backgroundColor = "#0aa9f6";
//     document.getElementById("clickMe").innerText = "Clicked...!";

//   }

//   function paraText() {
//     let textValue = document.getElementById("text").value;
//     document.getElementById("fetchText").innerText = textValue;
//   }
// document.getElementById("text").addEventListener("input", function () {
//   let inputText = document.getElementById("text").value;
//   document.getElementById("fetchText").innerText = inputText;
// });
// document.getElementById("clickMe").addEventListener("click", function () {
//   document.getElementById("clickMe").style.backgroundColor = "#0aa9f6";
//   this.innerText = "Clicked..!";
// });

function weightConvert() {
 const value = document.getElementById("inputVal").value;
 const inputWeight = document.getElementById("fromWeight").value;
 const outputWeight = document.getElementById("toWeight").value;

  const unitBytes = {
  'Gram': 1,
  'Kilogram': 1000,
  'Tonne': 1000 ** 2,
  'Megatonne': 1000 ** 3,
  'Gigatonne': 1000 ** 4
  }

  const unit_in_bytes = value * unitBytes[inputWeight];
  const target_units = unit_in_bytes / unitBytes[outputWeight];

  document.getElementById("outputResult").innerHTML = target_units + " " + outputWeight;
}
