import { DIRECTIONS,OBJECT_TYPE,PINKYMOVES } from "./setup";

//Primitive random movement ..will be changed later


// export const pinky_DOM=document.querySelector('.pinky');
// console.log(pinky_DOM);
export function randomMovement(pos,direction,objectExists){
    let dir=direction;
    let nextMovePos=pos+dir.movement;

    //create an array from the direction object keys
    const keys=Object.keys(DIRECTIONS);

    while(objectExists(nextMovePos,OBJECT_TYPE.WALL) || objectExists(nextMovePos,OBJECT_TYPE.GHOST)){
        const key=keys[Math.floor(Math.random()*keys.length)];
        //set nextmov
        dir=DIRECTIONS[key];
        //set next mov
        nextMovePos=pos+dir.movement;
    }
    return {nextMovePos,direction:dir};


}

export function suddenAppear(pos,direction,objectExists){
    let dir=direction;
    let nextMovePos=pos+dir.movement+40;

    //create an array from the direction object keys
    const keys=Object.keys(DIRECTIONS);

    while(objectExists(nextMovePos,OBJECT_TYPE.WALL) || objectExists(nextMovePos,OBJECT_TYPE.GHOST) ||objectExists(nextMovePos,OBJECT_TYPE.BLANK) || pos<0 || pos>=418 || nextMovePos<0 || nextMovePos>=400){
        const key=keys[Math.floor(Math.random()*keys.length)];
        const drift=PINKYMOVES[Math.floor(Math.random()*PINKYMOVES.length)];
        //set nextmov
        dir=DIRECTIONS[key];
        nextMovePos=(pos+dir.movement+drift)%400;
    }
    return {nextMovePos,direction:dir};


}


export function patrol_move(){


}


export function scatter(ghost){
    if(ghost==OBJECT_TYPE.BLINKY){

    }


}