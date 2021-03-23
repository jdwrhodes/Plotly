var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: true
        }
    },
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
    this.add.image(400, 300, 'background');

    platforms = this.physics.add.staticGroup();

    platforms.create(400,600, 'platform').setScale(2).refreshBody();

    platforms.create(Math.floor(Math.random() * 400), Math.floor(Math.random() * 600), 'platform');
    platforms.create(Math.floor(Math.random() * 400), Math.floor(Math.random() * 300), 'platform');

    player = this.physics.add.sprite(100, 450, 'rollman');

    player.setBounce(0.2);

    player.setCollideWorldBounds(true)

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('rollman', {frames:[8,7,6,5,4,3,2,1,0]}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('rollman', {start: 15, end: 23}),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key:'default',
        frames: [{key: 'rollman', frame: 9}],
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key:'up',
        frames: this.anims.generateFrameNumbers('rollman', {start: 12, end: 9}),
        frameRate: 10,
        repeat: -1
    });
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);
        player.anims.play('default', true);
    }

    if (cursors.up.isDown){
        player.setVelocityY(-300);
        player.anims.play('up', true);
    }

}