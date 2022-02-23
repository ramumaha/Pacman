import { DIRECTIONS,OBJECT_TYPE } from "./setup";

class Ghost{
    constructor(speed=5,startPos,movement,name){
        this.name=name;
        this.movement=movement;
        this.startPos=startPos; //when pacman eats ghost
        this.pos=startPos;
        this.dir=DIRECTIONS.ArrowRight;
        this.speed=speed;
        this.timer=0;
        this.isScared=false; //powerpill
        this.rotation=false; //ghost cant rotate
    }
    shouldMove(){
        if(this.timer===this.speed){
            this.timer=0;
            return true;
        }
        this.timer++;
        return false;
    }

    getNextMove(objectExists){
        const {nextMovePos,direction}=this.movement(this.pos,this.dir,objectExists);
        return {nextMovePos,direction};
    }

    makeMove(){
        const classesToRemove=[OBJECT_TYPE.GHOST,OBJECT_TYPE.SCARED,this.name];
        let classesToAdd=[OBJECT_TYPE.GHOST,this.name];
        if(this.isScared){
            classesToAdd=[...classesToAdd,OBJECT_TYPE.SCARED];
        }
        return {classesToRemove,classesToAdd};
    }

    setNewPos(nextMovePos,direction){
        this.pos=nextMovePos;
        this.dir=direction;
    }
}

export default  Ghost;