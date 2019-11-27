
class gameScene3 extends Phaser.Scene {
    constructor (){
      super({key: 'scene3', active: false});
      this.background1;
      this.background2;
      this.background3;
      this.background4;
      this.background5;
      this.background6;
      this.backgroundtrees;
      this.backgroundtrees2;
      //
      this.boat;
      this.boatHealth = 10;
      this.boatDistance;
      this.boatTrigger = false;
      //
      this.rocks = [];
      //
      this.dragon;
      this.dragonDistance;
      this.fireballs = [];
      this.explodeArray = [];
      this.explodeCount = 0;
      this.hydro;
      this.hydroDistance;
      this.hydroHealth = 10;
      //
      this.sceneTime;
      this.sceneHealth;
      this.timerLeft = 60;
      this.winlose;
      this.sceneTurkeyCollected;
      this.TurkeyCollected = 0;
    }
    preload(){
        //this.load.image('title1', 'img/Ocean.png')
        //this.load.image('title2', 'img/Ocean.png')
        //this.load.image('boat', 'img/kajak.gif')
        this.load.image('background3', 'img/m1.png')
        this.load.image('background4', 'img/m2.png')
        this.load.image('trees', 'img/trees.png')
        this.load.image('background5', 'img/darkn.png')
        this.load.image('background6', 'img/underWater.png')
        this.load.spritesheet('boat2', 'img/kajak.png', { frameWidth: 1152/9, frameHeight: 48 });
        this.load.image('hydro', 'img/hydro.png')
        //this.load.image('rock', 'img/turkey.png')
        this.load.spritesheet('rock', 'img/turkey.png', { frameWidth: 512/4, frameHeight: 1024/8 });

        this.load.spritesheet('dragon', 'img/dragon.png', { frameWidth: 144, frameHeight: 128 });
        this.load.spritesheet('fireball', 'img/fireball.png', { frameWidth: 2048/8, frameHeight: 1792/7 });
        this.load.image('explosion', 'img/explosion.png')
        
    }
    create(){   
      scene3Background1and2Settings();
      scene3RockSettings();
      scene3PlayerBoatSettings();
      scene3HydroSettings();
      scene3DragonSettings();
      scene3TimerAndHealthSettings();
      addAllCollisions();
      this.physics.world.setBounds(0, game.config.height/1.8, game.config.width, game.config.height/1.8);
      this.boat.setCollideWorldBounds(true);
    
      this.input.on('pointerdown', function(pointer){
        this.touchX = pointer.x;
        this.touchY = pointer.y;
        console.log(pointer.y);
        this.physics.moveToObject(this.boat, pointer, 200);
      },this);

    }//end of create

    update(time, delta){
      moveBackground1and2();
      playerUpdate();  
      dragonUpdate();   
      fireballUpdate();//loops through fireball array and moves to right
      hydroUpdate();
      rockUpdate();
      checkGameWinLose();
    }


}//end of class
  
  const scene3 = new gameScene3;
  
  function moveBackground1and2(){
    scene3.background1.x -= 1.5;
    scene3.background2.x -= 1.5;
    scene3.background3.x -= .3;
    scene3.background4.x -= .5;
    scene3.background44.x -= .5;
    scene3.backgroundtrees.x -= 1;
    scene3.backgroundtrees2.x -= 1;

    if(scene3.background1.x < (game.config.width * -1) ){
      scene3.background1.x = 0;
      scene3.background2.x = game.config.width;
    }
    if(scene3.background4.x < (game.config.width * -1) ){
      scene3.background4.x = 0;
      scene3.background44.x = game.config.width;
    }
    if(scene3.backgroundtrees.x < (game.config.width * -1) ){
      scene3.backgroundtrees.x = 0;
      scene3.backgroundtrees2.x = game.config.width;
    }
    //this actualy belongs to boat/player but o well
    if(scene3.boatTrigger == true){
      scene3.boat.rotation += .003;
      if(scene3.boat.rotation > .15){
        scene3.boatTrigger = false;
      }
    }
    else 
    if(scene3.boatTrigger == false){
      scene3.boat.rotation = scene3.boat.rotation - .003;
      if(scene3.boat.rotation < -.15){
        scene3.boatTrigger = true;
    }
    }
  }
  function scene3Background1and2Settings(){
    scene3.background1 = scene3.add.image(0, 0, "title1");
    scene3.background2 = scene3.add.image(0, 0, "title2");
    scene3.background1.displayHeight = game.config.height;
    scene3.background1.displayWidth = game.config.width;
    scene3.background1.displayOriginX = 0;
    scene3.background1.displayOriginY = 0;
    scene3.background2.displayHeight = game.config.height;
    scene3.background2.displayWidth = game.config.width;
    scene3.background2.displayOriginX = 0;
    scene3.background2.displayOriginY = 0;
    scene3.background2.x = game.config.width;

    scene3.background3 = scene3.add.image(0, 0, "background3");
    scene3.background3.displayWidth = game.config.width;
    scene3.background3.displayHeight = game.config.height/2.2;
    scene3.background3.displayOriginX = 0;
    scene3.background3.displayOriginY = 0;
    scene3.background3.x = game.config.width - 100;
    scene3.background3.y = -70;

    scene3.background4 = scene3.add.image(0, 0, "background4");
    scene3.background4.displayWidth = game.config.width;
    scene3.background4.displayHeight = game.config.height/2.2;
    scene3.background4.displayOriginX = 0;
    scene3.background4.displayOriginY = 0;

    scene3.background44 = scene3.add.image(0, 0, "background4");
    scene3.background44.displayWidth = game.config.width;
    scene3.background44.displayHeight = game.config.height/2.2;
    scene3.background44.displayOriginX = 0;
    scene3.background44.displayOriginY = 0;
    scene3.background44.x = game.config.width;
   

    scene3.backgroundtrees = scene3.add.image(0, 0, "trees");
    scene3.backgroundtrees.displayWidth = game.config.width;
    scene3.backgroundtrees.displayHeight = game.config.height/2;///1.4; //or1.3
    scene3.backgroundtrees.displayOriginX = 0;
    scene3.backgroundtrees.displayOriginY = 0;
    scene3.backgroundtrees.y = game.config.height/6;

    scene3.backgroundtrees2 = scene3.add.image(0, 0, "trees");
    scene3.backgroundtrees2.displayWidth = game.config.width;
    scene3.backgroundtrees2.displayHeight = game.config.height/2;///1.4; //or1.3
    scene3.backgroundtrees2.displayOriginX = 0;
    scene3.backgroundtrees2.displayOriginY = 0;
    scene3.backgroundtrees2.y = game.config.height/6;
    scene3.backgroundtrees2.x = game.config.width;

    scene3.background5 = scene3.add.image(0, 0, "background5");
    scene3.background5.displayWidth = game.config.width;
    scene3.background5.displayHeight = game.config.height/1.7;
    scene3.background5.displayOriginX = 0;
    scene3.background5.displayOriginY = 0;
    scene3.background5.alpha = .5;

    // scene3.background6 = scene3.add.image(0, 0, "background6");
    // scene3.background6.displayHeight = game.config.height/3;
    // scene3.background6.displayWidth = game.config.width;
    // scene3.background6.displayOriginX = 0;
    // scene3.background6.displayOriginY = 0;
    // scene3.background6.y = game.config.height/1.5;
    // scene3.background6.alpha = 0;
    

  }

  function scene3TimerAndHealthSettings(){
    //
    scene3.sceneHealth = scene3.add
    .text(game.config.width/2, game.config.height/100 + 50, "Ship "+scene3.boatHealth, {
      font: "20px monospace",
      fill: "#ffffff",
      padding: { x: 20, y: 10 },
      backgroundColor: "#000000",
    }).setOrigin(0,0)

    
    scene3.sceneTurkeyCollected = scene3.add
    .text(game.config.width/2, game.config.height/100 + 100, "Turkeys:"+0, {
      font: "20px monospace",
      fill: "#ffffff",
      padding: { x: 20, y: 10 },
      backgroundColor: "#000000",
    }).setOrigin(0,0)

    //stuff for clock starts here
    scene3.sceneTime = scene3.add
    .text(game.config.width/2, game.config.height/100, "Game:60" , {
      font: "20px monospace",
      fill: "#ffffff",
      padding: { x: 20, y: 10 },
      backgroundColor: "#000000",
    })
    scene3.time.addEvent({
      delay: 1*1000,
      callback:   updateWorldClock,
      loop:  true
    });
  }

  function updateWorldClock(){
    scene3.timerLeft--;
    //console.log("seence timer was calladed");
    scene3.sceneTime.text = "Game:" + scene3.timerLeft;
    scene3.sceneTurkeyCollected.text = "Turkeys:" + scene3.TurkeyCollected;
  }

  
  function checkGameWinLose(){
    if(scene3.timerLeft < 1 ){
      console.log("you Win!");
      scene3.boatHealth = 10;
      scene3.timerLeft = 60;
      canHydroMove = true;
      canDragonMove = true;
      scene3.winlose = scene3.add.text(game.config.width/2, game.config.height/2, "You Win - Happy ThanksGiving\nClick here for reward.", {
        font: "20px monospace",
        fill: "#ffffff",
        padding: { x: 20, y: 10 },
        backgroundColor: "#000000",
      })
      scene3.winlose.setInteractive().on('pointerup', function(pointer, localX, localY, event){
        let chicken = document.createElement("img");
        chicken.setAttribute("id", "chickenIMG");
        chicken.src = 'img/turkey2.gif';
        var parentBody = document.getElementById("game-container");
        document.body.appendChild(chicken);

        //location.reload();
        scene3.time.addEvent({
          delay: 4*1000,
          callback:   finishReload,
        });
      },scene3);
    }
    else
    if(scene3.boatHealth < 1){
      scene3.winlose = scene3.add.text(game.config.width/2, game.config.height/2, "You Lose - Click to restart", {
        font: "20px monospace",
        fill: "#ffffff",
        padding: { x: 20, y: 10 },
        backgroundColor: "#000000",
      })
      console.log("you LOSE!");
      scene3.boatHealth = 10;
      scene3.timerLeft = 60;
      canHydroMove = true;
      canDragonMove = true;
      scene3.winlose.setInteractive().on('pointerup', function(pointer, localX, localY, event){
        location.reload();
      },scene3);
    }

  }

  function finishReload(){
    location.reload();
  }

  


