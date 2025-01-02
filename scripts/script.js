
const weightTab = document.getElementById('weightList');
//const tempTab = document.getElementById('tempList');
const timeTab = document.getElementById('timeList');
const areaTab = document.getElementById('areaList');
const binaryTab = document.getElementById('binaryList');
const weightContent = document.getElementById('weight_unit');    // Content for weight
//const tempContent = document.getElementById('temp_unit');        // Content for temperature
const timeContent = document.getElementById('time_unit');
const areaContent = document.getElementById('area_unit');
const binaryContent = document.getElementById('binary_unit');

// creating function to switch between tabs on click
function tabSwitch(showContent){
weightContent.classList.remove('active'); // removing the active tabs here.
//tempContent.classList.remove('active');
timeContent.classList.remove('active');
areaContent.classList.remove('active');
binaryContent.classList.remove('active');

showContent.classList.add('active');


// Adding event listeners to tabs
weightTab.addEventListener('click', function(){
tabSwitch(weightContent);  // Switch to weight content
});

// tempTab.addEventListener('click', function(){
// tabSwitch(tempContent);  // Switch to temperature content
// });

timeTab.addEventListener('click', function(){
tabSwitch(timeContent); // Switch to time content
});

areaTab.addEventListener('click', function(){
tabSwitch(areaContent); // Switch to area content
});

binaryTab.addEventListener('click', function(){
  tabSwitch(binaryContent); // Switch to area content
  });
}

// displaying weight content initially
tabSwitch(weightContent);

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

document.getElementById("outputResult").innerHTML = target_units.toFixed(4) + " " + outputWeight;
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

  const unit_in_time = value * unitTime[inputTime]; // collecting input value with unit to convert from
  const target_units = unit_in_time / unitTime[outputTime];

  document.getElementById("outputResult").innerHTML = target_units.toFixed(4) + " " + outputTime;
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

  document.getElementById("outputResult").innerHTML = target_units.toFixed(4) + " " + outputArea;
}

// Binary Converter

function binaryConvert() {
  const value = document.getElementById("inputVal").value;
  const inputBinary = document.getElementById("fromBinary").value;
  const outputBinary = document.getElementById("toBinary").value;

  const unitBinary = {
    'byte': 1,
    'kilobyte': 1024,
    'milibyte': 1024 ** 2,
    'gigabyte': 1024 ** 3,
    'terabyte': 1024 ** 4
  }
  const unit_in_bytes = value * unitBinary[inputBinary];
  const target_units = unit_in_bytes / unitBinary[outputBinary];

  document.getElementById("outputResult").innerHTML = target_units.toFixed(4) + " " + outputBinary;
}
// Input field validation

function Validate(){
const inputValue = document.getElementById('inputVal').value;
 if(inputValue === "" || isNaN(inputValue) || inputValue <= 0){
  alert("Please enter a valid number");
return true;

}

if (weightContent.classList.contains('active')) {
  weightConvert();
} else if (timeContent.classList.contains('active')) {
  timeConvert();
} else if (areaContent.classList.contains('active')) {
  areaConvert();
} else if (binaryContent.classList.contains('active')) {
  binaryConvert();
}
return true;
}
// function to clear input value when page refreshes
window.onload = function(){
document.getElementById("inputVal").value = "";
}



