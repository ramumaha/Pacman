const btnPlay=document.querySelector('#play');
const btnHighScore=document.querySelector('#highScore');

startGame=function(){
   const response=confirm('Are you ready to play!');
   if(response){
       console.log('Game on');
      location.assign('game.html');
   }else{
       console.log('terminated');
   }
}


btnPlay.addEventListener('click',startGame);
btnHighScore.addEventListener('click',function(){
    location.assign('highScore.html');
})
