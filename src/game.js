var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {preload: preload, create: create, update: update, render: render});
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
    player.body.drag.set(150);


    //no animations yet.  crappy programmer art instead

    
    
    
}

function update () {
    var cursors = game.input.keyboard.createCursorKeys();
    var sprintKey = game.input.keyboard.addKey(Phaser.Keyboard.shiftKey);
   // player.body.velocity.x = 0;

    console.log(player.body.onFloor());
    console.log(sprintKey);
    if(cursors.left.isDown) {
	player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown) {
	player.body.velocity.x = 150;
    }

    if(sprintKey.isDown) {
	if(cursors.right.isDown) {
	    console.log(player.body.velocity.x);
	    player.body.velocity.x = player.velocity.x + 100000;
	}

	else if(cursors.left.isDown) {

	    player.body.velocity.x = player.velocity.x - 100000;
	    }
    }

    if(cursors.up.isDown && player.body.onFloor()) {
	player.body.velocity.y = -320;
    }

    

    
}
function render() {
   // Phaser.Physics.Arcade.Body.render(game.canvas, player.body,
//				      false, "#F00");

}
