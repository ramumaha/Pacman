import { LEVEL,OBJECT_TYPE } from "./setup";

import GameBoard from './GameBoard';

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

}