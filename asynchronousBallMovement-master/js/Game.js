class Game {
    constructor(){

    }
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on('value',function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if (gameState === 0) {
            player = new Player();
            var playerCountref = await database.ref('playerCount').once('value');
            if (playerCountref.exists()) {
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200,70,70);
        car2 = createSprite(300,200,70,70);
        car3 = createSprite(500,200,70,70);
        car4 = createSprite(700,200,70,70);
        cars  = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(30);
        text('Game Started',120,100);
        Player.getPlayerInfo();
        if (allPlayers !== undefined) {
        //    var displayPosition = 130;
            var index = 0; //this index is  iterating over cars array
            var x = 0
            var y ;

           for (var plr in allPlayers) {
               //adding 1 for index 
               index = index + 1

               // Distancing cars from each other
               x = x + 200
                y = displayHeight - allPlayers[plr].distance

                cars[index - 1].x = x
                cars[index - 1].y = y

                if (index  ===  player.index) {
                    console.log("red car")
                    cars[index-1].shapeColor = 'red'
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y
                 }// else {
                //     cars[index-1].shapeColor = 'blue'
                // }
                // displayPosition += 20;
                // textSize(20);
                // var name = allPlayers[plr].name
                // var distance = allPlayers[plr].distance;
                // text (name+': '+ distance,150,displayPosition)

           } 
        }
        if (keyIsDown(UP_ARROW)&&player.index !== null) {
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }
}