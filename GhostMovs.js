import { DIRECTIONS,OBJECT_TYPE } from "./setup";

//Primitive random movement ..will be changed later

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