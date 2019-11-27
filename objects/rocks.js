function scene3RockSettings(){
    //create z amount of rocks 
    for(let z = 0; z < 84; z++){
        let putHereX = Phaser.Math.Between(game.config.width, 7000); 
        let putHereY = Phaser.Math.Between(game.config.height/1.6,game.config.height); 
        //let newRok = scene3.physics.add.image(putHereX , putHereY , 'rock');
        let newRok = scene3.physics.add.sprite(putHereX , putHereY ,'rock',4).setOrigin(0,0);

        newRok.displayWidth = game.config.width/10;
        newRok.displayHeight = game.config.height/10;
        newRok.alpha = .7;

        newRok.body.setEnable();
        newRok.body.setSize(50,46,false);
        newRok.body.setOffset(40,50);

        scene3.anims.create({
            key: 'swim',
            frames: scene3.anims.generateFrameNames('rock', {start:8, end:11}),
            frameRate: 5,
            // repeat
            repeat: -1,              // set to (-1) to repeat forever
         });
         scene3.anims.play("swim", newRok);
         
        scene3.physics.add.overlap(newRok, scene3.boat, collisionRockBoat);
        scene3.rocks.push(newRok);
    }
}

function rockUpdate(){
    for(let z =0; z < scene3.rocks.length; z++){
        if(scene3.rocks[z].x > -150){
            scene3.rocks[z].x-= 1;
        }
    }
}

function addRocksCollisions(){
    for(let z =0; z < scene3.rocks.length; z++){
        scene3.physics.add.overlap(scene3.rocks[z], scene3.boat, collisionRockBoat);
    }
}

