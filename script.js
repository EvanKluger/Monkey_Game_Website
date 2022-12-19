//HERE IS THE JS FOR THE MONEKY GAME






//Desktop vs Mobile
let type = 1;

var width = window.innerWidth;
if (width > 550) {
 //desktop
type = 1;
} 
else {
    //mobile 
  type = 2
}





//VARIABLES AND CONSTANTS
var monkey = document.querySelector('.Monkey');
var jungle = document.querySelector('.Jungle');

var banana = document.querySelector('.Banana');
var trash = document.querySelector('.Trash');

var banana2 = document.querySelector('.Banana2');
var trash2 = document.querySelector('.Trash2');

var banana3 = document.querySelector('.Banana3');
var trash3 = document.querySelector('.Trash3');

var banana4 = document.querySelector('.Banana4');
var trash4 = document.querySelector('.Trash4');

var red_banana = document.querySelector('.RBanana');


let score = 0;
let moveBy = 35;
let step = 4;

let interval;
let count_speed = 0;
let count_items = 0;


let reg_height = 0;
let r_banana_height = 0;
if(type == 1){
    reg_height = 70; 
    r_banana_height = 100;
}

if(type == 2){
    reg_height = 10; 
    r_banana_height = 12;
}



var jungle_width = jungle.offsetWidth + "px";
var jungle_height = jungle.offsetHeight + 'px';

var bottom_jungle = (parseInt(jungle_height)*(85.5/75)) + reg_height;
var monkey_head = ((parseInt(jungle_height)*(85.5/75)));


var top_jungle = (parseInt(jungle_height)*(14.5/75)) + reg_height + 'px';

monkey.style.left = parseInt(jungle_width)*(12.5/75) + parseInt(jungle_width)/2 + 'px';
monkey.style.top = monkey_head + 'px';

banana.style.left = random_x() + 'px';
banana.style.top = top_jungle;
let banana_int_top = parseInt(top_jungle);
trash.style.left = random_x() + 'px';
trash.style.top = top_jungle;
let trash_int_top = parseInt(top_jungle);


banana2.style.left = random_x() + 'px';
banana2.style.top = top_jungle;
let banana2_int_top = parseInt(top_jungle);
trash2.style.left = random_x() + 'px';
trash2.style.top = top_jungle;
let trash2_int_top = parseInt(top_jungle);

banana3.style.left = random_x() + 'px';
banana3.style.top = top_jungle;
let banana3_int_top = parseInt(top_jungle);
trash3.style.left = random_x() + 'px';
trash3.style.top = parseInt(top_jungle);
let trash3_int_top = parseInt(top_jungle);

banana4.style.left = random_x() + 'px';
banana4.style.top = top_jungle;
let banana4_int_top = parseInt(top_jungle);
trash4.style.left = random_x() + 'px';
trash4.style.top = top_jungle;
let trash4_int_top = parseInt(top_jungle);

red_banana.style.left = random_x() + 'px';
red_banana.style.top = top_jungle;
let red_banana_int_top = parseInt(top_jungle);


//FUNCTION THAT RETURN A RANDOM X POSITION
function random_x() {
    let x = Math.floor(Math.random() * (parseInt(jungle_width) - reg_height)) + (parseInt(jungle_width)*(12.5/75));
    return x
}

//FUNCTION TO UPDATE SCORE
function update(){
    document.getElementById('score').innerHTML = score;
}

function faster(){
    if(count_speed > 4){
        step = step + 1;
        moveBy = moveBy + 5;
        count_speed = 0;
    }
}


//FUNCTION TO CONTROL THE MONEKY'S MOVEMENT
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if(parseInt(monkey.style.left) - moveBy > (parseInt(jungle_width)*(12.5/75))){
            monkey.style.left = parseInt(monkey.style.left) - moveBy + 'px';
            break;
            }
            else{
            monkey.style.left = parseInt(jungle_width)*(12.5/75) + 'px';
            break;
            }
        case 'ArrowRight':
            if(parseInt(monkey.style.left) + moveBy < (parseInt(jungle_width)*(87.5/75)-r_banana_height)){
            monkey.style.left = parseInt(monkey.style.left) + moveBy + 'px';
            break;
            }
            else{
            monkey.style.left = parseInt(jungle_width)*(87.5/75) - r_banana_height + 'px';
            break;
            }
    }
});


//FUNCTION THAT THE GAME RUNS UNDER
function game(){
    if(banana_int_top < (bottom_jungle)){
        banana.style.top = parseInt(banana.style.top) + step + 'px';
        banana_int_top = banana_int_top + step;
    }
    if(banana_int_top >= (bottom_jungle)){
    banana.style.left = random_x() + 'px'
    banana_int_top = parseInt(top_jungle)
    banana.style.top = top_jungle;
    }

    if(trash_int_top < (bottom_jungle)){
        trash.style.top = parseInt(trash.style.top) + step + 'px';
        trash_int_top = trash_int_top + step;
    }
    if(trash_int_top >= (bottom_jungle)){
        trash.style.left = random_x() + 'px';
        trash_int_top = parseInt(top_jungle);
        trash.style.top = top_jungle;
    }

    if((parseInt(banana.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana.style.left) + reg_height) && (parseInt(banana.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana.style.top) + reg_height) ){
        score = score + 1;
        count_speed = count_speed + 1;
        banana.style.left = random_x() + 'px'
        banana_int_top = parseInt(top_jungle);
        banana.style.top = top_jungle;
    }
    if((parseInt(trash.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash.style.left) + reg_height) && (parseInt(trash.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash.style.top) + reg_height) ){
        //alert('GAME OVER')
        //score = 0;
        banana4.style.left = random_x() + 'px'
        banana4_int_top = parseInt(top_jungle);
        banana4.style.top = top_jungle;
        trash4.style.left = random_x() + 'px';
        trash4_int_top = parseInt(top_jungle);
        trash4.style.top = top_jungle;
        trash4.style.height = '0px'; 
        trash4.style.width = '0px';
        banana4.style.width = '0px';
        banana4.style.height = '0px';
        
        banana3.style.left = random_x() + 'px'
        banana3_int_top = parseInt(top_jungle);
        banana3.style.top = top_jungle;
        trash3.style.left = random_x() + 'px';
        trash3_int_top = parseInt(top_jungle);
        trash3.style.top = top_jungle;
        
        banana3.style.height = '0px'; 
        banana3.style.width = '0px';
        trash3.style.height = '0px'; 
        trash3.style.width = '0px';
    
        banana2.style.left = random_x() + 'px'
        banana2_int_top = parseInt(top_jungle);
        banana2.style.top = top_jungle;
        trash2.style.left = random_x() + 'px';
        trash2_int_top = parseInt(top_jungle);
        trash2.style.top = top_jungle;
        trash2.style.height = '0px'; 
        trash2.style.width = '0px';
        banana2.style.height = '0px'; 
        banana2.style.width = '0px';
    
        banana.style.left = random_x() + 'px';
        banana_int_top = parseInt(top_jungle);
        banana.style.top = top_jungle;
        trash.style.left = random_x() + 'px';
        trash_int_top = parseInt(top_jungle);
        trash.style.top = top_jungle;
        
        step = 4;
        moveBy = 35;
        clearInterval(interval)
    }
}


//FUNCTION THAT ADDS ANOTHER PAIR OF BANANA AND TRASH AT SCORE > 9
function add_items_10(){
    if(score > 9){
        banana2.style.height = reg_height + 'px';
        banana2.style.width = reg_height + 'px';
    
        trash2.style.height = reg_height + 'px';
        trash2.style.width = reg_height + 'px';

        if(banana2_int_top < (bottom_jungle)){
            banana2.style.top = parseInt(banana2.style.top) + step + 'px';
            banana2_int_top = banana2_int_top + step;
        }
        if(banana2_int_top >= (bottom_jungle)){
        banana2.style.left = random_x() + 'px'
        banana2_int_top = parseInt(top_jungle);
        banana2.style.top = top_jungle;
        }
    
        if(trash2_int_top < (bottom_jungle)){
            trash2.style.top = parseInt(trash2.style.top) + step + 'px';
            trash2_int_top = trash2_int_top + step;
        }
        if(trash2_int_top >= (bottom_jungle)){
            trash2.style.left = random_x() + 'px';
            trash2_int_top = parseInt(top_jungle);
            trash2.style.top = top_jungle;
        }
    
        if((parseInt(banana2.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana2.style.left) + reg_height) && (parseInt(banana2.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana2.style.top) + reg_height) ){
            score = score + 1;
            count_speed = count_speed + 1;
            banana2.style.left = random_x() + 'px'
            banana2_int_top = parseInt(top_jungle);
            banana2.style.top = top_jungle;
        }
        if((parseInt(trash2.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash2.style.left) + reg_height) && (parseInt(trash2.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash2.style.top) + reg_height) ){
            //alert('GAME OVER')
            //score = 0;
            
            banana4.style.left = random_x() + 'px'
            banana4_int_top = parseInt(top_jungle);
            banana4.style.top = top_jungle;
            trash4.style.left = random_x() + 'px';
            trash4_int_top = parseInt(top_jungle);
            trash4.style.top = top_jungle;
            trash4.style.height = '0px'; 
            trash4.style.width = '0px';
            banana4.style.width = '0px';
            banana4.style.height = '0px';
            
            banana3.style.left = random_x() + 'px'
            banana3_int_top = parseInt(top_jungle)
            banana3.style.top = top_jungle;
            trash3.style.left = random_x() + 'px';
            trash3_int_top = parseInt(top_jungle);
            trash3.style.top = top_jungle;
            trash3.style.height = '0px'; 
            trash3.style.width = '0px';
        
            banana2.style.left = random_x() + 'px'
            banana2_int_top = parseInt(top_jungle);
            banana2.style.top = top_jungle;
            trash2.style.left = random_x() + 'px';
            trash2_int_top = parseInt(top_jungle);
            trash2.style.top = top_jungle;
            trash2.style.height = '0px'; 
            trash2.style.width = '0px';
        
            banana.style.left = random_x() + 'px'
            banana_int_top = parseInt(top_jungle);
            banana.style.top = top_jungle;
            trash.style.left = random_x() + 'px';
            trash_int_top = parseInt(top_jungle);
            trash.style.top = top_jungle;
            
            banana2.style.height = '0px'; 
            banana2.style.width = '0px';
            banana3.style.height = '0px'; 
            banana3.style.width = '0px';
            red_banana.style.height = '0px';
            red_banana.style.width = '0px';
            step = 4;
            moveBy = 35;
            count_speed = 0;
            clearInterval(interval)
        }
    }

}

function add_items_15(){
    if(score == 15 || score == 30 ||score == 23 || score == 37){
        red_banana.style.height = r_banana_height + 'px';
        red_banana.style.width = r_banana_height + 'px';
        red_step = step * 1.5;
    
        if(red_banana_int_top < (bottom_jungle)){
            red_banana.style.top = parseInt(red_banana.style.top) + red_step + 'px';
            red_banana_int_top = red_banana_int_top + red_step;
        }
        
        if(red_banana_int_top >= (bottom_jungle)){
        red_banana.style.left = random_x() + 'px'
        red_banana_int_top = 200
        red_banana.style.top = top_jungle;
        red_banana.style.height = '0px';
        red_banana.style.width = '0px';
        }

        if((parseInt(red_banana.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(red_banana.style.left) + reg_height) && (parseInt(red_banana.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(red_banana.style.top) + reg_height) ){
            score = score + 10;
            moveBy = moveBy + 10;
            step = step + 2;
            red_banana.style.left = random_x() + 'px'
            red_banana_int_top = 200
            red_banana.style.top = top_jungle;
        }
    }
    else{
    red_banana.style.height = '0px';
    red_banana.style.width = '0px';

    }
}

//FUNCTION THAT ADDS ANOTHER PAIR OF BANANA AND TRASH AT SCORE > 19
function add_items_20(){
    if(score > 19){
        banana3.style.height = reg_height + 'px';
        banana3.style.width = reg_height + 'px';
    
        trash3.style.height = reg_height + 'px';
        trash3.style.width = reg_height + 'px';

        if(banana3_int_top < (bottom_jungle)){
            banana3.style.top = parseInt(banana3.style.top) + step + 'px';
            banana3_int_top = banana3_int_top + step;
        }
        if(banana3_int_top >= (bottom_jungle)){
        banana3.style.left = random_x() + 'px'
        banana3_int_top = 200
        banana3.style.top = top_jungle;
        }
    
        if(trash3_int_top < (bottom_jungle)){
            trash3.style.top = parseInt(trash3.style.top) + step + 'px';
            trash3_int_top = trash3_int_top + step;
        }
        if(trash3_int_top >= (bottom_jungle)){
            trash3.style.left = random_x() + 'px';
            trash3_int_top = 200;
            trash3.style.top = top_jungle;
        }
    
        if((parseInt(banana3.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana3.style.left) + reg_height) && (parseInt(banana3.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana3.style.top) + reg_height) ){
            score = score + 1;
            count_speed = count_speed + 1;
            banana3.style.left = random_x() + 'px'
            banana3_int_top = 200
            banana3.style.top = top_jungle;
        }
        if((parseInt(trash3.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash3.style.left) + reg_height) && (parseInt(trash3.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash3.style.top) + reg_height) ){
            //alert('GAME OVER')
            //score = 0;
            
            banana4.style.left = random_x() + 'px'
            banana4_int_top = 200
            banana4.style.top = top_jungle;
            trash4.style.left = random_x() + 'px';
            trash4_int_top = 200;
            trash4.style.top = top_jungle;
            trash4.style.height = '0px'; 
            trash4.style.width = '0px';
            banana4.style.width = '0px';
            banana4.style.height = '0px';
            
            
            banana3.style.left = random_x() + 'px'
            banana3_int_top = 200
            banana3.style.top = top_jungle;
            trash3.style.left = random_x() + 'px';
            trash3_int_top = 200;
            trash3.style.top = top_jungle;
            trash3.style.height = '0px'; 
            trash3.style.width = '0px';


            banana2.style.left = random_x() + 'px'
            banana2_int_top = 200
            banana2.style.top = top_jungle;
            trash2.style.left = random_x() + 'px';
            trash2_int_top = 200;
            trash2.style.top = top_jungle;
            trash2.style.height = '0px'; 
            trash2.style.width = '0px';

            banana.style.left = random_x() + 'px'
            banana_int_top = 200
            banana.style.top = top_jungle;
            trash.style.left = random_x() + 'px';
            trash_int_top = 200;
            trash.style.top = top_jungle;

            banana2.style.height = '0px'; 
            banana2.style.width = '0px';
            banana3.style.height = '0px'; 
            banana3.style.width = '0px';
            red_banana.style.height = '0px';
            red_banana.style.width = '0px';
            step = 4;
            moveBy = 35;
            count_speed = 0;
            clearInterval(interval)


        }
    }

}
function add_items_30(){
    if(score > 29){
        banana4.style.height = reg_height + 'px';
        banana4.style.width = reg_height + 'px';
    
        trash4.style.height = reg_height + 'px';
        trash4.style.width = reg_height + 'px';

        if(banana4_int_top < (bottom_jungle)){
            banana4.style.top = parseInt(banana4.style.top) + step + 'px';
            banana4_int_top = banana4_int_top + step;
        }
        if(banana4_int_top >= (bottom_jungle)){
        banana4.style.left = random_x() + 'px'
        banana4_int_top = 200
        banana4.style.top = top_jungle;
        }
    
        if(trash4_int_top < (bottom_jungle)){
            trash4.style.top = parseInt(trash4.style.top) + step + 'px';
            trash4_int_top = trash4_int_top + step;
        }
        if(trash4_int_top >= (bottom_jungle)){
            trash4.style.left = random_x() + 'px';
            trash4_int_top = 200;
            trash4.style.top = top_jungle;
        }
    
        if((parseInt(banana4.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(banana4.style.left) + reg_height) && (parseInt(banana4.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(banana4.style.top) + reg_height) ){
            score = score + 1;
            count_speed = count_speed + 1;
            banana4.style.left = random_x() + 'px'
            banana4_int_top = 200
            banana4.style.top = top_jungle;
        }
        if((parseInt(trash4.style.left) - reg_height < parseInt(monkey.style.left)) && (parseInt(monkey.style.left) < parseInt(trash4.style.left) + reg_height) && (parseInt(trash4.style.top) - reg_height < parseInt(monkey.style.top)) && (parseInt(monkey.style.top) < parseInt(trash4.style.top) + reg_height) ){
            //alert('GAME OVER')
            //score = 0;
            banana4.style.left = random_x() + 'px'
            banana4_int_top = 200
            banana4.style.top = top_jungle;
            trash4.style.left = random_x() + 'px';
            trash4_int_top = 200;
            trash4.style.top = top_jungle;
            trash4.style.height = '0px'; 
            trash4.style.width = '0px';
            banana4.style.width = '0px';
            banana4.style.height = '0px';

            banana3.style.left = random_x() + 'px'
            banana3_int_top = 200
            banana3.style.top = top_jungle;
            trash3.style.left = random_x() + 'px';
            trash3_int_top = 200;
            trash3.style.top = top_jungle;
            trash3.style.height = '0px'; 
            trash3.style.width = '0px';


            banana2.style.left = random_x() + 'px'
            banana2_int_top = 200
            banana2.style.top = top_jungle;
            trash2.style.left = random_x() + 'px';
            trash2_int_top = 200;
            trash2.style.top = top_jungle;
            trash2.style.height = '0px'; 
            trash2.style.width = '0px';

            banana.style.left = random_x() + 'px'
            banana_int_top = 200
            banana.style.top = top_jungle;
            trash.style.left = random_x() + 'px';
            trash_int_top = 200;
            trash.style.top = top_jungle;

            banana2.style.height = '0px'; 
            banana2.style.width = '0px';
            banana3.style.height = '0px'; 
            banana3.style.width = '0px';
            red_banana.style.height = '0px';
            red_banana.style.width = '0px';
            step = 4;
            moveBy = 35;
            count_speed = 0;
            clearInterval(interval)


        }
    }

}




//FUNCTION THAT CONTROLS THE END GAME BUTTON
function end(){
    clearInterval(interval)
    //score = 0;
    banana4.style.left = random_x() + 'px'
    banana4_int_top = 200
    banana4.style.top = top_jungle;
    trash4.style.left = random_x() + 'px';
    trash4_int_top = 200;
    trash4.style.top = top_jungle;
    trash4.style.height = '0px'; 
    trash4.style.width = '0px';
    banana4.style.width = '0px';
    banana4.style.height = '0px';
    
    
    banana3.style.left = random_x() + 'px'
    banana3_int_top = 200
    banana3.style.top = top_jungle;
    trash3.style.left = random_x() + 'px';
    trash3_int_top = 200;
    trash3.style.top = top_jungle;
    trash3.style.height = '0px'; 
    trash3.style.width = '0px';

    banana2.style.left = random_x() + 'px'
    banana2_int_top = 200
    banana2.style.top = top_jungle;
    trash2.style.left = random_x() + 'px';
    trash2_int_top = 200;
    trash2.style.top = top_jungle;
    trash2.style.height = '0px'; 
    trash2.style.width = '0px';

    banana.style.left = random_x() + 'px'
    banana_int_top = 200
    banana.style.top = top_jungle;
    trash.style.left = random_x() + 'px';
    trash_int_top = 200;
    trash.style.top = top_jungle;

    banana2.style.height = '0px'; 
    banana2.style.width = '0px';
    banana3.style.height = '0px'; 
    banana3.style.width = '0px';
    red_banana.style.height = '0px';
    red_banana.style.width = '0px';
    step = 4;
    moveBy = 35;
    count_speed = 0;
    clearInterval(interval)
    
}

//FUNCTION THAT CONTROLS THE START GAME BUTTON
function start_game(){
    score = 0;
    interval = setInterval(function() {
        setTimeout(game(), 1);
        update();
        faster();
        add_items_10();
        add_items_15();
        add_items_20();
        add_items_30();
        }, 25);
    
    

    
}