var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var player = null;

function preload() {

game.load.image('player', 'assets/images/player.png', 32, 32);
game.load.image('sky', 'assets/images/sky.png');
}

function create() {
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,'sky');
    player =  game.add.sprite(32, game.world.height - 150, 'player');
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.physics.arcade.enable(player);
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //no animations yet.  crappy programmer art instead

    
    
    
}

function update () {


    
}
