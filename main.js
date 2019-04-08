let x=[];
let rows=10;

for(let i=0;i<rows;i++){
    x[i]=[];
}

for(let i=0;i<rows;i++){
    for(let j=0;j<rows;j++){
        x[i][j]=' ';
    } 
}

let eqn=[];

eqnGenerater();
function eqnGenerater(){
    for(let i=0;i<4;i++){
        eqn[i]=[];
        let a= (Math.floor(Math.random()*5))+1;
        let b= (Math.floor(Math.random()*5))+1;
        eqn[i][0]=a.toString();
        eqn[i][1]='+';
        eqn[i][2]=b.toString();
        eqn[i][3]='=';
        eqn[i][4]=(a+b).toString();
    }
}
console.log(eqn);
// let eqn=[
//     [1,+,3,=,4],
//     [2,+,5,=,7]
//     // ['5','*','3','=','9'],
//     // ['3','/','1','=','3']
// ]
let eqnIndex=0;
let point=2;
let posn=1;
let abscissa=null;
let ordinate=1;

if(posn<=point && ((eqn[eqnIndex].length-posn)<=(x[ordinate].length-point))){
    setup(point-posn,eqn[eqnIndex],abscissa,ordinate);
    if(eqnIndex<eqn.length-1){
        eqnIndex++;
        nextEqn(point-posn,eqn[eqnIndex],abscissa,ordinate);
    }
}


function setup(start,eqxn,xabscissa,yordinate){
    for(let i=start;i<start+5;i++){
        if(xabscissa===null){
            if(x[yordinate][i]!=null || yordinate==i) //new line
                x[yordinate][i]=eqxn[i-start];
        }
        if(yordinate===null){
            if(x[xabscissa][i]!=null || xabscissa==i) //new lines
            x[i][xabscissa]=eqxn[i-start];
        }    
    }
}

function nextEqn(start,newEqn,xabscissa,yordinate){
    loop1:
        for(let i=start;i<start+5;i++){
            loop2:
                for(let j=0;j<newEqn.length;j++){
                    if(j!=1 && j!=2){

                        if(xabscissa==null){
                            if(x[yordinate][i]===newEqn[j]){
                                point=yordinate;
                                posn=j;
                                abscissa=i;
                                ordinate=null;
                                if(posn<=point && ((newEqn.length-posn)<=(rows-point))){
                                    setup(point-posn,newEqn,abscissa,ordinate);
                                    if(eqnIndex<eqn.length-1){
                                        eqnIndex++;
                                        nextEqn(point-posn,eqn[eqnIndex],abscissa,ordinate);
                                    }
                                    break loop1;
                                }
                            }
                            // if(j==newEqn.length-1){
                                
                            // }
                        }else if(yordinate==null){
                            if(x[i][xabscissa]===newEqn[j]){
                                point=xabscissa;
                                posn=j;
                                abscissa=null;
                                ordinate=i;
                                if(posn<=point && ((newEqn.length-posn)<=(rows-point))){
                                    setup(point-posn,newEqn,abscissa,ordinate);
                                    if(eqnIndex<eqn.length-1){
                                        eqnIndex++;
                                        console.log(eqnIndex);
                                        nextEqn(point-posn,eqn[eqnIndex],abscissa,ordinate);
                                    }
                                    break loop1;
                                }
                            }
                        }
                    }
                }
        }


}

console.log(x);

