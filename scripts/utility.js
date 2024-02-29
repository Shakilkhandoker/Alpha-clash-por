// show and hide screen in one button
function getHideById(elementId) {
   const element = document.getElementById(elementId);
   element.classList.add('hidden')
}
function getShowBuId(elementId) {
   const element = document.getElementById(elementId);
   element.classList.remove('hidden')
}


// random alphabet math
function randomAlphabet() {
   const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
   const alphabets = alphabetString.split('');
   const alphabetNumber = Math.random(alphabets) * 25;
   const index = Math.round(alphabetNumber);
   const alpha = alphabets[index];
   return alpha;
}

// set color
function setBackgroundColor(elementId){
   const element=document.getElementById(elementId);
   element.classList.add('bg-orange-400')
}

// remove color
function removeBackgroundColor(elementId){
   const element=document.getElementById(elementId);
   element.classList.remove('bg-orange-400')
}

