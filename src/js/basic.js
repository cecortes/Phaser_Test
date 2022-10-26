var config = {
  type: Phaser.AUTO,
  width: "99",
  height: "99",
  parent: "game",
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

// Loads all the assets needed for the game
function preload() {
  this.load.image("sky", "./../assets/sky.png");
  this.load.image("ground", "./../assets/platform.png");
  this.load.image("star", "./../assets/star.png");
  this.load.image("bomb", "./../assets/bomb.png");
  this.load.spritesheet("dude", "./../assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
}

// Shows the assets on the screen
function create() {
  this.add.image(650, 320, "sky");
  this.add.image(400, 300, "star");
  this.add.image(450, 300, "star");
}

function update() {}
