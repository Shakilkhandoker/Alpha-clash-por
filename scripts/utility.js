// function hideElement(elementId){
//    const element=document.getElementById(elementId)
//    element.classList.add('hidden')
// }
// function showElement(elementId){
//    const element=document.getElementById(elementId);
//    element.classList.remove('hidden')
// }

// // create random alphabet
// function getRandomAlphabet(){
//    // get or create an alphabet array
//    const alphabetString='abcdefghijklmnopqrstuvwxyz';
//    const alphabets=alphabetString.split('');

//    // get a random index between  
//    const randomNumber=Math.random()*25
//    const index=Math.round(randomNumber);
//    const alphabet=alphabets[index];
//    return alphabet
// }



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