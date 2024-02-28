// step-1:when click the play button ,hide the home screen and open the paly ground

// first option to hide a button
// document.getElementById('home-play-btn').addEventListener('click',function(){
//    const homeSection=document.getElementById('home-screen');
//    homeSection.classList.add('hidden');
//    const playGroundSection=document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden')
// })

// document.getElementById('home-play-btn').addEventListener('click',function(){
//    hideElement('home-screen');
//    showElement('play-ground');
//    continueGame()
// })

// function continueGame(){
//    const alphabet=getRandomAlphabet();
//    // set alphabet to the display
//    const display=document.getElementById('current-alphabet');
//    display.innerText=alphabet;

//    // set button color
//    setButtonColor(alphabet)
// }

document.getElementById('home-play-btn').addEventListener('click',function(){
   getHideById('home-screen')
   getShowBuId('play-ground')
   alphabet=randomAlphabet();
   const display=document.getElementById('current-alphabet');
   display.innerText=alphabet;
   setBackgroundColor(alphabet)
})

