class Form {
    constructor() {
        this.input = createInput('Write your name')
        this.button = createButton('Submit');
        this.greating = createElement('h3');

    }
    display(){
        var title = createElement('h2');
        title.html('Car Racing');
        title.position(displayWidth/2-50,0);
         
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2);
    

        this.button.mousePressed( () =>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1 ;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greating.html('hello '+ player.name);
            this.greating.position(displayWidth/2-70,displayHeight/2-50);
        })
    }
    hide(){
        this.input.hide();
        this.greating.hide();
        this.button.hide();
    }
}