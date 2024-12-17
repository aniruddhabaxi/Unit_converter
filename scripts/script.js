//function changeText() {
//     document.getElementById("clickMe").style.backgroundColor = "#0aa9f6";
//     document.getElementById("clickMe").innerText = "Clicked...!";

//   }

//   function paraText() {
//     let textValue = document.getElementById("text").value;
//     document.getElementById("fetchText").innerText = textValue;
//   }
document.getElementById("text").addEventListener("input", function () {
  let inputText = document.getElementById("text").value;
  document.getElementById("fetchText").innerText = inputText;
});
document.getElementById("clickMe").addEventListener("click", function () {
  document.getElementById("clickMe").style.backgroundColor = "#0aa9f6";
  this.innerText = "Clicked..!";
});
