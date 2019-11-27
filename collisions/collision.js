function collisionFireballHydro(thisFireball){
    //console.log("fireball hit the hydro");
    thisFireball.setVisible(false);
    thisFireball.body.setEnable(false);
    createFireballExplode(thisFireball.x , thisFireball.y)
    scene3.hydroHealth --;
    //console.log(scene3.hydroHealth);
}

function collisionFireballBoat(thisFireball){
    //console.log("fireball hit the boat");
    thisFireball.setVisible(false);
    thisFireball.body.setEnable(false);
    createFireballExplode(thisFireball.x , thisFireball.y)
    scene3.boatHealth --;
    scene3.sceneHealth.text = "Ship " + scene3.boatHealth;
    //console.log(scene3.boatHealth);
}

function collisionRockBoat(thisRock){
    //console.log("the rock hit the boat");
    thisRock.setVisible(false);
    thisRock.body.setEnable(false);
    //scene3.boatHealth--;
    scene3.TurkeyCollected++;
    scene3.sceneTurkeyCollected.text = "Turkeys:" + scene3.TurkeyCollected;
    //console.log(scene3.TurkeyCollected);
}

function addAllCollisions(){
    addRocksCollisions();
    //fireball collions hydro&boat
    //addFireBallCollisions happnes as the fireball is create - dont add to this function -- createFireballwithDefualtSettings
}