class gameScene1 extends Phaser.Scene {
    constructor (){
      super({key: 'scene1', active: false});
      this.blinkingIMG;
    }
    preload(){
      this.blinkingIMG = document.createElement("img");
      this.blinkingIMG .setAttribute("id", "blinkIMG");
      this.blinkingIMG.src = 'img/eyeDarkness.gif';
      var parentBody = document.getElementById("game-container");
      document.body.appendChild(this.blinkingIMG);
    }
    create(){
      
      let titleText = this.add
      .text(game.config.width/5, game.config.height/1.5, "Your after life begins in a cave. \nMake your way to the new world. Ill help guide the way\nClick to leave the cave.", {
        font: "20px monospace",
        fill: "#ffffff",
        padding: { x: 20, y: 10 },
        backgroundColor: "#000000",
      })

     document.onclick = function(){
     document.onclick = false;
     let removeThis = document.getElementById("blinkIMG");
     document.body.removeChild(removeThis);
     scene1.scene.start('scene2');  
    };

    }//end of create
    update(time, delta){
     // console.log(scene1.apMethods());
    }
    //  apMethods(){
    //    console.log("this is the ap methods");
    //  }
}

const scene1 = new gameScene1;

  