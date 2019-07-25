import winningLogic from "./winningLogic";

const userTurn=(pointsArray,count)=>{
    var score=1000;
    if(count===9){
        for(let a=0;a<3;a++){
            for(let b=0;b<3;b++){
                if(pointsArray[a][b]===0){
                    pointsArray[a][b]=1;
                    if(winningLogic(pointsArray,1)==='win'){
                        pointsArray[a][b]=0;
                        return -100+count;
                        
                    }
                    else{
                        pointsArray[a][b]=0;
                        return 0+count
                    }
                }
            }
        }
    }
    for(let a=0;a<3;a++){
        for(let b=0;b<3;b++){
            if(pointsArray[a][b]===0){
                pointsArray[a][b]=1;
                if(winningLogic(pointsArray,1)==='win'){
                    pointsArray[a][b]=0;
                    return -100+count
                }
                else{
                    const returnScore=computerTurn(pointsArray,count+1);
                    if(returnScore<score){
                        score=returnScore
                    }
                    pointsArray[a][b]=0
                }
                pointsArray[a][b]=0; 
            }
        }
    }
    return score
}

const computerTurn=(pointsArray,count)=>{
    var score=-1000
    if(count===9){
        for(let a=0;a<3;a++){
            for(let b=0;b<3;b++){
                if(pointsArray[a][b]===0){
                    pointsArray[a][b]=2;
                    if(winningLogic(pointsArray,2)==='win'){
                        pointsArray[a][b]=0;
                        return 100-count
                    }
                    else{
                        pointsArray[a][b]=0;
                        return 0-count
                    }
                }
            }
        }
    }
    for(let a=0;a<3;a++){
        for(let b=0;b<3;b++){
            if(pointsArray[a][b]===0){
                pointsArray[a][b]=2;
                if(winningLogic(pointsArray,2)==='win'){
                    pointsArray[a][b]=0;
                    return 100-count
                }
                else{
                    const returnScore=userTurn(pointsArray,count+1)
                    if(returnScore>score){
                        score=returnScore;
                    }
                    pointsArray[a][b]=0
                }
                pointsArray[a][b]=0;
            }
        }
    }
    return score
}

const compmove=(pointsArray,count)=>{
    var score=-1000;
    var A=-1;
    var B=-1;
    if(count===9){
        for(let a=0;a<3;a++){
            for(let b=0;b<3;b++){
                if(pointsArray[a][b]===0){
                    pointsArray[a][b]=2;
                    if(winningLogic(pointsArray,2)==='win'){
                        pointsArray[a][b]=0;
                        return [a,b]
                    }
                }
            }
        }
    }
    for(let a=0;a<3;a++){
        for(let b=0;b<3;b++){
            if(pointsArray[a][b]===0){
                if(A===-1){
                    A=a;
                    B=b;
                }
                pointsArray[a][b]=2;
                if(winningLogic(pointsArray,2)==='win'){
                    pointsArray[a][b]=0;
                    return [a,b]
                }
                else{
                    const returnScore=userTurn(pointsArray,count+1);
                    if(returnScore>score){
                        score=returnScore;
                        pointsArray[a][b]=0;
                        A=a;
                        B=b;
                    }
                }
                pointsArray[a][b]=0;
                
            }
        }
    }
    return [A,B]
}

export default compmove