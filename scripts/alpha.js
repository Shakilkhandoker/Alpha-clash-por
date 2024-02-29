document.getElementById('home-play-btn').addEventListener('click', function () {
   getHideById('home-screen')
   getShowBuId('play-ground')
   continueGame();
})


function continueGame() {
   alphabet = randomAlphabet();
   document.getElementById('current-alphabet').innerText = alphabet;
   setBackgroundColor(alphabet)
}

document.addEventListener('keyup', function handleBtn(event) {
   const playerBtn = event.key;
   console.log(playerBtn);
   const currentBtn = document.getElementById('current-alphabet').innerText;
   const expectedBtn = currentBtn.toLowerCase();
   console.log(expectedBtn);
// check right or wrong kye pressed

   if(playerBtn===expectedBtn){
      const currentScoreElement=document.getElementById('current-score');
      const currentText=currentScoreElement.innerText;
      const currentScore=parseInt(currentText);
      const newScore=currentScore +1;
      currentScoreElement.innerText= newScore
      removeBackgroundColor(alphabet)
      continueGame()

   }
   else{
      const currentLifeElement=document.getElementById('current-life');
      const currentLifeText=currentLifeElement.innerText;
      const currentLife=parseInt(currentLifeText);
      const newLife=currentLife - 1;
      currentLifeElement.innerText=newLife;
      removeBackgroundColor(alphabet)
   }
})





