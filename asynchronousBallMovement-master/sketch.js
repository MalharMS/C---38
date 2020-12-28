var ball;
var gameState = 0;
var playerCount = 0;
var form ,game, player;
var position, database;
var allPlayers;
var car1,car2,car3,car4,cars;


function setup(){
    createCanvas(displayWidth-20,displayHeight-30);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    // var dbref = database.ref('Ball/position');
    // dbref.on('value',readPosition,showError);

    // ball = createSprite(250,250,10,10);
    // ball.shapeColor = "red";
}

function draw(){
    // background("white");

if (playerCount === 4) {
    game.update(1);
}

if (gameState === 1) {
    clear ();
    game.play();
}

//     if (position !== undefined) {
        
//         if(keyDown(LEFT_ARROW)){
//             updatePosition(-1,0);
//         }
//         else if(keyDown(RIGHT_ARROW)){
//             updatePosition(1,0);
//         }
//         else if(keyDown(UP_ARROW)){
//             updatePosition(0,-1);
//         }
//         else if(keyDown(DOWN_ARROW)){
//             updatePosition(0,+1);
//         }
//    }
//     drawSprites();
}

function updatePosition(x,y){
    database.ref('Ball/position').set({
        x : position.x + x,
        y : position.y + y
    });
}

function showError(){
    console.log("there was an errer");
}

function readPosition(data){
   position =  data.val();
   console.log(position);
   ball.x = position.x ;
   ball.y = position.y ;
}