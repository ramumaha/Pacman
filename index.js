import { LEVEL,OBJECT_TYPE } from "./setup";

import GameBoard from './GameBoard';
import Pacman from "./Pacman";
//Dom elements

const gameGrid=document.querySelector('#game');
const scoreTable=document.querySelector('#score');
const startButton=document.querySelector('#start-button');

//Const
const POWER_PILL_TIME=10000;
const GLOBAL_SPEED=80;
const gameBoard=GameBoard.createGameBoard(gameGrid,LEVEL);

//intial

let score=0;
let timer=null;
let gameWin=false;
let powerPillActive=false;
let powerPillTime=null;

function gameOver(pacman,grid){

}

function checkCollision(pacman,ghost){

}

function gameLoop(pacman,Ghost){

}

function startGame(){
    gameWin=false;
    powerPillActive=false;
    score=0;
    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);
    const pacman=new Pacman(2,287);
    gameBoard.addObject(287,[OBJECT_TYPE.PACMAN]);
    document.addEventListener('keydown',(e)=>{
        pacman.handleKeyInput(e,gameBoard.objectExist.bind(gameBoard))
    })

}

//initialise game

startButton.addEventListener('click',startGame);