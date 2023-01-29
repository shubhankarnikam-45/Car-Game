//this code for who login to play.
let data = JSON.parse(localStorage.getItem('data'));
let name=document.querySelector(".name")
name.innerHTML=data.name;

//required vaiables.
let startScreen=document.querySelector(".start-screen");
let gameScreen=document.querySelector(".game-screen");

startScreen.addEventListener("click",startGame);

function startGame(e)
{

    startScreen.classList.add('hide');
    gameScreen.classList.remove('hide');
}