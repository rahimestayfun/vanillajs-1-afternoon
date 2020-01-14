let board = [];
let gameOver = false;

function isOver(){
    if(gameOver===true){
        let boxes = document.getElementsByTagName('td');
        for (let i=0; i<boxes.length; i++){
            boxes[i].innerText='';
            board=[];
        }
        gameOver = false;
    }
}

function play(boxId) {
  let playerTurn = document.getElementById("player");
  let selectedBoxId = document.getElementById(boxId);

  if (playerTurn.innerText === "X") {
    playerTurn.innerText = "O";
    selectedBoxId.innerText = "X";
    board[boxId]= 'X';
  } else {
    playerTurn.innerText = "X";
    selectedBoxId.innerText = "O";
    board[boxId] ='O';
  }
console.log(board);

  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];
  

  if(topLeft !==undefined && topLeft=== topCenter && topCenter===topRight && topLeft===topRight){
      alert(`${topLeft} is the winner`);
      gameOver = true;
      return isOver();
  }else if(middleLeft !==undefined && middleLeft=== middleCenter && middleCenter===middleRight && middleLeft===middleRight){
      alert(`${middleLeft} is the winner`);
      gameOver = true;
      return isOver();
  }else if(bottomLeft !==undefined && bottomLeft=== bottomCenter && bottomCenter===bottomRight && bottomLeft===bottomRight){
      alert(`${bottomLeft} is the winner`);
      gameOver = true;
      return isOver();
  }else if(topLeft !==undefined && topLeft=== middleLeft && middleLeft===bottomLeft && topLeft===bottomLeft){
      alert(`${topLeft} is the winner`);
      gameOver = true;
      return isOver();
  }else if(topCenter !==undefined && topCenter=== middleCenter && middleCenter===bottomCenter && topCenter===bottomCenter){
      alert(`${topCenter} is the winner`);
      gameOver = true;
      return isOver();
  }else if(topRight !==undefined && topRight=== middleRight && middleRight===bottomRight && topRight===bottomRight){
      alert(`${topRight} is the winner`);
      return isOver();
  }else if(topLeft !==undefined && topLeft=== middleCenter && middleCenter===bottomRight && topLeft===bottomRight){
      alert(`${topLeft} is the winner`);
      gameOver = true;
      return isOver();
  }else if(topRight !==undefined && topRight=== middleCenter && middleCenter===bottomLeft && topRight===bottomLeft){
    alert(`${topRight} is the winner`);
    gameOver = true;
    return isOver();
}

let boardFull = true;
for(let i=0; i<9; i++){
    if(board[i] === undefined){
        boardFull= false;
    }
}

if(boardFull === true){
    alert('No winner');
    gameOver = true;
    return isOver();
    }
} 
  
    function resetButton(){
        // board:[];
        let boxes = document.getElementsByTagName('td');
        for (let i=0; i<boxes.length; i++){
            boxes[i].innerText='';
        }
        
    }

    //resets everything by refreshing the page.
    // function resetButton(){
    //     document.location.href='';
    // }
    

