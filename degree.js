const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
  let sum = 0
  let degreelist = mtrx(v)
  for(let v=0; v < degreelist.length; m++){
      sum +=1
  }
}
return sum

function degreecentrality(){
  let neighbors = mtrx.size()[0]-1;
  return degree(mtrx,v)/neighbors;
}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
