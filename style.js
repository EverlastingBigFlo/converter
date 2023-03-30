// let display = document.getElementsByClassName('display');
let display = document.getElementById('display');
let ratio = document.getElementById('ratio');
let kilometre = document.getElementById('kilometre');
let mile = document.getElementById('mile');
let inches = document.getElementById('inches');
let centimeter = document.getElementById('centimeter');
let pound = document.getElementById('pound');
let kilogram = document.getElementById('kilogram');
let converter = document.getElementById('converter');

function convert(){
    let b = ratio.value;
    if (converter.value == kilometre.value){
        display.value = Number(b) * 0.621371;
    }

   else if (converter.value == mile.value){
        display.value = Number(b) * 1.609;
    }

   else if (converter.value == inches.value){
        display.value = Number(b) * 2.54;
    }
    
    else if (converter.value == centimeter.value){
         display.value = Number(b) * 0.393701;
     }
    
    else if (converter.value == pound.value){
         display.value = Number(b) * 0.453592;
     }
    else if (converter.value == kilogram.value){
         display.value = Number(b) * 2.205;
     }
 }

 function next(){
    display.value = '';
    ratio.value = '';
 }
    