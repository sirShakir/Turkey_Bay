
    type: Phaser.AUTO,
    //width: 224,
    //height: 224,
    parent: "game-container",
    pixalArt: true,
    physics:{
        default: 'arcade',
        arcade : {
            debug : true
        }
    },
    zoom: 1,
    scale: {
        mode: Phaser.DOM.FIT,
    },
    scene: [titleScene,scene1,scene2,scene3]
    
};

var game = new Phaser.Game(config);

