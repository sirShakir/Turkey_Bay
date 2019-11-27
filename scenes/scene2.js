class gameScene2 extends Phaser.Scene {
    constructor (){
      super({key: 'scene2', active: false});
      this.background1;
      this.clickArea;
    }
    preload(){
        this.load.image('background1', 'img/byTheKraken.jpeg')
        this.load.image('clickArea', 'img/clear.png')
    }
    create(){
        this.background1 = this.add.image(0, 0, "background1");
        this.background1.displayHeight = game.config.height;
        this.background1.displayWidth = game.config.width;
        this.background1.displayOriginX = 0;
        this.background1.displayOriginY = 0;
        
        let gcH = game.config.height/4;
        let gcW = game.config.width/4;
        this.clickArea = this.add.image(0, 0, "clickArea");
        this.clickArea.displayHeight = game.config.height/4;
        this.clickArea.displayWidth = game.config.width/4;

        this.clickArea.y = gcH * 2 + 20;
        this.clickArea.x = gcW * 1;


        this.clickArea.displayOriginX = 0;
        this.clickArea.displayOriginY = 0;
        this.clickArea.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.scene.start('scene3');  
        },this);

        this.add
        .text(game.config.width/8, game.config.height/100 + 50, "This area is infested with dragons.\nTake the boat down the waters until your reach the new world.\nWatch out for fireballs. Collect tureky for trade on the way.\nIts almost thanksgiving on the eyeland.", {
          font: "20px monospace",
          fill: "#ffffff",
          padding: { x: 20, y: 10 },
          backgroundColor: "#000000",
        })



        // this.input.on('pointerdown', function(pointer){
        //     var touchX = pointer.x;
        //     var touchY = pointer.y;
        //     console.log(touchX + " -- " + touchY);
        // },this);

    }//end of create
    update(time, delta){
     
    }

}

const scene2 = new gameScene2;

  