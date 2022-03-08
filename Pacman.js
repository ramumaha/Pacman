import { OBJECT_TYPE,DIRECTIONS } from "./setup";

class Pacman{
    constructor(speed,startPos){
        this.pos=startPos;
        this.speed=speed;
        this.dir=null;
        this.timer=0;
        this.powerPill=false;
        this.rotation=true;
    }

    shouldMove(){
        if(!this.dir)return false;
        if(this.timer===this.speed){
            this.timer=0;
            return true;
        }
        this.timer++;
    }

    getNextMove(objectExists){
        let nextMovePos=this.pos+this.dir.movement;

        if(objectExists(nextMovePos,OBJECT_TYPE.WALL)||objectExists(nextMovePos,OBJECT_TYPE.GHOST)){
            nextMovePos=this.pos;
        }
        return {nextMovePos,direction:this.dir};
    }

    makeMove(){
        const classesToRemove=[OBJECT_TYPE.PACMAN];
        const classesToAdd=[OBJECT_TYPE.PACMAN];

        return {classesToRemove,classesToAdd};
    }

    setNewPos(nextMovePos){
        this.pos=nextMovePos;
    }
    handleKeyInput(e,objectExists){
        let dir;

        if(e.keyCode>=37 && e.keyCode<=40){
            dir=DIRECTIONS[e.key];

        }else{
            return;
        }

        const nextMovePos=this.pos+dir.movement;
        if(objectExists(nextMovePos,OBJECT_TYPE.WALL) || objectExists(nextMovePos,OBJECT_TYPE.GHOSTLAIR))return;
        this.dir=dir;
    }

    currentPos(){
        let ele=document.querySelector('.pacman');
        let rect=ele.getBoundingClientRect();
        // for(let key in rect){
        //     if(typeof rect[key]!=='function'){
        //         console.log(`${key} ${rect[key]}`);
        //     }

        // }
        return {x:rect['x'],y:rect['y']};
        
    }
}


export default Pacman;