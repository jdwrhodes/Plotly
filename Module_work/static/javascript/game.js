var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', '/static/img/nasaAssembly.png');
    this.load.image('mewtwo', '/static/img/mewtwo.png');
    this.load.image('platform', '/static/img/platform.png');
    this.load.image('pokeball', '/static/img/pokeball.png');

    this.load.spritesheet('rollman', '/static/img/rollman.png', {frameWidth: 32, frameHeight: 32});
}

function create() {
    this.add.image(400, 300, 'background')
}

function update() {

}