const winningLogic=(pointArray,point)=>{
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(pointArray[i][j]!==point){
                break;
            }

            if(j===2){
                return 'win'
            }
        }
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(pointArray[j][i]!==point){
                break;
            }

            if(j===2){
                return 'win'
            }
        }
    }
    for(let i=0;i<3;i++){
            if(pointArray[i][i]!==point){
                break;
            }

            if(i===2){
                return 'win'
            }
    }
    for(let i=0;i<3;i++){
            if(pointArray[i][2-i]!==point){
                break;
            }

            if(i===2){
                return 'win'
            }
        }    
    return 'draw'
}

export default winningLogic

