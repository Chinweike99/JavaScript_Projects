class Player{
    constructor(game){
        this.game = game;
        this.x = 50;
        this.y = 70;
        this.width = 200;
        this.height = 200;
    }
    /* Drawing the player */
    draw(){
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.x++;
    }
}