/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores,roundScores,activePlayer,gamePlaying;
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');
const score0 = document.getElementById('score-0');
const score1 = document.getElementById('score-1');
const player0 = document.querySelector('.player-0-panel');
const player1 = document.querySelector('.player-1-panel');
const name0 = document.querySelector('name-0');
const name1 = document.querySelector('name-1');
const diceDOM = document.querySelector('.dice');
gamePlaying= true;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){

   if(gamePlaying){
      let dice = Math.floor(Math.random()*6)+1;

    
      diceDOM.style.display='block';
      diceDOM.src='dice-'+dice+'.png';
     
      if(dice !== 1){
          
       roundScores += dice;
       document.querySelector('#current-'+activePlayer).textContent = roundScores;
 
      }
      else{
       nextPlayer();
          
      }
   }
    
});


document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying){
   scores[activePlayer] += roundScores;
   document.querySelector('#score-'+activePlayer).textContent =scores[activePlayer];
   

   if(scores[activePlayer]>=100){
      document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      diceDOM.style.display='none';
      gamePlaying = false;
   }
   else{
      nextPlayer();
   }
  
}   
});

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
   activePlayer === 0 ? activePlayer=1 :activePlayer=0;
   roundScores=0;
   current0.textContent = current1.textContent =0;
   player0.classList.toggle('active');
   player1.classList.toggle('active');
 
}

function init(){
   scores = [0,0];
   roundScores = 0;
   activePlayer=0;
   current0.textContent = current1.textContent = score0.textContent = score1.textContent =0;
   diceDOM.style.display='none';
   player0.classList.remove('winner');
   player1.classList.remove('winner');
   player0.classList.remove('active');
   player1.classList.remove('active');
   player0.classList.add('active');
   }