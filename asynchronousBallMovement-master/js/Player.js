class Player{
    constructor(){
        this.index = 0,
        this.distance = 0,
        this.name = ''
    }
    
    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on('value',function(data){
            playerCount = data.val();
         })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    update(){
        var playerIndex = 'players/player' + playerCount;
        database.ref(playerIndex).set({
            name: this.name,
            distance : this.distance,


        })
    }

    static getPlayerInfo(){
        var playerref = database.ref('players');
        playerref.on('value',(data)=>{
            allPlayers = data.val();
        })
    }


}