// var ok12;
// var target = new Phaser.Math.Vector2();
// console.log(target);
class gameTitleScene extends Phaser.Scene {
  constructor (){
    super({key: 'titleScene', active: true});
    this.background1;
    this.background2;
    this.boat;
    //this.dragon;
    this.trigger = false;
  }
  preload(){
      this.load.image('title1', 'img/Ocean.png')
      this.load.image('title2', 'img/Ocean.png')
      this.load.image('boat', 'img/kajak.gif')
     // this.load.image('dragon', 'hydro.png')
      
  }
  create(){

      //  const cursors = this.input.keyboard.createCursorKeys();
      //  const camera = this.cameras.main;
      //  this.cameras.main.x = 0;
      // controls = new Phaser.Cameras.Controls.FixedKeyControl({
      //   camera: camera,
      //   left: cursors.left,
      //   right: cursors.right,
      //   up: cursors.up,
      //   down: cursors.down,
      //   speed: 0.5
      // });
      
      this.background1 = this.add.image(0, 0, "title1");

      //this.input.on('gameobjectdown',this.onObjectClicked);
      this.background2 = this.add.image(0, 0, "title2");
      //this.boat = this.add.image(0, 0, "boat");
      //this.dragon = this.add.image(0, 0, "dragon").setOrigin(0, 0);
      this.boat = this.physics.add.image(0, 0, "boat");
     // this.dragon = this.physics.add.image(0, 0, "dragon").setOrigin(0, 0);

    //  this.dragon.displayHeight = 64*3;
    //  this.dragon.displayWidth = 64*3;
    //   this.dragon.y = 250;
    //   this.dragon.x = 600;

    //   this.input.setDraggable(this.boat);
      

    //   this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

    //     gameObject.x = dragX;
    //     gameObject.y = dragY;

    // });
      
      this.boat.displayWidth = game.config.width/6;
      this.boat.displayHeight = game.config.height/6;
      this.boat.x = game.config.width/2;
      this.boat.y = game.config.height/1.5;
      //background1.autoscroll(-100, 0);
      //background1.setScrollFactor(0);
      this.background1.displayHeight = game.config.height;
      this.background1.displayWidth = game.config.width;
      this.background1.displayOriginX = 0;
      this.background1.displayOriginY = 0;
      //background1.alpha = 1;
      this.background2.displayHeight = game.config.height;
      this.background2.displayWidth = game.config.width;
      this.background2.displayOriginX = 0;
      this.background2.displayOriginY = 0;
      this.background2.x = game.config.width;

  //onsole.log(boat.rotation)
  // Help text that has a "fixed" position on the screen
  let titleText = this.add
  .text(game.config.width/5, game.config.height/4, "zeyeland the Game\nChapter 1: Turkey Bay\nClick to play", {
    font: "18px monospace",
    fill: "#ffffff",
    padding: { x: 20, y: 10 },
    backgroundColor: "#000000",
  })
  .setOrigin(0.5)
  .setScrollFactor(0);

  // ok12 = this.physics.add.overlap(this.boat, this.dragon, collideCallback);
  // this.physics.world.setBounds(0, 0, game.config.width, game.config.height);
  // this.physics.world.setBoundsCollision();
  // this.boat.setCollideWorldBounds(true);
  
//   this.input.on('pointerdown', function(pointer){
//     var touchX = pointer.x;
//     var touchY = pointer.y;

//     //this.physics.moveToObject(this.boat, pointer, 200);
//     // var distance = Phaser.Math.Distance.Between(this.boat.x, this.boat.y, pointer.x, pointer.y);
//     // if (distance < 100000)
//     // {
//     //   this.boat.body.reset(pointer.x, pointer.y);
//     // }

//  },this);

  this.input.on('pointerup', function(pointer){
    this.scene.start('scene1'); 
  },this);
  
  
  }//end of create
  update(time, delta){
    this.background1.x -= 1.5;
    this.background2.x -= 1.5;
    //this.background2.alpha -= 0.0001;
    if(this.background1.x < (game.config.width * -1) ){
      this.background1.x = 0;
      this.background2.x = game.config.width;
    }

    if(this.trigger == true){
      this.boat.rotation += .003;
      if(this.boat.rotation > .15){
        this.trigger = false;
      }
    }
    else 
    if(this.trigger == false){
      this.boat.rotation = this.boat.rotation - .003;
      if(this.boat.rotation < -.15){
        this.trigger = true;
    }
    }
  
    
    
  }
}

const titleScene = new gameTitleScene;

