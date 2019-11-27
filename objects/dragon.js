function scene3DragonSettings(){
 //dragon starting location x = 0    y =
 scene3.dragon = scene3.physics.add.sprite(0,game.config.height/3.5,'dragon',3).setOrigin(0,0);
 scene3.dragon.displayWidth = game.config.width/3;
 scene3.dragon.displayHeight = game.config.height/3;

 scene3.dragon.body.setEnable();
 scene3.dragon.body.setSize(100,50,false);
 scene3.dragon.body.setOffset(30,40);

 scene3.anims.create({
    key: 'fly',
    frames: scene3.anims.generateFrameNames('dragon', {start:3, end:5}),
    frameRate: 5,
    // repeat
    repeat: -1,              // set to (-1) to repeat forever
 });
 scene3.anims.play("fly", scene3.dragon);
 
}

function dragonMove2RandomY(){
    dragonTooX = scene3.dragon.x; //game.config.height/3.5
    dragonTooY = Phaser.Math.Between(game.config.height/3.5, game.config.height/1.3);  
    scene3.physics.moveTo(scene3.dragon, dragonTooX, dragonTooY, 200);  
}

var dragonTooX;
var dragonTooY;
var canDragonMove = true;
function isDragonMovement(){
    
    scene3.dragonDistance = Phaser.Math.Distance.Between(scene3.dragon.x, scene3.dragon.y, dragonTooX, dragonTooY);
    if (scene3.dragon.body.speed > 0)
    {
        //  4 is our distance tolerance, i.e. how close the source can get to the target
        //  before it is considered as being there. The faster it moves, the more tolerance is required.
        if (scene3.dragonDistance < 4)
        {
            scene3.dragon.body.reset(dragonTooX, dragonTooY);
            canDragonMove = true;
            createFireballwithDefualtSettings();
        }
    }
}

function dragonUpdate(){
    isDragonMovement();
    moveDragon();
}

function moveDragon(){
    if(canDragonMove == true){
        canDragonMove = false;
        scene3.time.delayedCall(1*1000, dragonMove2RandomY);
    }
}

