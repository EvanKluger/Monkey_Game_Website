let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');
let monkey = document.querySelector('.Monkey');
let score = 0
let moveBy = 20;
let step = 1;
let play_A = ''

monkey.style.left = '700px';
monkey.style.top = '700px';

banana.style.left = '400px';
banana.style.top = '200px';

let banana_int_top = 150;
let banana_int_left = 800;

trash.style.left = '800px';
trash.style.top = '200px';

let trash_int_top = 150;
let trash_int_left = 800;

function random_x() {
    let x = Math.floor(Math.random() * 801) + 300;
    return x
}

function update(){
    this.root.querySelector("scoreSpan").textContent = score;
}


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

function game(){
    if(banana_int_top < 900){
        banana.style.top = parseInt(banana.style.top) + step + 'px';
        banana_int_top = banana_int_top + step;
    }
    if(banana_int_top >= 900){
    banana.style.left = random_x() + 'px'
    banana_int_top = 200
    banana.style.top = '200px';
    }

    if(trash_int_top < 900){
        trash.style.top = parseInt(trash.style.top) + step + 'px';
        trash_int_top = trash_int_top + step;
    }
    if(trash_int_top >= 900){
        trash.style.left = random_x() + 'px';
        trash_int_top = 200;
        trash.style.top = '200px';
    }

    if((banana.style.left - 70 <= monkey.style.left <= banana.style.left + 70) && (banana.style.top <= monkey.style.top <= banana.style.top + 70)){
        score = score + 1;
    }
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




function end(){
    play_A = 'no'
}

function start_game(){
    setInterval(function() {
        setTimeout(game(), 5);
        }, 50);
        update();
}