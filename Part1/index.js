let result=[]; //keeping track of who played what.

let play = function(clickedBoxId){ //invoke this function when any box clicked
let playerSpan= document.getElementById('player');//shows whose(player's) turn
let clickedElement= document.getElementById(clickedBoxId);//clicked box's id
//changinag the text to x or o
if(playerSpan.innerText === 'X'){ 
    playerSpan.innerText= 'O';
    clickedElement.innerText= 'X'
    result[clickedBoxId]='X'
    //adding current player's value to the array
}else{
    playerSpan.innerText= 'X';
    clickedElement.innerText= 'O';
    result[clickedBoxId]='O';
    //adding current player's value to the array
}
console.log(result);

let topLeft= result[0];
let topCenter=result[1];
let topRight=result[2];

let middleLeft=result[3]; 
let middleCenter=result[4]; 
let middleRight=result[5];

let bottomLeft=result[6];
let bottomCenter=result[7]; 
let bottomRight=result[8];

//var name = 'Sally';
// console.log(`Your name is: ${name}`);
// Your name is Sally

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} won the game`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} won the game`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} won the game`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} won the game`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} won the game`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} won the game`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} won the game`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} won the game`);
    return;
  }

let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (result[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("There is no winner");
  }
}