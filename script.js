let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');
let monkey = document.querySelector('.Monkey');
let moveBy = 20;
let counter = 0;


function random_x() {
    let x = Math.floor(Math.random() * 701) + 300;
}


monkey.style.left = 700;
monkey.style.top = 800;

banana.style.left = 800;
banana.style.top = 300;


trash.style.left = 400;
trash.style.top = 300;

var banana_move_top = banana.offsetTop
var banana_move_left = banana.offsetLeft

var trash_move_top = trash.offsetTop
var trash_move_left = trash.offsetLeft

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            monkey.style.left = parseInt(monkey.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
 
            monkey.style.left = parseInt(monkey.style.left) + moveBy + 'px';
            break;
    }
});

function banana_movement(){
    while(banana.trash_move_top < 900){
        banana_move_top = banana_move_top + moveBy;
        banana.style.top = banana_move_top + "px"
    }
    banana.style.left = random_x()
}

function trash_movement(){
    while(trash.style.top < 900){
        trash_move_top = trash_move_top + moveBy;
        trash.style.top = trash_move_top + "px"
    }
    trash.style.left = random_x()
}


/*
var game = function() {
    
    if((trash.style.left <= monkey.style.left <=  trash.style.left + 70) && (trash.style.top <= monkey.style.top <=  trash.style.top + 70)){
        alert("Game Over. score: "+ counter);
        counter=0;
    }
    else if((banana.style.left <= monkey.style.left <= banana.style.left + 70) && (banana.style.top <= monkey.style.top <= banana.style.top + 70)){
        counter++;
        document.getElementById("scoreSpan").innerHTML = counter;
    }
    
    else{
        document.getElementById("scoreSpan").innerHTML = counter;
    }
}
*/

banana_movement()
trash_movement()
