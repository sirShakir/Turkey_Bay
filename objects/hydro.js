function scene3HydroSettings(){
    scene3.hydro = scene3.physics.add.image(0, 0, "hydro").setOrigin(0, 0);
    scene3.hydro.displayWidth = game.config.width/3;
    scene3.hydro.displayHeight = game.config.width/3;

    scene3.hydro.body.setEnable();
    scene3.hydro.body.setSize(20,0,false);
    scene3.hydro.body.setOffset(5,0);

    scene3.hydro.x = 600;
    scene3.hydro.y = game.config.height/2;
}

function hydroMove2RandomXY(){
    // 0+game.config.width/3;   -----  game.config.width
    hydroTooX = Phaser.Math.Between(game.config.width/3, game.config.width);
    hydroTooY = Phaser.Math.Between(250, game.config.height - (64*3+10) );  
    scene3.physics.moveTo(scene3.hydro, hydroTooX, hydroTooY, 200);  
}

var hydroTooX;
var hydroTooY;
var canHydroMove = true;
function isHydroMovement(){
    
    scene3.hydroDistance = Phaser.Math.Distance.Between(scene3.hydro.x, scene3.hydro.y, hydroTooX, hydroTooY);
    if (scene3.hydro.body.speed > 0)
    {
        //  4 is our distance tolerance, i.e. how close the source can get to the target
        //  before it is considered as being there. The faster it moves, the more tolerance is required.
        if (scene3.hydroDistance < 4)
        {
            scene3.hydro.body.reset(hydroTooX, hydroTooY);
            canHydroMove = true;
        }
    }
}

function hydroUpdate(){
    isHydroMovement();
    moveHyrdo();
}

function moveHyrdo(){
    if(canHydroMove == true){
        canHydroMove = false;
        scene3.time.delayedCall(2*1000, hydroMove2RandomXY);
    }
}