//HERE IS THE JS FOR THE MONEKY GAME


//VARIABLES AND CONSTANTS
let banana = document.querySelector('.Banana');
let trash = document.querySelector('.Trash');
let monkey = document.querySelector('.Monkey');
let jungle = document.querySelector('.Jungle');
let banana2 = document.querySelector('.Banana2');
let trash2 = document.querySelector('.Trash2');
let score = 0;
let moveBy = 30;
let step = 1;
let play_A = ''
let interval;
monkey.style.left = '700px';
monkey.style.top = '750px';
banana.style.left = '400px';
banana.style.top = '200px';
let banana_int_top = 150;
let banana_int_left = 800;
trash.style.left = '800px';
trash.style.top = '200px';
let trash_int_top = 150;
let trash_int_left = 800;
let count_speed = 0;
let count_items = 0;
banana2.style.left = '400px';
banana2.style.top = '200px';
let banana2_int_top = 150;
trash2.style.left = '800px';
trash2.style.top = '200px';
let trash2_int_top = 150;



//FUNCTION THAT RETURN A RANDOM X POSITION
function random_x() {
    let x = Math.floor(Math.random() * 1001) + 250;
    return x
}

//FUNCTION TO UPDATE SCORE
function update(){
    document.getElementById('score').innerHTML = score;
}

function faster(){
    if(count_speed == 5){
        step = step + 1;
        moveBy = moveBy + 5;
        count_speed = 0;
    }
}

function add_items(){
    if(score > 10){
        banana2.style.height = '70px';
        banana2.style.width = '70px';
    
        trash2.style.height = '70px';
        trash2.style.width = '70px';

        if(banana2_int_top < 850){
            banana2.style.top = parseInt(banana2.style.top) + step + 'px';
            banana2_int_top = banana2_int_top + step;
        }
        if(banana2_int_top >= 850){
        banana2.style.left = random_x() + 'px'
        banana2_int_top = 200
        banana2.style.top = '200px';
        }
    
        if(trash2_int_top < 850){
            trash2.style.top = parseInt(trash2.style.top) + step + 'px';
            trash2_int_top = trash2_int_top + step;
        }
        if(trash2_int_top >= 850){
            trash2.style.left = random_x() + 'px';
            trash2_int_top = 200;
            trash2.style.top = '200px';
        }
    
        if((parseInt(banana2.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana2.style.left) + 70) && (parseInt(banana2.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana2.style.top) + 70) ){
            score = score + 1;
            count_speed = count_speed + 1;
            banana2.style.left = random_x() + 'px'
            banana2_int_top = 200
            banana2.style.top = '200px';
        }
        if((parseInt(trash2.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash2.style.left) + 70) && (parseInt(trash2.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash2.style.top) + 70) ){
            alert('GAME OVER')
            score = 0;
            banana2.style.left = random_x() + 'px'
            banana2_int_top = 200
            banana2.style.top = '200px';
            trash2.style.left = random_x() + 'px';
            trash2_int_top = 200;
            trash2.style.top = '200px';

            banana.style.left = random_x() + 'px'
            banana_int_top = 200
            banana.style.top = '200px';
            trash.style.left = random_x() + 'px';
            trash_int_top = 200;
            trash.style.top = '200px';
            clearInterval(interval)
        }
        }

}

//FUNCTION TO CONTROL THE MONEKY'S MOVEMENT
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if(parseInt(monkey.style.left) > 200){
            monkey.style.left = parseInt(monkey.style.left) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'ArrowRight':
            if(parseInt(monkey.style.left) < 1150){
            monkey.style.left = parseInt(monkey.style.left) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
    }
});


//FUNCTION THAT THE GAME RUNS UNDER
function game(){
    if(banana_int_top < 850){
        banana.style.top = parseInt(banana.style.top) + step + 'px';
        banana_int_top = banana_int_top + step;
    }
    if(banana_int_top >= 850){
    banana.style.left = random_x() + 'px'
    banana_int_top = 200
    banana.style.top = '200px';
    }

    if(trash_int_top < 850){
        trash.style.top = parseInt(trash.style.top) + step + 'px';
        trash_int_top = trash_int_top + step;
    }
    if(trash_int_top >= 850){
        trash.style.left = random_x() + 'px';
        trash_int_top = 200;
        trash.style.top = '200px';
    }

    if((parseInt(banana.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana.style.left) + 70) && (parseInt(banana.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana.style.top) + 70) ){
        score = score + 1;
        count_speed = count_speed + 1;
        banana.style.left = random_x() + 'px'
        banana_int_top = 200
        banana.style.top = '200px';
    }
    if((parseInt(trash.style.left) - 70 < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash.style.left) + 70) && (parseInt(trash.style.top) - 70 < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash.style.top) + 70) ){
        alert('GAME OVER')
        score = 0;
        banana.style.left = random_x() + 'px'
        banana_int_top = 200
        banana.style.top = '200px';
        trash.style.left = random_x() + 'px';
        trash_int_top = 200;
        trash.style.top = '200px';
        clearInterval(interval)
    }
}
//FUNCTION THAT CONTROLS THE END GAME BUTTON
function end(){
    clearInterval(interval)
    score = 0;
    banana.style.left = random_x() + 'px'
    banana_int_top = 200
    banana.style.top = '200px';
    trash.style.left = random_x() + 'px';
    trash_int_top = 200;
    trash.style.top = '200px';
    
}

//FUNCTION THAT CONTROLS THE START GAME BUTTON
function start_game(){
    interval = setInterval(function() {
        setTimeout(game(), 1);
        update();
        faster();
        add_items();
        }, 25);
    
    

    
}