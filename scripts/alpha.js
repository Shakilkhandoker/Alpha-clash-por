document.getElementById('home-play-btn').addEventListener('click', function () {
   getHideById('home-screen')
   getShowBuId('play-ground')
})


function continueGame(){
   alphabet = randomAlphabet();
   document.getElementById('current-alphabet').innerText = alphabet;
   setBackgroundColor(alphabet)
}

document.addEventListener('keyup',function handleBtn(event){
   const playerBtn=event.key;
   // console.log(playerBtn);
   const currentBtn=document.getElementById('current-alphabet').innerText;
   const expectedBtn=currentBtn.toLowerCase();
   // console.log(expectedBtn);

   if(expectedBtn===playerBtn){
      removeBackgroundColor(expectedBtn);
      continueGame()
   }
   else{
      console.log('you lost one life');
   }
})