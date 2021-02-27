const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update, update
})
function preload() {
  game.load.image('sky', 'assets/sky.png')
  game.load.image('grass','assets/grass.png')
  game.load.image('poop', 'assets/poop.png')
  game.load.spritesheet('dog', 'assets/unnamed.png', 32, 32)
}
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  game.add.sprite(0,0,'sky')
}
function update() {}
