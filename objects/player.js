function isPlayerMovement(){
    scene3.boatDistance = Phaser.Math.Distance.Between(scene3.boat.x, scene3.boat.y, scene3.touchX, scene3.touchY);
    if (scene3.boat.body.speed > 0)
    {
        //  4 is our distance tolerance, i.e. how close the source can get to the target
        //  before it is considered as being there. The faster it moves, the more tolerance is required.
        if (scene3.boatDistance < 4)
        {
            scene3.boat.body.reset(scene3.touchX, scene3.touchY);
        }
    }
}

function scene3PlayerBoatSettings(){
    scene3.boat = scene3.physics.add.sprite(0, 0, "boat2");
    scene3.boat.displayWidth = game.config.width/6;
    scene3.boat.displayHeight = game.config.height/6;
    scene3.boat.x = game.config.width/2;
    scene3.boat.y = game.config.height/1.5;
    scene3.boat.body.setEnable();
    scene3.boat.body.setSize(50,15,false);
    scene3.boat.body.setOffset(37,25);
    scene3.anims.create({
        key: 'paddle',
        frames: scene3.anims.generateFrameNames('boat2', {start:0, end:8}),
        frameRate: 10,
        // repeat
        repeat: -1,              // set to (-1) to repeat forever
     });
    scene3.anims.play("paddle", scene3.boat);
}

function playerUpdate(){
    isPlayerMovement();
}