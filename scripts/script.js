// Get the correct navigation tab elements
const weightTabs = document.querySelector("li:nth-child(1)");  // For Weight tab
const tempTabs = document.querySelector("li:nth-child(2)");    // For Temperature tab
const timeTabs = document.querySelector("li:nth-child(3)");
const areaTabs = document.querySelector("li:nth-child(4)");
//const binaryTabs = document.querySelector("li:nth-child(5)");
const weightContents = document.getElementById('weight_unit');    // Content for weight
const tempContents = document.getElementById('temp_unit');        // Content for temperature
const timeContents = document.getElementById('time_unit');
const areaContents = document.getElementById('area_unit');
//const binaryContents = document.getElementById('binary_unit');

// Function to switch between tabs
function tabSwitch(showContent){
  weightContents.classList.remove('active');
  tempContents.classList.remove('active');
  timeContents.classList.remove('active');
  areaContents.classList.remove('active');
 // binaryContents.classList.remove('active');

  showContent.classList.add('active');
}

// Add event listeners to tabs
weightTabs.addEventListener('click', function(){
  tabSwitch(weightContents);  // Switch to weight content
});

tempTabs.addEventListener('click', function(){
  tabSwitch(tempContents);  // Switch to temperature content
});
timeTabs.addEventListener('click', function(){
tabSwitch(timeContents);
});
areaTabs.addEventListener('click', function(){
tabSwitch(areaContents);
});
// binaryTabs.addEventListener('click', function(){
// tabSwitch(binaryContents);
// });

// Initially display weight content
tabSwitch(weightContents);


// Input field validation

// Weight converter

function weightConvert() {
 const value = document.getElementById("inputVal").value; // collecting input value
 const inputWeight = document.getElementById("fromWeight").value; // collecting weight input unit
 const outputWeight = document.getElementById("toWeight").value; // collecting weight output unit

  const unitWeight = {
  'gram': 1,
  'kilogram': 1000,
  'tonne': 1000 ** 2,
  'megatonne': 1000 ** 4,
  'gigatonne': 1000 ** 5
  }

  const unit_in_weight = value * unitWeight[inputWeight];
  const target_units = unit_in_weight / unitWeight[outputWeight];

  document.getElementById("outputResult").innerHTML = target_units + " " + outputWeight;
}

// Time converter...

function timeConvert() {
  const value = document.getElementById("inputVal").value;
  const inputTime = document.getElementById("fromTime").value;
  const outputTime = document.getElementById("toTime").value;
 
   const unitTime = {
   'second': 1,
   'minute': 60,
   'hour': 3600,
   'day': 86400
   }
 
   const unit_in_time = value * unitTime[inputTime];
   const target_units = unit_in_time / unitTime[outputTime];
 
   document.getElementById("outputResult").innerHTML = target_units + " " + outputTime;
 }


 // Area converter...

function areaConvert() {
  const value = document.getElementById("inputVal").value;
  const inputArea = document.getElementById("fromArea").value;
  const outputArea = document.getElementById("toArea").value;
 
   const unitArea = {
   'inch': 1,
   'feet': 12,
   'meter': 12 * 0.3048,
   'metersquare': 60 * 60 * 24
   }
 
   const unit_in_area = value * unitArea[inputArea];
   const target_units = unit_in_area / unitArea[outputArea];
 
   document.getElementById("outputResult").innerHTML = target_units + " " + outputArea;
 }

 function Validate(){
  const inputValue = document.getElementById('inputVal').value;

  if (inputValue === "" || isNaN(inputValue) || inputValue <= 0){
    alert("Please enter a valid number");
    return false;
  }
  weightConvert();
  // tempConvert();
  // timeConvert();
  // areaConvert();
 }

// function to clear input value when page refreshes
window.onload = function(){
  document.getElementById("inputVal").value = "";
}