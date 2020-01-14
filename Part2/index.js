let cardIdEl= document.getElementById('cardId');
let colorIdEl= document.getElementById('colorId');
console.log(cardIdEl);
console.log(colorIdEl);

let setCard= function(){
    let card = document.getElementById(cardIdEl.value);
    console.log(card);
    card.style.color= colorIdEl.value;
}

function reset(){
    document.getElementById('diamond').style = '';
    document.getElementById('club').style = '';
    document.getElementById('heart').style = '';
    document.getElementById('spade').style = '';
}

































// const idInput= document.getElementById('idInput');
// const colorInput= document.getElementById('colorInput');
// console.log(idInput);
// console.log(colorInput);

// function setCard(){
// const card=document.getElementById(idInput.value);
// console.log(card);
// // var diamonds= document.getElementById("diamonds");
// // var clubs= document.getElementById("clubs");
// // var hearts= document.getElementById("hearth");
// // var spades= document.getElementById("spades");
// // diamonds.style.color = 'red';
// // clubs.style.color = 'black';
// // hearts.style.color = 'red';
// // spades.style.color = 'black';
// card.style.color= colorInput.value;
// }

