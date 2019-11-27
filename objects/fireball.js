//This defualt create fireball settings is created evertime dragon moves
function createFireballwithDefualtSettings(){
    let spawnLocation = {
        x :  scene3.dragon.x + scene3.dragon.displayWidth/1.5,
        y :  scene3.dragon.y + 60
    };
    let newFireBall = scene3.physics.add.sprite(spawnLocation.x,spawnLocation.y,'fireball',7).setOrigin(0,0);
    newFireBall.displayWidth = game.config.width/6;
    newFireBall.displayHeight = game.config.height/6;

    newFireBall.body.setEnable();
    newFireBall.body.setSize(100,120,false);
    newFireBall.body.setOffset(80,60);

    scene3.physics.add.overlap(newFireBall, scene3.hydro, collisionFireballHydro);
    scene3.physics.add.overlap(newFireBall, scene3.boat, collisionFireballBoat);
    scene3.fireballs.push(newFireBall);
    scene3.anims.create({
        key: 'fire',
        frames: scene3.anims.generateFrameNames('fireball', {start:7, end:15}),
        frameRate: 10,
        // repeat
        repeat: -1,              // set to (-1) to repeat forever
     });
    scene3.anims.play("fire", newFireBall);
}

function fireballUpdate(){
    for(let z =0; z < scene3.fireballs.length; z++){
        if(scene3.fireballs[z].x < game.config.width){
            scene3.fireballs[z].x+= 3;
        }
    }
}

//exploding fireball img get created when collisionFireballHydro is called


function createFireballExplode(fireX, fireY){
    let newExplosion = scene3.add.image(fireX, fireY,'explosion').setOrigin(0,0);
    newExplosion.displayWidth = game.config.width/6 + 100;
    newExplosion.displayHeight = game.config.height/6;
    scene3.explodeArray.push(newExplosion);
    scene3.time.delayedCall(1*1000,eraseFireExlode);
}
function eraseFireExlode(){
    //console.log(explodeArray.length);
    //console.log(explodeArray);
    scene3.explodeArray[scene3.explodeCount].setVisible(false);
    //explodeArray[explodeCount].body.setEnable(false);
    scene3.explodeCount++
}